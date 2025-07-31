import Image from 'next/image'
import Element from '../lib/Element'
import CircularProgressbarWithChildren from '../lib/CircularProgressbarWithChildren'
import HeroImage from "../assets/heroImage.png"
import { Download } from 'akar-icons'
import Adaptability from './icon/Adaptability'
import Collaboration from './icon/Collaboration'
import Leadership from './icon/Leadership'
import Negotiation from './icon/Negotiation'
import ProblemSolving from './icon/ProblemSolving'
import ClientCare from './icon/ClientCare'

function About() {

  const technicks = [
    {
      id: 1,
      icon: <div className='text-gray-300'>
        <Adaptability/>
      </div>,
      precent: 100,
      title: 'Adaptability'
    },
    {
      id: 2,
      icon: <div      className='text-gray-300'>
      <Collaboration/>
      </div>,
      precent: 90,
      title: 'Collaboration'
    },
    {
      id: 3,
      icon: <div      className='text-gray-300'>
      <Leadership/>
      </div>,
      precent: 90,
      title: 'Leadership'
    },
    {
      id: 4,
      icon: <div      className='text-gray-300'>
      <Negotiation/>
      </div>,
      precent: 100,
      title: 'Negotiation'
    },
    {
      id: 5,
      icon: <div      className='text-gray-300'>
      <ProblemSolving/>
      </div>,
      precent: 90,
      title: 'Problem-solving'
    },
    {
      id: 6,
      icon: <div      className='text-gray-300'>
      <ClientCare/>
      </div>,
      precent: 90,
      title: 'Client Care'
    }
  ]

  return (
    // bg-gradient-to-b from-primary to-gray-600
    <Element name='about' className='flex flex-col items-center justify-center bg-primary w-full pb-4'>

        <div className='flex flex-col items-center justify-center pt-20 cursor-default'>
          <p className='text-white text-2xl font-bold py-4'>
            About Me
          </p>
          <h1 className='font-semibold text-gray-500 mid:pb-6'>
            Experienced Financial Adviser
          </h1>
        </div>

        <div className='flex flex-col max-w-screen-lg mx-auto md:flex-row items-center justify-center px-6 md:pt-5 pb-8'>

          <Image src={HeroImage} alt="Hero" className="w-[380px] h-[484] md:w-[378px] md:h-full"/>

          <div className='flex flex-col md:pl-16 gap-y-4 pt-8 md:pt-0 cursor-default'>
            <h3 className='text-gray-400 font-semibold'>
            Misagh Khateri is a finance and banking professional based in San Francisco. Currently an Associate Banker at JPMorgan Chase, he specializes in personalized financial solutions, customer service, and digital banking tools.
            <br/><br/>
            Previously, Misagh managed sales for AT&T and co-founded HighPeak Academy in Iran, where he led market analysis courses and strategic growth initiatives. With a background in accounting and certifications in financial analysis, he brings expertise in market strategy, budgeting, and client management.
            </h3>
            <div className='flex justify-center md:justify-normal pt-3'>
              <a href={'/Misagh Khateri.pdf'} aria-label='Resume' download target='_blank' rel="noreferrer" className="rounded-lg border-2 border-gray-500 text-gray-500 flex px-5 py-1.5 items-center justify-center font-semibold text-sm hover:scale-105 hover:text-gray-300 hover:border-gray-300 transition-all duration-300">
                <Download size={24} className='pr-2' />
                <p className=''>
                  Download CV
                </p>
              </a>
            </div>
          </div>

        </div>

        <div className='max-w-screen-lg grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 items-center justify-center gap-8 text-center py-6 md:py-12 lg:py-6 md:px-6 cursor-default'>

          {technicks.map(({id, icon, title, precent}) => (

            <div key={id} className='flex flex-col items-center justify-center gap-y-4'>

              <CircularProgressbarWithChildren counterClockwise value={precent} className='w-[130px] h-[130px]' styles={{
                path: {
                  stroke: '#d1d5db',
                  strokeLinecap: 'round',
                  strokeWidth: 10,
                },
               trail: {
                stroke: '#374151',
                strokeWidth: 10,
              },
              }} strokeWidth={15}>
                {icon}
              </CircularProgressbarWithChildren>
              
              <div className='flex flex-col items-center justify-center gap-y-2'>

                <p className='text-xl md:text-2xl font-semibold text-white'>
                  {precent}%
                </p>

                <h2 className='text-lg md:text-xl font-semibold text-gray-400'>
                  {title}
                </h2>

              </div>
            
            </div>

          ))}

        </div>

    </Element>
  )
}

export default About
