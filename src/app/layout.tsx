import "@/app/styles/main.scss";
import { GLt, GMd, GRg, HRg, SRg } from "./components/Fonts";
import Header from "./components/Layout/header";
import Footer from "./components/Layout/footer";

export const metadata: any = {
  title: "Liza Pavlakos",
  description: "Liza Pavlakos is an internationally renowned keynote speaker on leadership and mental resilience. Learn more about her journey and how she can inspire your team.",
  image: "https://lh3.googleusercontent.com/pw/AP1GczNC3aw1ry-l9DNfKu4zgZVPXeKaw3Q2VriarjBv97tt7unUCWyLgAhAUXhJc9hr8CXR-gGwhVHUV_Gs146qjsWu7itRqdFxQcW7lyGdmmx_MC1niM01Ei8genCqSrcwcGeb6TGZcY1ITpCre7p79UWS=w3040-h2022-s-no-gm",
  url: "https://www.lizapavlakos.com/",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Liza Pavlakos",
            "description": metadata.description,
            "image": metadata.image,
            "url": metadata.url,
            "sameAs": [
              "https://www.linkedin.com/in/liza-pavlakos",
              "https://twitter.com/LizaPavlakos",
              // Add more social profiles if available
            ],
            "jobTitle": "Keynote Speaker",
            "worksFor": {
              "@type": "Organization",
              "name": "Liza Pavlakos"
            }
          })}
        </script>
      </head>
      <body className={`${HRg.variable} ${GRg.variable} ${GMd.variable} ${GLt.variable} ${SRg.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
