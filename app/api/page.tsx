'use client'

import React from 'react'
import { motion } from 'framer-motion';
import { Brightness, TextGlitch } from '@/components/ui/ButtonGlitchBrightness';
import { ChevronRight } from 'lucide-react';
import { TextHoverEffect } from '@/components/ui/TextHoverEffect';

export default function page() {
    return (
        <section>
            <div className=' relative flex flex-col justify-end h-[23rem] overflow-hidden w-full'>
                <motion.div
                    initial={{ opacity: 1, x: -20 }}
                    animate={{ opacity: [1, 0.5, 1], x: [-20, 0, 10, -20] }}
                    transition={{ repeat: Infinity, ease: 'linear', repeatType: 'loop', duration: 7 }}
                    className=' size-[30rem] bg-blue-700 absolute blur-[200px] right-[19rem] -bottom-[28rem] rounded-full'>

                </motion.div>
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ repeat: Infinity, ease: 'linear', repeatType: 'loop', duration: 7 }}
                    className=' size-60 bg-pink-500 absolute blur-[100px] right-[15rem] -bottom-[10rem] rounded-full'>

                </motion.div>
                <motion.div
                    initial={{ opacity: 1, y: -10 }}
                    animate={{ opacity: [1, 0.5, 1], y: [-10, 0, 10, -10] }}
                    transition={{ repeat: Infinity, ease: 'linear', repeatType: 'loop', duration: 6 }}
                    className=' size-96 bg-lime-600 absolute blur-[90px] -right-[12rem] -bottom-[6rem] rounded-full'>
                </motion.div>
                <div className=' leading-[2.9rem]  mx-auto w-[80vw] mb-10   ' >
                    <p className=' text-[3rem]'>Build with Grok</p>
                    <p className=' text-[3rem] opacity-45'>using the xAI API</p>
                </div>
            </div>
            <div className='mx-auto w-[80vw] py-16 border-b'>
                <div className='py-16 border-b'>
                    <p className=' text-xl max-w-xl'>We’re excited to announce the launch of the xAI API, giving developers unfiltered access to our state-of-the-art language models.</p>
                    <div className=' mt-9 flex gap-5'>
                        <button className="group/button relative inline-flex items-center gap-1 overflow-hidden rounded-xl bg-white/80 px-5 py-2.5 font-semibold text-black duration-300 hover:bg-white">
                            <TextGlitch text="Start building now" />
                            <Brightness className="bg-white/40" />
                            <ChevronRight className="group-hover/button:translate-x-2 transition-all duration-300 ease-in-out" />
                        </button>
                        <button className="group/button relative inline-flex items-center gap-1 overflow-hidden rounded-xl  px-5 py-2.5 font-semibold text-white duration-300 hover:bg-black border border-white">
                            <TextGlitch text="Read the docs" />
                            <Brightness />
                            <ChevronRight className="group-hover/button:translate-x-2 transition-all duration-300 ease-in-out" />
                        </button>
                    </div>
                </div>
                <div className=' h-screen  border-b relative overflow-hidden grid grid-cols-2 place-items-center '>
                    <div className=' flex flex-col gap-5'>
                        <p className=' text-4xl'>Public beta
                        </p>
                        <p className=' text-lg max-w-lg w-full opacity-80'>Were running a public beta program until the end of 2024. To kick things off, we make an early version of a next-gen model available under the name grok-beta.</p>
                        <p className=' text-lg max-w-lg w-full opacity-80'>The model offers function calling, a 128k context length, and system prompt support.</p>
                    </div>
                    <div>
                        <div
                            style={{
                                maskImage: `linear-gradient(to top, transparent, black 30%)`,
                            }}
                            className="h-[44rem] absolute -right-[100rem] top-[60%] -translate-y-1/2 flex items-center justify-center">
                            <TextHoverEffect text="BLACKBOX.AI" />
                        </div>
                    </div>
                </div>
                <div className=' h-screen  relative overflow-hidden grid grid-cols-2 place-items-center '>
                    <div className=' flex flex-col gap-5'>
                        <p className=' text-4xl'>Get started for free
                        </p>
                        <p className=' text-lg max-w-lg w-full opacity-80'>Until the end of 2024, all users will get $25 free monthly credits. Simply sign up and they will automatically apply to your account.</p>
                    </div>
                    <div >
                        <div
                            style={{
                                maskImage: `linear-gradient(to top, transparent, black 30%)`,
                            }}
                            className="h-[35rem] absolute scale-150 -right-[36rem] top-[60%] -translate-y-1/2 flex items-center justify-center">
                            <TextHoverEffect text="$0" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
