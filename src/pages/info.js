import Head from 'next/head';
import { useState, useEffect } from 'react';
import { MdWatchLater } from "react-icons/md";
import { FiMinus } from "react-icons/fi";
import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { useMenu } from "@/hooks/useMenu";
import {useCart} from "../context/cartContext"
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { MdPayment } from "react-icons/md";

export default function Info(){
    const pathname= usePathname()
    const {cart, removeFromCart, total} = useCart()
    const router = useRouter();
    const checkout=()=>{
        if(cart.length>0){
            router.push("/checkout")
        }
        else{
            toast("Please, add some menus before you checkout!", {
                position: 'top-center',
            })
        }
    }
    return(
        <>
        <Head>
            <title>Info - Chickana dd</title>
            <meta name="description" content="chickana info" />
        </Head>
        <div className='bg-gray-100 relative'>
            <main className='md:w-[85%] m-auto px-[5%] md:px-[2.5%] py-10'>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-[30px]'>
                    <section className='col-span-2 flex flex-col mb-[40px] lg:mb-[0]'>
                        <div className='bg-[#fff] py-[10px] px-[30px] mb-[3px]'>
                            <ul className='flex gap-[30px]'>
                                <li className={clsx('text-[#] hover:text-[#d95a31] cursor-pointer capitalize', pathname === "/menu" ? "text-[#d95a31]":"")}><Link href="/menu">menu</Link></li>
                                <li className={clsx('text-[#] hover:text-[#d95a31] cursor-pointer capitalize', pathname === "/info" ? "text-[#d95a31]":"")}><Link href="/info">info</Link></li>
                            </ul>
                        </div>
                        <div className='grid grid-cols-1 gap-[2px] rounded-[3px] text-[14px] text-[#372b27]'>
                            <p className='bg-[#fff] py-3 px-5'>Delivery starts <span className='font-semibold'>Mon 12:00 pm</span></p>
                            <p className='bg-[#fff] py-3 px-5'>Pick-up starts <span className='font-semibold'>Mon 12:00 pm</span></p>
                            <p className='bg-[#fff] py-3 px-5'>Dine-in starts <span className='font-semibold'>Mon 12:00 pm</span></p>
                            <p className='bg-[#fff] py-3 px-5'>Waiter Service is not available.</p>
                            <p className='bg-[#fff] py-3 px-5'>Last Order Time <span className='font-semibold'>Mon 15 01:30 am</span></p>
                            <div className='bg-[#fff] py-3 px-5'>
                                <div className='flex items-center gap-1'>
                                    <MdPayment />
                                    <span className='font-semibold'>Payments</span>
                                </div>
                                <p>Cash On Delivery.</p>
                            </div>
                            <h2 className='bg-[#fff] py-3 px-5 text-[21px] font-bold'>Delivery Areas</h2>
                            <div>
                                <div className='grid grid-cols-12 bg-[#fff] py-3 px-5 mb-[2px]'>
                                    <h3 className='col-span-4 font-semibold'>Name</h3>
                                    <h3 className='col-span-4 font-semibold'>Delivery Charge</h3>
                                </div>
                                <div className='grid grid-cols-12 bg-[#fff] py-3 px-5'>
                                    <p className='col-span-4'>Assiut</p>
                                    <p className='col-span-4'>45.00 on all orders</p>
                                </div>
                            </div>
                            <h2 className='bg-[#fff] py-3 px-5 text-[21px] font-bold'>Working Hours</h2>
                            <table border="1" style={{ borderCollapse: 'collapse', width: '100%' }} >
                                <thead className='bg-[#fff] mb-[1px] py-3 px-5'>
                                    <tr className='text-start'>
                                        <th></th>
                                        <th className='py-3 px-5 font-semibold'>Opening</th>
                                        <th className='py-3 font-semibold'>Delivery</th>
                                        <th className='py-3 font-semibold'>Pick-up</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className='bg-[#fff] hover:bg-[#f0f0f0] cursor-default'>
                                        <td className='py-3 px-5 mb-[1px]'>Monday</td>
                                        <td>12:00 pm - 02:00 am</td>
                                        <td>12:00 pm - 02:00 am</td>
                                        <td>12:00 pm - 01:30 am</td>
                                        <td>12:00 pm - 02:00 am</td>
                                    </tr>
                                    <tr className='bg-[#fff] mb-[1px] hover:bg-[#f0f0f0] cursor-default py-3 px-5'>
                                        <td className='py-3 px-5'>Tuesday</td>
                                        <td>12:00 pm - 02:00 am</td>
                                        <td>12:00 pm - 02:00 am</td>
                                        <td>12:00 pm - 01:30 am</td>
                                        <td>12:00 pm - 02:00 am</td>
                                    </tr>
                                    <tr  className='bg-[#fff] mb-[1px] hover:bg-[#f0f0f0] cursor-default py-3 px-5'>
                                        <td className='py-3 px-5'>Wednesday</td>
                                        <td>12:00 pm - 02:00 am</td>
                                        <td>12:00 pm - 02:00 am</td>
                                        <td>12:00 pm - 01:30 am</td>
                                        <td>12:00 pm - 02:00 am</td>
                                    </tr>
                                    <tr className='bg-[#fff] mb-[1px] hover:bg-[#f0f0f0] cursor-default py-3 px-5'>
                                        <td className='py-3 px-5'>Thursday</td>
                                        <td>12:00 pm - 02:00 am</td>
                                        <td>12:00 pm - 02:00 am</td>
                                        <td>12:00 pm - 01:30 am</td>
                                        <td>12:00 pm - 02:00 am</td>
                                    </tr>
                                    <tr className='bg-[#fff] mb-[1px] hover:bg-[#f0f0f0] cursor-default py-3 px-5'>
                                        <td className='py-3 px-5'>Friday</td>
                                        <td>12:00 pm - 02:00 am</td>
                                        <td>12:00 pm - 02:00 am</td>
                                        <td>12:00 pm - 01:30 am</td>
                                        <td>12:00 pm - 02:00 am</td>
                                    </tr>
                                    <tr className='bg-[#fff] mb-[1px] hover:bg-[#f0f0f0] cursor-default py-3 px-5'>
                                        <td className='py-3 px-5'>Saturday</td>
                                        <td>12:00 pm - 02:00 am</td>
                                        <td>12:00 pm - 02:00 am</td>
                                        <td>12:00 pm - 01:30 am</td>
                                        <td>12:00 pm - 02:00 am</td>
                                    </tr>
                                    <tr className='bg-[#fff] mb-[1px] hover:bg-[#f0f0f0] cursor-default py-3 px-5'>
                                        <td className='py-3 px-5'>Sunday</td>
                                        <td>12:00 pm - 02:00 am</td>
                                        <td>12:00 pm - 02:00 am</td>
                                        <td>12:00 pm - 01:30 am</td>
                                        <td>12:00 pm - 02:00 am</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>
                    <section className='col-span-1 hidden sticky top-[10px] md:top-[30px]  bg-[#fff] p-[20px] self-start lg:flex flex-col items-center gap-[10px]'>
                        <div className='flex items-center justify-center gap-[10px] w-full bg-[#efeded] py-[6px] px-[12px] rounded-[5px]'>
                            <MdWatchLater /><p className='font-bold text-[#29201d]'>ASAP</p>
                        </div>
                        <div className='grid grid-cols-3 border rounded-[5px] w-full'>
                            <div className='text-center bg-[#d7d2d2] py-[6px] px-[12px]'>
                                <p className='text-[#29201d] text-[14px] font-bold'>Delivery</p>
                                <p className='text-[#29201d] text-[11.5px] '>in 60 min</p>
                            </div>
                            <div className='text-center bg-[#efeded] py-[6px] px-[12px]'>
                                <p className='text-[#29201d] text-[14px] font-bold'>Pick-up</p>
                                <p className='text-[#29201d] text-[11.5px] '>in 45 min</p>
                            </div>
                            <div className='text-center bg-[#efeded] py-[6px] px-[12px]'>
                                <p className='text-[#29201d] text-[14px] font-bold'>Dine-in</p>
                                <p className='text-[#29201d] text-[11.5px] '>in 45 min</p>
                            </div>
                        </div>
                        <p className='text-[#6d6461] text-[14px]'>No Min. Order Amount</p>
                        {cart.length > 0 ?
                        <><div className='w-full my-[10px] flex flex-col gap-[5px]'>
                            {cart.map((cartItem, index)=> (<div key={index} className={clsx('flex justify-between', index!==cart.length - 1&&"border-b border-dashed border-[#efeded] pb-2" )}>
                                <div className='flex gap-2'>
                                    <div onClick={()=>removeFromCart(cartItem.id, cartItem.selectedOptions)} className='cursor-pointer bg-[#efeded] py-[5px] px-[5px] self-start border rounded-[3px]'><FiMinus /></div>
                                    <div>
                                        <h3 className='text-[14px] text-[#372b27] mb-[3px]'>{cartItem.name}</h3>
                                        {Object.entries(cartItem.selectedOptions).map(([groupName, { choice, price }])=><div key={groupName}>
                                        <h4 className='text-[12px] text-[#6d6461]'>{groupName}</h4>
                                        <p className='text-[12px] text-[#372b27]'>{choice}</p>
                                        <p className='text-[12px] text-[#372b27]'>{price}</p>
                                        <p className='text-[12px] text-[#372b27]'>{cartItem.newPrice}</p>
                                        </div>)}
                                    </div>
                                </div>
                                <p>{cartItem.newPrice}</p>
                            </div>))}
                            <hr className='my-[15px]'/>
                            <div className='flex flex-col gap-[5px]'>
                                <div className='flex justify-between'><p className='text-[14px] text-[#6d6461]'>Sub Total:</p><p className='text-[14px] text-[#372b27]'>100.00</p></div>
                                <div className='flex justify-between'><p className='text-[14px] text-[#6d6461]'>Delivery:</p><p className='text-[14px] text-[#372b27]'>--</p></div>
                                <div className='flex justify-between'><p className='text-[14px] text-[#6d6461]'>Order Total:</p><p className='text-[14px] text-[#372b27]'>100.00</p></div>
                            </div>
                            </div>
                        </>
                        :
                        <p className='my-[20px] text-[#372b27] text-[14px]'>Add menu items to your cart.</p>
                        }
                        <button onClick={checkout} className='capitalize text-[#fff] bg-[#d95a31] w-full p-[10px] font-bold rounded-[5px] hover:bg-black transition duration-200 '>checkout</button>
                    </section>
                </div>
            </main>
            <Link href="/cart" className='fixed bottom-0 right-0 left-0 block lg:hidden bg-[#d95a31] text-[#fff] text-[17.5px] font-semibold py-[8px] text-center'>
                <p>My Order: {total}.00</p>
            </Link>
        </div>
        </>
    )
}