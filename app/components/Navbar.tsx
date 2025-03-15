'use client'

import { Cross, TextAlignJustified } from "akar-icons"
import { useState } from "react"
import { Link } from 'react-scroll'

import 'animate.css';

function Navbar() {

  const [nav,setNav] = useState(false)
  const [isClosing, setIsClosing] = useState(false)

  const links = [
        {
            id: 1,
            link: 'home',
        },
        {
            id: 2,
            link: 'services',
        },
        {
            id: 3,
            link: 'about',
        },
        {
            id: 4,
            link: 'portfolio',
        },
        {
            id: 5,
            link: 'contact',
        },
    ]

    const navToggle = () => {
      if (nav) {
        setIsClosing(true)

        setTimeout(() => {

          setNav(false)
          setIsClosing(false)

        }, 750)
      } else {
        setNav(true)
      }
    }

  return (
    <div className="flex fixed w-full h-20 z-10">

      <div className="flex absolute justify-between items-center w-full px-6 md:px-14 text-white h-20 bg-primary/70 backdrop-blur-lg z-10">

        <div className="flex">
          <h1 className="text-xl pt-2 font-signature cursor-default">
            Misagh Khateri
          </h1>
        </div>

        <ul className="hidden md:flex">
          {links.map(({ id, link }) => (

            <li key={id}>
              <Link to={link} href={`#${link}`} className='px-3.5 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-gray-300 transition-all duration-300' smooth duration={500} spy={true}>
                {link}
              </Link>
            </li>

          ))}
        </ul>

        <div onClick={navToggle} className='cursor-pointer z-20 text-gray-500 hover:scale-105 hover:text-gray-400 duration-300 transition-all md:hidden'>
          {nav ? <Cross size={30}/> : <TextAlignJustified size={30}/>}
        </div>

      </div>

      

      {nav && (

        <ul className={`animate__animated ${ isClosing ? 'animate__fadeOutRight' : 'animate__fadeInRight'} flex flex-col  justify-center items-center absolute top-0 right-0 w-[180px] h-screen bg-black/40 backdrop-blur-lg`}>

          {links.map(({id, link}) => (

            <div key={id} className={`animate__animated animate__fadeIn animate__delay-1s flex  w-[150px] border-b items-center justify-center ${id === 5 && 'border-none'}`}>

              <li  className={`px-4 cursor-pointer capitalize py-6 text-4xl hover:scale-105  hover:text-gray-400 duration-300 transition-all text-gray-500`}>
                <Link onClick={navToggle} to={link} smooth duration={500}>
                  {link}
                </Link>
              </li>

            </div>

          ))}

        </ul>

      )}

      {/* <div className="flex md:hidden">
        <h1 className="text-xl pt-2 ml-2 font-signature">
          Misagh Khateri
        </h1>
      </div> */}

      {/* <Button>
        Hire Me
      </Button> */}

    </div>
  )
}

export default Navbar