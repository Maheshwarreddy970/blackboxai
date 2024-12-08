import { Leftbar } from "@/components/leftbar";

export default function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex items-start gap-8 max-w-[80rem] mx-auto">
      <Leftbar key="leftbar" />
      <div className="flex-[5.25] ">{children}</div>
    </div>
  );
}
