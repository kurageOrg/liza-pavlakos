"use client";
import dynamic from 'next/dynamic';
import FirstSection from '../components/CorporateShowreel/firstSection';

const SecondSection = dynamic(() => import("../components/CorporateShowreel/secondSection"), { ssr: false });

export default function CorporateShowreel() {
  return (
    <div className="headerWrapper">
      <FirstSection />
      <SecondSection />
    </div>
  );
}
