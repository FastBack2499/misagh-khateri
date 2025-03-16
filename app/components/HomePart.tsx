import Image from "next/image"
import HeroImage from "../assets/heroImage.png"

import Element from "../lib/Element"
import Link from "../lib/Link"

import { LinkedinBoxFill } from "akar-icons"
import TradingView from "./icon/TradingView"

function HomePart() {
  return (
    <Element name='home' className='flex flex-col md:flex-row w-full h-full px-3 pt-40 md:pt-36 lg:pt-32 md:pb-10 pb-40 bg-gradient-to-b from-primary via-gray-600 to-primary justify-center items-center'>

        <div className="md:flex md:flex-col">

          <div className="flex flex-col md:items-start md:justify-normal items-center justify-center gap-y-3 pt-4 pb-7 cursor-default">
            <p className="text-[#515d6d] font-semibold text-sm lg:text-xl">
              Hi I am
            </p>
            <p className="text-gray-400 font-bold lg:text-3xl text-2xl">
              Misagh Khateri
            </p>
          </div>

          <div className="flex text-white lg:text-6xl items-center justify-center md:items-start md:justify-normal text-4xl font-bold pb-5 cursor-default">
            <p>
              Financial Adviser
            </p>
          </div>

          <div className="flex justify-center items-center md:items-start md:justify-normal gap-x-3 w-full h-10 md:py-3 md:pb-[70px] py-8">

            <a href="http://www.linkedin.com/in/misagh-khateri" target='_blank' rel="noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full text-gray-500 border-2 border-gray-500 hover:scale-105 hover:border-gray-300 hover:text-gray-300 transition-all duration-300">
              <LinkedinBoxFill size={20} />
            </a>

            <a href="https://www.tradingview.com/u/misagh17/" target='_blank' rel="noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full text-gray-500 border-2 border-gray-500 hover:scale-105 hover:border-gray-300 hover:text-gray-300 transition-all duration-300">
              <TradingView />
            </a>

          </div>

          <div className="flex items-center md:items-start md:justify-normal justify-center gap-x-2 pt-5 pb-12">
            {/* <Button classname="px-6 py-1.5 font-semibold">
              Hire Me
            </Button> */}
            <Link to="contact" href="#contact" className="rounded-lg border-2 cursor-pointer capitalize border-gray-500 text-gray-500 px-6 py-1.5 font-semibold text-sm hover:scale-105 hover:text-gray-300 hover:border-gray-300 transition-all duration-300" smooth duration={500} spy>
              contact me
            </Link>
            <a href={'/Misagh Khateri.pdf'} download target='_blank' rel="noreferrer" className="rounded-lg border-2 border-gray-500 text-gray-500 px-6 py-1.5 font-semibold text-sm hover:scale-105 hover:text-gray-300 hover:border-gray-300 transition-all duration-300">
              Download CV
            </a>
          </div>

          <div className="flex items-center justify-center md:justify-items-start md:px-3 rounded-lg bg-neutral-700 w-full ultraSmall:px-0 verySmall:px-2 small:px-5 h-24 md:w-[360px] md:h-[99px] cursor-default">

            <div className="flex gap-x-4">
              <div className="flex flex-col gap-y-1 border-r-2 pr-3">
                <p className="font-bold text-xl text-white">
                  10+ Years
                </p>
                <p className="md:text-lg font-semibold text-gray-400">
                  Trading
                </p>
              </div>
              <div className="flex flex-col gap-y-1">
                <p className="font-bold text-xl text-white">
                  8+ Years
                </p>
                <p className="md:text-lg font-semibold text-gray-400">
                  Sell
                </p>
              </div>
              <div className="flex pl-2 flex-col border-l-2 gap-y-1">
                <p className="font-bold text-xl text-white">
                  5+ Years
                </p>
                <p className="md:text-lg font-semibold text-gray-400">
                  Accounting
                </p>
              </div>
            </div>

          </div>

        </div>

        <div className="hidden md:flex items-center justify-center pt-20 pb-5 px-3 md:px-0 md:pt-0 md:pb-0 md:w-[378px] lg:pl-5">
          <Image src={HeroImage} alt="Hero" className="w-[380px] h-[484] md:w-full md:h-full"/>
        </div>

    </Element>
  )
}

export default HomePart