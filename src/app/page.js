"use client"
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { PiInstagramLogoThin } from "react-icons/pi"
import { IconContext } from "react-icons";
import { PiYoutubeLogoThin } from "react-icons/pi";
import { GiFox } from "react-icons/gi";




export default function Home() {

  const router = useRouter() 

  return (
    <div>
    <header className="flex flex-row  w-[100%] justify-center   absolute">
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
    <main className="flex flex-col items-center justify-center  h-[100vh] overflow-hidden ">
      <div className="uppercase text-white tracking-[1.rem] p-[2rem] text-[2rem]">
        <h1>Crafting moments one drink at a time</h1>
        <div 
        className="p-[2rem]  m-[1rem] bg-transparent  text-[2rem] uppercase tracking-[0.5rem] flex flex-row gap-8 ">
        <button
        onClick={
          ()=>{
            router.push("/aboutus")
          }
        } className="flex items-center justify-center border-[#a7a8aa] border-[2px] p-[2rem] hover:text-[#a7a8aa] ">
          Menu</button>
        <button
        onClick={
          ()=>{
            router.push("/")
          }
        } className="flex items-center justify-center border-[#a7a8aa] border-[2px] p-[2rem] ml-[25%] hover:text-[#a7a8aa]">
          Menu</button>
        </div>
      </div>
      
        <video
        className="absolute z-[-1] h-[100%] w-[100%] object-cover top-0"
         src="/C0305.MP4"
         autoPlay
         muted 
         loop
         />
         
    </main>
    <footer className=" absolute bottom-2 w-[100%] flex">
      <div className=" w-[80%] justify-end mb-4 ml-[3%]">
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
    </div>
  )
}
