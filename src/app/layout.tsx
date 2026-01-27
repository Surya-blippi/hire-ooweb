import type { Metadata } from "next";
import { Montserrat } from "next/font/google"; // Use Montserrat as per Uplers design
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Include necessary weights
});

export const metadata: Metadata = {
  title: "Hireoo | Hire Top Indian Talent",
  description: "Connect with pre-vetted top Indian talent for your software engineering and marketing needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${montserrat.variable} antialiased font-sans bg-background text-foreground transition-colors duration-300`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
