import TextAnimated from '@/components/ui/TextAnimated'
import React from 'react'

export default function page() {
    return (
        <section className='mx-auto w-[80rem]'>
            <div className=' flex flex-col my-28 gap-8 items-center'>
                <p className=' text-3xl opacity-60 '>Careers at xAI</p>
                <p className=' text-7xl font-light'>Build AI That Advances Humanity</p>
            </div>
            <div className="flex gap-10 items-center px-3">
                <p className=" text-[2.5rem] text-nowrap  font-thin">Work at xAI  </p>
                <div className="h-[2px] bg-gray-400 w-[95%] mx-auto  " />
                <TextAnimated link="/" text="View all articles"></TextAnimated>
            </div>
            <div className="py-36 grid grid-cols-3  items-start p-4">
                <div className="text-strat">
                    <h1 className="text-3xl font-light mb-8">Coding ≥ ∀ x</h1>
                </div>
                <div className=" col-span-2 space-y-5  leading-relaxed">
                    <p className="">
                        We are a team of AI researchers and engineers on a mission to build AI systems that can help humanity understand the world better. We are driven by ambitious goals, fast execution, and a strong sense of urgency. Join us if you want to shape the next generation of AI models and products.
                    </p>
                    <p className="">
                        We offer the following employee benefits:
                    </p>
                    <ul className="list-disc list-outside pl-10 space-y-2">
                        <li>Competitive cash and equity-based compensation</li>
                        <li>Medical, dental, and vision insurance</li>
                        <li>Unlimited paid time off subject to prior approval</li>
                        <li>Visa sponsorship</li>
                        <li>Life and AD&D insurance</li>
                        <li>Short-term and long-term disability insurance</li>
                        <li>401(k) plan</li>
                    </ul>
                </div>
            </div>
            <div className="flex gap-10 items-center px-3">
                <p className=" text-[2.5rem] text-nowrap  font-thin">Locations  </p>
                <div className="h-[2px] bg-gray-400 w-[95%] mx-auto  " />
            </div>
            <div className='py-36 grid grid-cols-3  items-start p-4'>

                <div className="text-strat">
                    <h1 className="text-3xl font-light mb-8">PA, SF, LDN</h1>
                </div>
                <div className="col-span-2">
                    <div>
                        <p className=" font-light">We are currently hiring in downtown San Francisco, Palo Alto, and London, UK. Although we prefer to work in-person, we also offer remote work opportunities for exceptional candidates.</p>
                    </div>
                    <div className="flex flex-col mt-16  md:flex-row justify-center items-start space-y-8 md:space-y-0 md:space-x-8">
                        <div className="text-center border-r pr-8  border-gray-300 md:text-left">
                            <h2 className="text-3xl   font-thin text-nowrap mb-7">Palo Alto, CA</h2>
                            <p className="text-base font-light">Our Palo Alto office houses the majority of our core research teams including our pre-training, post-training, and vision teams.</p>
                        </div>
                        <div className=" text-center md:text-left">
                            <h2 className="text-3xl   font-thin text-nowrap mb-7">San Francisco, CA</h2>
                            <p className="text-base font-light">Our infrastructure team takes care of our large compute clusters and is predominantly located in San Francisco.</p>
                        </div>
                        <div className="border-l border-gray-300 pl-8 text-center md:text-left">
                            <h2 className="text-3xl   font-thin text-nowrap mb-7">London, UK</h2>
                            <p className="text-base font-light">Our London team consists of highly experienced engineers who works on large-scale distributed systems across data, research, and product.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex gap-10 items-center px-3">
                <p className=" text-[2.5rem] text-nowrap  font-thin">Interview proces   </p>
                <div className="h-[2px] bg-gray-400 w-[95%] mx-auto  " />
            </div>
            <div className="py-36 grid grid-cols-3  items-start p-4">
                <div className="text-strat">
                    <h1 className="text-3xl font-light mb-8">Step-by-step</h1>
                </div>
                <div className=" col-span-2 space-y-5 leading-relaxed">
                    <p className="">
After you submit your application, our team will review your CV and your statement of exceptional work. If your application clears the initial review, you will be invited to a 15-minute phone interview where a team member will ask you some basic questions. If you pass this phone interview, you will proceed to the main selection process, which includes four technical interviews:
                    </p>
                    <ul className="list-disc list-outside pl-10 space-y-2">
                        <li>Three 1-on-1 interviews focusing on coding, systems design, or research.n</li>
                        <li>A team interview, where you will meet more team members and deliver a 20-minute presentation on the most challenging technical problems you have solved.</li>
                    
                    </ul>
                    <p className="">
                    We aim to complete this process within one week. We do not use recruiters for assessments. All applications are evaluated by our technical team members. All interviews will be conducted via Google Meet.

</p>
                </div>
            </div>
        </section>
    )
}
