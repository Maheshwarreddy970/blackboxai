import TextAnimated from '@/components/ui/TextAnimated'
import { TextHoverEffect } from '@/components/ui/TextHoverEffect'
import { ArrowUpRight } from 'lucide-react'
import React from 'react'

export default function page() {
  return (
   <section className=' max-w-[80rem] mx-auto'>
     <div
        style={{
          maskImage: `linear-gradient(to top, transparent, black 40%)`,
        }}
        className="h-[30rem] flex items-center  justify-center">
        <TextHoverEffect text="BLACKBOX.AI" />
      </div>
      <div className=" text-[1.8rem] text-center flex flex-col gap-5 -mt-14 font-extralight  ">
          <p>
            Announcing the xAI API
          </p>
          <div className=" flex  justify-center gap-7  ">
            <TextAnimated link='/api' text="Learn More"></TextAnimated>
            <TextAnimated link='/' text="Try now">
              <ArrowUpRight size={22} color="currentColor" className=" group-hover:translate-x-1 rotate-45 group-hover:rotate-0 transition-all duration-300 ease-in-out" />
            </TextAnimated>
          </div>
        </div>
   </section>
  )
}
