import Head from "next/head"

export default function About(){
    return(
        <>
        <Head>
            <title>About - Chickana dd</title>
            <meta name="description" content="chickana about" />
        </Head>
        <main className="bg-gray-100">
            <div className=" md:w-[85%] m-auto px-[5%] md:px-[2.5%] pt-[100px] pb-[30px]">
                <h1 className="mb-[40px] text-[28px] text-[#372b27] font-semibold">About us</h1>
                <section className="bg-[#fff] rounded shadow-md px-[20px] py-[15px] text-[14px]">
                    <p className="mb-7">We believe that good food feeds more than just our appetities. It nourishes the soul. </p>
                    <p className="mb-7">Good food brings us together. It connects us to something larger than ourselves. </p>
                    <p className="mb-4">We believe that sitting down and sharing a meal prepared with love, quality & fresh ingredients makes us all feel like family. When that happens, the world instantly feels like a much better place.</p>
                    <p className="mb-4">That’s what Chickana & Double D’s aims to provide. Good quality food that meets value.</p>
                </section>
            </div>
        </main>
        </>
    )
}