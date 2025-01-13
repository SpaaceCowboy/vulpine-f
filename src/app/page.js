
import Image from "next/image";

export default function Home() {
  return (
    <div>
    <header className="flex flex-row  w-[80%] ml-[10%]  absolute">
    <div className="relative">
      <Image alt="logo"width={500} height={500} src="/idk.svg">

      </Image>
    </div>
    <div className="flex  justify-end items-center gap-20 w-screen">
      <a href="" className="text-[#E6DFF0]">Gallary</a>
      <a href="https://golabrestaurant.com/menu/" className="text-[#E6DFF0]">Menu</a>
      <a href="" className="text-[#E6DFF0]">Contact Us</a>
      <a href="" className="text-[#E6DFF0]">Package</a>
    </div>
  </header>
    <main className="flex flex-col items-center justify-center  h-[100vh] overflow-hidden ">
      <div className="uppercase text-white tracking-[1.rem] p-[2rem] text-[2rem]">
        <h1>Crafting moments one drink at a time</h1>
        <div 
        className="p-[2rem]  m-[1rem] bg-transparent  text-[2rem] uppercase tracking-[0.5rem] flex flex-row gap-8 ">
        <button className="flex items-center justify-center border-white border-[2px] p-[2rem] ">Menu</button>
        <button className="flex items-center justify-center border-white border-[2px] p-[2rem] ml-[25%]">Menunp</button>
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
    <footer className=" absolute bottom-2 w-[100%] ">
      <div className="container max-w-screen-lg mx-auto justify-items-end mb-4">
       <div className="flex flex-wrap gap-2 w-[100%]">
          <a>
          <svg
								className="w-20 h-20 fill-current"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 16 16"
								>
								<path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
								</svg>
          </a>
          <a>
          <svg
								className="w-20 h-20 fill-current"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 16 16"
								>
								<path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
								</svg>
          </a>
        </div>
      </div>
    </footer>
    </div>
  );
}
