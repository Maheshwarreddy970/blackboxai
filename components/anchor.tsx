"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps } from "react";

type AnchorProps = ComponentProps<typeof Link> & {
  absolute?: boolean;
  activeClassName?: string;
  disabled?: boolean;
};

export default function Anchor({
  absolute,
  className = "",
  activeClassName = "",
  disabled,
  children,
  ...props
}: AnchorProps) {
  const path = usePathname();
  let isMatch = absolute
    ? props.href.toString().split("/")[1] == path.split("/")[1]
    : path === props.href;

  if (props.href.toString().includes("http")) isMatch = false;

  if (disabled)
    return (
      <div className={cn(className, "cursor-not-allowed")}>{children}</div>
    );
  return (
    <Link className={cn(className, isMatch && activeClassName, isMatch ? "opacity-100" : "opacity-50", "hover:opacity-100")} {...props}>
      <div className={cn("relative after:absolute font-normal text-lg after:bg-white after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:translate-y-0.5 hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300",isMatch && "")}>
        <span className={cn("text-white",isMatch && "")}>{children}</span>
      </div>
    </Link>
  );
}
