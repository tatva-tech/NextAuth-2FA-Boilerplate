import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import { SiAuthy } from "react-icons/si";

const font = Poppins({
    subsets: ["latin"],
    weight: ["600"]
});

interface HeaderProps {
    label: string
}

export const Header = ({
    label
}: HeaderProps) => {
    return (
        <div className="w-full flex flex-col gap-y-4 items-center justify-center">
            <h1 className={cn(
                "text-3xl flex gap-x-3 items-center font-semibold",
                font.className
            )}>
                <SiAuthy className=" text-emerald-500"/>Auth
            </h1>
            <p className=" text-muted-foreground text-sm">
                {label}
            </p>
        </div>
    )
}