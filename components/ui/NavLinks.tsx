import React from 'react'

export default function NavLinks({ text, href }: { text: string, href: string }) {
  return (
    <a href={href} className="relative opacity-70  hover:opacity-100 after:absolute after:bg-neutral-100 after:bottom-0 after:left-0 after:h-[1.2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">
      <span className="text-neutral-100 ">{text}</span>
    </a>
  )
}
