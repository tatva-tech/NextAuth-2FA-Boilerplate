"use server";

import { LoginSchema } from "@/schemas";
import * as z from "zod";
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";
import { genearteTwoFactorToken, generateVerificationToken } from "@/lib/tokens";
import { getUserByEmail } from "@/data/user";
import { sendVerificationEmail, sendTwoFactorTokenEmail } from "@/lib/mail";
import { getTwoFactorTokenByEmail } from "@/data/two-factor-token";
import { db } from "@/lib/db";
import { getTwoFactorConfirmationByUserId } from "@/data/two-factor-confirmation";

export const login = async (values: z.infer<typeof LoginSchema>) => {
    const validatedFields = LoginSchema.safeParse(values);

    if(!validatedFields.success) {
        return { error: "Invalid fields!" };
    }

    const { email, password, code } = validatedFields.data;

    const existingUser = await getUserByEmail(email);

    if(!existingUser || !existingUser.email || !existingUser.password) {
        return { error: "Invalid credentials!" }
    }

    if(!existingUser.emailVerified) {
        const verificationToken = await generateVerificationToken(existingUser.email);

        await sendVerificationEmail(
            verificationToken.email,
            verificationToken.token
        )

        return { success: "Confirmation email sent!" }
    }

    if (existingUser.isTwoFactorEnabled && existingUser.email) {
        if(code) {
            const twoFactorToken = await getTwoFactorTokenByEmail(existingUser.email);

            if(!twoFactorToken) {
                return { errpr: "Invalid code!" };
            }
            
            if(twoFactorToken.token !== code) {
                return { errpr: "Invalid code!" };
            }

            const hasExpired = new Date(twoFactorToken.expires) < new Date();

            if(hasExpired) {
                return { error: "Code expired!" };
            }

            await db.twoFactorToken.delete({
                where: { id: twoFactorToken.id },
            });

            const existingConfirmation = await getTwoFactorConfirmationByUserId(existingUser.id);

            if(existingConfirmation) {
                await db.twoFactorConfirmation.delete({
                    where: { id: existingConfirmation.id },
                });
            }

            await db.twoFactorConfirmation.create({
                data: { userId: existingUser.id }
            });

        } else {
            const twoFacterToken = await genearteTwoFactorToken(existingUser.email);
            await sendTwoFactorTokenEmail(
                twoFacterToken.email,
                twoFacterToken.token,
            );
    
            return { twoFactor: true }
        }

    }

    try {
        await signIn("credentials", {
            email,
            password,
            redirectTo: DEFAULT_LOGIN_REDIRECT
        })
    } catch (error) {
        if(error instanceof AuthError) {
            switch (error.type) {
                case "CredentialsSignin":
                    return {
                        error: "Invalid credentials!"
                    }
                default:
                    return {
                        error: "Somthing went wrong!"
                    }
            }
        }

        throw error;
    }
};