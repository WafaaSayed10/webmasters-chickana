import Head from "next/head"

export default function Thanks(){
    return(
        <>
        <Head>
            <title>Thanks - Chickana dd</title>
            <meta name="description" content="chickana thanks" />
        </Head>
        <h2 className="bg-gray-100 font-semibold text-center flex items-center justify-center py-40 text-[20px]">Your order has been placed successfully.<br/>Thank you!</h2>
        </>
    )
}