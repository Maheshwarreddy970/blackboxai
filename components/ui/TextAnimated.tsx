import Link from 'next/link';
import React, { ReactElement } from 'react';

export default function TextAnimated({ children, text,link }: { text: string, children?: ReactElement,link:string }) {
    return (
        <Link
            href={link}
            className="relative text-xl lg:text-[1.5rem] flex justify-center text-nowrap gap-2 items-center after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full dark:after:bg-white after:bg-neutral-800  after:transition after:duration-300 opacity-60 hover:opacity-100   after:ease-in-out hover:after:translate-y-0.5 after:translate-y-1.5"
        >
            {text}
            {children && (
                <span className=' '>
                    {children}
                </span>
            )}
        </Link>
    );
}