const AuthLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return ( 
        <div className="h-full flex items-center justify-center bg-black text-white bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-950 to-black">
            {children}
        </div>
     );
}
 
export default AuthLayout;