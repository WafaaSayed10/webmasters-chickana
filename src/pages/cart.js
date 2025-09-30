import Head from "next/head"
import CartComponent from "@/components/cartComponent";

export default function Cart(){
    return(
        <>
        <Head>
            <title>Cart - Chickana dd</title>
            <meta name="description" content="cart menu" />
        </Head>
        <main className="bg-gray-100 py-10">
            <section className='w-[90%] md:w-[40%] m-auto'>
                <CartComponent />
            </section>
        </main>
        </>
    )
}