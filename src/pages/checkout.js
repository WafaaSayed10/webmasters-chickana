import Head from 'next/head';
import { FiMinus } from "react-icons/fi";
import Link from 'next/link';
import clsx from 'clsx';
import {useCart} from "../context/cartContext"
import { IoIosClose } from "react-icons/io";
import toast from 'react-hot-toast';
import { useEffect, useState } from 'react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '../utils/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/router';
import { doc, getDoc } from 'firebase/firestore';

export default function Checkout(){
    const [user] = useAuthState(auth);
    const [form, setForm]=useState({
        fname: '',
        lname: '',
        email: '',
        telephone: '',
        street: '',
        house: '',
        city: '',
        deliveryComment: '',
        comments: '',
    })
    const handleChange=(e)=>{
        setForm({...form, [e.target.name]:[e.target.value]})
    }
    const {cart,setCart ,removeFromCart, total} = useCart()
    const [orderId, setOrderId] = useState(null);
    useEffect(()=>{
        const fetchUserData = async () => {
            if (user) {
                const userRef = doc(db, 'users', user.uid);
                const userSnap = await getDoc(userRef);
                if (userSnap.exists()) {
                    const data = userSnap.data();
                    setForm(prev => ({
                        ...prev,
                        fname: data.fName || '',
                        lname: data.lName || '',
                        telephone: data.phone || '',
                        email: data.email || '',
                    }));
                }
            }
        };
        fetchUserData();    
    },[user])
    const router= useRouter()
    const confirm=async()=>{
        if(cart.length>0){
            const isEmptyField = Object.values(form).some(value => value.toString().trim() === "");
            if(isEmptyField) {
                toast("All fields are required", {
                    position: 'top-center',
                })
                return;
            }else{
                toast("success", {
                    position: 'top-center',
                })
                if (user) {
                    const orderData = {
                        userId: user.uid,
                        customerInfo:form,
                        cartItems: cart,
                        total: total,
                        createdAt: serverTimestamp(),
                    };
                    try {
                        const docRef = await addDoc(collection(db, "orders"), orderData);
                        setOrderId(docRef.id);
                        setForm({
                            fname: '',
                            lname: '',
                            email: '',
                            telephone: '',
                            street: '',
                            house: '',
                            city: '',
                            deliveryComment: '',
                            comments: '',
                        });
                        setCart([])
                        } catch (error) {
                        console.error("Error adding order: ", error);
                    }
                    router.push("/orders")
                }else{
                    setForm({
                        fname: '',
                        lname: '',
                        email: '',
                        telephone: '',
                        street: '',
                        house: '',
                        city: '',
                        deliveryComment: '',
                        comments: '',
                    });
                    setCart([])
                    router.push("/thanks")
                }
            }
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
            <title>Checkout - Chickana dd</title>
            <meta name="description" content="chickana checkout" />
        </Head>
        <div className='bg-gray-100'>
            <main className='md:w-[85%] m-auto px-[5%] md:px-[2.5%] pt-[60px] pb-[20px] text-[14px] text-[#372b27]'>
                <div className='grid grid-cols-1 lg:grid-cols-3 lg:gap-[30px]'>
                    <section className='col-span-2 flex flex-col mb-[40px] lg:mb-[0]'>
                        {!user&&<div className='bg-[#fff] py-[10px] px-[25px] mb-[2px] rounded flex gap-1 shadow-sm'>
                            <p>Already have an account? </p>
                            <Link href="/login" className='hover:underline text-black'>Login Here</Link>
                        </div>}
                        <div className='grid grid-cols-12 md:gap-x-8 gap-y-4 pt-[15px] pb-[20px] px-[25px] bg-[#fff] rounded-bl-[3px] shadow-sm rounded-br-[3px]'>
                            <div className='col-span-12 md:col-span-6 flex flex-col gap-2'>
                                <label htmlFor="fname" >First Name</label>
                                <input type='text' name='fname' id='fname' value={form.fname} onChange={handleChange} className='border rounded w-full px-2 py-1'/>
                            </div>
                            <div className='col-span-12 md:col-span-6 flex flex-col gap-2'>
                                <label htmlFor="lname" >Last Name</label>
                                <input type='text' name='lname' id='lname' value={form.lname} onChange={handleChange} className='border rounded w-full px-2 py-1'/>
                            </div>
                            <div className='col-span-12 md:col-span-6 flex flex-col gap-2'>
                                <label htmlFor="email" >Email</label>
                                <input type='email' name='email' id='email' value={form.email} onChange={handleChange} className='border rounded w-full px-2 py-1'/>
                            </div>
                            <div className='col-span-12 md:col-span-6 flex flex-col gap-2'>
                                <label htmlFor="telephone" >Telephone</label>
                                <input type='tel' name='telephone' id='telephone' value={form.telephone} onChange={handleChange} className='border rounded w-full px-2 py-1'/>
                            </div>
                            <div className='col-span-12 md:col-span-6 flex flex-col gap-2'>
                                <label htmlFor="street" >Street</label>
                                <input type='text' name='street' id='street' value={form.street} placeholder='Enter a location' onChange={handleChange} className='border rounded w-full px-2 py-1'/>
                            </div>
                            <div className='col-span-12 md:col-span-6 flex flex-col gap-2'>
                                <label htmlFor="house" >House/Apt Number</label>
                                <input type='text' name='house' id='house' value={form.house} onChange={handleChange} className='border rounded w-full px-2 py-1'/>
                            </div>
                            <div className='col-span-6 md:col-span-4 mr-4 md:mr-0 flex flex-col gap-2'>
                                <label htmlFor="city" >City</label>
                                <input type='text' name='city' id='city' value={form.city} onChange={handleChange} className='border rounded w-full px-2 py-1'/>
                            </div>
                            <div className='col-span-6 md:col-span-4 flex flex-col gap-2'>
                                <label htmlFor="deliveryComment" >Delivery comment</label>
                                <input type='text' name='deliveryComment' id='deliveryComment' value={form.deliveryComment} onChange={handleChange} className='border rounded w-full px-2 py-1'/>
                            </div>
                            <div className='col-span-10 md:col-span-8 flex flex-col gap-2'>
                                <p>Payment Method</p>
                                <div className='bg-gray-200 px-4 py-3 rounded border flex items-center gap-2'>
                                    <div className=" w-4 h-4 rounded-full border-[5px] border-[#272727] bg-white"></div>
                                    <p>Cash On Delivery</p>
                                </div>
                            </div>
                            <div className='col-span-12 flex flex-col gap-2'>
                                <label htmlFor="comments" >Add Comments</label>
                                <textarea name='comments' id='comments' value={form.comments} onChange={handleChange} className='border rounded w-full px-2 py-1 h-20'></textarea>
                            </div>
                        </div>
                    </section>
                    <section className='col-span-1 rounded shadow-sm hidden sticky top-[10px] md:top-[30px]  bg-[#fff] p-[20px] self-start lg:flex flex-col items-center gap-[10px]'>
                        {cart.length > 0 ?
                        <><div className='w-full my-[10px] flex flex-col gap-[5px]'>
                            {cart.map((cartItem, index)=> (<div key={index} className={clsx('flex justify-between', index!==cart.length - 1&&"border-b border-dashed border-[#efeded] pb-2" )}>
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
                        <p className='my-[20px] text-[#372b27] text-[14px]'>Add menu items to your cart.</p>
                        }
                        <button className='capitalize text-[#fff] bg-[#d95a31] w-full p-[10px] font-bold rounded-[5px] hover:bg-black transition duration-200 text-[17.5px]' onClick={()=>confirm()}>Confirm</button>
                    </section>
                    <button type='submit' onClick={confirm} className='rounded block lg:hidden bg-[#d95a31] text-[#fff] text-[17.5px] font-semibold py-[8px] text-center'>
                        Confirm
                    </button>
                </div>
            </main>
        </div>
        </>
    )
}