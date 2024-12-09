import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { HeartIcon, TriangleIcon } from "lucide-react";

const FooterLinks = [
  {
    title: "Grok",
    href: '/grok',
  },
  {
    title: "Api",
    href: "/api",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Documentation",
    href: "/docs",
  },
  {
    title: "Legal",
    href: "/legal",
  },
]
export function Footer() {
  return (
    <footer className='  md:h-[7rem] gap-2 h-[10rem] bg-black  md:gap-20 my-24 flex-col md:flex-row flex  justify-center items-center '>
      {
        FooterLinks.map((link,i) => (
          <Link href={link.href} key={i} className=' opacity-70 hover:opacity-100'>
            {link.title}
          </Link>
        ))
      }
    </footer>
  );
}

export function FooterButtons() {
  return (
    <>
      <Link
        href="https://vercel.com/templates/next.js/documentation-template"
        className={buttonVariants({ variant: "outline", size: "sm" })}
      >
        <TriangleIcon className="h-[0.8rem] w-4 mr-2 text-primary fill-current" />
        Deploy
      </Link>
      <Link
        href="https://github.com/sponsors/nisabmohd"
        className={buttonVariants({ variant: "outline", size: "sm" })}
      >
        <HeartIcon className="h-4 w-4 mr-2 text-red-600 fill-current" />
        Sponsor
      </Link>
    </>
  );
}
