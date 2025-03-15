import React from 'react'
import Element from '../lib/Element'
import FinancialMarketAnalys from './icon/FinancialMarketAnalys'
import Instruction from './icon/Instruction'
import FinancialForecast from './icon/FinancialForecast'
import Consulting from './icon/Consulting'
import Brokering from './icon/Brokering'
import Swift from './icon/Swift'
import Banking from './icon/Banking'
import FinancialStatment from './icon/FinancialStatment'
import ClientPort from './icon/ClientPort'

function Services() {

  const services: {
    id: number,
    icon: React.ReactNode ;
    title: string;
    description: string;
  }[] = [
    {
      id: 1,
      icon: <Banking/>,
      title: 'Banking',
      description: 'Provided comprehensive banking services, assisting clients with account management, financial transactions, and personalized banking solutions.'
    },
    {
      id: 2,
      icon: <Swift/>,
      title: 'SWIFT transactions',
      description: 'Processed customer transactions efficiently, ensuring accuracy and compliance with banking regulations.'
    },
    {
      id: 3,
      icon: <FinancialMarketAnalys/>,
      title: 'Financial Market Analysis',
      description: 'Analyzed market trends and economic indicators to provide insights and recommendations to clients.'
    },
    {
      id: 4,
      icon: <Instruction/>,
      title: 'Instruction',
      description: 'Conducted training sessions on financial analysis, helping clients and colleagues understand key financial principles.'
    },
    {
      id: 5,
      icon: <FinancialStatment/>,
      title: 'Financial Statements',
      description: 'Reviewed and analyzed financial statements such as balance sheets, income statement, and cash flow to assess clients’ financial health and provide strategic guidance.'
    },
    {
      id: 6,
      icon: <ClientPort/>,
      title: 'Client Portfolios',
      description: 'Managed and optimized client portfolios by aligning investments with their financial goals and risk tolerance.'
    },
    {
      id: 7,
      icon: <Brokering/>,
      title: 'Brokering',
      description: 'Facilitated financial transactions and investment opportunities, ensuring clients received the best market deals.'
    },
    {
      id: 8,
      icon: <Consulting/>,
      title: 'Consulting',
      description: 'Advised clients on financial strategies, risk management, and wealth-building opportunities.'
    },
    {
      id: 9,
      icon: <FinancialForecast/>,
      title: 'Budgeting and Forecasting',
      description: 'Developed detailed budgets and financial forecasts to help clients and businesses plan for future financial stability.'
    }
  ]

  return (
    <Element name='services' className='flex flex-col items-center bg-primary justify-center w-full'>
      
      <div className='max-w-screen-lg mx-auto py-4 px-6 md:px-0 lg:px-6 w-full h-full'>

        <div className='flex flex-col items-center justify-center pt-20 cursor-default'>
          <p className='text-white text-2xl font-bold py-4'>
            Services
          </p>
          <p className='font-semibold text-gray-500 pb-6'>
            List of Services I can supply
          </p>
        </div>

        <div className='w-full grid grid-cols-2 md:grid-cols-3 gap-4 text-center py-6 md:px-6'>

          {services.map(({id, icon, title, description }) => (
            <div key={id} className='flex flex-col items-center justify-normal  hover:scale-105 transition duration-300 bg-neutral-700/50 rounded-lg pb-3 pt-5 text-white cursor-default'>

              <div className='flex flex-col items-center justify-center'>
                <div className='mt-1'>
                  {icon}
                </div>
                <p className='mt-2 text-white font-bold text-base md:text-xl'>
                  {title}
                </p>  
              </div>

              <p className='mt-3 mb-1.5 px-5 font-semibold text-[#818181]'>
                {description}
              </p>

            </div>
          ))}

        </div>

      </div>

    </Element>
  )
}

export default Services