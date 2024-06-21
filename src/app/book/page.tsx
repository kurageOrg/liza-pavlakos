import dynamic from 'next/dynamic';
import Head from 'next/head';
import FirstSection from '../components/Book/firstSection';

const SecondSection = dynamic(() => import("../components/Book/secondSection"), { ssr: false });
const SixthSection = dynamic(() => import("../components/Home/sixthSection"), { ssr: false });

export default function Book() {
  return (
    <>
      <Head>
        <title>Conviction by Liza Pavlakos - An Inspiring Journey</title>
        <meta name="description" content="Discover 'Conviction' by Liza Pavlakos, a powerful story of overcoming trauma and finding purpose. Pre-order your copy now." />
        <meta name="keywords" content="Liza Pavlakos, Conviction, book, inspirational story, overcoming trauma, motivational speaker" />
        <meta name="author" content="Liza Pavlakos" />
        <meta property="og:title" content="Conviction by Liza Pavlakos - An Inspiring Journey" />
        <meta property="og:description" content="Discover 'Conviction' by Liza Pavlakos, a powerful story of overcoming trauma and finding purpose. Pre-order your copy now." />
        <meta property="og:image" content="/path/to/liza_book_cover.jpg" />
        <meta property="og:url" content="https://www.lizapavlakos.com/book" />
        <meta name="twitter:title" content="Conviction by Liza Pavlakos - An Inspiring Journey" />
        <meta name="twitter:description" content="Discover 'Conviction' by Liza Pavlakos, a powerful story of overcoming trauma and finding purpose. Pre-order your copy now." />
        <meta name="twitter:image" content="/path/to/liza_book_cover.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://www.lizapavlakos.com/book" />
      </Head>
      <div className="headerWrapper">
        <FirstSection />
        <SecondSection />
        <SixthSection />
      </div>
    </>
  );
}
