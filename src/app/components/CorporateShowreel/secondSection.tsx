"use client";
import classes from "@/app/styles/components/CorporateShowreel/secondSection.module.scss";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Modal = ({
  isOpen,
  onClose,
  videoLink,
}: {
  isOpen: boolean;
  onClose: () => void;
  videoLink: string;
}) => {
  if (!isOpen) return null;
  const videoUrl = `${videoLink}&autoplay=1`;

  return (
    <div onClick={onClose} className={classes.modal}>
      <div className={classes.modalContent}>
        <iframe
          width="1120"
          height="628"
          src={videoUrl}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

const extractVideoId = (videoLink: string): string | null => {
  const match = videoLink.match(/(?:youtube\.com\/embed\/|youtu\.be\/)([^?]+)/);
  return match ? match[1] : null;
};

const getThumbnailUrl = (videoId: string): string => {
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
};

const SecondSection: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState("");
  const data = [
    {
      id: 1,
      imageSrc: "liza1.jpeg",
      heading: "LIZA PAVLAKOS - Speaker on Leadership and Mental Resilience",
      description:
        "Join Liza Pavlakos through the journey of her travels, presenting keynotes globally,  inspiring one person at a time.||| Liza’s compelling story of overcoming trauma and adversity inspires you and your team to transform and triumph. Whether live or virtual, Liza creates memorable events that motivate meaningful outcomes.",
      videoLink:
        "https://www.youtube.com/embed/YhFDXHyp9sM?si=Qk9MKNUcZOLYCuFx",
    },
    {
      id: 2,
      imageSrc: "liza2.jpeg",
      heading: "Why you should book Liza Pavlakos for your next event!",
      description:
        "Discover the transformative power of Liza Pavlakos for your next event! Elevate the experience with a highly sought-after speaker, founder of Mind Hub Directory, and accomplished author of the novel Conviction. Recognized globally, Liza has received prestigious awards, including Toastmasters' Golden Gavel and the People Choice of Excellence Award. Ranked among the Top 10 Female Speakers in the World, she...",
      videoLink:
        "https://www.youtube.com/embed/R4gBa00p0RM?si=ZoyObM9eg9qNKM4u",
    },
    {
      id: 3,
      imageSrc: "liza3.jpeg",
      heading: "A Winning Mindset - LIZA PAVLAKOS- Corporate Showreel",
      description:
        "Explore the world of motivation and empowerment with Liza Pavlakos, a highly sought-after and accomplished speaker, founder of Mind Hub Directory, and author of the compelling novel Conviction. Recognized with Toastmasters' Golden Gavel Award, Liza is ranked among the Top 10 Female Speakers in the World by Real Leaders. Her impactful work includes being the 8th globally ranked speaker in Suicide Prevention...",
      videoLink:
        "https://www.youtube.com/embed/C_1ylQH43MM?si=cs0zKetkoCSJ7otd",
    },
    {
      id: 4,
      imageSrc: "liza4.jpeg",
      heading: "MESSAGE OF HOPE | Liza Pavlakos — Global Pandemic",
      description:
        "Amidst the challenges of the COVID-19 pandemic, join us for a powerful message of hope, resilience, and positivity. In this video, we share insights to uplift spirits and navigate through these tough times. Discover a beacon of hope as we discuss ways to find strength, support one another, and foster a sense of community. Subscribe for an inspiring journey towards brighter days ahead. Together, we can o... ",
      videoLink:
        "https://www.youtube.com/embed/3BE6gsG5M9U?si=c0Ssi_Cc_7P3UAaP",
    },
    {
      id: 5,
      imageSrc: "liza5.jpeg",
      heading: "Liza Pavlakos Corporate Showreel 2021 - Best Female Speaker",
      description:
        "2021 Showreel - Explore the world of motivation and empowerment with Liza Pavlakos, a highly sought-after and accomplished speaker, founder of Mind Hub Directory, and author of the compelling novel Conviction. Recognized with Toastmasters' Golden Gavel Award, Liza is ranked among the Top 10 Female Speakers in the World by Real Leaders. Her impactful work includes being the 8th globally ranked s...",
      videoLink:
        "https://www.youtube.com/embed/L8oZJaV2ZR8?si=JmC8G9Zi5svWaxfi",
    },
    {
      id: 6,
      imageSrc: "liza6.jpeg",
      heading: "Liza Pavlakos Story - Beyond Survival",
      description:
        "Together, we can make a difference.|||The Liza Pavlakos Foundation is a registered charity with the Australian Charities and Not-for-Profits Commission (ACNC).|||Liza’s early life was challenging, but today she uses her story to help o...",
      videoLink:
        "https://www.youtube.com/embed/joLz7IYDwiA?si=N_GCnGQADymjgkIl",
    },
    {
      id: 7,
      imageSrc: "liza7.jpeg",
      heading: "FOR BETTER LIVES | The Liza Pavlakos Foundation",
      description:
        "Life in the modern world can be stressful, confusing and challenging even when things are going well, but what happens when forces beyond your control intervene and take you on a dark journey with no escape?|||That’s exactly what has happened to Liza Pavlakos more than once, yet she has survived, and even thrived in the modern world. For her, it... ",
      videoLink:
        "https://www.youtube.com/embed/yn_4BxQptYc?si=gsIshOziIBiXxmy5",
    },
    {
      id: 8,
      imageSrc: "liza8.jpeg",
      heading: "THRIVE IN THE FACE OF ADVSERITY | Liza Pavlakos Motivation",
      description:
        "THRIVE IN THE FACE OF ADVSERITY | Liza Pavlakos Motivation|||Life in the modern world can be stressful, confusing and challenging even when things are going well, but what happens when forces beyond your control intervene and take you on a dark journey with no escape?...",
      videoLink:
        "https://www.youtube.com/embed/DGY3z-Rk20Q?si=9X78POMglVSeVGK0",
    },
    {
      id: 9,
      imageSrc: "liza9.jpeg",
      heading: "Liza Pavlakos 2018 Showreel: An Inspiring Journey",
      description:
        "Explore the world of motivation and empowerment with Liza Pavlakos, Founder of Mind Hub Directory—a mental health directory that strives to make a positive impact. Liza is a highly sought-after and accomplished speaker, as well as the author of the compelling novel Conviction. Recognized with Toastmasters' Golden Gavel Award, she is ranked among the Top 10 Female Speakers in the World by Real Lead...",
      videoLink:
        "https://www.youtube.com/embed/CKEweJ446Ek?si=bvAJs6ObruqOrtJM",
    },
    {
      id: 10,
      imageSrc: "liza10.jpeg",
      heading: "HOW TO STAY RESILIENT ON YOUR OWN - Liza Pavlakos Motivation",
      description:
        "Explore the world of motivation and empowerment with Liza Pavlakos, a highly sought-after and accomplished speaker, founder of Mind Hub Directory, and author of the compelling novel Conviction. Recognized with Toastmasters' Golden Gavel Award, Liza is ranked among the Top 10 Female Speakers in the World by Real Leaders. Her impactful work includes being the 8th globally ranked speaker in Suicide Prevention... ",
      videoLink:
        "https://www.youtube.com/embed/2uKyqYoDAiM?si=hamONDy5P9q-YLpV",
    },
    {
      id: 11,
      imageSrc: "liza11.jpeg",
      heading:
        "Mastering the Art of Manifestation- Liza Pavlakos- International Keynote Speaker",
      description:
        "Mastering the Art of Manifestation- Liza Pavlakos- International Keynote Speaker|||Explore the world of motivation and empowerment with Liza Pavlakos, Founder of Mind Hub Directory—a mental health directory that strives to make a positive impact. Liza is a highly sought-after and accomplis...",
      videoLink:
        "https://www.youtube.com/embed/lkiv1yVkKW4?si=uSNbGClMMSylzJba",
    },
    {
      id: 12,
      imageSrc: "liza12.jpeg",
      heading: "Overcoming Adversity Brings Wisdom-Liza Pavlakos",
      description:
        "Explore the world of motivation and empowerment with Liza Pavlakos, Founder of Mind Hub Directory—a mental health directory that strives to make a positive impact. Liza is a highly sought-after and accomplished speaker, as well as the author of the compelling novel Conviction. Recognized with Toastmasters' Golden Gavel Award, she is ranked among the Top 10 Female Speakers in the World by Real Lead...",
      videoLink:
        "https://www.youtube.com/embed/DGY3z-Rk20Q?si=NOY8ucOWqVxm_FCF",
    },
    {
      id: 13,
      imageSrc: "liza13.jpeg",
      heading:
        "A POWERFUL MINDSET. Liza Pavlakos Documentary. BEST ADVERSITY SPEAKER",
      description:
        "A POWERFUL MINDSET. Liza Pavlakos Documentary. BEST CORPORATE SPEAKER|||Life in the modern world can be stressful, confusing and challenging even when things are going well, but what happens when forces beyond your control intervene and take you on a dark journey with no... ",
      videoLink:
        "https://www.youtube.com/embed/5PKkyGts9Is?si=6vos-I-IHvrIdtPI",
    },
    {
      id: 14,
      imageSrc: "liza14.jpeg",
      heading:
        "Best Speaker Mini Showreel. LIZA PAVALKOS. Beyond Survival. Resilience.",
      description:
        "Explore the world of motivation and empowerment with Liza Pavlakos, Founder of Mind Hub Directory—a mental health directory that strives to make a positive impact. Liza is a highly sought-after and accomplished speaker, as well as the author of the compelling novel Conviction. Recognized with Toastmasters' Golden Gavel Award, she is ranked among the Top 10 Female Speakers in the World by Real Lead...",
      videoLink:
        "https://www.youtube.com/embed/T68bg-eTsPQ?si=fBg0k2CHL85mLI6Q",
    },
    {
      id: 15,
      imageSrc: "liza15.jpeg",
      heading: "Overcoming Adversity Conference Speaker Liza Pavlakos.",
      description:
        "Explore the world of motivation and empowerment with Liza Pavlakos, Founder of Mind Hub Directory—a mental health directory that strives to make a positive impact. Liza is a highly sought-after and accomplished speaker, as well as the author of the compelling novel Conviction. Recognized with Toastmasters' Golden Gavel Award, she is ranked among the Top 10 Female Speakers in the World by Real Lead...",
      videoLink:
        "https://www.youtube.com/embed/T68bg-eTsPQ?si=CJrl_GArM5NYEHLC",
    },
    {
      id: 16,
      imageSrc: "liza16.jpeg",
      heading:
        "Best Conference Speaker. Women Conferences. Liza Pavalakos. Beyond Survival",
      description:
        "Explore the world of motivation and empowerment with Liza Pavlakos, Founder of Mind Hub Directory—a mental health directory that strives to make a positive impact. Liza is a highly sought-after and accomplished speaker, as well as the author of the compelling novel Conviction. Recognized with Toastmasters' Golden Gavel Award, she is ranked among the Top 10 Female Speakers in the World by Real Lead...",
      videoLink:
        "https://www.youtube.com/embed/SH3EC5t3IPE?si=2E-ajAimgW0DxzrJ",
    },
    {
      id: 17,
      imageSrc: "liza17.jpeg",
      heading:
        "How To Focus On The Good Things In Life. Liza Pavlakos Motivation",
      description:
        "Explore the world of motivation and empowerment with Liza Pavlakos, Founder of Mind Hub Directory—a mental health directory that strives to make a positive impact. Liza is a highly sought-after and accomplished speaker, as well as the author of the compelling novel Conviction. Recognized with Toastmasters' Golden Gavel Award, she is ranked among the Top 10 Female Speakers in the World by Real Lead...",
      videoLink:
        "https://www.youtube.com/embed/5jCITJdFh1c?si=4oDVnbojGPSvJPvx",
    },
  ].map((item) => {
    const videoId = extractVideoId(item.videoLink);
    return {
      ...item,
      imageSrc: videoId ? getThumbnailUrl(videoId) : "",
    };
  });

  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      gsap.to(textRef.current, {
        x: -700,
        ease: "none",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }
  }, []);

  const openModal = (videoLink: string) => {
    setSelectedVideo(videoLink);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedVideo("");
  };

  return (
    <section className={`${classes.section}`}>
      <div className={`${classes.cards} container`}>
        {data.map((item) => {
          const descriptionParts = item.description
            ? item.description.split("|||")
            : [];

          return (
            <div
              key={item.id}
              className={classes.singleItem}
              onClick={
                item.videoLink ? () => openModal(item.videoLink) : undefined
              }
            >
              {item.imageSrc && (
                <div className={classes.image}>
                  <Image
                    src={item.imageSrc}
                    alt={item.heading}
                    width={500}
                    height={300}
                    style={{ cursor: item.videoLink ? "pointer" : "default" }}
                  />
                </div>
              )}
              <h1 className={classes.heading}>{item.heading}</h1>
              <p className={classes.dec}>
                {descriptionParts.map((part, index) => (
                  <React.Fragment key={index}>
                    {part}
                    {index < descriptionParts.length - 1 && <br />}
                  </React.Fragment>
                ))}
              </p>
            </div>
          );
        })}
      </div>
      <div className={`${classes.marquee} container`}>
        <div ref={textRef} className={classes.track}>
          {Array.from({ length: 200 }).map((_, index) => (
            <span key={index} className={classes.content}>
              • FOLLOW LIZA ON SOCIAL MEDIA{" "}
            </span>
          ))}
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        videoLink={selectedVideo}
      />
    </section>
  );
};

export default SecondSection;
