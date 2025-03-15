'use client'

import { useState } from "react"
import toast from "react-hot-toast"
import { Element } from "react-scroll";

import Button from "./Button";


function Contact() {

  const [loading, setLoading] = useState(false)

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {

    event.preventDefault()

    setLoading(true)
    const formData = new FormData(event.currentTarget)

    formData.append("access_key", "16b92ae9-a1d8-45f2-ad6f-7d698e8fee6f")

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    })

    const data = await response.json()
    // console.log(data)

    if (data.success) {
      setLoading(false)
      event.currentTarget.reset()
      return toast.success("Your Message has been send successfully.")
    } else {
      setLoading(false)
      console.log('Error', data)
      return toast.error("There's something goes wrong, try to send your message again!!")
    }
  }

  return (
    <Element name="contact" className="flex flex-col items-center justify-center bg-primary w-full pt-16 pb-[85px] md:pb-16">

        <div className='flex flex-col items-center justify-center text-center px-7 md:px-0 cursor-default'>

          <p className='text-white text-2xl font-bold py-4'>
            Contact me
          </p>
          <p className='font-semibold text-neutral-500 pb-6'>
            Cultivating Connections: Reach Out and Contact with Me
          </p>

        </div>

        <div className="flex flex-col items-center justify-center  w-full md:w-1/2 py-5">

            <form onSubmit={onSubmit} className="w-full flex flex-col items-center justify-center gap-y-6 px-6 lg:px-0">

                <input type="text" name="name" required placeholder="Name" disabled={loading} className="py-3 px-4 w-full 
                bg-white/5 focus:outline-blue-600 focus:bg-white/10 transition-all 
                hover:bg-white/10
                duration-300 text-white placeholder:text-neutral-600 rounded-md disabled:opacity-50"/>

                <input type="email" name="email" required placeholder="Email"  disabled={loading}className="py-3 px-4 w-full 
                bg-white/5 
                hover:bg-white/10 focus:outline-blue-600 focus:bg-white/10 transition-all duration-300 text-white placeholder:text-neutral-600 rounded-md disabled:opacity-50"/>

                <textarea name="message" required rows={5} placeholder="Your Message..." disabled={loading} className="py-3 px-4 w-full 
                bg-white/5 focus:outline-blue-600 focus:bg-white/10 
                hover:bg-white/10 transition-all duration-300 text-white placeholder:text-neutral-600 rounded-md disabled:opacity-50"/>

                <Button type="submit" disabled={loading} classname="px-6 py-1 rounded-md disabled:pointer-events-none disabled:opacity-50">
                  Send
                </Button>
              
            </form>


        </div>

    </Element>
  )
}

export default Contact