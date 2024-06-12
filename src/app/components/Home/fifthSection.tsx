"use client";
import classes from "@/app/styles/components/Home/fifthSection.module.scss";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
const FifthSection = React.memo(() => {
  const data = [
    {
      id: 1,
      imageSrc: "lizaSec_one.jpeg",
      heading: "Action",
      description:
        "Liza’s sessions are tailored to address the specific challenges and opportunities facing your audience. The result is measurable outcomes that make a positive difference.||| Her inspiring messaging, delivered via purposeful keynote presentations, helps create mindful, sustainable change.",
    },
    {
      id: 2,
      imageSrc: "lizaSec2.jpeg",
      heading: "Energy & Compelling",
      description:
        "Entertaining and enriching, this motivates your audience to tap into their own unique potential. A wealth of practical tools and takeaways encourages action and delivers immediate results.",
    },
    {
      id: 3,
      imageSrc: "lizaSec3.jpeg",
      heading: "real",
      description:
        "At its core, the human spirit can be incredibly courageous. Liza’s story is a potent reminder of the positive ways in which learning from lived experiences can help propel organisations, teams, and everyone within those teams to strive for greater heights and reach them.",
    },
    {
      id: 4,
      imageSrc: "lizaSec4.jpeg",
      heading: "Enlightening",
      description:
        "As a survivor of abuse and violence, Liza shares elements of her own life with authenticity and honesty, explaining the importance of understanding how to heal the heart to rediscover your true self.",
    },
  ];
  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1530,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3.5,
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
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1.4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1.3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.3,
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
    ],
    
    
  };

  return (
    <section className={`${classes.section} `}>
      <div className={`${classes.top} container `}>
        <div className={classes.left}>
          <Image
            src="/assets/Images/Section_4/lizaImg.jpg"
            alt="Liza Pavlakos in the right corner"
            fill
          />
        </div>
        <div className={classes.right}>
          <h1 className={classes.mob_heading}>AWARDS</h1>
          <ul className={classes.list}>
            <li className={classes.singleItem}>
              <p className={classes.head}>
                Toastmasters' Golden Gavel Award Honouree
              </p>
              <p className={classes.dec}>Toastmasters International</p>
            </li>
            <li className={classes.singleItem}>
              <p className={classes.head}>
                Ranked among the Top 10 Female Speakers in the World
              </p>
              <p className={classes.dec}>Real Leaders</p>
            </li>
            <li className={classes.singleItem}>
              <p className={classes.head}>
                Ranks 8th in Suicide Prevention speaking globally
              </p>
              <p className={classes.dec}>Engage</p>
            </li>
            <li className={classes.singleItem}>
              <p className={classes.head}>
                Winner of the People Choice of Excellence Award
              </p>
              <p className={classes.dec}>HR Congress & Asia HRD Summit</p>
            </li>
            <li className={classes.singleItem}>
              <p className={classes.head}>
                Winner of the Super Achievement Award
              </p>
              <p className={classes.dec}>The Women's World Leadership</p>
            </li>
          </ul>
        </div>
      </div>
      <section className={`${classes.fifthSection} `}>
        <div className={`${classes.content}  container`}>
          <div className={classes.head}>
            Why Choose Liza as Your Next Keynote Speaker for Your Event?
          </div>
          <div className={classes.dec}>
            <h1 className={classes.text}>Empowering Audiences Worldwide</h1>{" "}
            <Link href="/contact">
            <button className={classes.hire}>     
book liza </button></Link>
          </div>{" "}
          <div className={classes.cards}>
            
                <Slider {...settings}>
                {data.map((item) => {
                  const descriptionParts = item.description
                    ? item.description.split("|||")
                    : [];
  
                  return (
                    <div key={item.id} className={classes.singleItem}>
                      <div className={classes.image}>
                        <Image
                          src={`/assets/Images/section_5/${item.imageSrc}`}
                          alt={item.heading}
                          width={350}
                          height={300}
                          className={classes[`image-${item.id}`]}
                        />
                      </div>
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
              </Slider>
          
          </div>
   
          <div className={classes.bottomBtn}>
            {" "}
            <Link href="/contact">

            <button className={classes.mob_hire}>book liza</button>
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
});

export default FifthSection;
