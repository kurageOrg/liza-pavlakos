import classes from "@/app/styles/components/Book/secondSection.module.scss";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FirstSection = React.memo(() => {
  return (
    <section className={`${classes.section} container`}>
      <h1 className={classes.heading}>ABOUT THE BOOK</h1>
      <h3 className={classes.sub_heading}>
        Liza is a powerhouse of pure faith and self-belief, illuminating her
        path through fear and pain to lead anyone to their full potential in
        their life...
      </h3>
      <div className={classes.content}>
        <p>
          In her book, Conviction, Liza shares her harrowing and astonishing
          life story, as she climbed her way beyond her past adversities to
          discover success.
        </p>
        <p>
          Liza Pavlakos’s early life can only be described as a nightmare.
          Confronted with sexual abuse and homelessness in her teenage years,
          her young adult life continued this horrific path with domestic
          violence so malicious, it resulted in her needing facial
          reconstruction.
        </p>
        <p>
          Just when Liza thought she was finally free from the violence of her
          youth, she was then abducted and almost murdered by a deranged
          stranger – an experience that, after escaping, sent her into a
          downward spiral of depression, suicide attempts and drug addiction.
          But Liza wasn’t done yet.
        </p>
        <p>
          Conviction is the dispelling of limiting beliefs in our lives that
          hold us back from our true joy. If you have felt trapped by fear or
          uncertainty, you need to read this book and learn as Liza did, that
          your conviction is in you, and you can become more from the moment you
          decide it.
        </p>
      </div>
      <Link
        href="https://www.shawlinepublishing.com.au/search/display/512-conviction"
        passHref
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className={classes.download}>Pre-Order Now</button>
      </Link>
    </section>
  );
});

export default FirstSection;
