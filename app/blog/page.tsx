import { BlogMdxFrontmatter, getAllBlogs } from "@/lib/markdown";
import { formatDate2, stringToDate } from "@/lib/utils";
import { Metadata } from "next";
import BlogCard from "@/components/ui/BlogCard";

export const metadata: Metadata = {
  title: "AriaDocs - Blog",
};

export default async function BlogIndexPage() {
  const blogs = (await getAllBlogs()).sort(
    (a, b) => stringToDate(b.date).getTime() - stringToDate(a.date).getTime()
  );
  return (
    <div className="w-full mx-auto flex flex-col gap-1 sm:min-h-[91vh] min-h-[88vh] pt-2">
      <div className="flex flex-col gap-5 my-24">
        <h1 className="text-7xl text-center">
          Blog
        </h1>
        <p className="  text-center text-3xl opacity-50 font-thin">
          Read about our latest product and research announcements
        </p>
      </div>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-8 gap-4 mb-5">
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
