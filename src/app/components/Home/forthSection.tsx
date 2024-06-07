"use client";
import classes from "@/app/styles/components/Home/forthSection.module.scss";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ForthSection = React.memo(() => {
  const testimonialsData = [
    {id:1,
      imgSrc: "/assets/Images/Section_4/lizaMicrosoftColor.svg",
      text: "This was my favorite talk of the year! I was so captivated I could not even multi-task. I didn’t want to miss a word!",
      alt: "Liza speaking at a Microsoft event",
    },
    {
      id:2,
      imgSrc: "/assets/Images/Section_4/lizaCocacolaColor.svg",
      text: "Liza’s representation is insightful, actionable and authentic.",
      alt: "Liza presenting at a Coca-Cola event",
    },
    {
      id:3,
      imgSrc: "/assets/Images/Section_4/lizaZurichColor.svg",
      text: "Liza is an outstanding speaker. Her story inspires us to change for the betterment of our families, our teams and our clients.",
      alt: "Liza at a Zurich Insurance event",
    },
    {
      id:4,
      imgSrc: "/assets/Images/Section_4/lizaQatarColor.svg",
      text: "Liza possesses the ability to deeply touch hearts, and upon hearing her story, our teams are motivated by her inspirational influence, driving them to embrace change and strengthen their resilience in times of personal difficulty.",
      alt: "Liza speaking at a Qatar Airways event",
    },
    {
      id:5,
      imgSrc: "/assets/Images/Section_4/lizaJustEat.svg",
      text: "Liza is a phenomenal speaker. Her keynote is actionable and life-changing. She inspires transformation.",
      alt: "Liza giving a keynote at an Oberoi Hotels event",
    },
    {
      id:6,
      imgSrc: "/assets/Images/Section_4/lizaLenovoColor.svg",
      text: "Liza’s learning session for mental health awareness month was informative and highly inspirational.",
      alt: "Liza leading a session at Lenovo",
    },
  ];

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

  return (
    <section className={`${classes.section}`}>
      <header className={`${classes.top} container`}>
        <h1 className={classes.heading}>testimonials</h1>
        <h2 className={classes.subHeading}>
          What COMPANIES share in their feedback
        </h2>
      </header>

      <div className={`${classes.testimonials} container`}>
  {testimonialsData.map((testimonial, index) => (
    <div key={index} className={classes.singleItem}>
      <ImageBlock
        src={testimonial.imgSrc}
        alt={testimonial.alt}
        style={{scale:testimonial.id === 5 && .75 , top:testimonial.id === 5 ? "110px" :"0"}   }

      />
      <p className={classes.text}>{testimonial.text}</p>
    </div>
  ))}
</div>
<div className={classes.mob_testimonials}>
  <Slider {...settings}>
    {testimonialsData.map((testimonial, index) => (
      <div key={index}  className={classes.singleItem}>
        <ImageBlock
          src={testimonial.imgSrc}
          alt={testimonial.alt}
          style={{scale:testimonial.id === 5 && 1.6 , top:testimonial.id === 5 ? "110px" :"0"}   }

        />
        <p className={classes.text}>{testimonial.text}</p>
      </div>
    ))}
  </Slider>
</div>

      {/* <button className={classes.loadmore} aria-label="Load More">
        Load more
      </button> */}
    </section>
  );
});

function ImageBlock({ src, alt, priority = true ,style}: any) {
  return (
    <Image
      src={src}
      alt={alt}
      layout="fill"
      priority={priority}
      sizes="(max-width: 768px) 100vw, 50vw"
      style={style}
    />
  );
}

export default ForthSection;
