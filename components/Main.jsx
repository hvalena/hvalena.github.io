import React from 'react'
import Image from 'next/image'
import {FaLinkedinIn, FaGithub, FaEnvelope, FaChevronDown} from 'react-icons/fa'

const Main = () => {
  return (
    <div className="w-full h-screen text-left">
        <div className="max-w-[1240px] w-full h-full flex mx-auto justify-center items-center px-5">
            <div className="w-[50%]">
                <p className="tracking-widest text-gray-800 sm:text-lg md:text-2xl lg:text-3xl">Hello! My name is</p>
                <h1 className="text-[#83C5BE] sm:text-4xl md:text-5xl lg:text-6xl">Hannah Valena</h1>
                <p className="tracking-wide py-1 sm:text-md md:text-xl lg:text-2xl">Welcome to my digital garden, where I share my growth as a <span className="font-bold">software developer</span>🌱</p>
                <div className='flex my-2'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 mr-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaLinkedinIn />
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 mr-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaGithub />
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 mr-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaEnvelope />
                    </div>

                </div>
            </div>

            <div className="flex px-5">
                <Image 
                    src="/../public/assets/profilePic.png"
                    alt="/"
                    width="300"
                    height="300"
                />
            </div>

            {/* <div className='absolute flex flex-col bottom-8 items-center justify-center cursor-pointer hover:font-semibold'>
                <div className='text-md'>
                    <p>Experience</p>
                </div>
                <div>
                    <FaChevronDown />
                </div>
            </div> */}

            {/* <div className="flex-col h-screen justify-center items-center p-6">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn />
                </div>     
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub />
                </div>     
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaEnvelope />
                </div>     
            </div> */}
        </div>
    </div>
  )
}

export default Main