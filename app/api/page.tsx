'use client'

import React from 'react'
import { motion } from 'framer-motion';
import { TextGlitch } from '@/components/ui/ButtonGlitchBrightness';
import { ArrowUpRight } from 'lucide-react';
import { TextHoverEffect } from '@/components/ui/TextHoverEffect';
import Link from 'next/link';

export default function page() {
    return (
        <section className=' overflow-hidden'>
            <div className=' relative flex  px-4 lg:px-0 flex-col justify-end h-[30rem] lg:h-[26rem] overflow-hidden w-full'>
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: [1, 0.5, 1], x: [0, -50, 0] }}
                    transition={{ repeat: Infinity, ease: 'linear', repeatType: 'loop', duration: 7 }}
                    className=' size-[33rem] bg-blue-700 absolute blur-[200px] right-[19rem] -bottom-[28rem] rounded-full'>

                </motion.div>
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ repeat: Infinity, ease: 'linear', repeatType: 'loop', duration: 4 }}
                    className=' size-72 bg-pink-500 absolute blur-[100px] right-[15rem] -bottom-[10rem] rounded-full'>

                </motion.div>
                <motion.div
                    initial={{ opacity: 1, y: -10 }}
                    animate={{ opacity: [1, 0.5, 1], y: [-5, 0,-5],x:[-200,0,-200] }}
                    transition={{ repeat: Infinity, ease: 'linear', repeatType: 'loop', duration: 5}}
                    className=' size-96 bg-lime-600 absolute blur-[90px] -right-[12rem] -bottom-[6rem] rounded-full'>
                </motion.div>
                <div className=' leading-[2.9rem]  mx-auto px-4 w-[80rem] mb-10   ' >
                    <p className=' text-4xl lg:text-[3rem]'>Build with Grok</p>
                    <p className=' text-4xl lg:text-[3rem] opacity-45'>using the xAI API</p>
                </div>
            </div>
            <div className='mx-auto lg:w-[80rem]  px-4 '>
                <div className='py-16 border-b '>
                    <p className=' text-xl max-w-xl'>We’re excited to announce the launch of the xAI API, giving developers unfiltered access to our state-of-the-art language models.</p>
                    <div className=' mt-9 flex sm:flex-row flex-col gap-5'>
                        <Link href="/" className="group/button justify-between w-full sm:w-auto relative inline-flex items-center gap-1 overflow-hidden rounded-xl bg-white px-5 py-2.5 font-semibold text-black duration-300 hover:bg-white">
                            <TextGlitch text="Start building now" />
                            <ArrowUpRight className="group-hover/button:translate-x-0.5 transition-all duration-300 ease-in-out" />
                        </Link>
                        <Link href="/" className="group/button relative w-full justify-between sm:w-auto inline-flex items-center gap-1 overflow-hidden rounded-xl  px-5 py-2.5 font-semibold text-white duration-300 hover:bg-black border border-white">
                            <TextGlitch text="Read the docs" />
                            <ArrowUpRight className="group-hover/button:translate-x-0.5 transition-all duration-300 ease-in-out" />
                        </Link>
                    </div>
                </div>
                <div className=' h-[70vh] lg:h-[80vh]  border-b relative overflow-hidden grid md:grid-cols-2 items-center  '>
                    <div className=' flex flex-col gap-5'>
                        <p className=' text-4xl'>Public beta
                        </p>
                        <p className=' text-lg max-w-lg w-full opacity-80'>Were running a public beta program until the end of 2024. To kick things off, we make an early version of a next-gen model available under the name grok-beta.</p>
                        <p className=' text-lg max-w-lg w-full opacity-80'>The model offers function calling, a 128k context length, and system prompt support.</p>
                    </div>
                    <div className=' mt-40 md:mt-0'>
                        <div
                            style={{
                                maskImage: `linear-gradient(to top, transparent, black 80%)`,
                            }}
                            className=" h-[40rem] md:h-[42rem] lg:h-[44rem] absolute -right-[90rem] md:-right-[100rem] top-[80%] md:top-[60%] -translate-y-1/2 flex items-center justify-center">
                            <TextHoverEffect text="BLACKBOX.AI" />
                        </div>
                    </div>
                </div>
                <div className=' h-[80vh]  relative overflow-hidden grid md:grid-cols-2 items-center '>
                    <div className=' flex flex-col gap-5'>
                        <p className=' text-4xl'>Get started for free
                        </p>
                        <p className=' text-lg max-w-lg w-full opacity-80'>Until the end of 2024, all users will get $25 free monthly credits. Simply sign up and they will automatically apply to your account.</p>
                    </div>
                        <motion.div
                            style={{
                                maskImage: `linear-gradient(to top, transparent, black 80%)`,
                            }}
                            className=" h-[15rem] md:h-[35rem] md:absolute scale-[5] md:scale-150  md:-right-[36rem]  mt-40  md:top-[30%] -translate-y-1/2 flex items-center justify-center">
                            <TextHoverEffect text="$0" />
                        </motion.div>
                    </div>
            </div>
            <div className=' relative flex flex-col justify-center items-center  h-[70vh] overflow-hidden w-full'>
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
                <div className='  flex flex-col items-center  -mt-44 gap-5' >
                    <p className=' text-4xl lg:text-[3rem]'>Grok. Grok? Grok!</p>
                    <div>
                        <Link href="/" className="group/button relative inline-flex items-center gap-1 overflow-hidden rounded-xl bg-white px-5 py-2.5 font-semibold text-black duration-300 hover:bg-white">
                            <TextGlitch text="Let's Go" />
                            <ArrowUpRight className="group-hover/button:translate-x-0.5 transition-all duration-300 ease-in-out" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
