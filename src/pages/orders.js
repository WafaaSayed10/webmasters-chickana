import { useEffect, useState } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { auth, db } from '../utils/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import Head from "next/head"

export default function Orders(){
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        const fetchOrders = async () => {
            if (user) {
                const q = query(collection(db, "orders"), where("userId", "==", user.uid));
                const querySnapshot = await getDocs(q);
                const fetchedOrders = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setOrders(fetchedOrders);
            }
        };
        fetchOrders();
    }, [user]);
    return(
        <>
        <Head>
            <title>Orders - Chickana dd</title>
            <meta name="description" content="chickana orders" />
        </Head>
        <div className='bg-gray-100 '>
            <div className="md:w-[85%] m-auto px-[5%] md:px-[2.5%] py-[40px] text-[14px] text-[#372b27]">
                {orders.length==0?
                    <div className='text-center'><h2 className='font-semibold mb-2 text-[22px]'>No orders yet</h2><p>When you place your first order, it will appear here.</p></div>
                    :<><h1 className='text-[30px] font-semibold mb-5'>My Orders</h1><div className='grid gap-[40px] grid-cols-1 lg:grid-cols-2'>{orders.map((order)=>
                    <div className='border-b shadow-md p-2 flex gap-[80px]'>
                        <div>
                            <h2 className="font-bold mb-1 text-[15px]">Info</h2>
                            <h2>Name: {order.customerInfo?.fname}</h2>
                            <p>Addres: {order.customerInfo?.street}</p>
                            <p>Phone: {order.customerInfo?.telephone}</p>
                        </div>
                        <ul>
                            <h2 className="font-semibold text-[15px]">Order</h2>
                            {order.cartItems.map((item, index) => (<div key={index}>
                                <li key={item.id}>
                                    {item.name} <br/> Quantity: {item.quantity} <br/> Price: {item.newPrice}.00 
                                </li>
                                {Object.entries(item.selectedOptions).map(([groupName, { choice, price }], index)=><div key={index} className='flex gap-1'>
                                    <h4 className='text-[12px] text-[#6d6461]'>{groupName}</h4>
                                    <p className='text-[12px] text-[#372b27]'>{choice}{ price !== "0.00" &&<span className='ml-[5px]'>({price})</span>}</p>
                                </div>)}
                            </div>))}
                        </ul>
                        <p className='text-[16px] font-semibold'>Total: <span className='text-[14px] font-normal'>{order.total}.00</span></p>
                    </div>
                )}</div></>}
            </div>
        </div>
        </>
    )
}