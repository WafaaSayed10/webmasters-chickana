import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import Link from "next/link";
import { useMenu } from "@/hooks/useMenu";
import { useRouter } from "next/router";
import { useCategory } from "../context/categoryContext"

import 'swiper/css';
import 'swiper/css/navigation';

export default function Home() {
  const {data}=useMenu()
  const {displayCategory} = useCategory();
  const router = useRouter();
  const categoryMenu=(cat)=>{
    displayCategory(cat)
    router.push("/menu");
  }
  return (
    <>
      <Head>
        <title>Chickana dd</title>
        <meta name="description" content="chickana home" />
        <meta name="keywords" content="chickana, pizza, sandwich, food" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="chickana resturant" />
        <meta property="og:description" content="chickana double ds resturant" />
        <meta property="og:image" content="/images/thumb_803_0_0_contain_48a4b15e.jpg" />
        <meta property="og:url" content="http://webmasters-chickana-oyxc.vercel.app" />
        <meta property="og:type" content="website" />
      </Head>
      <main className="bg-gray-100">
        <div className='md:w-[85%] m-auto px-[5%] md:px-[2.5%]'>
          <section className="py-[60px]">
            <div className=" relative h-auto lg:h-[70vh] rounded-[10px] overflow-hidden">
              <Swiper
                modules={[Navigation, Autoplay]}
                navigation
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                className="h-full"
              >
                <SwiperSlide>
                  <Image src="/images/thumb_802_0_0_contain_48a4b15e.jpg" alt="Slide 1" className="w-full h-auto"  width={1200} height={600} priority/>
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="/images/thumb_803_0_0_contain_48a4b15e.jpg" alt="Slide 2" className="w-full h-auto"  width={1200} height={600} priority/>
                </SwiperSlide>
              </Swiper>
              <Link href="/menu" className="absolute top-[10px] sm:top-[60px] md:top-[60px] lg:top-2/3 left-1/2 -translate-x-1/2 z-10"><button className="whitespace-nowrap px-[40px] py-[10px] sm:px-[60px] sm:py-[15px] md:px-[90px] bg-[#fde42b] font-bold text-[16px] md:text-[22px] text-[#fff] border rounded-[8px] border-[#fff]" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.7)'}}>Order Now</button></Link>
            </div>
          </section>
          <section className="py-[60px]">
            <h2 className="text-center text-[30px] font-semibold capitalize mb-[15px]">Categories</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px]">
              {data?.map((cat)=>
                <div onClick={()=>categoryMenu(cat)} key={cat.category} className="border rounded-bl-[5px] rounded-br-[5px] shadow-sm overflow-hidden hover:underline cursor-pointer">
                  <div className="relative w-full h-auto">
                    <Image src={cat.image} alt={cat.category} className="w-full h-auto"  width={800} height={600} loading="lazy"/>
                  </div>
                  <h3 className="bg-[#fff] text-[21px] font-semibold text-center capitalize p-[20px]">{cat.category}</h3>
                </div>
              )}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
