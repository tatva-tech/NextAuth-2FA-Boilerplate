import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";

const SettingsPage = async () => {
    const session = await auth();

    return ( 
        <div className=" bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-950 to-black h-full text-white">
            {JSON.stringify(session)}
            <form action={async() => {
                "use server";

                await signOut();
            }}>
                <Button
                    variant={"default"}
                    type="submit"
                    className=" bg-gradient-to-tr from-black via-blue-700/10 to-black hover:opacity-80 transition"
                >
                    Sign out
                </Button>
            </form>
        </div>
     );
}
 
export default SettingsPage;