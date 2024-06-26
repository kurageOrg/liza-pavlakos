import "@/app/styles/main.scss";
import { GLt, GMd, GRg, HRg, SRg } from "./components/Fonts";
import Header from "./components/Layout/header";
import Footer from "./components/Layout/footer";
import { Analytics } from '@vercel/analytics/react';

export const metadata: any = {
  title: "Liza Pavlakos",
  description: "Liza Pavlakos is an internationally renowned keynote speaker on leadership and mental resilience. Learn more about her journey and how she can inspire your team.",
  image: "https://lh3.googleusercontent.com/pw/AP1GczNC3aw1ry-l9DNfKu4zgZVPXeKaw3Q2VriarjBv97tt7unUCWyLgAhAUXhJc9hr8CXR-gGwhVHUV_Gs146qjsWu7itRqdFxQcW7lyGdmmx_MC1niM01Ei8genCqSrcwcGeb6TGZcY1ITpCre7p79UWS=w3040-h2022-s-no-gm",
  url: "https://www.lizapavlakos.com" // Replace with your actual website URL
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Liza Pavlakos",
    "description": metadata.description,
    "image": metadata.image,
    "url": metadata.url,
    "sameAs": [
      "https://www.linkedin.com/in/liza-pavlakos",
      "https://twitter.com/LizaPavlakos"
    ],
    "jobTitle": "Keynote Speaker",
    "worksFor": {
      "@type": "Organization",
      "name": "Liza Pavlakos"
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.lizapavlakos.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Speaking",
          "item": "https://www.lizapavlakos.com/speaking"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "About",
          "item": "https://www.lizapavlakos.com/about"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Corporate Showreel",
          "item": "https://www.lizapavlakos.com/corporate-showreel"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Book",
          "item": "https://www.lizapavlakos.com/book"
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "Foundation",
          "item": "https://www.lizapavlakos.com/foundation"
        },
        {
          "@type": "ListItem",
          "position": 7,
          "name": "Contact",
          "item": "https://www.lizapavlakos.com/contact"
        }
      ]
    }
  };

  return (
    <html lang="en">
      <head>
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" sizes="any" />
        <link rel="preload" href="/path/to/font.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/path/to/another-font.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="title" content={metadata.title} />
        <meta name="description" content={metadata.description} />
        <meta name="image" content={metadata.image} />
        <meta name="author" content="Liza Pavlakos" />
        <meta name="keywords" content="Liza Pavlakos, keynote speaker, leadership, mental resilience, motivational speaker, corporate events, business experience" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.image} />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href={metadata.url} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${HRg.variable} ${GRg.variable} ${GMd.variable} ${GLt.variable} ${SRg.variable}`}>
        <Header />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
