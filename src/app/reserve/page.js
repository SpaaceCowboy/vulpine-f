"use client"
import {Input} from "@heroui/input"
import {Button} from "@heroui/button"
import {Form} from "@heroui/form"
import { DatePicker } from "@heroui/date-picker"
import React, {useState} from "react"
import { NumberInput } from "@heroui/number-input"
import PhoneInput from "react-phone-input-2"
import Link from "next/link"
import Image from "next/image"
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenuItem, NavbarMenu } from "@heroui/navbar"
import { PiInstagramLogoThin } from "react-icons/pi"
import { IconContext } from "react-icons";
import { PiYoutubeLogoThin } from "react-icons/pi";
import { GiFox } from "react-icons/gi";




function Page() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const menuItems = [
        "Home",
        "About Us",
        "Reserve"
    ]
const [submitted, setSubmitted] = useState(null)
const [email, setEmail] = useState("")

const onSubmit = (e) => {
    e.preventDefault()

    const data = Object.fromEntries(new FormData(e.currentTarget))

    setSubmitted(data)
}
    return (
        
    <section className="h-[100vh] w-[100%] relative  flex items-center justify-center bg-[#081d1d] ">
          <Image alt="bg" fill={true} src="/reserve-bg1.jpg" className="opacity-[90%]"   />
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
                <Form
                 className="text-[#B68B4B] z-10 bg-opacity-60 items-center flex justify-center space-y-4 h-[70%] md:h-[70%] lg:h-[70%] xl:w-[40%] lg:w-[50%] w-[90%] md:w-[70%] bg-[#39393F] rounded-lg  "
                 onSubmit={onSubmit}>
                    <div className="flex flex-col justify-evenly gap-6 w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%]">
                        <h1 className="text-center text-2xl font-semibold">Place your reservetion now</h1>
                        <Input 
                        isRequired
                        errorMessage= "please enter a valid email"
                        labelPlacement="outside"
                        placeholder="Name & Surename"
                        type="name"
                        
                            />
                        <Input 
                        isRequired
                        
                        labelPlacement="outside"
                        placeholder="Phone Number"
                        type="name"
                         />
                        <Input 
                        placeholder="Enter your Email" 
                        type="email"
                        />
                        <p className="tracking-widest text-center">Estimaded event time</p>
                        <DatePicker
                         isRequired
                         labelPlacement="outside"
                          />
                        <Button type="submit" variant="shadow" className="border-black w-[50%] ml-[25%]"  radius="lg">
                        Submit
                        </Button>
                    
                        {submitted && (
                            <div>
                                We will contact you soon! <code></code>
                            </div>
                    )}
                    </div>
                </Form>
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
                      
            
        </section>
    )
}

export default Page