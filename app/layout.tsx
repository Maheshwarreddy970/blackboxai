import type { Metadata } from "next";
import { ThemeProvider } from "@/components/contexts/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import "@/styles/globals.css";

;

export const metadata: Metadata = {
  title: "AriaDocs - Template",
  metadataBase: new URL("https://ariadocs.vercel.app/"),
  description:
    "This comprehensive documentation template, crafted with Next.js and available as open-source, delivers a sleek and responsive design, tailored to meet all your project documentation requirements.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="font-sans antialiased tracking-wide"
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"

          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className=" h-auto scroll-smooth">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
