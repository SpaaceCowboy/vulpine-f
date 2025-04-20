"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { PiInstagramLogoThin } from "react-icons/pi"
import { IconContext } from "react-icons";
import { PiYoutubeLogoThin } from "react-icons/pi";
import { GiFox } from "react-icons/gi";



function page() {
  return (
    <>
  <section className=' w-screen h-[100%] absolute bg-[#0E1c1c]'>
    <header className="flex flex-row  w-[100%] justify-center  absolute">
      <div className="flex  justify-start  items-center ml-[2%] gap-10 w-screen">
        <div className=" cursor-pointer rounded-full hover:text-[#B68B4B]  text-[#a7a8aa] pl-14 hover:underline">
          <Link href="/">Menu </Link></div> 
        <div className=" cursor-pointer rounded-full hover:text-[#B68B4B]  text-[#a7a8aa] p-6 hover:underline">
          <Link href="/aboutus">Vulpine</Link></div> 
        <div className=" cursor-pointer rounded-full hover:text-[#B68B4B]  text-[#a7a8aa] p-6 hover:underline">
          <Link href="/aboutus">Moments</Link></div> 
        <div className=" cursor-pointer rounded-full hover:text-[#B68B4B]  text-[#a7a8aa] p-6 hover:underline">
          <Link href="/aboutus">Contact</Link></div> 
        <div className=" cursor-pointer rounded-full hover:text-[#B68B4B]  text-[#a7a8aa] p-6 hover:underline">
          <Link href="/aboutus">Reservation</Link></div>   
       </div>
      <div className="relative">
      <Image alt="logo"width={100} height={100} src="/idk.svg">

      </Image>
    </div>
    </header>   
  </section>
  <section className='top-28 flex flex-col w-[100%] relative bg-[#0E1c1c] text-[#B68B4B]'>
    <div className='
    md:w-[100%] lg:w-[90%] md:h-[60vh] lg:h-[80vh] bg-slate-50/10 z-10 relative  flex self-center
    text-center  items-center flex-col justify-evenly rounded-md  '>
      <Image alt='about-bg' fill="true" className='rounded-lg opacity-30 ' src="/about-bg.jpg "></Image>
     <div className=' flex flex-col justify-evenly h-[50%] z-10 '> 
      <p className='lg:text-xl tracking-widest'>Welcome to Vulpine</p>
      <h1 className='text-5xl lg:text-7xl tracking-widest'>
        BEST FAMOUS COCKTAILS
      </h1>
      <p className='px-[10vh] font-medium lg:text-xl lg:px-[40vh]'>
        these is supposed to be the best bartending service in the entire turkey with not competores.
        you can read more about them in the page below
      </p>
     </div>
     <div className='z-10'>
        <button className='border p-3 rounded-md'>
          Learn More
        </button>
     </div>
    </div>
    <div className='flex flex-col justify-center text-center  h-[22vh] '>
       <h1 className='text-5xl'
       >
         ABOUT US </h1>
    </div>
    <div className='flex flex-row md:w-[100vh] lg:w-[90%] h-[40vh] lg:h-[60vh] gap-2 self-center justify-between
       mt-5 rounded-md'>
      <div className='  relative w-[15%] h-[50%]  mt-[20%] lg:mt-[16%]'>
          <Image alt='Rp' fill="true" src="/negronism.png" className='rounded-md' >

          </Image>
      </div>
      <div className='  relative w-[15%] h-[50%] '>
      <Image alt='RP2' fill={true} src="/soroshsm.png" className='rounded-md'>

        </Image>
      </div>
      <div className='flex flex-col w-[32%] rounded-md justify-evenly text-center items-center bg-[#29343D] '>
          <h1 className='lg:text-6xl text-4xl font-normal '>
            TRADITIONAL & MODERN
          </h1>
          <p className='text-1xl lg:text-2xl font-light px-2 lg:px-10 '>
              this is just a test to see if you read more to get to know our team using the section made by me in this website
          </p>
          <button className='border rounded-md w-[50%] py-2   border-black'>
              ReadMore
          </button>
      </div>
      <div className='  relative w-[15%] h-[50%] justify-start'>
          <Image alt='Rp' fill="true" src="/signaturesm.png" className='rounded-md' >

          </Image>
      </div>
      <div className='  relative w-[15%] h-[50%] mt-[20%] lg:mt-[16%]'>
      <Image alt='RP2' fill={true} src="/green-negronism.jpg" className='rounded-md'>

        </Image>
      </div>
    </div>
    <div className=' w-[100%] h-[70vh] lg:h-[80vh] bg-[#29343D] mt-40'>
      <div className='flex flex-row w-[100%] h-[55vh] lg:h-[65vh]  mt-[15vh] '>
        <div className='flex flex-col w-[52%]  text-left px-8 justify-between pb-10 pr-8'>
           <h1 className='text-5xl tracking-wider'>
            For every ocation
           </h1>
           <div className='border-b pb-3 border-[#B68B4B]'>
            <h2 className='text-2xl'>Personalized cocktailes</h2>
            <p className='text-sm text-white'> let us tell you what you can make with bottle you have</p>
           </div>
           <div className='border-b pb-3 border-[#B68B4B]'>
            <h2 className='text-2xl'>Classic and Famous cocktails</h2>
            <p className='text-sm text-white'>chose from all famous and classic cocktails from around the world</p>           
           </div>
           <div className='border-b pb-3 border-[#B68B4B]'>
            <h2 className='text-2xl'>get a taste of our signature cocktails </h2>
            <p className='text-sm text-white'> have a taste of our originial and signature cocktails</p>   
           </div>
           <div className='border-b pb-3 border-[#B68B4B]'>
            <h2 className='text-2xl'> color theme of your choosing for drinks</h2>
            <p className='text-sm text-white'>no matter the oceation have your drinks the color of your liking</p>             
           </div>


        </div>
        <div className='relative w-[45%]'>
          <Image alt='sangria' fill={true} src="/sangria.jpg" className='rounded-md'></Image>
        </div>
      </div>
    </div>


    <footer className=" h-[7vh] pt-4 w-[100%] flex">
      <div className=" w-[80%] mb-4 ml-[3%]">
       <div className="flex flex-wrap gap-2 w-[100%] justify-start">
       <IconContext.Provider value={{ color: "#a7a8aa", className: "global-class-name", size:"2em" }}>
        <Link href="https://www.instagram.com/vulpine_drinks/">
          <PiInstagramLogoThin className="cursor-pointer"/>
        </Link>
       </IconContext.Provider>
       <IconContext.Provider value={{ color: "#a7a8aa", className: "global-class-name", size:"2em" }}>
        <Link href="https://youtu.be/sRh-2tZssnI?si=QaX5vmUn3fyaQe0z">
        <PiYoutubeLogoThin className="cursor-pointer" />
        </Link>
       </IconContext.Provider>
        </div>
      </div>
      <div className="justify-end flex flex-wrap w-[20%]">
        <IconContext value={{ color: "#a7a8aa", className: "global-class-name", size:"2em"}}>
          <Link href="https://www.youtube.com/watch?v=utvVUNrn5X8" target="_blank" className="mr-[8%]">
          <GiFox />
          </Link>
        </IconContext>
       </div>
    </footer>
  </section>

  </>
  )
}

export default page