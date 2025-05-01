import Image from "next/image";
import Link from "next/link";



export default function Linktree() {
    return (
        <section className="flex justify-center" >
            <div className="relative w-[390px] h-[800px] justify-center flex" >
                <Image alt="linktree-bg" fill={true} className="rounded-lg" src="/linktree.jpg" />
                <div className="flex flex-col justify-center gap-20">
                <button className="z-10 text-white rounded-[50] px-20 py-4 bg-[#39393f] bg-opacity-60 tracking-widest font-medium">
                    INSTGRAM</button>
                <button className="z-10 text-white">VULPINE</button>
                <button className="z-10 text-white">YOUTUBE</button>
                <button className="z-10 text-white">WHATSAPP</button>
                </div>


            </div>
        </section>
    )
}
