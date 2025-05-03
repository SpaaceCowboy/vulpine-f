"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { PiInstagramLogoThin } from "react-icons/pi"
import { IconContext } from "react-icons";
import { PiYoutubeLogoThin } from "react-icons/pi";
import { GiFox } from "react-icons/gi";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenuItem, NavbarMenu } from "@heroui/navbar"
import {useState} from "react"





function page() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const menuItems = [
        "Home",
        "About Us",
        "Reserve"
    ]

  return (
    <div className='bg-[#2f3033] scrollbar-track-gray-400/20 scrollbar-thumb-[#B68B4B] overflow-y-scroll scrollbar-thin h-screen '>
    <Navbar onMenuOpenChange={setIsMenuOpen} className="absolute  text-[#a7a8aa]">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Image alt="logo" width={200} height={100} src="/todidiinomidoni.PNG"></Image>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-10" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/" className="hover:text-[#B68B4B] md:text-lg lg:text-xl tracking-widest">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link aria-current="page" href="/aboutus" className="hover:text-[#B68B4B] md:text-lg lg:text-xl tracking-widest">
            About Us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/reserve" className="hover:text-[#B68B4B] md:text-lg lg:text-xl tracking-widest">
            Reserve
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          
        </NavbarItem>
        <NavbarItem>

        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full text-[#a7a8aa]"
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              href="/"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  <section className='top-28 flex flex-col w-[100%] relative bg-[#2f3033] text-[#B68B4B]'>
    <div className='
    md:w-[100%]  lg:w-[100%] h-[40vh] md:h-[60vh] lg:h-[80vh] bg-slate-50/10 z-10 relative  flex self-center
    text-center  items-center flex-col md:justify-evenly justify-between rounded-md  '>
      <Image alt='about-bg' fill="true" className='rounded-lg  opacity-90 ' src="https://i.ibb.co/tw7qHndq/about-bg.jpg"></Image>
     <div className=' flex flex-col justify-evenly h-[50%] z-10 '> 
      <p className='lg:text-xl tracking-widest text-shadow'>Welcome to Vulpine</p>
      <h1 className='md:text-5xl text-3xl lg:text-7xl tracking-widest text-shadow '>
        BEST FAMOUS COCKTAILS
      </h1>
      <p className='md:px-[10vh] px-[3vh] text-md font-medium lg:text-2xl lg:px-[40vh] text-shadow'>
        these is supposed to be the best bartending service in the entire turkey with not competores.
        you can read more about them in the page below
      </p>
     </div>

    </div>
    <div id='aboutus' className='flex flex-col justify-center text-center  h-[22vh] '>
       <h1 className='text-5xl'
       >
         ABOUT US </h1>
    </div>
    <div className='flex flex-row md:w-[100%] lg:w-[90%] h-[40vh] md:h-[30vh] lg:h-[60vh] gap-2 self-center justify-between 
       mt-5 rounded-md'>
        <div className='  relative lg:w-[26%] md:w-[33%] lg:h-[100%]   '>
          <Image alt='Rp' fill="true" src="https://i.ibb.co/BRnLfXM/realoldfashion.jpg" className='rounded-md' >

          </Image>
      </div>
      {/* <div className='  relative w-[10%] h-[40%]  mt-[20%] lg:mt-[16%]'>
          <Image alt='Rp' fill="true" src="/negroni.jpg" className='rounded-md' >

          </Image>
      </div>
      <div className='  relative w-[12%] h-[40%] '>
      <Image alt='RP2' fill={true} src="/soroshsm.png" className='rounded-md'>

        </Image>
      </div> */}
      <div className='flex flex-col lg:w-[32%] md:w-[34%] rounded-md justify-evenly text-center items-center bg-[#29343D]'>
          <h1 className='lg:text-6xl md:text-3xl font-normal text-shadow'>
            TRADITIONAL & MODERN
          </h1>
          <p className='text-1xl lg:text-2xl  font-light px-2 lg:px-10 '>
              this is just a test to see if you read more to get to know our team using the section made by me in this website
          </p>
          <button className='bg-[#081d1d] rounded-md w-[50%] py-2 hover:font-bold border-black'>
              Reserve Now
          </button>
      </div>
      <div className='relative lg:w-[29%] md:w-[34%] lg:h-[100%] '>
        <Image alt='signature' fill={true} src="https://i.ibb.co/fdGLP7Zk/realrealnegroni.jpg" className='rounded-md'></Image>
      </div>
      {/* <div className='  relative w-[12%] h-[40%] justify-start'>
          <Image alt='Rp' fill="true" src="/signature.jpg" className='rounded-md' >

          </Image>
      </div>
      <div className='  relative w-[12%] h-[40%] mt-[20%] lg:mt-[16%]'>
      <Image alt='RP2' fill={true} src="/green-negroni.jpg" className='rounded-md'>

        </Image>
      </div> */}
    </div>
    <div className='overflow-auto w-[100%] h-[70vh] lg:h-[80vh] z-20  mx-auto mt-40 '>
      
    <div className='w-full absolute top-[60%] md:top-[65%] lg:top-[71%] bg-[#29343D] left-0 h-[500px]
            -skew-y-12 '  />
      <div className='flex flex-row w-[100%] h-[55vh] lg:h-[65vh]   mt-[15vh] '>
        <div className='z-10 flex flex-col lg:w-[52%] w-[100%]    text-center  px-8 justify-between pb-10 pr-8'>
           <h1 className='text-6xl tracking-widest text-shadow text-center'>
            For every ocation
           </h1>
           <div className='border-b  pb-3 border-[#081d1d]'>
            <h2 className='text-2xl lg:text-4xl tracking-widest'>Personalized cocktailes</h2>
            <p className='text-sm text-white lg:text-md tracking-wider pt-3'> let us tell you what you can make with bottle you have</p>
           </div>
           <div className='border-b pb-3 border-[#081d1d]'>
            <h2 className='text-2xl lg:text-4xl tracking-widest'>Classic and Famous cocktails</h2>
            <p className='text-sm text-white lg:text-md tracking-wider pt-3'>chose from all famous and classic cocktails from around the world</p>           
           </div>
           <div className='border-b pb-3 border-[#081d1d]'>
            <h2 className='text-2xl lg:text-4xl tracking-widest'>get a taste of our signature cocktails </h2>
            <p className='text-sm text-white lg:text-md tracking-wider pt-3'> have a taste of our originial and signature cocktails</p>   
           </div>
           <div className='border-b pb-3 border-[#081d1d]'>
            <h2 className='text-2xl lg:text-4xl tracking-widest'> color theme of your choosing for drinks</h2>
            <p className='text-sm text-white lg:text-md tracking-wider pt-3' >no matter the oceation have your drinks the color of your liking</p>             
           </div>

        </div>
        <div className='hidden lg:show relative w-[30%] lg:flex justify-end h-[90%] ml-40'>
          <Image alt='sangria' fill={true} src="https://i.ibb.co/C3ZftWBN/nabekossher.jpg" className='rounded-[50%]'></Image>
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

  </div>
  )
}

export default page