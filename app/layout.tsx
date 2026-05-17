import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ProgressProvider } from "@/context/ProgressContext";
import { Sidebar } from "@/components/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Grade 7 Science | Interactive Learning",
  description: "A highly interactive, gamified e-learning platform for CBSE Grade 7 Science.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground flex h-screen overflow-hidden`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ProgressProvider>
            <Sidebar />
            <main className="flex-1 overflow-y-auto w-full lg:pt-0 pt-16">
              <div className="max-w-7xl mx-auto p-4 md:p-8 lg:p-12">
                {children}
              </div>
            </main>
          </ProgressProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
