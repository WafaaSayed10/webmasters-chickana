import Image from "next/image"
import Link from "next/link"
import { BsBagDash } from "react-icons/bs";
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { FiMenu, FiX } from 'react-icons/fi';
import { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useRouter } from "next/router";

export default function Navbar(){
    const pathname = usePathname();
    const [menuOpen, setMenuOpen]=useState(false)
    const [user, setUser]=useState('')
    const router = useRouter()
    const toggleMenu=()=>{
        setMenuOpen(!menuOpen)
    }
    const closeMenu=()=>{
        setMenuOpen(false)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser)
            } else {
                //router.push('/login');
            }
        });
        return () => unsubscribe();
    }, []);
    const handleLogout = async () => {
        await signOut(auth);
        setUser('')
        router.push('/login');
        closeMenu()
    };
    return(
        <>
        <header className="bg-[#fff]">
            <div className="py-[3px] md:py-[5px] md:w-[85%] m-auto px-[5%] md:px-[2.5%] flex items-center justify-between">
                <Link href="/" className="flex items-center gap-[5px]">
                    <Image src="/images/logo.png" alt="chickana logo" width={60} height={60} className="w-auto h-auto"/>
                    <h2 className="leading-none text-[20px] flex flex-col"><span className="font-bold bg-gradient-to-r from-[#556B2F] to-yellow-200 text-transparent bg-clip-text">Chickana&</span><span className="font-bold bg-gradient-to-r from-yellow-200 via-[#556B2F] via-yellow-200 to-[#556B2F] text-transparent bg-clip-text">Double Ds</span></h2>
                </Link>
                <nav className="md:flex items-center gap-[25px] font-bold hidden">
                    <Link href="/" className={clsx("relative hover:text-[#d95a31] transition-colors duration-300 group",pathname === "/" ? "text-[#d95a31]" : "")}>Home<span className={clsx("absolute left-0 -bottom-1 w-0 transition-all duration-300 h-[2px] group-hover:w-full group-hover:bg-[#d95a31]",pathname === "/" ? "bg-[#d95a31] w-full":"bg-[black]" )}></span></Link>
                    <Link href="/menu" className={clsx("relative hover:text-[#d95a31] transition-colors duration-300 group", pathname === "/menu" ? "text-[#d95a31]":"")}>Menu<span className={clsx("absolute left-0 -bottom-1 w-0 transition-all duration-300 h-[2px] group-hover:w-full group-hover:bg-[#d95a31]",pathname === "/menu" ? "bg-[#d95a31] w-full":"bg-[black]")}></span></Link>
                    <Link href="/about" className={clsx("relative hover:text-[#d95a31] transition-colors duration-300 group", pathname === "/about" ?"text-[#d95a31]" :"")}>About<span className={clsx("absolute left-0 -bottom-1 w-0 transition-all duration-300 h-[2px] group-hover:w-full group-hover:bg-[#d95a31]",pathname === "/about" ? "bg-[#d95a31] w-full":"bg-[black]")}></span></Link>
                    <Link href="/contact" className={clsx("relative hover:text-[#d95a31] transition-colors duration-300 group", pathname === "/contact"? "text-[#d95a31]" : "")}>Contact<span className={clsx("absolute left-0 -bottom-1 w-0 transition-all duration-300 h-[2px] group-hover:w-full group-hover:bg-[#d95a31]",pathname === "/contact" ? "bg-[#d95a31] w-full":"bg-[black]")}></span></Link>
                    {user&&<Link href="/orders" className={clsx("relative hover:text-[#d95a31] transition-colors duration-300 group", pathname === "/orders"? "text-[#d95a31]" : "")}>Orders<span className={clsx("absolute left-0 -bottom-1 w-0 transition-all duration-300 h-[2px] group-hover:w-full group-hover:bg-[#d95a31]",pathname === "/orders" ? "bg-[#d95a31] w-full":"bg-[black]")}></span></Link>}
                    {user?
                    <span onClick={handleLogout} className="cursor-pointer relative hover:text-[#d95a31] transition-colors duration-300 group text-gray-400 text-[14px]" >Logout</span>
                    :<Link href="/login" className={clsx("relative hover:text-[#d95a31] transition-colors duration-300 group", pathname === "/login"? "text-[#d95a31]" : "")}>Login<span className={clsx("absolute left-0 -bottom-1 w-0 transition-all duration-300 h-[2px] group-hover:w-full group-hover:bg-[#d95a31]",pathname === "/login" ? "bg-[#d95a31] w-full":"bg-[black]")}></span></Link>
                    }
                </nav>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-2xl text-gray-700">
                        {menuOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>
            </div>
        </header>
        {menuOpen&&(<div className="md:hidden bg-[#fff] px-[20px] py-[10px]">
            <div className="flex flex-col gap-4 w-fit">
                <Link href="/" onClick={closeMenu} className={clsx("relative hover:text-[#d95a31] transition-colors duration-300 group",pathname === "/" ? "text-[#d95a31]" : "")}>Home</Link>
                <Link href="/menu" onClick={closeMenu} className={clsx("relative hover:text-[#d95a31] transition-colors duration-300 group", pathname === "/menu" ? "text-[#d95a31]":"")}>Menu</Link>
                <Link href="/about" onClick={closeMenu} className={clsx("relative hover:text-[#d95a31] transition-colors duration-300 group", pathname === "/about" ?"text-[#d95a31]" :"")}>About</Link>
                <Link href="/contact" onClick={closeMenu} className={clsx("relative hover:text-[#d95a31] transition-colors duration-300 group", pathname === "/contact"? "text-[#d95a31]" : "")}>Contact</Link>
                {user&&<Link href="/orders" onClick={closeMenu} className={clsx("relative hover:text-[#d95a31] transition-colors duration-300 group", pathname === "/orders"? "text-[#d95a31]" : "")}>Orders</Link>}
                    {user?
                    <span onClick={handleLogout} className="cursor-pointer relative hover:text-[#d95a31] transition-colors duration-300 group text-gray-400 text-[14px]" >Logout</span>
                    :<Link href="/login" onClick={closeMenu} className={clsx("relative hover:text-[#d95a31] transition-colors duration-300 group", pathname === "/login"? "text-[#d95a31]" : "")}>Login<span className={clsx("absolute left-0 -bottom-1 w-0 transition-all duration-300 h-[2px] group-hover:w-full group-hover:bg-[#d95a31]",pathname === "/login" ? "bg-[#d95a31] w-full":"bg-[black]")}></span></Link>
                }
                <Link href="/cart" onClick={closeMenu} className={clsx("relative hover:text-[#d95a31] transition-colors duration-300 group", pathname === "/cart"? "text-[#d95a31]" : "")}><BsBagDash className={clsx("text-[25px] mt-[10px] cursor-pointer")} /></Link>
            </div>
        </div>)}
        </>
    )
}