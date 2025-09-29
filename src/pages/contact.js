import Head from "next/head"
import Link from "next/link"
import { FaGlobe } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";

export default function Contact(){
    return(
        <>
        <Head>
            <title>Contact - Chickana dd</title>
            <meta name="description" content="chickana contact" />
        </Head>
        <main className="bg-gray-100 p-[30px] sm:p-[80px] ">
            <div className="flex flex-col gap-[15px] max-w-[600px] m-auto">
                <section className="bg-[#fff] px-[25px] py-[15px] flex flex-col gap-[15px] rounded-[5px] shadow-sm">
                    <h2 className="text-[24.5px] font-semibold">Assiut</h2>
                    <div className="text-[#372b27] text-[14px]">
                        <div className="flex gap-9 mb-2">
                            <FaGlobe className="mt-1"/>
                            <div>
                                <p className=" mb-3">24 Kornish Al Nile (Al Thawra)</p>
                                <p>Assuit <br/>Assiut Governorate <br/>Egypt </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-9">
                            <FaPhone />
                            <p>0223300015</p>
                        </div>
                    </div>
                </section>
                <form className="bg-[#fff] px-[25px] py-[15px] flex flex-col gap-[15px] rounded-[5px] shadow-sm">
                    <h1 className="mb-[10px] text-[25px] text-[#372b27]">Feel free to send a message</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[10px] gap-y-[15px]">
                        <select name="subject" className="px-[10px] py-[5px] border rounded-[5px] w-full">
                            <option>select a subject</option>
                            <option value="general enquiry">General enquiry</option>
                            <option value="comment">Comment</option>
                            <option value="technical issues">Technical issues</option>
                        </select>
                        <input type="text" name="name" placeholder="Full Name:" autoComplete="user name" className="px-[10px] py-[5px] border rounded-[5px] w-full" />
                        <input type="email" name="email" placeholder="Email Address:" autoComplete="email" className="p-[10px] border rounded-[5px] w-full" />
                        <input type="tel" name="tel" placeholder="Telephone:" autoComplete="tel" className="p-[10px] border rounded-[5px] w-full" />
                    </div>
                    <textarea name="comment" placeholder="Comment" className="px-[10px] py-[5px] h-[120px] border rounded-[5px] w-full" />
                    <button className="bg-black text-[#fff] text-[17.5px] font-semibold p-[10px] rounded-[5px]">SEND</button>
                </form>
            </div>
        </main>
        </>
    )
}