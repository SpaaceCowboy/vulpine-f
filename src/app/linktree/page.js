import Image from "next/image";
import Link from "next/link";



export default function Linktree() {
    return (
        <section className="flex justify-center h-[100%]" >
            <div className="relative w-[390px] h-[100vh] justify-evenly flex flex-col items-center " >
                <Image alt="linktree-bg" fill={true}  src="/linktree.jpg" />
                <div className="flex flex-col justify-center align-middle  gap-12 w-[80%] ">
                <Link href="/" className="z-10 ">
                <button className="z-10 text-white w-[100%] rounded-[50] py-4 bg-[#39393f] bg-opacity-60 tracking-widest font-medium">
                    INSTGRAM</button> </Link>
                    <Link href="/" className="z-10 ">
                <button className="z-10 text-white w-[100%] rounded-[50] py-4 bg-[#39393f] bg-opacity-60 tracking-widest font-medium">
                    WEBSITE</button> </Link>
                    <Link href="/" className="z-10 ">
                <button className="z-10 text-white w-[100%] rounded-[50] py-4 bg-[#39393f] bg-opacity-60 tracking-widest font-medium">
                    YOUTUBE</button> </Link>
                    <Link href="/" className="z-10 ">
                <button className="z-10 text-white w-[100%] rounded-[50] py-4 bg-[#39393f] bg-opacity-60 tracking-widest font-medium">
                     WHATSAPP</button> </Link>
                </div>

                <div className="z-10 text-center">
                    <h1 className="text-white text-3xl px-10 ">FOR AN UNFORGETABLE NIGHT</h1>
                    <p className="text-white text-xl pt-20">Vulpine</p>
                </div>
            </div>
        </section>
    )



}
