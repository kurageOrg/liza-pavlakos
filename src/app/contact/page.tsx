import dynamic from 'next/dynamic';
import Head from 'next/head';
import FirstSection from '../components/Contact/firstSection';

const SecondSection = dynamic(() => import("../components/Contact/secondSection"), { ssr: false });
const SixthSection = dynamic(() => import("../components/Home/sixthSection"), { ssr: false });

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Liza Pavlakos - Speaking & Media Enquiries</title>
        <meta name="description" content="Get in touch with Liza Pavlakos for speaking engagements, media enquiries, or any other questions. Fill out the contact form or reach out directly via email or phone." />
        <meta name="keywords" content="Liza Pavlakos, contact, speaking enquiries, media enquiries, keynote speaker, motivational speaker" />
        <meta name="author" content="Liza Pavlakos" />
        <meta property="og:title" content="Contact Liza Pavlakos - Speaking & Media Enquiries" />
        <meta property="og:description" content="Get in touch with Liza Pavlakos for speaking engagements, media enquiries, or any other questions. Fill out the contact form or reach out directly via email or phone." />
        <meta property="og:image" content="/path/to/contact_image.jpg" />
        <meta property="og:url" content="https://www.yourwebsite.com/contact" />
        <meta name="twitter:title" content="Contact Liza Pavlakos - Speaking & Media Enquiries" />
        <meta name="twitter:description" content="Get in touch with Liza Pavlakos for speaking engagements, media enquiries, or any other questions. Fill out the contact form or reach out directly via email or phone." />
        <meta name="twitter:image" content="/path/to/contact_image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://www.yourwebsite.com/contact" />
      </Head>
      <div className="headerWrapper">
        <FirstSection />
        <SecondSection />
        <SixthSection />
      </div>
    </>
  );
}
