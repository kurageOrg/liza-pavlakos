"use client";
import React from "react";
import Image from "next/image";
import classes from "@/app/styles/components/Speaking/fourthSection.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
interface CardData {
  id: number;
  title?: string;
  desc?: string;
  imgUrl?: string;
}

const cardData: CardData[] = [
  { id: 1, imgUrl: "/assets/Images/speaking/conference/liza_1.png" },
  {
    id: 2,
    title: "Motivated Salespeople",
    desc: "Book Liza for your Sales Conferences and experience the inspiration of her journey from adversity to sales mastery. Ignite your team’s motivation with her story of achieving sales success through passion, determination, and unwavering confidence.",
  },
  { id: 3, imgUrl: "/assets/Images/speaking/conference/liza_2.jpeg" },
  {
    id: 4,
    title: "Financial Services",
    desc: "Liza tailors an inspiring story for the financial sector, empowering professionals in banking, credit unions, financial planning, accounting, investment advisory, and insurance. Experience resilience driving exceptional sales performance, excel in prospecting, and elevate client relationships. Join Liza on this compelling journey toward sales excellence and be inspired like never before.",
  },
  {
    id: 6,
    title: "Education",
    desc: "Liza Pavlakos, from homelessness to successful entrepreneur and education advocate, shares a vital story for education conferences. Her journey highlights the transformative power of education and resilience, inspiring attendees to embrace perseverance and create a brighter future.",
  },
  { id: 5, imgUrl: "/assets/Images/speaking/conference/liza_3.jpeg" },

  {
    id: 8,
    title: "Mental Health & Wellbeing",
    desc: "Liza Pavlakos, founder of Mind Hub Directory, guides a global mental health initiative, offering therapy and support worldwide. At conferences, she highlights mental health’s importance, encouraging prioritised well-being and employee support. Immerse yourself in the transformative impact of her global expertise.",
  },
  { id: 7, imgUrl: "/assets/Images/speaking/conference/liza_4.jpeg" },

  { id: 9, imgUrl: "/assets/Images/speaking/conference/liza_5.jpeg" },
  {
    id: 10,
    title: "Women’s Conferences",
    desc: "Liza Pavlakos is a perfect speaker for women’s conferences, motivating and inspiring with a deep understanding of women’s struggles. She empowers women to stand against violence, embrace past experiences without shame, and advocates for positive change. Her presence guarantees inspiration and unity, fostering strength and resilience.",
  },
  { id: 11, imgUrl: "/assets/Images/speaking/conference/liza_6.jpeg" },
  { id: 12, title: "BOOK LIZA", desc: "Explore more about Liza's impact." },
];
const mobCardData: CardData[] = [
  { id: 1, imgUrl: "/assets/Images/speaking/conference/liza_1.png" },
  {
    id: 2,
    title: "Motivated Salespeople",
    desc: "Book Liza for your Sales Conferences and experience the inspiration of her journey from adversity to sales mastery. Ignite your team’s motivation with her story of achieving sales success through passion, determination, and unwavering confidence.",
  },
  { id: 3, imgUrl: "/assets/Images/speaking/conference/liza_2.jpeg" },
  {
    id: 4,
    title: "Financial Services",
    desc: "Liza tailors an inspiring story for the financial sector, empowering professionals in banking, credit unions, financial planning, accounting, investment advisory, and insurance. Experience resilience driving exceptional sales performance, excel in prospecting, and elevate client relationships. Join Liza on this compelling journey toward sales excellence ...",
  },
  { id: 5, imgUrl: "/assets/Images/speaking/conference/liza_3.jpeg" },

  {
    id: 6,
    title: "Education",
    desc: "Liza Pavlakos, from homelessness to successful entrepreneur and education advocate, shares a vital story for education conferences. Her journey highlights the transformative power of education and resilience, inspiring attendees to embrace perseverance and create a brighter future.",
  },
  { id: 7, imgUrl: "/assets/Images/speaking/conference/liza_4.jpeg" },

  {
    id: 8,
    title: "Mental Health & Wellbeing",
    desc: "Liza Pavlakos, founder of Mind Hub Directory, guides a global mental health initiative, offering therapy and support worldwide. At conferences, she highlights mental health’s importance, encouraging prioritised well-being and employee support. Immerse yourself in the transformative impa...",
  },

  { id: 9, imgUrl: "/assets/Images/speaking/conference/liza_5.jpeg" },
  {
    id: 10,
    title: "Women’s Conferences",
    desc: "Liza Pavlakos is a perfect speaker for women’s conferences, motivating and inspiring with a deep understanding of women’s struggles. She empowers women to stand against violence, embrace past experiences without shame, and advocates for positive change. Her presence guarantees inspiratio...",
  },
  { id: 11, imgUrl: "/assets/Images/speaking/conference/liza_6.jpeg" },
];
const iPadCardData: CardData[] = [
  { id: 1, imgUrl: "/assets/Images/speaking/conference/liza_1.png" },
  {
    id: 2,
    title: "Motivated Salespeople",
    desc: "Book Liza for your Sales Conferences and experience the inspiration of her journey from adversity to sales mastery. Ignite your team’s motivation with her story of achieving sales success through passion, determination, and unwavering confidence.",
  },
  { id: 3, imgUrl: "/assets/Images/speaking/conference/liza_2.jpeg" },
  {
    id: 4,
    title: "Financial Services",
    desc: "Liza tailors an inspiring story for the financial sector, empowering professionals in banking, credit unions, financial planning, accounting, investment advisory, and insurance. Experience resilience driving exceptional sales performance, excel in prospecting, and elevate client relationships. Join Liza on this compelling journey toward sales excellence ...",
  },
  { id: 5, imgUrl: "/assets/Images/speaking/conference/liza_3.jpeg" },

  {
    id: 6,
    title: "Education",
    desc: "Liza Pavlakos, from homelessness to successful entrepreneur and education advocate, shares a vital story for education conferences. Her journey highlights the transformative power of education and resilience, inspiring attendees to embrace perseverance and create a brighter future.",
  },
  { id: 7, imgUrl: "/assets/Images/speaking/conference/liza_4.jpeg" },

  {
    id: 8,
    title: "Mental Health & Wellbeing",
    desc: "Liza Pavlakos, founder of Mind Hub Directory, guides a global mental health initiative, offering therapy and support worldwide. At conferences, she highlights mental health’s importance, encouraging prioritised well-being and employee support. Immerse yourself in the transformative impa...",
  },

  { id: 9, imgUrl: "/assets/Images/speaking/conference/liza_5.jpeg" },
  {
    id: 10,
    title: "Women’s Conferences",
    desc: "Liza Pavlakos is a perfect speaker for women’s conferences, motivating and inspiring with a deep understanding of women’s struggles. She empowers women to stand against violence, embrace past experiences without shame, and advocates for positive change. Her presence guarantees inspiratio...",
  },
  { id: 11, imgUrl: "/assets/Images/speaking/conference/liza_6.jpeg" },
  { id: 12, title: "BOOK LIZA", desc: "Explore more about Liza's impact." },

];
const settings = {
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
const FourthSection = React.memo(() => {
  return (
    <section className={classes.section}>
      <div className={classes.top}>
        <h1 className={classes.heading}>Liza's Dynamic Conference Impact</h1>
      </div>
      <div className={`${classes.content} container`}>
          {cardData.map((card) => (
            <div key={card.id} className={classes.card}>
              {card.id === 12 ? (
                <div className={classes.lastCard}>
                  <button className={classes.cardButton}>{card.title}</button>
                </div>
              ) : card.id % 2 !== 0 ? (
                card.imgUrl && (
                  <Image
                    src={card.imgUrl}
                    alt={`Card ${card.id}`}
                    width={100}
                    height={100}
                    layout="responsive"
                    className={`${classes["image"]} ${
                      classes["image-" + card.id]
                    }`}
                  />
                )
              ) : (
                <div className={classes.content}>
                  <h3 className={classes.heading}>{card.title}</h3>
                  <p className={classes.dec}>{card.desc}</p>
                </div>
              )}
            </div>
          ))}
      </div>
      <div className={`${classes.iPad_content} container`}>
          {iPadCardData.map((card) => (
            <div key={card.id} className={classes.card}>
              {card.id === 12 ? (
                <div className={classes.lastCard}>
                  <button className={classes.cardButton}>{card.title}</button>
                </div>
              ) : card.id % 2 !== 0 ? (
                card.imgUrl && (
                  <Image
                    src={card.imgUrl}
                    alt={`Card ${card.id}`}
                    width={100}
                    height={100}
                    layout="responsive"
                    className={`${classes["image"]} ${
                      classes["image-" + card.id]
                    }`}
                  />
                )
              ) : (
                <div className={classes.content}>
                  <h3 className={classes.heading}>{card.title}</h3>
                  <p className={classes.dec}>{card.desc}</p>
                </div>
              )}
            </div>
          ))}
      </div>
      <div className={`${classes.mob_content} container`}>
                <Slider {...settings}>

        {mobCardData.map((card) => (
          <div key={card.id} className={classes.card}>
            {card.id === 12 ? (
          ""
            ) : card.id % 2 !== 0 ? (
              card.imgUrl && (
                <Image
                  src={card.imgUrl}
                  alt={`Card ${card.id}`}
                  width={100}
                  height={100}
                  layout="responsive"
                  className={`${classes["image"]} ${
                    classes["image-" + card.id]
                  }`}
                />
              )
            ) : (
              <div className={classes.content}>
                <h3 className={classes.heading}>{card.title}</h3>
                <p className={classes.dec}>{card.desc}</p>
              </div>
            )}
            
          </div>
        ))}
                </Slider>

      </div>
      <div className={classes.mob_lastCard}>
      <Link href="/contact">

                  <button className={classes.cardButton}>BOOK LIZA</button>
                  </Link>
                </div>
    </section>
  );
});

export default FourthSection;
