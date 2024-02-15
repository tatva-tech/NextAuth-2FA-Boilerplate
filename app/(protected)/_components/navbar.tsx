"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SiAuthy } from "react-icons/si";

const Navbar = () => {
    const pathname = usePathname();

    return (
        <nav className="text-white bg-secondary flex justify-center items-center p-4 rounded-xl w-[80%] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-950 to-black shadow-sm shadow-blue-500">
            <div className=" flex justify-center items-center gap-x-2">
                <SiAuthy size={26} className=" text-blue-500" /><h1 className=" text-2xl font-semibold">Auth</h1>
            </div>
        </nav>
    );
}

export default Navbar;