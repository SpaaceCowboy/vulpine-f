import Image from "next/image";
import Link from "next/link";



export default function Linktree() {
    return (
        <section className="flex justify-center  h-[100%]" >
            <div className="relative  w-[420px] overflow-hidden h-[100vh] justify-evenly flex flex-col items-center " >
                <Image alt="linktree-bg" fill={true}  src="https://i.ibb.co/Z1LSGFbV/linktree.jpg" />
                <div className="flex flex-col justify-center align-middle  gap-12 w-[80%] ">
                    <h1 className="tracking-[.6rem] text-center z-10 text-white text-4xl">VULPINE</h1>
                <Link href="https://www.instagram.com/vulpine_drinks?igsh=czc2czY1cWx3dDJz" className="z-10 rounded-[50%]">
                <button className="z-10 text-white w-[100%] rounded-[50] py-4 bg-[#39393f] bg-opacity-60 tracking-[0.3rem] font-medium">
                    INSTGRAM</button> </Link>
                    <Link href="/" className="z-10 rounded-[50%]">
                <button className="z-10 text-white w-[100%] rounded-[50] py-4 bg-[#39393f] bg-opacity-60 tracking-[0.3rem] font-medium">
                    WEBSITE</button> </Link>
                    <Link href="/" className="z-10 rounded-[50%]">
                <button className="z-10 text-white w-[100%] rounded-[50] py-4 bg-[#39393f] bg-opacity-60 tracking-[0.3rem] font-medium">
                    YOUTUBE</button> </Link>
                    <Link href="https://api.whatsapp.com/send/?phone=%2B905418242469&text&type=phone_number&app_absent=0" className="z-10 rounded-[50%]">
                <button className="z-10 text-white w-[100%] rounded-[50] py-4 bg-[#39393f] bg-opacity-60 tracking-[0.3rem] font-medium">
                     WHATSAPP</button> </Link>
                </div>  
                <div className="z-10 text-center">
                    <h1 className="text-white text-3xl px-10 ">FOR AN UNFORGETABLE NIGHT</h1>
                    
                </div>
            </div>
        </section>
    )



}
