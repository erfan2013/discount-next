import Link from "next/link";

export default function Header() {
    const menulist = [
        {
            name: "Home",
            link: "/",
        },
        {
            name: "About US",
            link: "/about-us",
        },
        {
            name: "Contact Us",
            link: "/contact-us",
        },
    ];
  return (
    <nav className="py-4 px-14 border-b flex items-center justify-between">
        <img className="h-20" src="logo.png" alt="logo" />
        <div className="flex gap-4 items-center font-semibold">
            {menulist?.map((item)=>{
                return (
                <Link href={item?.link}>
                    <button>
                        {item?.name}
                    </button>
                </Link>
                )
                
            })}
        </div>
        <Link href={"/login"}><button className="bg-blue-600 px-5 py-2 font-bold rounded-lg text-white">Login</button></Link>
        
    </nav>
  );
}