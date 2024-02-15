import { ErrorCard } from "@/components/auth/error-card";

const AuthErrorPage = () => {
    return ( 
        <div className="h-full w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-950 to-black flex justify-center items-center">
            <ErrorCard />
        </div>
     );
}
 
export default AuthErrorPage;