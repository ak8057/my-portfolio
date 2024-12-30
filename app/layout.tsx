  import "./globals.css";
  import { ReactNode } from "react";
  import type { Metadata } from "next";
  import { Syne } from "next/font/google";
  import { Analytics } from "@vercel/analytics/react";

  const syne = Syne({
    subsets: ["latin"],
    display: "block",
    weight: ["400", "500", "600", "700", "800"],
  });

  export const metadata: Metadata = {
    title: "Abhay Kumar — Web developer",
    description:
      "Web Developer and Web Designer, Focused on interfaces and experiences.",
    generator: "Next.js",
    applicationName: "Abhay Kumar",
    keywords: [
      "freelance",
      "developer",
      "freelance developer",
      "frontend",
      "react",
      "frontend developer",
      "frontend engineer",
      "creative",
      "creative developer",
      "creative engineer",
      "tech",
      "India",
      "software",
      "software developer",
      "portfolio",
      "frontend developer portfolio",
      "creative developer portfolio",
    ],
    colorScheme: "dark",
    openGraph: {
      title: "Abhay Kumar — Web developer",
      description:
        "Web Developer and Web Designer, Focused on interfaces and experiences.",
      url: "https://abhaykumar.vercel.app/",
      siteName: "abhaykumar.vercel.app",
      images: [
        {
          url: "https://raw.githubusercontent.com/ak8057/my-portfolio/refs/heads/main/public/image.png",
          width: 1200,
          height: 630,
          alt: "Abhay Kumar — Web Developer",
        },
      ],
      locale: "en-US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Victor Williams — Frontend Engineer",
      description:
        "Web Developer and Web Designer, Focused on interfaces and experiences.",
      creator: "abhaykumar__",
      creatorId: "1243720976552144897",
      images: [
        "https://raw.githubusercontent.com/ak8057/my-portfolio/refs/heads/main/public/image.png",
      ],
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: false,
        noimageindex: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    category: "technology",
  };

  type RootLayoutProps = {
    children: ReactNode;
  };

  export default function RootLayout({ children }: RootLayoutProps) {
    return (
      <html lang="en">
        <body
          className={`${syne.className} scroll-smooth scrollbar-thin scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
        >
          {children}
          <Analytics />
        </body>
      </html>
    );
  }
