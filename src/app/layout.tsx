import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "./fontawsome/css/all.css"
import "./style/style.css"
import "./style/responsive.css"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "FanumBuild",
  description: "At Fanum Build, we're passionate about helping businesses and individuals bring their ideas to life. We specialize in providing top-notch freelancing services, including graphic design, web development, SEO, and more. With a commitment to quality and creativity, our team works closely with clients to deliver solutions that not only meet but exceed expectations. Every project is a collaboration—crafted with care, precision, and innovative thinking.We believe in clear communication, timely delivery, and long-term partnerships. Whether you're launching a new brand or improving an existing one, Fanum Build is your go-to partner for reliable, results-driven services.",
  icons: {
    icon: '/logo5.png', 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
