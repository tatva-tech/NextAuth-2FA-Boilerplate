"use client";

import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa"
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

export const Social = () => {
    const onClick = (providers: "google" | "github") => {
        signIn(providers, {
            callbackUrl: DEFAULT_LOGIN_REDIRECT,
        });
    }

    return (
        <div className="flex w-full items-center gap-x-2">
            <Button 
                size={"lg"}
                className="w-full border-opacity-50"
                variant={"custom"}
                onClick={() => onClick("google")}
            >
                <FcGoogle className="h-5 w-5"/>
            </Button>
            <Button 
                size={"lg"}
                className="w-full border-opacity-50"
                variant={"custom"}
                onClick={() => onClick("github")}
            >
                <FaGithub className="h-5 w-5"/>
            </Button>
        </div>
    )
}