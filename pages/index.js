import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {

  return(
  <div className='mt-12 sm:mt-0 h-full sm:h-[100vh] w-[100vw] flex items-center justify-center'>
    <Image src='/17.jpg' layout='fill'/>
    <div className='h-[550px] lg:w-[900px] md:w-[700px] sm:w-[500px] w-[350px] md:bg-amber-400/30 backdrop-blur-sm rounded-2xl shadow-2xl shadow-amber-300 flex flex-row relative items-center justify-center'>
    <button className='absolute right-1/4 md:right-0 top-0 translate-y-4 md:-translate-x-12 backdrop-blur-sm bg-amber-400/10 h-[30px] w-[85px] rounded-full shadow-lg shadow-amber-200 hover:bg-amber-400/50 text-amber-900 '>Register</button>
    <button className='absolute right-2/3 md:right-0 top-0 translate-y-4 translate-x-1/4 md:-translate-x-36 backdrop-blur-sm bg-amber-400/10 h-[30px] w-[85px] rounded-full shadow-lg shadow-amber-200 hover:shadow-xl hover:bg-amber-400/50 text-amber-900'>Sign In</button>
      <div className='md:basis-2/3 text-center'>
        <div className='text-4xl font-semibold sm:mt-12  mt-16 text-amber-900 tracking-widest leading-relaxed backdrop-blur-none'>It's not just Food, It's an Experience.</div>
        <div className='mt-10 md:px-32 px-0 text-2xl text-amber-800 font-light backdrop-blur-none'>Take home your favorite meal! Avoid long queues!</div>
        <div className='mt-16 mb-16'>
          <input className='relative h-[35px] w-[250px] rounded-l-lg pl-2  text-amber-800' placeholder='Search by restaurants, meals...'/>
          <button className='h-[35px] w-[85px] bg-amber-400/20 rounded-r-lg text-amber-900 hover:bg-amber-400/50'>Search</button> 
        </div>
      </div>
      <div className='md:flex hidden items-center justify-center'>
        <Image src='/85.png' height={400} width={250} objectFit='contain'/>
      </div>
    </div>
  </div>
  )
}
