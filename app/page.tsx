import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import { SiAuthy } from "react-icons/si";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"]
})

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-950 to-black">
      <div className="space-y-6 text-center">
        <h1 className={cn(
          "text-6xl flex gap-x-3 flex-col gap-y-3 items-center justify-center font-semibold text-white drop-shadow-md",
          font.className
        )}>
          <SiAuthy className=" text-emerald-500"/>Auth
        </h1>
        <p className="text-white text-lg">
          A simple authentication service
        </p>
        <div>
          <LoginButton>
            <Button
              variant={"custom"}
              className="border-opacity-50"
            >
              Sign in
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
