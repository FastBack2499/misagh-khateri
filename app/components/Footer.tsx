import { Envelope, LinkedinBoxFill, Location, Phone } from 'akar-icons'
import React from 'react'
import TradingView from './icon/TradingView'

function Footer() {
  return (
    <footer className='flex flex-col items-center justify-center bg-[#242424]'>

      <div className="flex py-8">
        <h1 className="text-2xl md:text-3xl text-white pt-2 font-signature cursor-default">
          Misagh Khateri
        </h1>
      </div>

      <div className="flex justify-center items-center gap-x-3 w-full h-10">

        <a href="http://www.linkedin.com/in/misagh-khateri" target='_blank' rel="noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full text-gray-500 border-2 border-gray-500 hover:scale-105 hover:border-gray-300 hover:text-gray-300 transition-all duration-300">
          <LinkedinBoxFill size={20} />
        </a>

        <a href="https://www.tradingview.com/u/misagh17/" target='_blank' rel="noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full text-gray-500 border-2 border-gray-500 hover:scale-105 hover:border-gray-300 hover:text-gray-300 transition-all duration-300">
          <TradingView />
        </a>

      </div>

      <div className='flex flex-col sm:flex-row justify-center items-center gap-y-5 sm:gap-x-5 w-full pt-10 pb-7'>

        <div className='flex justify-center items-center gap-x-2 text-[#959595] hover:text-[#cccccc] hover:scale-105 transition-all duration-300'>

          <Envelope strokeWidth={2} size={20} />
          <a href='mailto:Misaghkhateri@gmail.com' target='_blank' rel="noreferrer" className='font-semibold'>
            Misaghkhateri@gmail.com
          </a>

        </div>

        <div className='flex justify-center items-center gap-x-2 text-[#959595] hover:text-[#cccccc] hover:scale-105 transition-all duration-300'>

          <Phone size={20} />
          <a href='tel:628-946-7479' className='font-semibold'>
            +1 628-946-7479
          </a>

        </div>

        <div className='flex justify-center items-center gap-x-2 text-[#959595] hover:text-[#cccccc] hover:scale-105 transition-all duration-300'>

          <Location size={20} />
          <a href='https://maps.app.goo.gl/SFfS2v7e2HvpHVTaA' target='_blank' rel="noreferrer" className='font-semibold'>
            San Francisco, CA
          </a>

        </div>

      </div>
      
      <div className='flex justify-center text-sm items-center gap-x-1.5 text-[#757575] border-t-2 border-[#5b5b5b] py-3.5 w-full max-w-[300px] md:max-w-[500px] '>

        <p className=''>
          Designed and Developed by
        </p>
        <a href='https://github.com/FastBack2499' target='_blank' rel="noreferrer" className='font-bold hover:text-[#aaaaaa] hover:scale-105 transition-all duration-300'>
          Roham Esmaeili
        </a>
      </div>

    </footer>
  )
}

export default Footer
