import { ArrowRight } from 'lucide-react'
import React from 'react'

export default function JobCard({title,place}:{title:string,place:string}) {
  return (
    <div className=" lg:flex grid grid-cols-3  gap-5 group lg:justify-between px-4 lg:items-center">
      <div className=' col-span-2'>
    <p className=" text-2xl  text-wrap lg:text-[2rem]">{title} </p>
    <p className="lg:hidden opacity-75">
      {place}
      </p>
      </div>
    <div className=" flex col-span-1  gap-10 items-center">
      <p className="hidden lg:block opacity-75">
      {place}
      </p>
      <ArrowRight className=" group-hover:translate-x-2 transition-all group-hover:bg-white/10 border-white/30 ease-in-out duration-300 flex justify-center items-center p-2.5 border rounded-full size-12"></ArrowRight>
    </div>
  </div>
  )
}
