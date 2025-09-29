import { IoIosClose } from "react-icons/io";
import { useState, useEffect } from "react";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { useCart } from "../context/cartContext";
import toast from "react-hot-toast";

export default function CardModal({item, onClose}){
    const { addToCart, selectedOptions, setSelectedOptions, numOfItems, setNumOfItems} = useCart();
    const [subTotal, setSubTotal]=useState(item.newPrice)
    const requiredGroups = item.options?.length || 0;
    const increeseAmount=()=>{
        setNumOfItems(parseInt(numOfItems)+1)
    }
    const decreeseAmount=()=>{
        if(numOfItems > 0){
            setNumOfItems(numOfItems-1)
        }
    }
    const handleChange=(e, price, groupName)=>{
        setSelectedOptions(prev => ({
            ...prev,
            [groupName]: {
                choice: e.target.value, 
                price,
            },
        }));
    }
    useEffect(() => {
        const totalExtras = Object.values(selectedOptions).reduce(
            (acc, curr) => Number(acc) + Number(curr.price),
            0
        );
        setSubTotal((Number(item.newPrice)+totalExtras)*numOfItems)
    }, [selectedOptions, numOfItems]);
    
    const addToOrder=()=>{
        const selectedCount = Object.keys(selectedOptions).length;
        if (selectedCount < requiredGroups) {
            toast.error("Please select an option from each group.", {
                icon: "⚠️",
            });
            return;
        }
        const itemToAdd = {
            id: item.id,
            name: item.name,
            newPrice: subTotal,
            quantity: numOfItems,
            selectedOptions: selectedOptions
        };
        addToCart(itemToAdd);
        toast.success("Added to cart!", {
            icon: "🛒",
        });
        setNumOfItems(1)
        onClose()
    }
    
    return (
        <>
        <main key={item.id} className="fixed inset-0 bg-black/40 z-40 flex items-center justify-center" onClick={onClose}>
            <div className="bg-[#fff] w-[95%] sm:w-[480px] m-auto border rounded-[5px] z-50" onClick={(e) => e.stopPropagation()}>
                <div className="py-[20px] px-[15px]">
                    <div className="flex justify-between mb-[5px]">
                        <h2 className="capitalize text-[#372b27] text-[21px] font-semibold">{item?.name}</h2>
                        <IoIosClose onClick={onClose} className="text-[#d95a31] text-[21px] cursor-pointer"/>
                    </div>
                    <p className="text-[#6d6461] text-[14px]">{item?.description}</p>
                </div>
                {item.options?.map((opt)=>
                <div key={opt.name}>
                    <div className="flex justify-between py-[10px] px-[15px] bg-[#efeded80]">
                        <h3 className="font-semibold text-[#372b27] text-[17.5px]">{opt.name}</h3>
                        <p className="text-[14px] text-[#6d6461]">Required</p>
                    </div>
                    <div className="py-[20px] px-[15px] flex flex-col gap-[10px]">
                        {opt.choices?.map((cho)=>
                        <div key={cho.choice} className="flex justify-between">
                            <label className="flex items-center gap-[8px]">
                                <input type="radio" name={opt.name} value={cho.choice} checked={selectedOptions[opt.name]?.choice == cho.choice} onChange={(e)=>handleChange(e, cho.price, opt.name)} className="appearance-none w-4 h-4 border border-gray-300 rounded-full checked:border-[5px] checked:border-[#d95a31] checked:bg-white focus:outline-none" />
                                <span className="capitalize text-[#372b27] text-[14px]">{cho.choice}</span>
                            </label>
                            <p className="text-[#372b27] text-[14px]">+{cho.price}</p>
                        </div>
                        )}
                    </div>
                </div>
                )}
                <div className="py-[20px] px-[15px] border-t-[1px] border-b-[1px]">
                    <textarea name="comment" placeholder="Add Comment" className="w-full p-[10px] border rounded-[5px] "/>
                </div>
                <div className="py-[20px] px-[15px] grid grid-cols-1 md:grid-cols-2 gap-[20px] md:gap-[8px]">
                    <div className="flex">
                        <div onClick={decreeseAmount} className="bg-[#efeded] p-3 border rounded-tl-[8px] rounded-bl-[8px] cursor-pointer"><FaMinus /></div>
                        <div className="border-[#efeded] border w-full"><input type="number" value={numOfItems} onChange={(e)=>setNumOfItems(e.target.value)} className="h-full focus:outline-none text-center p-2 w-full"/></div>
                        <div onClick={increeseAmount} className="bg-[#efeded] p-3 rounded-tr-[8px] rounded-br-[8px] cursor-pointer"><FaPlus /></div>
                    </div>
                    <div className="flex items-center justify-between font-semibold text-[14px] text-[#fff] bg-[#d95a31] border rounded-[8px] px-[10px] py-[5px] md:py-[0] hover:bg-black transition duration-200 cursor-pointer">
                        <p className="ml-auto mr-auto " onClick={()=>addToOrder()}>ADD TO ORDER</p>
                        <p className="">{subTotal.toString()}</p>
                    </div>
                </div>
            </div>
        </main>
        </>
    )
}