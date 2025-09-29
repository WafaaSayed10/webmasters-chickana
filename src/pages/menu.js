import Head from 'next/head';
import { IoSearchSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaStar } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import { MdWatchLater } from "react-icons/md";
import { FiMinus } from "react-icons/fi";
import CardModal from '@/components/cardModal';
import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { useMenu } from "@/hooks/useMenu";
import { useCategory } from "../context/categoryContext"
import {useCart} from "../context/cartContext"
import { IoIosClose } from "react-icons/io";
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

export default function Menu(){
    const pathname= usePathname()
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedItem, setSelectedItem] = useState(null);
    const {data}=useMenu()
    const [openCategories, setOpenCategories] = useState({});
    const { selectedCategory, setSelectedCategory, displayCategory, selectedCategoryName, setSelectedCategoryName} = useCategory();
    const {cart, removeFromCart, selectedOptions, setSelectedOptions, total, setNumOfItems} = useCart()
    useEffect(() => {
        if (data) {
            const initialState = {};
            data.forEach(cat => {
                initialState[cat.category] = true;
            });
            setOpenCategories(initialState);
        }
    }, [data]);
    const filteredItems = data?.flatMap((cat) =>
        cat?.items.filter((item) => item.name?.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    const toggleMenu=(category)=>{
        setOpenCategories(prev => ({
            ...prev,
            [category]: !prev[category]
        }));
    }
    const displayAll=()=>{
        setSelectedCategory(null)
        setSelectedCategoryName(null)
    }
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    const onClose=() => {
        setSelectedItem(null)
        setSelectedOptions({})
        setNumOfItems(1)
    }
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
            <title>Menu - Chickana dd</title>
            <meta name="description" content="chickana menu" />
        </Head>
        <div className='bg-gray-100 relative'>
            <main className='md:w-[85%] m-auto px-[5%] md:px-[2.5%]'>
                <div className='overflow-x-auto whitespace-nowrap py-[10px] md:py-[30px]'>
                    <div className=' flex gap-[15px] md:gap-[30px]'>
                        <button onClick={() => displayAll()} className={clsx('border rounded-[20px] border-[#d95a31] px-[16px] py-[8px] capitalize font-semibold hover:text-[#fff] hover:bg-[#d95a31] transition duration-200', selectedCategory==null? "text-[#fff] bg-[#d95a31]":"text-[#372b27] bg-[#fff]")}>all categories</button>
                        {data?.map(cat=>(
                            <button key={cat.category} onClick={() => displayCategory(cat)} className={clsx('border rounded-[20px] border-[#d95a31] px-[16px] py-[8px] capitalize font-semibold hover:text-[#fff] hover:bg-[#d95a31] transition duration-200', selectedCategoryName==cat.category? "text-[#fff] bg-[#d95a31]":"text-[#372b27] bg-[#fff]")}>{cat.category}</button>
                        ))}
                    </div>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-[30px]'>
                    <section className='col-span-2 flex flex-col mb-[40px] lg:mb-[0]'>
                        <div className='bg-[#fff] py-[10px] px-[30px] mb-[4px]'>
                            <ul className='flex gap-[30px]'>
                                <li className={clsx('text-[#] hover:text-[#d95a31] cursor-pointer capitalize', pathname === "/menu" ? "text-[#d95a31]":"")}><Link href="/menu">menu</Link></li>
                                <li className={clsx('text-[#] hover:text-[#d95a31] cursor-pointer capitalize', pathname === "/info" ? "text-[#d95a31]":"")}><Link href="/info">info</Link></li>
                            </ul>
                        </div>
                        <div className='bg-[#fff] py-[10px] px-[30px] mb-[1px] rounded-tl-[3px] rounded-tr-[3px]'>
                            <div className='border rounded-[3px] flex items-center'>
                                <div className='bg-[#e0dcdb] py-[9px] px-[12px] border'>
                                    <IoSearchSharp className='text-[22px] '/>
                                </div>
                                <input type='text' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} name='search' placeholder='Search menu items' className='py-[8px] px-[12px] w-full border focus:border-[#d95a31] focus:outline-none '/>
                            </div>
                        </div>
                        <div className='bg-[#fff] rounded-bl-[3px] rounded-br-[3px]'>
                            {searchTerm?
                            <>
                            {filteredItems.length>0?
                                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-2 py-[10px] px-[30px] gap-[30px]'>
                                    {filteredItems?.map((item,index)=>
                                        <div key={index} onClick={()=>setSelectedItem(item)} className='py-[15px] flex flex-col overflow-hidden cursor-pointer '>
                                            <div className='relative w-[250px] h-[250px]'><Image src={item.image} className="object-cover" fill alt={item.image} loading="lazy"/></div>
                                            <h3 className='text-[14px] mb-[8px] text-[#372b27] font-semibold '>{item.name}</h3>
                                            <p className='text-[14px] text-[#6d6461]'>{item.description}</p>
                                            <div className='flex items-center gap-[10px] mt-auto'>
                                                <FaStar className='text-[#ffc107]'/>
                                                <span className='line-through text-[#6d6461]'>{item.oldPrice}</span><span>{item.newPrice}</span>
                                                <div className='bg-gray-100 p-[8px] rounded-[3px] hover:bg-gray-200 transition duration-200'><FaPlus className='text-[12px]'/></div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                :
                                <p className='text-center py-5'>Not found</p>}
                                </>
                                :
                                <>
                                {selectedCategory?
                                <>
                                <div className='flex justify-between items-center py-[10px] px-[30px]'>
                                    <h2 className='font-semibold text-[20px]'>{selectedCategoryName}</h2>
                                    { openCategories[selectedCategoryName] ? <IoIosArrowUp onClick={()=>toggleMenu(selectedCategoryName)} className='cursor-pointer text-[25px]'/> : <IoIosArrowDown onClick={()=>toggleMenu(selectedCategoryName)} className='cursor-pointer text-[25px]'/> }
                                </div>
                                { openCategories[selectedCategoryName] && <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-2 py-[10px] px-[30px] gap-[30px]'>
                                    {selectedCategory.map((item)=>
                                        <div key={item.id} onClick={()=>setSelectedItem(item)} className='py-[15px] flex flex-col overflow-hidden cursor-pointer '>
                                            <div className='relative w-[250px] h-[250px]'><Image src={item.image} className="object-cover" fill alt={item.image} loading="lazy"/></div>
                                            <h3 className='text-[14px] mb-[8px] text-[#372b27] font-semibold '>{item.name}</h3>
                                            <p className='text-[14px] text-[#6d6461]'>{item.description}</p>
                                            <div className='flex items-center gap-[10px] mt-auto'>
                                                <FaStar className='text-[#ffc107]'/>
                                                <span className='line-through text-[#6d6461]'>{item.oldPrice}</span><span>{item.newPrice}</span>
                                                <div className='bg-gray-100 p-[8px] rounded-[3px] hover:bg-gray-200 transition duration-200'><FaPlus className='text-[12px]'/></div>
                                            </div>
                                        </div>
                                    )}
                                </div>}
                            </>
                            :
                            <>{data?.map((cat)=><div key={cat.category}>
                                <div className='flex justify-between items-center py-[10px] px-[30px]'>
                                    <h2 className='font-semibold text-[20px]'>{cat.category}</h2>
                                    { openCategories[cat.category] ? <IoIosArrowUp onClick={()=>toggleMenu(cat.category)} className='cursor-pointer text-[25px]'/> : <IoIosArrowDown onClick={()=>toggleMenu(cat.category)} className='cursor-pointer text-[25px]'/> }
                                </div>
                                { openCategories[cat.category] && <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-2 py-[10px] px-[30px] gap-[30px]'>
                                    {cat.items.map((item)=>
                                        <div key={item.id} onClick={()=>setSelectedItem(item)} className='py-[15px] flex flex-col overflow-hidden cursor-pointer'>
                                            <div className='relative w-[250px] h-[250px] '><Image src={item.image} className="object-cover" fill alt={item.image} loading="lazy"/></div>
                                            <h3 className='text-[14px] mb-[8px] text-[#372b27] font-semibold '>{item.name}</h3>
                                            <p className='text-[14px] text-[#6d6461]'>{item.description}</p>
                                            <div className='flex items-center gap-[10px] mt-auto'>
                                                <FaStar className='text-[#ffc107]'/>
                                                <span className='line-through text-[#6d6461]'>{item.oldPrice}</span><span>{item.newPrice}</span>
                                                <div className='bg-gray-100 p-[8px] rounded-[3px] hover:bg-gray-200 transition duration-200'><FaPlus className='text-[12px]'/></div>
                                            </div>
                                        </div>
                                    )}
                                </div>}
                            </div>)}
                            </>
                            }
                                </>}
                                
                        </div>
                        <div onClick={scrollToTop} className='rounded-[5px] border border-[#d95a31] px-[10px] py-[5px] w-fit my-[10px] self-end group hover:bg-[#d95a31] cursor-pointer transition-all duration-200'>
                            <div className='bg-[#d95a31] p-[15px] rounded-full group-hover:bg-[#fff] '>
                                <FaArrowUp className='text-[#fff] text-[30px] font-bold group-hover:text-[#d95a31] '/>
                            </div>
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
                        <button onClick={checkout} className='capitalize text-center text-[#fff] bg-[#d95a31] w-full p-[10px] font-bold rounded-[5px] hover:bg-black transition duration-200 '>checkout</button>
                    </section>
                </div>
            </main>
            <Link href="/cart" className='fixed bottom-0 right-0 left-0 block lg:hidden bg-[#d95a31] text-[#fff] text-[17.5px] font-semibold py-[8px] text-center'>My Order: {total}.00</Link>
        </div>
        {selectedItem && <CardModal item={selectedItem} onClose={onClose} />}
        </>
    )
}