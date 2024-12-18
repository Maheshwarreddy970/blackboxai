import TextAnimated from '@/components/ui/TextAnimated'
import { TextHoverEffect } from '@/components/ui/TextHoverEffect'
import { ArrowUpRight } from 'lucide-react'
import React from 'react'

export default function page() {
  return (
    <section className=' h-screen lg:h-auto max-w-[80rem] mx-auto'>
      <div
        style={{
          maskImage: `linear-gradient(to top, transparent, black 40%)`,
        }}
        className=" h-[90vh] flex items-center  justify-center">
        <TextHoverEffect text="BLACKBOX.AI" />
      </div>
      <div className=" text-[1.8rem] text-center flex flex-col gap-5 -mt-14 font-extralight  ">
        <p>
        Grok is currently available on 𝕏.
        </p>
        <div className=" flex  justify-center gap-7  ">
          <TextAnimated link='/api' text="Build with Grok"></TextAnimated>
          <TextAnimated link='/' text="Use Grok">
            <ArrowUpRight size={24} color="currentColor" className=" group-hover:translate-x-1 transition-all duration-300 ease-in-out" />
          </TextAnimated>
        </div>
      </div>
    </section>
  )
}
