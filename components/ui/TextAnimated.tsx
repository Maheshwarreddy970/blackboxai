import Link from 'next/link';
import React, { ReactElement } from 'react';

export default function TextAnimated({ children, text,link }: { text: string, children?: ReactElement,link:string }) {
    return (
        <Link
            href={link}
            className="relative group text-nowrap text-xl flex justify-center items-center gap-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:w-full after:origin-bottom after:scale-x-0 after:bg-neutral-300 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-botto hover:after:translate-y-1 hover:after:scale-x-100"
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