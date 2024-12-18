"use client";

import BlogCard from "@/components/ui/BlogCard";
import JobCard from "@/components/ui/JobCard";
import TextAnimated from "@/components/ui/TextAnimated";
import { TextHoverEffect } from "@/components/ui/TextHoverEffect";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect } from "react";

export default function Home() {
  const { setTheme } = useTheme();
  useEffect(() => {
    setTheme("dark")
  }, [])
  return (
    <main className="max-w-[80rem] mx-auto  px-4 lg:px-0">
      <div
        style={{
          maskImage: `linear-gradient(to top, transparent, black 40%)`,
        }}
        className="h-[32rem]   flex items-center  justify-center">
        <TextHoverEffect text="BLACKBOX.AI" />
      </div>
      <div>
        <div className="  text-center flex flex-col gap-5 -mt-14 font-extralight  ">
          <p className="text-[1.9rem]">
            Announcing the xAI API
          </p>
          <div className=" flex  text-[1.5rem] justify-center gap-3  ">
            <TextAnimated link="/api" text="Learn More"></TextAnimated>
            <TextAnimated link="https://accounts.x.ai/sign-in?redirect=cloud-console" text="Try now">
              <ArrowUpRight  size={25} color="currentColor" className=" group-hover:translate-x-1  rotate-0 transition-all duration-300 ease-in-out" />
            </TextAnimated>
          </div>
        </div>
      </div>
      <section className=" mt-72  lg:mt-16">
        <div className="flex gap-10 items-center ">
          <p className="  text-3xl lg:text-[2.5rem] ">Blog  </p>
          <div className="h-[2px] bg-gray-400 w-[95%] mx-auto  " />
          <TextAnimated link="/blog" text="View all articles"></TextAnimated>
        </div>
        <div className=" grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8 lg:mt-28 leading-9">
          <div className="text-2xl leading-tight font-thin lg:text-[2.1rem] text-wrap mb-14 lg:mb-0 lg:pr-16 opacity-80">
            Read about our <br className='hidden lg:block'></br> latest announcements
          </div>
          <div className=" mt-7">
          <BlogCard
            href="/blog/file-rec"
            image="/api-teaser.webp"
            date="November 4, 2024"
            title="API Public Beta"
            subtitle="Starting today, developers can build on our Grok foundation models using our newly released API. We will run a public beta program until the end of 2024 during which everyone will get $25 of free API credits per month."
            ></BlogCard>
            </div>
          <div className=" mt-7">
          <BlogCard
            href="/blog/file-rec"
            image="/image.png"
            date="November 4, 2024"
            title="API Public Beta"
            subtitle="Starting today, developers can build on our Grok foundation models using our newly released API. We will run a public beta program until the end of 2024 during which everyone will get $25 of free API credits per month."
            ></BlogCard>
            </div>
        </div>
      </section>
      <section className=" max-w-[80rem] mx-auto mt-64">
        <div className="flex gap-3 items-center">
          <p className=" text-3xl lg: lg:text-[2.5rem] ">Careers  </p>
          <div className="h-px bg-gray-200 w-full " />
          <TextAnimated link="/careers" text="View open roles"></TextAnimated>
        </div>
        <div className=" grid lg:grid-cols-3 gap-2 mt-8 lg:mt-32 leading-9">
          <div className=" text-2xl leading-tight font-thin lg:text-[2.1rem] text-wrap mb-14 lg:mb-0 lg:pr-16 opacity-80">
            Work with us to <br className='hidden lg:block'></br> create a better future
          </div>
          <div className="  col-span-2 flex flex-col gap-12">
            <JobCard title="AI Coding Tutor (Full-Time or Part-Time)" place="remote"></JobCard>
            <JobCard title="AI Coding Tutor" place="San Francisco & Palo Alto, CA"></JobCard>
            <JobCard title="AI Coding Tutor" place="San Francisco & Palo Alto, CA"></JobCard>
          </div>
        </div>
      </section>
      <section className=" max-w-[80rem] mx-auto lg:pb-64   mt-64">
        <div className="flex gap-3 items-center">
          <p className=" text-3xl lg:text-[2.5rem] ">Developers  </p>
          <div className="h-px bg-gray-200 w-full " />
        </div>
        <div className=" grid gird-col-1 lg:grid-cols-3 gap-12 lg:gap-2 mt-5 lg:mt-28 leading-9">
          <div className=" text-2xl lg:text-[2rem] text-wrap font-thin pr-16 opacity-80">
            Start building with Grok
          </div>
          <div className="group h-[18rem] rounded-lg lg:rounded-none lg-bg-black  p-2  px-6 border-r flex flex-col justify-between">
            <div className=" flex justify-between items-center">
              <p className="text-2xl lg:text-[2.2rem]">
                Developer Docs
              </p>
              <ArrowRight className=" group-hover:translate-x-2 transition-all group-hover:bg-white/10 border-white/30 ease-in-out duration-300 flex justify-center items-center p-2.5 border rounded-full size-12"></ArrowRight>
            </div>
            <p>
              Learn more about Grok and its capabilities.
            </p>
          </div>
          <div className="group h-[18rem] rounded-lg lg:rounded-none lg-bg-black  p-2  px-6  flex flex-col justify-between">
            <div className=" flex justify-between items-center">
              <p className="text-2xl lg:text-[2.2rem]">
                Cloud Console
              </p>
              <ArrowRight className=" group-hover:translate-x-2 transition-all group-hover:bg-white/10 border-white/30 ease-in-out duration-300 flex justify-center items-center p-2.5 border rounded-full size-12"></ArrowRight>
            </div>
            <p>
              Learn more about Grok and its capabilities.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
