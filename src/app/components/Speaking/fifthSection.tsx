"use client";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import classes from "@/app/styles/components/Speaking/fifthSection.module.scss";
import {
  Microsoft, Dell, Lenovo, Palazzo, CocaCola, Emarits, Qatar, Vista, Beam, LeftArrow, RightArrow
} from "./svgs";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Item {
  id: number;
  svg: JSX.Element;
  text: string;
}

const contentDataTop: Item[] = [
  { id: 1, svg: <Microsoft />, text: "Power of Vulnerability, Overcoming Adversity" },
  { id: 2, svg: <Dell />, text: "Inspirational" },
  { id: 3, svg: <Lenovo />, text: "Mental Health Awareness" },
  { id: 4, svg: <Palazzo />, text: "Crisis Management" },
  // { id: 5, svg: <Beam />, text: "Power and Success" },
];

const contentDataBottom: Item[] = [
  { id: 1, svg: <CocaCola />, text: "Success and Resilience" },
  { id: 2, svg: <Emarits />, text: "A Powerful Mindset" },
  { id: 3, svg: <Qatar />, text: "Success and Resilience" },
  { id: 4, svg: <Vista />, text: "Mental Health Awareness" },
  
  // { id: 5, svg: <Beam />, text: "Power and Success" },
];
const mobData: Item[] = [
  { id: 5, svg: <Microsoft />, text: "Power of Vulnerability, Overcoming Adversity" },
  { id: 6, svg: <Dell />, text: "Inspirational" },
  { id: 7, svg: <Lenovo />, text: "Mental Health Awareness" },
  { id: 8, svg: <Palazzo />, text: "Crisis Management" },
  { id: 1, svg: <CocaCola />, text: "Success and Resilience" },
  { id: 2, svg: <Emarits />, text: "A Powerful Mindset" },
  { id: 3, svg: <Qatar />, text: "Success and Resilience" },
  { id: 4, svg: <Vista />, text: "Mental Health Awareness" },

];

const FifthSection = React.memo(() => {
  const topSliderRef = useRef<Slider>(null);
  const bottomSliderRef = useRef<Slider>(null);
  const [isClient, setIsClient] = useState(false);
  // const [isBackDisabled, setIsBackDisabled] = useState(true);
  // const [isForwardDisabled, setIsForwardDisabled] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  

  const settingsTop:any = {
    dots: false,
    infinite: false,
    arrows:false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: bottomSliderRef.current,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3.2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1240,
        settings: {
          slidesToShow: 3.3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3.1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1160,
        settings: {
          slidesToShow: 2.9,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1120,
        settings: {
          slidesToShow: 2.8,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 2.7,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1040,
        settings: {
          slidesToShow: 2.6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2.4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2.3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 2.2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 880,
        settings: {
          slidesToShow: 2.2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 840,
        settings: {
          slidesToShow: 2.1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 1.9,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1.8,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1.7,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1.6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const settingsBottom:any = {
    dots: false,
    infinite: false,
    arrows:false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: topSliderRef.current,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3.2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1240,
        settings: {
          slidesToShow: 3.3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3.1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1160,
        settings: {
          slidesToShow: 2.9,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1120,
        settings: {
          slidesToShow: 2.8,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 2.7,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1040,
        settings: {
          slidesToShow: 2.6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2.4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2.3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 2.2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 880,
        settings: {
          slidesToShow: 2.2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 840,
        settings: {
          slidesToShow: 2.1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 1.9,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1.8,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1.7,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1.6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const mobSettings:any = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1.2,
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

  // const handleBackClick = () => {
  //   topSliderRef.current?.slickPrev();
  //   bottomSliderRef.current?.slickPrev();
  //   setIsBackDisabled(true);
  //   setIsForwardDisabled(false);
  // };

  // const handleForwardClick = () => {
  //   topSliderRef.current?.slickNext();
  //   bottomSliderRef.current?.slickNext();
  //   setIsForwardDisabled(true);
  //   setIsBackDisabled(false);
  // };

  return (
    <section className={classes.section}>
      {isClient && (
        <>
          <div className={`${classes.top} container`}>
            <h1 className={classes.heading}>Some of Liza's Speaking Engagements</h1>
            {/* <div className={classes.navigation}>
              <div className={`${classes.left} ${isBackDisabled ? classes.disabled : classes.active}`} onClick={isBackDisabled ? undefined : handleBackClick}>
                <LeftArrow />
              </div>
              <div className={`${classes.right} ${isForwardDisabled ? classes.disabled : classes.active}`} onClick={isForwardDisabled ? undefined : handleForwardClick}>
                <RightArrow />
              </div>
            </div> */}
          </div>
          <div className={`${classes.content} container`}>
          <div className={classes.singleCard}>

          <Slider ref={topSliderRef} {...settingsTop}>
            {contentDataTop.map((item) => (
              <div key={item.id} className={classes.card}>
            <div className={classes.topImg}>{item.svg}</div>
                
                <p className={classes.dec}>{item.text}</p>
              </div>
            ))}
          </Slider>
          </div>
          <div className={classes.singleCard}>
          <Slider ref={bottomSliderRef} {...settingsBottom}>
            {contentDataBottom.map((item) => (
              <div key={item.id} className={classes.card}>
                <div className={classes.topImg}>{item.svg} </div>
                
                <p className={classes.dec}>{item.text}</p>
              </div>
            ))}
          </Slider>
          </div>

          <div className={classes.mob_singleCard}>
          <Slider ref={bottomSliderRef} {...mobSettings}>
            {mobData.map((item) => (
              <div key={item.id} className={classes.card}>
                <div className={classes.topImg}>{item.svg} </div>
                
                <p className={classes.dec}>{item.text}</p>
              </div>
            ))}
          </Slider>
          </div>

          </div>
        </>
      )}
    </section>
  );
});

export default FifthSection;
