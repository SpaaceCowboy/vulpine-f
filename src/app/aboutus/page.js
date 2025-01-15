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
          <Link href="/aboutus">Menu </Link></div> 
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

    <div className='w-screen h-[85%] mt-[15%] '>   
      <div className='w-full absolute top-[30%] bg-[#282f32] left-0 h-[500px] -skew-y-12' />
    </div>
    <h3 className='  text-4xl items-center lg:right-[40%} uppercase tracking-[20px] ml-5'>
      Vulpine
      </h3> 
      
  </section>
  <section className='h-screen w-screen bg-[#2a2723'>

  </section>
  </>
  )
}

export default page