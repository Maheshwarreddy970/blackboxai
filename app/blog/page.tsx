import { BlogMdxFrontmatter, getAllBlogs } from "@/lib/markdown";
import { formatDate2, stringToDate } from "@/lib/utils";
import { Metadata } from "next";
import BlogCard from "@/components/ui/BlogCard";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "AriaDocs - Blog",
};

export default async function BlogIndexPage() {
  const blogs = (await getAllBlogs()).sort(
    (a, b) => stringToDate(b.date).getTime() - stringToDate(a.date).getTime()
  );
  return (
    <div className="w-full mx-auto flex flex-col gap-1 max-w-[80rem]">
      <div className="h-screen lg:h-[50vh] justify-center items-center flex flex-col gap-5 lg:my-24">
        <h1 className="text-7xl text-center">
          Blog
        </h1>
        <p className="  text-center text-3xl opacity-50 font-thin">
          Read about our latest product and research announcements
        </p>
      </div>
      <div className=" h-screen">
        <div className=" mx-auto relative lg:flex gap-10  max-w-5xl rounded-lg bg-[#0f1518] items-end justify-center p-7">
          <Link href="/blog/file-rec" className=" w-full lg:w-1/2">
            <img src="/api-teaser.webp" alt="cover" className=" h-full w-full"></img>
          </Link>
          <div className=" w-full my-8 lg:w-1/2">
            <div className=" z-20 h-full flex flex-col gap-5 ">
              <p className=" opacity-60 ">November 4, 2024</p>
              <p className=" text-4xl">API Public Beta</p>
              <p className=" opacity-85">Starting today, developers can build on our Grok foundation models using our newly released API. We will run a public beta program until the end of 2024 during which everyone will get $25 of free API credits per month.</p>
            </div>
          </div>
            <div className=" lg:absolute flex justify-end top-8 right-10">
              <ArrowRight className=" hover:translate-x-2 transition-all hover:bg-white/10 border-white/30 ease-in-out duration-300 flex justify-center items-center p-2.5 border rounded-full size-12"></ArrowRight>
            </div>
        </div>
      </div>

      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 sm:gap-8 gap-16 mb-5">
        {blogs.map((blog) => (
          <BlogCards {...blog} slug={blog.slug} key={blog.slug} />
        ))}
      </div>
    </div>
  );
}

function BlogCards({
  date,
  title,
  description,
  slug,
  cover,
}: BlogMdxFrontmatter & { slug: string }) {
  return (
    <>
      <BlogCard
        href={`/blog/${slug}`}
        image={cover}
        date={formatDate2(date)}
        title={title}
        subtitle={description}
      >
      </BlogCard>
    </>
  );
}

// function AvatarGroup({ users, max = 4 }: { users: Author[]; max?: number }) {
//   const displayUsers = users.slice(0, max);
//   const remainingUsers = Math.max(users.length - max, 0);

//   return (
//     <div className="flex items-center">
//       {displayUsers.map((user, index) => (
//         <Avatar
//           key={user.username}
//           className={`inline-block border-2 w-9 h-9 border-background ${index !== 0 ? "-ml-3" : ""
//             } `}
//         >
//           <AvatarImage src={user.avatar} alt={user.username} />
//           <AvatarFallback>
//             {user.username.slice(0, 2).toUpperCase()}
//           </AvatarFallback>
//         </Avatar>
//       ))}
//       {remainingUsers > 0 && (
//         <Avatar className="-ml-3 inline-block border-2 border-background hover:translate-y-1 transition-transform">
//           <AvatarFallback>+{remainingUsers}</AvatarFallback>
//         </Avatar>
//       )}
//     </div>
//   );
// }
