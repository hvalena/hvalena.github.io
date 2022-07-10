import React, { useState } from 'react'

const Experience = () => {
    const [currentExp, setCurrentExp] = useState("Textron Specialized Vehicles");

    // const handleExp = (property, value) => {
    //     setCurrentExp(currentExp => {currentExp, [property]: value});
    // }

  return (
    <div className='w-full'>
        <div className='max-w-[1240px] w-full h-full mx-auto mb-40 px-20'>
            <h3 className='tracking-widest font-montserrat font-bold mb-5'>Experience 💻</h3>
            <div className="flex">
                <div className='w-full sm:w-2/6 mb-4 sm:mb-0'>
                    <div className='flex flex-row sm:flex-col'>
                        <a href="javascript:void(0)" onClick={() => setCurrentExp('Textron Specialized Vehicles')} className={
                            currentExp == 'Textron Specialized Vehicles' 
                            ? "px-4 py-2 border-l-2 border-[#83C5BE] text-[#83C5BE] hover:bg-gray-200 hover:bg-opacity-25" 
                            : "px-4 py-2 border-l-2 border-gray-300 hover:bg-gray-200 hover:bg-opacity-25"}>Textron Specialized Vehicles</a>
                        <a href="javascript:void(0)" onClick={() => setCurrentExp('Textron Corporate')} className={
                            currentExp == 'Textron Corporate' 
                            ? "px-4 py-2 border-l-2 border-[#83C5BE] text-[#83C5BE] hover:bg-gray-200 hover:bg-opacity-25" 
                            : "px-4 py-2 border-l-2 border-gray-300 hover:bg-gray-200 hover:bg-opacity-25"}>Textron Corporate</a>
                        <a href="javascript:void(0)" onClick={() => setCurrentExp('The University of Texas at Dallas')} className={
                            currentExp == 'The University of Texas at Dallas' 
                            ? "px-4 py-2 border-l-2 border-[#83C5BE] text-[#83C5BE] hover:bg-gray-200 hover:bg-opacity-25" 
                            : "px-4 py-2 border-l-2 border-gray-300 hover:bg-gray-200 hover:bg-opacity-25"}>The University of Texas at Dallas</a>
                    </div>
                </div>
                <div className='w-full sm:w-4/6'>
                    <div className='px=0 sm:px-6'>
                        <div className={currentExp == 'Textron Specialized Vehicles' ? '' : 'hidden'}>
                            <div className='mb-5'>
                                <h4 className="text-lg">Software Engineer Intern <span><a href="#" className="font-bold hover:border-b text-[#83C5BE]">@ Textron Specialized Vehicles</a></span></h4>
                                <p className='text-md'>May 2022 - Present</p>
                            </div>
                            <ul className='list-disc list-outside marker:text-[#83C5BE]'>
                                <li className='ml-5 mb-3 cursor-text'>Implement a real-time weather and radar feature to be deployed on Android devices installed on E-Z-GO golf carts across potentially 1,200 golf courses worldwide</li>
                                <li className='ml-5 mb-3 cursor-text'>Collaborate with software engineers on the PACE technology team in an agile scrum environment</li>
                                <li className='ml-5 mb-3 cursor-text'>Partner with a third-party company to develop an API to pull weather info for each golf cart and course</li>
                                <li className='ml-5 mb-3 cursor-text'>Optimize data transfer efficiency over cellular, reducing potential costs and shrinking data sizes</li>
                                <li className='ml-5 mb-3 cursor-text'>Configure communications between Android devices and a backend that uses C#, .NET framework, & MS SQL </li>
                                <li className='ml-5 mb-3 cursor-text'>Identify key security issues involving PACE tablets to improve security controls and avoid breaches</li>
                                
                            </ul>
                        </div>
                        <div className={currentExp == 'Textron Corporate' ? '' : 'hidden'}>
                            <div className='mb-5'>
                                <h4 className="text-lg">IT Infrastructure & Leadership Development Program Intern <span><a href="#" className="font-bold hover:border-b text-[#83C5BE]">@ Textron Corporate</a></span></h4>
                                <p className='text-md'>May 2021 - August 2021</p>
                            </div>
                            <ul className='list-disc list-outside marker:text-[#83C5BE]'>
                                <li className='ml-5 mb-3 cursor-text'>Built a link hub website using HTML, CSS, and Bootstrap available to 1000+ IT employees enterprise-wide</li>
                                <li className='ml-5 mb-3 cursor-text'>Analyzed datasets to review 800+ corporate workstation assets by creating visuals in a Power BI Dashboard</li>
                                <li className='ml-5 mb-3 cursor-text'>Performed preventative maintenance on 20+ corporate conference rooms including the executive suite</li>
                                <li className='ml-5 mb-3 cursor-text'>Coordinate and plan communications with end users, all corporate offices, and third-party vendors for a planned network outage and the installation of an upgraded uninterruptible power supply</li>
                            </ul>
                        </div>
                        <div className={currentExp == 'The University of Texas at Dallas' ? '' : 'hidden'}>
                            <div className='mb-5'>
                                <h4 className="text-lg">Orientation Leader <span><a href="#" className="font-bold hover:border-b text-[#83C5BE]">@ The University of Texas at Dallas</a></span></h4>
                                <p className='text-md'>May 2022 - Present</p>
                            </div>
                            <ul className='list-disc list-outside marker:text-[#83C5BE]'>
                                <li className='ml-5 mb-3 cursor-text'>Guided 3,000+ incoming freshmen students through 11 virtual orientations and one virtual camp</li>
                                <li className='ml-5 mb-3 cursor-text'>Led and fostered connections with small groups of 5-15 students to ease transitions into the UT Dallas community</li>
                                <li className='ml-5 mb-3 cursor-text'>Served on a live panel event for 20-50+ students to provide resources, information, and mentorship</li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience