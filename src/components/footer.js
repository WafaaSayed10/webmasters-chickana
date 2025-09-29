import Link from "next/link"
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

export default function Footer(){
    return(
        <>
        <main className="bg-black text-[#fff] py-[48px]">
            <div className="py-[3px] md:py-[5px] md:w-[85%] m-auto px-[5%] md:px-[2.5%]">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:gap-[5px] gap-[20px]">
                    <div className="flex flex-col">
                        <h3 className="text-[15px] font-semibold uppercase mb-[5px]">My restaurant</h3>
                        <Link href="/" className="text-[14px]">Chickana & Double ds Menu</Link>
                        <Link href="/" className="text-[14px]">Our Locations</Link>
                    </div>
                    <div className="flex flex-col">
                        <h3 className="text-[15px] font-semibold uppercase mb-[5px]">Information</h3>
                        <Link href="/contact" className="text-[14px]">Contact Us</Link>
                        <Link href="/" className="text-[14px]">Terms and conditions</Link>
                        <Link href="/about" className="text-[14px]">About Us</Link>
                    </div>
                    <div className="flex flex-col">
                        <h3 className="text-[15px] font-semibold uppercase mb-[10px]">Follow us on</h3>
                        <div className="flex gap-[20px]">
                            <a href="https://www.facebook.com/ChickanaEgypt" className="text-[14px]"><FaFacebookF /></a>
                            <a href="https://www.instagram.com/feteera/#" className="text-[14px]"><FaInstagram /></a>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <h3 className="text-[15px] font-semibold uppercase mb-[15px]">Subscribe to our newsletter</h3>
                        <div className="flex items-center border border-transparent overflow-hidden rounded-[5px]">
                            <input className="h-full w-full outline-none px-[15px] text-black"/>
                            <div className=" p-[6px] bg-[#17a2b8]">
                                <FaTelegramPlane className="text-[22px]" />
                            </div>
                        </div>
                    </div>
                </div>
            <hr className="my-[20px]"/>
            <p className="text-[14px]">© 2025 Chickana & Double Ds</p>
            </div>
        </main>
        </>
    )
}