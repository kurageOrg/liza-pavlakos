"use client";
import dynamic from 'next/dynamic';
import Head from 'next/head';
import FirstSection from '../components/CorporateShowreel/firstSection';

const SecondSection = dynamic(() => import("../components/CorporateShowreel/secondSection"), { ssr: false });

export default function CorporateShowreel() {
  return (
    <>
      <Head>
        <title>Liza Pavlakos Corporate Showreel - Motivational and Leadership Speaker</title>
        <meta name="description" content="Watch Liza Pavlakos' corporate showreel and experience her captivating keynote presentations. Discover why Liza is a highly sought-after speaker on leadership and mental resilience." />
        <meta name="keywords" content="Liza Pavlakos, corporate showreel, motivational speaker, inspirational speaker, leadership speaker, keynote speaker" />
        <meta name="author" content="Liza Pavlakos" />
        <meta property="og:title" content="Liza Pavlakos Corporate Showreel - Motivational and Leadership Speaker" />
        <meta property="og:description" content="Watch Liza Pavlakos' corporate showreel and experience her captivating keynote presentations. Discover why Liza is a highly sought-after speaker on leadership and mental resilience." />
        <meta property="og:image" content="/path/to/showreel_image.jpg" />
        <meta property="og:url" content="https://www.yourwebsite.com/corporate-showreel" />
        <meta name="twitter:title" content="Liza Pavlakos Corporate Showreel - Motivational and Leadership Speaker" />
        <meta name="twitter:description" content="Watch Liza Pavlakos' corporate showreel and experience her captivating keynote presentations. Discover why Liza is a highly sought-after speaker on leadership and mental resilience." />
        <meta name="twitter:image" content="/path/to/showreel_image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://www.yourwebsite.com/corporate-showreel" />
      </Head>
      
      <div className="headerWrapper">
        <FirstSection />
        <SecondSection />
      </div>
    </>
  );
}
