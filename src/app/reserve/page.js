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
import {Navbar, NavbarBrand, NavbarContent, NavbarItem,} from "@heroui/navbar"




function Page() {
const [submitted, setSubmitted] = useState(null)
const [email, setEmail] = useState("")

const onSubmit = (e) => {
    e.preventDefault()

    const data = Object.fromEntries(new FormData(e.currentTarget))

    setSubmitted(data)
}
    return (
        
        <section className="h-[100vh] w-[100%]  flex items-center justify-center bg-[#0E1C1C]  ">
        <Navbar className="absolute text-[#a7a8aa]">
            <NavbarBrand>
                
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-20" justify="center">
                <NavbarItem className="hover:underline">
                    <Link color="foreground" href="#">
                        Features
                    </Link>
                </NavbarItem>
                <NavbarItem className="hover:underline" >
                    <Link aria-current="page" href="#">
                        Customers
                    </Link>
                </NavbarItem>
                <NavbarItem className="hover:underline">
                    <Link color="foreground" href="#">
                        Integrations
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                </NavbarItem>
                <NavbarItem>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
                <Form
                 className="text-[#B68B4B] items-center flex justify-center space-y-4 h-[60%] bg-[#39393F] lg:w-[30%] w-[50%] rounded-lg  "
                 onSubmit={onSubmit}>
                    <div className="flex flex-col justify-evenly gap-6 w-[60%]">
                        <h1 className="text-center text-2xl font-semibold">Place your reservetion now</h1>
                        <Input 
                        isRequired
                        errorMessage= "please enter a valid email"
                        
                        labelPlacement="outside"
                        placeholder="Enter your Name"
                        type="name"
                            />
                        <Input 
                        isRequired
                        
                        labelPlacement="outside"
                        placeholder="Enter your surname"
                        type="name"
                         />
                        <Input 
                        placeholder="Enter your Email" 
                        type="email" />
                        <p className="tracking-widest">Estimaded event time</p>
                        <DatePicker
                         isRequired
                         labelPlacement="outside"
                          />
                        <Button type="submit" variant="shadow" className="border-black mt-10" radius="lg">
                        Submit
                        </Button>
                    
                        {submitted && (
                            <div>
                                you submitted: <code>{JSON.stringify(submitted)}</code>
                            </div>
                    )}
                    </div>
                </Form>
                      
            
        </section>
    )
}

export default Page