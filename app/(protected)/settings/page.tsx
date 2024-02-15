"use client";

import { Button } from "@/components/ui/button";
import { useCurrentUser } from "@/hooks/use-current-user";
import { signOut } from "next-auth/react";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const SettingsPage = () => {
    const user = useCurrentUser();

    const onClick = () => {
        signOut();
    };

    return (
        <div className="w-full h-full text-white p-10 flex justify-center items-center">
            <AlertDialog>
                <AlertDialogTrigger>
                    <Button
                        variant={"default"}
                        type="submit"
                        className="relative bg-gradient-to-r from-blue-700/10 via-black to-black hover:opacity-80 transition border border-blue-500 text-white px-4 py-2 rounded-md"
                    >
                        Sign out
                    </Button>
                </AlertDialogTrigger>
                <AlertDialogContent className="bg-gradient-to-r from-gray-950 via-black to-black text-white">
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone. you are sign-out after this move!
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel className="text-black">Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={onClick}>Continue</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
}

export default SettingsPage;