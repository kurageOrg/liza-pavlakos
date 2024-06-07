import classes from "@/app/styles/components/About/firstSection.module.scss";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FirstSection = React.memo(() => {
  return (
    <section className={`${classes.section} container`}>
      <div className={classes.first}>
        <div className={classes.left}>
          <Image
            src="/assets/Images/about/liza_firstSectionImg1.jpeg"
            fill
            alt="liza_firstSectionImg1"
          />
        </div>
        <div className={classes.right}>
          <h3 className={classes.heading}>About Liza</h3>
          <p className={classes.dec}>
            Liza is known for delivering life-changing presentations that
            inspire others to tap into their inner strength and achieve their
            goals.
          </p>
        </div>
      </div>
      <div className={classes.second}>
        <div className={classes.right}>
          <h3 className={classes.heading}>Meet Liza</h3>
          <h3 className={classes.sub_heading}>
            A survivor, entrepreneur, and international keynote speaker – a
            force globally recognised for her achievements and accolades.
          </h3>
          <div className={classes.dec}>
            <p>
              As the
              <Link
                passHref
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.letsengage.com/blog/top-suicide-awareness-speakers"
              >
                <span className={classes.highlight}>
                   8<sup>th</sup> speaker in suicide prevention 
                </span>
              </Link>
              globally and a
              <Link
                passHref
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.toastmasters.org/magazine/magazine-issues/2021/august/golden-gavel-2021"
              >
              <span className={classes.highlight}>
               Golden Gavel Honouree, 
              </span>{" "}
              </Link>
              Liza has firmly established herself as one of the world’s
              <Link
                passHref
                target="_blank"
                rel="noopener noreferrer"
                href="https://lizapavlakos.com/wp-content/uploads/2023/07/Liza-Pavlakos-40-Top-Women-Keynote-Speakers-For-2020.pdf"
              >
              <span className={classes.highlight}> top 10 female speakers. </span>
              </Link>
            </p>
            <p>
              Starting her entrepreneurial journey at 23 with zero startup
              capital, Liza attracted 4000 patrons to her Miss India
              International Event. She later successfully managed Mini Bar
              Piccolo, demonstrating her business acumen.
            </p>
            <p>
              As an impactful entrepreneur, Liza established a thriving
              tailoring business with five stores, catering to prestigious
              clients like the Australian Open, Grand Prix, Marriott Hotels,
              international celebrities, and designer brands.
            </p>
            <p>
              Recognized as a mental health trailblazer, Liza is the force
              behind{" "}
              <Link
                passHref
                target="_blank"
                rel="noopener noreferrer"
                href="https://mindhubdirectory.com/"
              >
              <span className={classes.highlight}> “Mind Hub Directory” </span>{" "}
              </Link>
              a global platform showcasing esteemed mental health experts. This
              initiative reflects her commitment to supporting those in need and
              has gained acclaim from corporate organizations through her
              keynote presentations.
            </p>
          </div>
        </div>
        <div className={classes.left}>
          <Image
            src="/assets/Images/about/America_women_magazine_Liza.jpg"
            fill
            alt="liza_firstSectionImg2"
          />
        </div>
      </div>
      <div className={classes.third}>
        <div className={classes.left}>
          <Image
            src="/assets/Images/about/liza_firstSectionImg3.jpg"
            fill
            alt="liza_firstSectionImg3"
          />
        </div>
        <div className={classes.right}>
          <div className={classes.dec}>
            <p>
              Liza’s journey to success however, was not without profound
              challenges. Enduring childhood abuse, homelessness at 16, a
              life-threatening kidnapping, and single parenthood. Despite these
              obstacles, she became a self-made entrepreneur, showcasing
              determination and resilience.
            </p>
            <p>
              Refusing to let her past define her, Liza emerged from poverty and
              despair as a beacon of hope, a testament to the extraordinary
              power of the human spirit. Today, she is an internationally
              renowned keynote speaker, captivating audiences worldwide with her
              triumphant story. Her transformative impact reaches Fortune 500
              companies like Microsoft, Dell, Lenovo, Just Eat, Qatar Airways,
              Emirates and more. Liza’s guidance cultivates motivation and drive
              within organisations, fostering team building and propelling
              performance.
            </p>
            <p>
              In addition to speaking, Liza is set to release her upcoming book
              “Conviction” sharing invaluable lessons from her journey. Brace
              yourself for inspiration as you embark on a transformative journey
              with Liza, unlocking limitless potential.
            </p>
            <Link href="/contact">
              <button className={classes.book} aria-label="BOOK LIZA TO SPEAK">
                BOOK LIZA TO SPEAK
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
});

export default FirstSection;
