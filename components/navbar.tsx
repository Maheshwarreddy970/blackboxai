// import { ModeToggle } from "@/components/theme-toggle";
import Link from "next/link";
// import { buttonVariants } from "./ui/button";
// import Search from "./search";
import Anchor from "./anchor";
import { SheetLeftbar } from "./leftbar";
import { page_routes } from "@/lib/routes-config";
import { SheetClose } from "@/components/ui/sheet";
import Darklogo from "@/public/Blackboxai-logo-black.svg";
import { ModeToggle } from "./theme-toggle";
import BlackLogo from "@/icons/BlackLogo";
import WhiteLogo from "@/icons/WhiteLogo";

export const NAVLINKS = [
  {
    title: "Grok",
    href: `/grok`,
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
    href: `/docs${page_routes[0].href}`,
  },
  {
    title: "Carreers",
    href: "/careers",
  },
];

export function Navbar() {
  return (
    <nav className="w-full fixed bg-white dark:bg-black h-20 top-0 z-50 bg-background">
      <div className=" max-w-[80rem] mx-auto h-full flex items-center justify-between md:gap-2">
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
      <BlackLogo/>
      <WhiteLogo />

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
            activeClassName="!text-primary dark:font-medium"
            absolute
            className="flex items-center gap-1"
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
