import Image from 'next/image'
import React from 'react';
import { GiHamburger, GiHamburgerMenu, GiSkills } from "react-icons/gi";
import { AiFillLinkedin, AiFillHtml5 } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { SiGmail, SiJavascript, SiTailwindcss, SiCplusplus } from "react-icons/si";
import { FaReact, FaPython } from "react-icons/fa";
import { DiCss3 } from "react-icons/di";
import profile_pic from '../app/public/portfolio_photo.png'
import background from '../app/public/portfolio_bg.jpg'
import wildfire from '../app/public/uv_project.jpg'
import chemical_plant from '../app/public/HackED_project.jpg'
import encmp from '../app/public/game_project.jpg'

export default function Home() {
  return (
    <div>
      <head>
        <title>Mushfique Portfolio</title>
        <link rel = "icon" href = "/favicon.ico"/>
      </head>

    <main className = "bg-gradient-to-r from-indigo-500 to-red-500 px-10">
      <nav className = "p-10 mb-12 flex justify-between">
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
      <div
        class="relative overflow-hidden rounded-lg bg-cover bg-no-repeat p-16 text-center flex items-center justify-center"
        style={{backgroundImage: "url('...')"}}>
          <Image src = {background} class = "rounded-xl contrast-150 brightness-125"/>
        <div
          class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
          style={{backgroundColor: "rgba(0, 0, 0, 0)"}}>
          <div class="flex h-full items-center justify-center">
            <div class="text-white">
              <h2 class="mb-4 text-4xl font-semibold">Mushfique Un nabi</h2>
              <h4 class="mb-6 text-xl font-semibold">Electrical Engineer</h4>
              <a href="#about">
              <button
                type="button"
                class="rounded border-2 border-neutral-50 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-30 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                data-te-ripple-init
                data-te-ripple-color="light">
                About
              </button>
              </a>
            </div>
          </div>
        </div>
      </div>
        <section className = "min-h-screen">
          <div className = "text-5xl flex justify-center gap-16 py-3 text-blue-800">
            <a href = "https://www.linkedin.com/in/mushfique-un-nabi-11657226a/">
            <AiFillLinkedin class = "hover:animate-bounce"/>
            </a>
            <a href = "https://github.com/mushfiqu">
            <BsGithub class = "hover:animate-bounce"/>
            </a>
          </div>
          <div className='relative mx-auto w-13 h-13'>
            <Image src = {profile_pic}/>
          </div>
        </section>
        <div id='about'>
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
        </div>
        <section>
          <div className = "shadow-lg rounded-lg p-10">
            <div>
              <span class="relative flex h-3 w-3">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
              </span>
            </div>
           <h3 className = "text-3xl py-3 text-gray-700 hover:text-4xl duration-500">Skills</h3> 
            <div className = "text-5xl flex justify-center gap-16 py-3 text-blue-950">
              <FaReact class = "hover:text-blue-400 duration-500 hover:text-6xl"/>
              <AiFillHtml5 class = "hover:text-orange-500 duration-500 hover:text-6xl"/>
              <DiCss3 class = "hover:text-blue-700 duration-500 hover:text-6xl"/>
              <SiJavascript class = "hover:text-yellow-400 duration-500 hover:text-6xl"/>
              <FaPython class = "hover:text-teal-400 duration-500 hover:text-6xl"/>
              <SiTailwindcss class = "hover:text-cyan-400 duration-500 hover:text-6xl"/>
              <SiCplusplus class = "hover:text-indigo-800 duration-500 hover:text-6xl"/>
            </div>
          </div>
        </section>
        <section>
          <div className = "shadow-lg rounded-lg p-10">
              <span class="relative flex h-3 w-3">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
              </span>
           <h3 class = "text-3xl py-3 text-gray-700 hover:text-4xl duration-500">Projects</h3> 
           <div class="grid grid-cols-3 gap-2">
           <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <Image class="w-full" src = {wildfire}/>
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">UAlberta EE Capstone: UV Detection of Wildfires</div>
              <p class="text-gray-900 text-base">
                Designed a wildfire detection system capable of detecting UV emmitted from embers. 
                The system activates an RF valve hooked up to sprinklers upon detection, and sends data to
                a network of Ember Detection Devices via a central USB HUB. 
              </p>
            </div>
          </div>
          <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <Image class="w-full" src = {chemical_plant}/>
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">HackED 2022: Plastic Pyrolysis Reactor</div>
              <p class="text-gray-900 text-base">
                Designed a chemical reactor simulator in python capable of performing
                calculations on reaction efficiency and reaction condition ideality. The application
                has a simple GUI built using tkinter that allows users to input reactor parameters and 
                select type of reactor bed, plot graphs, display efficiency factors, etc. 
              </p>
            </div>
            <div class = "px-6 py-3 text-l text-gray-900">
            <a href = "https://github.com/mushfiqu/hackermen">
            <BsGithub class = "hover:opacity-60"/>
            </a> 
            </div>
          </div>
          <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <Image class="w-full" src = {encmp}/>
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">ENCMP100 Programming Competition: Battle for Earth</div>
              <p class="text-gray-900 text-base">
                Designed a top-down game entirely in MATLAB. The user controls a spaceship and is tasked with fending off aliens in space.
              </p>
            </div>
            <div class = "px-6 py-2 text-l text-gray-900">
            <a href = "https://github.com/mushfiqu/Battle-for-Earth">
            <BsGithub class = "hover:opacity-60"/>
            </a> 
            </div>
          </div>
          </div>
          </div>
        </section>
    </main>
    </div>
  );  
}
