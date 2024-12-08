// import { ModeToggle } from "@/components/theme-toggle";
import Link from "next/link";
// import { buttonVariants } from "./ui/button";
// import Search from "./search";
import Anchor from "./anchor";
import { SheetLeftbar } from "./leftbar";
import { page_routes } from "@/lib/routes-config";
import { SheetClose } from "@/components/ui/sheet";
import Lightlogo from "@/public/Blackboxai-logo-white.svg";
import Darklogo from "@/public/Blackboxai-logo-black.svg";
import { ModeToggle } from "./theme-toggle";

export const NAVLINKS = [
  {
    title: "GROK",
    href: `/grok`,
  },
  {
    title: "API",
    href: "/api",
  },
  {
    title: "BLOG",
    href: "/blog",
  },
  {
    title: "DOCEMENTATION",
    href: `/docs${page_routes[0].href}`,
  },
  {
    title: "CAREERS",
    href: "/careers",
  },
];

export function Navbar() {
  return (
    <nav className="w-full bg-white dark:bg-black h-16 sticky top-0 z-50 bg-background">
      <div className="sm:container max-w-[80rem] mx-auto h-full flex items-center justify-between md:gap-2">
        <div className="flex items-center gap-5">
          <SheetLeftbar />
          <div className="flex items-center gap-6">
            <div className="sm:flex hidden">
              <Logo></Logo>
            </div>
            <div className="lg:flex hidden items-center gap-4 text-sm font-medium text-muted-foreground">
              <NavMenu />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            {/* <Search /> */}
            <div className="flex ml-2.5 sm:ml-0">
              {/* <Link
                href="https://github.com/nisabmohd/NexDocs"
                className={buttonVariants({ variant: "ghost", size: "icon" })}
              >
                <GithubIcon className="h-[1.1rem] w-[1.1rem]" />
              </Link>
              <Link
                href="#"
                className={buttonVariants({
                  variant: "ghost",
                  size: "icon",
                })}
              >
                <TwitterIcon className="h-[1.1rem] w-[1.1rem]" />
              </Link> */}
              <ModeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export function Logo() {
  return (
    <Link href="/" className="">
      <Lightlogo className="  hidden dark:block  w-72 " />
      <Darklogo className=" dark:hidden w-72 " />

    </Link>
  );
}


export function NavMenu({ isSheet = false }) {
  return (
    <>
      {NAVLINKS.map((item) => {
        const Comp = (
          <Anchor
            key={item.title + item.href}
            activeClassName="!text-primary dark:font-medium font-semibold"
            absolute
            className="flex items-center gap-1 dark:text-stone-300/85 text-stone-800"
            href={item.href}
          >
            {item.title}
          </Anchor>
        );
        return isSheet ? (
          <SheetClose key={item.title + item.href} asChild>
            {Comp}
          </SheetClose>
        ) : (
          Comp
        );
      })}
    </>
  );
}
