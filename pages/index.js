import React,{useState} from 'react';
import Head from 'next/head';
import { Inter } from '@next/font/google'
import Bg from '../assets/bg.png';
import LeftLayout from '../components/section/LeftLayout';
import CenterLayout from '../components/section/CenterLayout';
import RightLayout from '../components/section/RightLayout';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Safwan Portfolio</title>
        <meta name="description" content="Safwan's Portfolio - Frontend Developer. Crafting user-friendly, responsive websites to bring your ideas to life. Let's create together!"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      

      <div className="bg-black bg-cover bg-center relative  overflow-hidden" style={{ backgroundImage: `url(${Bg.src})` }}>
        <div className="lg:bg-black/70 h-full md:h-screen bg-black/80 ">
          <div className="grid grid-cols-12 gap-6 container mx-auto pt-[3%] px-4 lg:px-0">
            {/* left layout */}
            <div className="col-span-12 xl:col-span-3 py-4 space-y-6 z-50 ">
                <LeftLayout/>
            </div>

            {/* center layout */}
            <div className="col-span-12 xl:col-span-6 order-first lg:order-none z-0">
                <CenterLayout/>
            </div>

            {/* right layout */}
            <div className="col-span-12 xl:col-span-3 py-4  space-y-6 z-50 ">
                <RightLayout/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
