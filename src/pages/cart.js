import { MdWatchLater } from "react-icons/md";
import {useCart} from "../context/cartContext"
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { FiMinus } from "react-icons/fi";
import clsx from "clsx";
import Head from "next/head"

export default function Cart(){
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
            <title>Cart - Chickana dd</title>
            <meta name="description" content="cart menu" />
        </Head>
        <main className="bg-gray-100 py-10">
            <section className='w-[90%] md:w-[40%] m-auto sticky top-[10px] md:top-[30px]  bg-[#fff] p-[20px] self-start flex flex-col items-center gap-[10px]'>
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
                <p className='text-[#6d6461] text-[14px] text-center'>No Min. Order Amount</p>
                {cart.length > 0 ?
                <><div className='w-full my-[10px] flex flex-col gap-[5px]'>
                    {cart.map((cartItem, index)=> (<div key={index} className={clsx('flex justify-between', index!==cart.length - 1 && "border-b border-dashed border-[#efeded] pb-2" )}>
                        <div className='flex gap-2'>
                            <button onClick={()=>removeFromCart(cartItem.id, cartItem.selectedOptions)} className='cursor-pointer bg-[#efeded] py-[5px] px-[5px] self-start border rounded-[3px]' aria-label="minus"><FiMinus /></button>
                            <div>
                                <h3 className='text-[14px] text-[#372b27] mb-[3px] flex'>{cartItem.quantity >1 && <span className='flex items-end'>{cartItem.quantity}<IoIosClose className='text-[16px]'/></span>}{cartItem.name}</h3>
                                {Object.entries(cartItem.selectedOptions).map(([groupName, { choice, price }])=><div key={groupName}>
                                <h4 className='text-[12px] text-[#6d6461]'>{groupName}</h4>
                                <p className='text-[12px] text-[#372b27]'>{choice}{ price !== "0.00" &&<span className='ml-[5px]'>({price})</span>}</p>
                                </div>)}
                            </div>
                        </div>
                        <p>{cartItem.newPrice}.00</p>
                    </div>))}
                    <hr className='my-[15px]'/>
                    <div className='flex flex-col gap-[5px]'>
                        <div className='flex justify-between'><p className='text-[14px] text-[#6d6461]'>Sub Total:</p><p className='text-[14px] text-[#372b27]'>{total}.00</p></div>
                        <div className='flex justify-between'><p className='text-[14px] text-[#6d6461]'>Delivery:</p><p className='text-[14px] text-[#372b27]'>--</p></div>
                        <div className='flex justify-between'><p className='text-[14px] text-[#6d6461]'>Order Total:</p><p className='text-[14px] text-[#372b27]'>{total}.00</p></div>
                    </div>
                    </div>
                </>
                :
                <p className='my-[20px] text-[#372b27] text-[14px] text-center'>Add menu items to your cart.</p>
                }
                <button onClick={checkout} className='capitalize text-center text-[#fff] bg-[#d95a31] w-full p-[10px] font-bold rounded-[5px] hover:bg-black transition duration-200 '>checkout</button>
            </section>
        </main>
        </>
    )
}