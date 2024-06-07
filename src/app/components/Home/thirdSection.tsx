"use client";
import classes from "@/app/styles/components/Home/thirdSection.module.scss";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const ThirdSection = React.memo(() => {
  const data = [
    { years: "10+ Yrs", description: "Of Keynote Speaking" },
    { years: "30+ Yrs", description: "Business Experience" },
    { years: "50k+", description: "Lives Inspired" },
    { years: "15+", description: "Countries Spoken In" },
    { years: "4.8/5", description: "50+ Feedback Evaluation" },
  ];
  const [viewPortEntered, setViewPortEntered] = useState(false);

  const getNumericValue = (str: any) => {
    if (str.includes("/")) {
      return parseFloat(str.split("/")[0]);
    }
    return parseFloat(str.replace(/[^\d.]/g, "").replace(/k/i, "000"));
  };
  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1.5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.9,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1.8,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1.7,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 440,
        settings: {
          slidesToShow: 1.25,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 380,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 340,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ]
  };
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
  return (
    <section className={`${classes.section} `}>
      <header className={`${classes.top} container`}>
        <h1 className={classes.heading}>Welcome to Liza Pavlakos</h1>
        <h2 className={classes.subHeading}>
          Inspiring Minds, Transforming Lives!
        </h2>
        <p className={classes.dec}>
          As a globally renowned motivational keynote speaker, Liza Pavlakos
          ignites inspiration and catalyzes transformation. With a distinguished
          track record of empowering audiences worldwide, Liza's captivating
          keynote presentations leave an indelible mark on hearts and minds.
        </p>
        <button className={classes.podcast} aria-label="Listen to podcast">
          <Link href="/corporate-showreel"> corporate showreel</Link>
        </button>
      </header>
      <div className={`${classes.centerPic} container `}>
        <div className={classes.content}>
          <div className={classes.Leftcorner}>
            <ImageBlock
              src="/assets/Images/Section_3/lizarLeftcorner.jpeg"
              alt="Liza Pavlakos in the right corner"
              priority={true}
            />
          </div>
          <div className={classes.secondSec}>
            <div className={classes.Blackmikeleft}>
              <ImageBlock
                src="/assets/Images/Section_3/lizaBlackmikeleft.jpeg"
                alt="Liza Pavlakos with a black microphone on the left"
              />
            </div>
            <div className={classes.Blacksmile}>
              <ImageBlock
                src="/assets/Images/Section_3/lizaBlacksmile.jpeg"
                alt="Liza Pavlakos smiling in black attire"
              />
            </div>
          </div>
          <div className={classes.WhitecoatCenter}>
            <ImageBlock
              src="/assets/Images/Section_3/lizaWhitecoatCenter.jpeg"
              alt="Liza Pavlakos in a white coat, centered"
              priority={true}
            />
          </div>
          <div className={classes.thirdSec}>
            <div className={classes.lizaHugs}>
              <ImageBlock
                src="/assets/Images/Section_3/lizaHugs.jpeg"
                alt="Liza Pavlakos giving a hug"
              />
            </div>
            <div className={classes.WhiteStandRight}>
              <ImageBlock
                src="/assets/Images/Section_3/lizaWhiteStandRight.jpeg"
                alt="Liza Pavlakos standing to the right in a white outfit"
              />
            </div>
          </div>
          <div className={classes.Rightcorner}>
            <ImageBlock
              src="/assets/Images/Section_3/lizarRightcorner.jpeg"
              alt="Liza Pavlakos in the right corner, repeated image"
            />
          </div>
        </div>
      </div>
      <div className={classes.mob_centerPic}>
        <Slider {...settings}>
          <div className={classes.image}>
            <ImageBlock
              src="/assets/Images/Section_3/lizaWhitecoatCenter.jpeg"
              alt="Liza Pavlakos in a white coat, centered"
              className={classes.first}
            />
          </div>
          <div className={classes.image}>
            <ImageBlock
              src="/assets/Images/Section_3/lizaHugs.jpeg"
              alt="Liza Pavlakos giving a hug"
              className={classes.second}
            />
          </div>
          <div className={classes.image}>
            <ImageBlock
              src="/assets/Images/Section_3/lizaBlackmikeleft.jpeg"
              alt="Liza Pavlakos with a black microphone on the left"
              className={classes.third}
            />
          </div>
          <div className={classes.image}>
            <ImageBlock
              src="/assets/Images/Section_3/lizaWhiteStandRight.jpeg"
              alt="Liza Pavlakos standing to the right in a white outfit"
              className={classes.fourth}
            />
          </div>
          <div className={classes.image}>
            <ImageBlock
              src="/assets/Images/Section_3/lizarLeftcorner.jpeg"
              alt="Liza Pavlakos in the left corner"
              className={classes.fifth}
            />
          </div>

          <div className={classes.image}>
            <ImageBlock
              src="/assets/Images/Section_3/lizarRightcorner.jpeg"
              alt="Liza Pavlakos in the right corner, repeated image"
              className={classes.sixth}
            />
          </div>
        </Slider>
      </div>
      <div className={`${classes.yrs} container`}>
        <section className={`${classes.content} `}>
          {data.map((item, index) => (
            <div key={index} className={classes.singleItem}>
              {item.years.includes("/") ? (
                <h2 className={classes.heading}>{item.years}</h2>
              ) : (
                <CountUp
                  end={getNumericValue(item.years)}
                  //@ts-ignore
                  start={viewPortEntered ? null : 0}
                  duration={3}
                  suffix={
                    item.years.includes("k")
                      ? "k+"
                      : item.years.includes("Yrs")
                      ? "+ Yrs"
                      : "+"
                  }
                  onEnd={() => setViewPortEntered(true)}
                >
                  {({ countUpRef }: any) => (
                    <VisibilitySensor
                      active={!viewPortEntered}
                      //@ts-ignore
                      onChange={(isVisible) => {
                        if (isVisible) {
                          setViewPortEntered(true);
                        }
                      }}
                      delayedCall
                    >
                      <h2 ref={countUpRef} className={classes.heading} />
                    </VisibilitySensor>
                  )}
                </CountUp>
              )}
              <p className={classes.dec}>{item.description}</p>
            </div>
          ))}
        </section>
      </div>

            <div className={`${classes.Marquee} container`} >
              <div className={classes.content} ref={textRef}>
        <h1 className={classes.heading} >
          • award winning international keynote speaker
        </h1>
        <h1 className={classes.heading}>
          • award winning international keynote speaker
        </h1>
        <h1 className={classes.heading}>
          • award winning international keynote speaker
        </h1>
        <h1 className={classes.heading}>
          • award winning international keynote speaker
        </h1>
        <h1 className={classes.heading}>
          • award winning international keynote speaker
        </h1>
        </div>
      </div>
    </section>
  );
});

function ImageBlock({ src, alt, priority = false, className }: any) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      sizes="(max-width: 768px) 100vw, 50vw"
      className={className}
    />
  );
}
export default ThirdSection;
