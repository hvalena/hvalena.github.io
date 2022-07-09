import React, {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import {FaLinkedinIn, FaGithub, FaEnvelope} from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className="fixed w-full h-20 z-[100]">
        <div className="flex justify-between items-center w-full h-full px-5 2xl:px-16">
            {/* <Image src="../public/assets/navLogo.png" alt="/" /> */}
            <div className='font-montserrat font-bold text-[#83C5BE] text-xl'>
              <Link href="/">Hannah Valena</Link>
            </div>
            <div>
                <ul className="hidden md:flex">
                  <Link href="/">
                    <li className="ml-10 text-md hover:border-b hover:font-medium">About</li>
                  </Link>
                  <Link href="/">
                    <li className="ml-10 text-md hover:border-b hover:font-medium">Experience</li>
                  </Link>
                  <Link href="/">
                    <li className="ml-10 text-md hover:border-b hover:font-medium">Projects</li>
                  </Link>
                  <Link href="/">
                    <li className="ml-10 text-md hover:border-b hover:font-medium">Resume</li>
                  </Link>
                </ul>
                <div onClick={handleNav} className="md:hidden cursor-pointer">
                  <AiOutlineMenu size={25}/>
                </div>
            </div>
        </div>

        <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
          <div className={
            nav 
            ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#fcfcfc] p-10 ease-in duration-500" 
            : "fixed left-[-100%] top-0 p-10 ease-in duration-500"}>
            <div>
              <div className="flex w-full items-center justify-between">
                <div className='font-montserrat font-bold text-[#83C5BE] text-lg'>
                  <Link href="/">Hannah Valena</Link>
                </div>
                <div onClick={handleNav} className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                  <AiOutlineClose />
                </div>
              </div>
              <div className="border-b border-gray-300 my-4">
                <p className="w-[85%] md:w-[90%]  py-4">Explore my digital garden 🌻</p>
              </div> 
            </div>
            <div className="py-4 flex flex-col">
              <ul className="">
                <Link href="/">
                  <li className="uppercase py-4 text-sm hover:font-medium">About</li>
                </Link>
                <Link href="/">
                  <li className="uppercase py-4 text-sm hover:font-medium">Experience</li>
                </Link>
                <Link href="/">
                  <li className="uppercase py-4 text-sm hover:font-medium">Projects</li>
                </Link>
                <Link href="/">
                  <li className="uppercase py-4 text-sm hover:font-medium">Resume</li>
                </Link>
              </ul>
              <div className="pt-40">
                <p className="uppercase tracking-widest text-[#83C5BE] font-medium">Let's connect!</p>
                <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>    
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub />
                  </div>         
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaEnvelope />
                  </div>                     
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar