import Navbar from "@/components/navbar";
import "../styles/globals.css";
import Head from "next/head";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
import Providers from "@/context/providers";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";

export default function App({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient());
  return <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <QueryClientProvider client={queryClient}>
      <Providers>
        <Toaster position="top-right" reverseOrder={false} />
        <Navbar/>
        <Component {...pageProps} />
        <Footer />
      </Providers>
    </QueryClientProvider>
  </>
}
