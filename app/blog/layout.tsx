import { PropsWithChildren } from "react";

export default function BlogLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col items-start justify-center pb-10 w-full mx-auto px-4 lg:px-0">
      {children}
    </div>
  );
}
