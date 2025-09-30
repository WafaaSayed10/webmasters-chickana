import Head from 'next/head';
import { IoSearchSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { useState, useEffect } from 'react';
import { FaArrowUp } from "react-icons/fa";
import CardModal from '@/components/cardModal';
import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { useMenu } from "@/hooks/useMenu";
import { useCategory } from "../context/categoryContext"
import {useCart} from "../context/cartContext"
import MenuCard from '@/components/menuCard';
import CartComponent from '@/components/cartComponent';

export default function Menu(){
    const pathname= usePathname()
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedItem, setSelectedItem] = useState(null);
    const {data}=useMenu()
    const [openCategories, setOpenCategories] = useState({});
    const { selectedCategory, setSelectedCategory, displayCategory, selectedCategoryName, setSelectedCategoryName} = useCategory();
    const {setSelectedOptions, total, setNumOfItems} = useCart()
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
                                                <MenuCard key={index} item={item} setSelectedItem={setSelectedItem}/>
                                            )}
                                        </div>
                                        :
                                        <p className='text-center py-5'>Not found</p>
                                    }
                                </>
                                :
                                <>
                                    {selectedCategory?
                                        <>
                                            <div className='flex justify-between items-center py-[10px] px-[30px]'>
                                                <h2 className='font-semibold text-[20px]'>{selectedCategoryName}</h2>
                                                { openCategories[selectedCategoryName] ? <IoIosArrowUp onClick={()=>toggleMenu(selectedCategoryName)} className='cursor-pointer text-[25px]'/> : <IoIosArrowDown onClick={()=>toggleMenu(selectedCategoryName)} className='cursor-pointer text-[25px]'/> }
                                            </div>
                                            {openCategories[selectedCategoryName] && <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-2 py-[10px] px-[30px] gap-[30px]'>
                                                {selectedCategory.map((item, index)=>
                                                    <MenuCard key={index} item={item} setSelectedItem={setSelectedItem}/>
                                                )}
                                            </div>}
                                        </>
                                        :
                                        <>{data?.map((cat)=>
                                            <div key={cat.category}>
                                                <div className='flex justify-between items-center py-[10px] px-[30px]'>
                                                    <h2 className='font-semibold text-[20px]'>{cat.category}</h2>
                                                    {openCategories[cat.category] ? <IoIosArrowUp onClick={()=>toggleMenu(cat.category)} className='cursor-pointer text-[25px]'/> : <IoIosArrowDown onClick={()=>toggleMenu(cat.category)} className='cursor-pointer text-[25px]'/> }
                                                </div>
                                                {openCategories[cat.category] && <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-2 py-[10px] px-[30px] gap-[30px]'>
                                                    {cat.items.map((item, index)=>
                                                        <MenuCard key={index} item={item} setSelectedItem={setSelectedItem}/>
                                                    )}
                                                </div>}
                                            </div>)}
                                        </>
                                    }
                                </>
                            }
                        </div>
                        <div onClick={scrollToTop} className='rounded-[5px] border border-[#d95a31] px-[10px] py-[5px] w-fit my-[10px] self-end group hover:bg-[#d95a31] cursor-pointer transition-all duration-200'>
                            <div className='bg-[#d95a31] p-[15px] rounded-full group-hover:bg-[#fff] '>
                                <FaArrowUp className='text-[#fff] text-[30px] font-bold group-hover:text-[#d95a31] '/>
                            </div>
                        </div>
                    </section>
                    <section className='col-span-1 hidden lg:block'>
                        <CartComponent />
                    </section>
                </div>
            </main>
            <Link href="/cart" className='fixed bottom-0 right-0 left-0 block lg:hidden bg-[#d95a31] text-[#fff] text-[17.5px] font-semibold py-[8px] text-center'>My Order: {total}.00</Link>
        </div>
        {selectedItem && <CardModal item={selectedItem} onClose={onClose} />}
        </>
    )
}