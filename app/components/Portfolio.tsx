import { LinkOut } from "akar-icons"
import Element from "../lib/Element"
import JPIcon from "../assets/JPIcon.png"
import ATTIcon from "../assets/ATTIcon.png"
import Image from "next/image"

function Portfolio() {

  const works = [
    {
      id: 1,
      image: JPIcon,
      title: 'Associate Banker',
      location: 'J.P. Morgan Chase, San Francisco, CA',
      year: 'September 2024 – PRESENT',
      description: "Provides tailored financial solutions by engaging clients in meaningful conversations about their banking needs. Supports branch operations by assisting with teller transactions, including deposits, withdrawals, and payments, ensuring accuracy and efficiency. Proactively educates customers on digital banking tools to enhance their banking experience and streamline account management.  Collaborates with the banking team to identify and refer opportunities for personal and business financial growth.  Ensures compliance with regulatory requirements and internal policies, maintaining a secure and professional environment. Delivers exceptional service by addressing customer inquiries and resolving issues promptly, fostering trust and satisfaction."
    },
    {
      id: 2,
      image: ATTIcon,
      title: 'Territory Sales Manager',
      location: 'Envision Bay Consulting – AT&T, San Francisco, CA',
      year: 'July 2024 – September 2024',
      description: "Lead business-to-business sales pitching of AT&T products (phone lines, internet air and fiber, and Direct TV) for regional AT&T sales campaign Processing various orders using SARA+ order processing system Individualized calculation of plans and service costs for each customer including promo eligibility Building client relationships and establishing trust with customers using multiple sales methods and showcasing credibility of knowledge of the products Resolving customer questions and concerns efficiently."
    },
    {
      id: 3,
      image: '',
      title: 'Co-Founder, Financial and Investment Manager, Lecturer',
      location: 'HighPeak Academy, Isfahan, Iran',
      year: 'January 2020 – January 2024',
      description: "Led private and public technical and fundamental market analysis courses for over 60 students. Established and led a dynamic executive team, driving strategic growth initiatives.  Engineered online marketing campaigns and optimized company website, resulting in increased student enrollment. Oversaw a multifaceted team of six professionals, coordinating activities and ensuring seamless operations. Managed financial transactions, including AR, AP, and payroll processing using Parsian Accounting software. Achieved an average of 20% gain monthly in a brokerage account, crafting tailored investment portfolios for clients. Spearheaded strategic business planning and negotiations with the parent company, fostering sustainable partnerships and revenue growth.",
      site: 'https://Highpeak.company'
    },
  ]

  return (
    <Element name='portfolio' className='flex flex-col items-center justify-center bg-primary w-full pt-16 pb-6'>

      <div className='flex flex-col items-center justify-center pt-5 pb-9'>

        <p className='text-white text-2xl font-bold cursor-default'>
          Experience
        </p>

      </div>

      <div className="flex flex-col items-center justify-center w-full py-2 px-4 md:px-6 gap-y-4">
        
        {works.map(({id, site, title, image, location, year, description}) => (

          // md:hover:bg-neutral-700
          <div key={id} className="flex flex-col w-full lg:max-w-screen-lg bg-neutral-800  md:hover:scale-105 transition-all duration-300 rounded-lg p-5 gap-y-2">

            { image ? (
              <div className="flex items-center justify-between">

                <p className="text-2xl font-bold text-white cursor-default">
                  {title}
                </p>

                { id === 1 && (
                  <Image src={image} alt="JPMorgan Icon" width={170}/>
                )}

                { id === 2 && (
                  <Image src={image} alt="AT&T Icon" width={30}/>
                )}

              </div>
            ) : (
              <p className="text-2xl font-bold text-white cursor-default">
                {title}
              </p>
            )}

            <p className="text-xl font-semibold text-gray-400 cursor-default">
              {location}
            </p>

            <p className="font-semibold text-xl text-gray-400 cursor-default">
              {year}
            </p>

            <p className="text-gray-400 cursor-default">
              {description}
            </p>

            { site && (
              <div className="w-[88px] py-1.5">
                <a href={site} download target='_blank' rel="noreferrer" className="rounded-full text-gray-500 flex px-2 py-1 items-center justify-center font-semibold text-sm hover:scale-105 hover:text-gray-300 hover:bg-neutral-700 transition-all duration-300">
              
                  <p className=''>
                    Website
                  </p>

                  <LinkOut size={20} className='pl-1' />

                </a>
              </div>
            )}

          </div>

        ))}

      </div>

    </Element>
  )
}

export default Portfolio