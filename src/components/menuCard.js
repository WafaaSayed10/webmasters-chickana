import Image from "next/image"
import { FaStar } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";

export default function MenuCard({item, setSelectedItem}){
    return(
        <>
        <div onClick={()=>setSelectedItem(item)} className='py-[15px] flex flex-col overflow-hidden cursor-pointer '>
            <div className='relative w-[250px] h-[250px]'><Image src={item.image} className="object-cover" fill alt={item.image} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" priority /></div>
            <h3 className='text-[14px] mb-[8px] text-[#372b27] font-semibold '>{item.name}</h3>
            <p className='text-[14px] text-[#6d6461]'>{item.description}</p>
            <div className='flex items-center gap-[10px] mt-auto'>
                <FaStar className='text-[#ffc107]'/>
                <span className='line-through text-[#6d6461]'>{item.oldPrice}</span><span>{item.newPrice}</span>
                <div className='bg-gray-100 p-[8px] rounded-[3px] hover:bg-gray-200 transition duration-200'><FaPlus className='text-[12px]'/></div>
            </div>
        </div>
        </>
    )
}