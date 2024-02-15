import { SiAuthy } from "react-icons/si";

const Loader = () => {
    return ( 
        <div className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-950 to-black h-screen w-full flex justify-center items-center">
            <SiAuthy size={40} className=" animate-pulse text-emerald-500"/>         
        </div>
     );
}
 
export default Loader;