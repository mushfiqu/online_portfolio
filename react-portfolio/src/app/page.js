import Image from 'next/image'
import React from 'react';
import { GiHamburger, GiHamburgerMenu, GiSkills } from "react-icons/gi";
import { AiFillLinkedin } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import profile_pic from '../app/public/portfolio_photo.png'

export default function Home() {
  return (
    <div>
      <head>
        <title>Mushfique Portfolio</title>
        <link rel = "icon" href = "/favicon.ico"/>
      </head>

      <main className = "bg-gradient-to-r from-indigo-500 to-red-500 px-10">
        <section className = "min-h-screen">
          <nav className = "py-10 mb-12 flex justify-between">
          <ul className = "flex items-center">
            <li>
              <SiGmail class = "text-red-700 hover:text-red-500"/>
            </li>
            <li>
              <a className = "px-4 py-2">
                mushfiquenabi@gmail.com
              </a>
            </li> 
          </ul>
          </nav>
          <div className = "text-center p-10">
            <h2 className = "text-4xl py-2 text-white  hover:text-5xl duration-700">Mushfique Un Nabi</h2>
            <h3 class = "text-2xl py-2 hover:text-3xl duration-700"> Electrical Engineer</h3>
            <p className = "text-md py-5 leading-8 text-gray-900">
              Electrical engineer specializing in embedded systems design, firmware development,
              and software development. 
            </p>
          </div>
          <div className = "text-5xl flex justify-center gap-16 py-3 text-blue-800">
            <a href = "https://www.linkedin.com/in/mushfique-un-nabi-11657226a/">
            <AiFillLinkedin class = "hover:animate-bounce"/>
            </a>
            <a href = "https://github.com/mushfiqu">
            <BsGithub class = "hover:animate-bounce"/>
            </a>
          </div>
          <div className='relative mx-auto w-30 h-30'>
            <Image src = {profile_pic}/>
          </div>
        </section>
        <section>
          <div className = "shadow-lg rounded-lg p-10">
              <span class="relative flex h-3 w-3">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
              </span>
           <h3 class = "text-3xl py-3 text-gray-700 hover:text-4xl duration-500">About me</h3> 
           <p className = "text-md py-2 leading-8 text-gray-800">
            I am an Electrical Engineering graduate from the University of Alberta,
            class of 2023. 
            I have keen interests in both hardware and software, and so my skills range
            from writing low level firmware and software to designing and building circuits and hardware.
           </p>
          </div>
        </section>
        <section>
          <div className = "shadow-lg rounded-lg p-10">
            <div>
              <span class="relative flex h-3 w-3">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
              </span>
            </div>
           <h3 className = "text-3xl py-3 text-gray-700 hover:text-4xl duration-500">Skills</h3> 
           <p className = "text-md py-2 leading-8 text-gray-800">
            I am an Electrical Engineering graduate from the University of Alberta,
            class of 2023. 
            I have keen interests in both hardware and software, and so my skills range
            from writing low level firmware and software to designing and building circuits and hardware.
           </p>
          </div>
        </section>
      </main>
    </div>
  );  
}
