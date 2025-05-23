"use client"
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { PiInstagramLogoThin } from "react-icons/pi"
import { IconContext } from "react-icons";
import { PiYoutubeLogoThin } from "react-icons/pi";
import { GiFox } from "react-icons/gi";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenuItem, NavbarMenu } from "@heroui/navbar"
import { Button } from "@heroui/button";
import React, {useState} from "react"





export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuItems = [
    "Home",
    "About Us",
    "Reserve"
  ]

  const router = useRouter() 

  return (

    <div>
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
           <Link color="foreground" href="/" className="hover:text-[#B68B4B] text-[#a7a8aa] md:text-lg lg:text-xl tracking-widest">
            Home
          </Link>           
          <Link aria-current="page" href="/aboutus" className="hover:text-[#B68B4B] text-[#a7a8aa] md:text-lg lg:text-xl tracking-widest">
            About Us
          </Link>   
          <Link color="foreground" href="/reserve" className="hover:text-[#B68B4B] text-[#a7a8aa] md:text-lg lg:text-xl tracking-widest">
            Reserve
          </Link>                 
      </NavbarMenu>
    </Navbar>
    <main className="flex flex-col  items-center justify-center  h-[100vh] overflow-auto ">
      <div className="uppercase text-white tracking-[1.rem] md:p-[2rem] lg:p-[0rem] p-[0.5rem] text-[2rem]">
        <h1 className="lg:text-[4rem] md:text-[2rem] text-center lg:tracking-[0.6rem] text-[2rem]">Crafting moments one drink at a time</h1>

      </div>
        <video
        className="absolute z-[-1]  h-[100%] w-[100%] object-cover top-0"
         src="/salianipishgolighonchekard.MOV"
         autoPlay
         muted 
         loop
        preload="auto"
         playsInline
         />
         
    </main>
    <footer className=" absolute bottom-2 w-[100%] flex">
      <div className=" w-[80%] mb-4 ml-[3%]">
       <div className="flex flex-wrap gap-2 w-[100%] justify-start">
       <IconContext.Provider value={{ color: "#a7a8aa", className: "global-class-name", size:"2em" }}>
        <Link href="https://www.instagram.com/vulpine_drinks/">
          <PiInstagramLogoThin className="cursor-pointer"/>
        </Link>
       </IconContext.Provider>
       <IconContext.Provider value={{ color: "#a7a8aa", className: "global-class-name", size:"2em" }}>
        <Link href="">
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
    </div>

  )
}
