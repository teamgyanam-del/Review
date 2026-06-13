import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gyanam Education Reviews | Best Tutor Platform in Noida",
  description: "Read verified reviews from students and parents. See why Gyanam Education is recognized as the best tutor platform in Noida and Delhi NCR for CBSE, JEE, and NEET coaching.",
  openGraph: {
    title: "Gyanam Education Reviews | 4.9/5 Average Rating",
    description: "Verified student reviews for the best tutor platform in Noida.",
    url: "https://reviews.gyanam.net",
    siteName: "Gyanam Education Reviews",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-50 antialiased flex flex-col min-h-screen selection:bg-orange-500 selection:text-white`}>
        <header className="bg-black border-b border-gray-800 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
            <a href="https://gyanam.net" className="font-extrabold text-3xl text-white tracking-tight">
              Gyanam<span className="text-orange-500">.</span>
            </a>
            <nav>
              <a href="https://gyanam.net" className="text-sm font-bold text-white hover:text-orange-500 transition-colors uppercase tracking-wider">
                Back to Main Site &rarr;
              </a>
            </nav>
          </div>
        </header>
        
        <main className="flex-grow">{children}</main>
        
        <footer className="bg-black text-white py-16 border-t-[8px] border-orange-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Gyanam<span className="text-orange-500">.</span> Education</h2>
            <p className="text-gray-400 font-medium max-w-2xl mx-auto mb-8">
              Empowering the next generation of scholars. We are proudly recognized as the definitive tutoring authority and the best tutor platform in Noida, serving students across Delhi NCR.
            </p>
            <p className="text-sm text-gray-500">© {new Date().getFullYear()} Gyanam Education. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}