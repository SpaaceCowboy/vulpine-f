import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
function page() {
  return (
    <>
  <section className=' w-screen h-[100%] absolute bg-[#2a2723]'>
    <header className="flex flex-row  w-[100%] justify-center  absolute">
      <div className="flex  justify-start  items-center ml-[2%] gap-10 w-screen">
        <div className=" cursor-pointer rounded-full   text-[#a7a8aa] p-6 hover:underline">
          <Link href="/">Menu </Link></div> 
        <div className=" cursor-pointer rounded-full   text-[#a7a8aa] p-6 hover:underline">
          <Link href="/aboutus">Vulpine</Link></div> 
        <div className=" cursor-pointer rounded-full   text-[#a7a8aa] p-6 hover:underline">
          <Link href="/aboutus">Moments</Link></div> 
        <div className=" cursor-pointer rounded-full   text-[#a7a8aa] p-6 hover:underline">
          <Link href="/aboutus">Contact</Link></div> 
        <div className=" cursor-pointer rounded-full   text-[#a7a8aa] p-6 hover:underline">
          <Link href="/aboutus">Reservation</Link></div>   
       </div>
      <div className="relative">
      <Image alt="logo"width={100} height={100} src="/idk.svg">

      </Image>
    </div>
    </header>   
  </section>
  <section className='top-40 flex flex-col w-[100%] relative'>
    <div className='
    md:w-[100%] lg:w-[90%] md:h-[60vh] lg-[70vh] bg-slate-50/10 z-10 relative  flex self-center
    text-center  items-center flex-col justify-evenly rounded-md'>
     <div className=' flex flex-col justify-evenly h-[50%]'> 
      <p className=''>Welcome to Vulpine</p>
      <h1 className='text-5xl'>
        BEST FAMOUS COCKTAILS
      </h1>
      <p className='px-[10vh]'>
        these is supposed to be the best bartending service in the entire turkey with not competores.
        you can read more about them in the page below
      </p>
     </div>
     <div>
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
    <div className='flex flex-row md:w-[100vh] lg:w-[190vh] h-[50vh]  gap-2 self-center
     bg-slate-500/20  '>
      <div className=' relative w-[33%] '>
          <Image alt='Lp' fill="true" src="/bar.jpg">

          </Image>
      </div>
      <div className='flex flex-col w-[33%] justify-center bg-black'>
          <p className='text-1xl'>
              this is just a test to see if you read more to get to know our team using the section made by me in this website
          </p>
          <button className='p-3 border rounded-md'>
              ReadMore
          </button>
      </div>
      <div className='relative w-[33%]'>
          <Image alt='Rp' width={100} height={100} src="/bar.jpg">

          </Image>
      </div>
    </div>
  </section>

  </>
  )
}

export default page