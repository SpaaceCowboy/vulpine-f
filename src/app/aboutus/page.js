import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
function page() {
  return (
    <>
  <section className=' w-screen h-[100%] absolute bg-[#0E1c1c]'>
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
  <section className='top-28 flex flex-col w-[100%] relative bg-[#0E1c1c]'>
    <div className='
    md:w-[100%] lg:w-[90%] md:h-[60vh] lg:h-[80vh] bg-slate-50/10 z-10 relative  flex self-center
    text-center  items-center flex-col justify-evenly rounded-md text-black '>
      <Image alt='about-bg' fill="true" className='rounded-lg opacity-50 ' src="/about-bg.jpg "></Image>
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
          <p className='text-1xl lg:text-2xl font-light px-2 lg:px-4'>
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
    <div className='flex flex-row w-[100%] h-[90vh] bg-[#29343D] mt-60'>

    </div>
  </section>

  </>
  )
}

export default page