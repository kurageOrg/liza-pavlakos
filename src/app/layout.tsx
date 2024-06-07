import "@/app/styles/main.scss";
import { GLt, GMd, GRg, HRg, SRg } from "./components/Fonts";
import Header from "./components/Layout/header";
import Footer from "./components/Layout/footer";

export const metadata: any = {
  title: "Liza Pavlakos",
  description: "Liza Pavlakos",
  image: "https://lh3.googleusercontent.com/pw/AP1GczNC3aw1ry-l9DNfKu4zgZVPXeKaw3Q2VriarjBv97tt7unUCWyLgAhAUXhJc9hr8CXR-gGwhVHUV_Gs146qjsWu7itRqdFxQcW7lyGdmmx_MC1niM01Ei8genCqSrcwcGeb6TGZcY1ITpCre7p79UWS=w3040-h2022-s-no-gm"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="/favicon.svg" rel="icon" type="image/png" sizes="16x16" />
        <link href="/favicon.svg" rel="icon" type="image/png" sizes="32x32" />
        <link href="/favicon.svg" rel="icon" type="image/png" sizes="96x96" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.image} />
        <meta property="og:type" content="website" />
      </head>
      
      <body className={` ${HRg.variable} ${GRg.variable} ${GMd.variable} ${GLt.variable}  ${SRg.variable}`}><Header />{children}<Footer/></body>
    </html>
  );
}
