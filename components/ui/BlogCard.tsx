import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import React  from 'react'


export default function BlogCard({href,date,image,title,subtitle}:{href:string,date:string,image:string,title:string,subtitle:string}) {
  return (
    <Link href={href} className=' px-3 relative'>
        <p className=' text-[0.73rem] absolute top-2 right-4 bg-black/60 p-1 rounded-lg z-10 text-right'>{date}</p>
        <div className=' w-full h-[20rem] overflow-hidden mb-10 transition-all duration-500 ease-in-out '>
        <img src={image} className=' w-full h-full object-cover hover:scale-110 transition-all duration-500 ease-in-out'></img>
        </div>
        <div className=' flex justify-between group  '>
        <p className=' group-hover:border-b font-medium text-sm'>
            {title}
        </p>
            <ArrowUpRight className=' opacity-65 p-0.5 group-hover:opacity-100 transition-all duration-500 ease-in-out'></ArrowUpRight>
        </ div>
        <p className=' text-sm mt-2'>
            {subtitle}
        </p>
        {/* <div className=' mt-5'>
        {
          children && (
            children
          )
        }
        </div> */}
    </Link>
  )
}
