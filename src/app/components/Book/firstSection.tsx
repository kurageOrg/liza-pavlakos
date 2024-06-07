import classes from "@/app/styles/components/Book/firstSection.module.scss";
import Image from "next/image";
import React from "react";

const FirstSection = React.memo(() => {
  return (
    <section className={`${classes.section} container`}>
      <div className={classes.first}>
        <div className={classes.left}>
          <Image
            src="/assets/Images/book/liza_book.jpeg"
            fill
            alt="liza book"
          />
        </div>
        <div className={classes.right}>
          <h3 className={classes.heading}>Conviction</h3>
          <p className={classes.dec}>
          By Liza Pavlakos
          </p>
          <h3 className={classes.sub_heading}>How She Overcame Her Traumatic Past And Found Her Prupose.</h3>
          <p className={classes.sub_dec}>
          Escaping sexual abuse at a young age, Liza faced homelessness. Domestic violence later left her physically scarred. Abducted and nearly murdered, she fell into depression and addiction. Yet, Liza rose above her traumas.  She became a successful entrepreneur and motivational speaker, using her story to inspire others to overcome adversity and achieve their full potential.
          </p>
        </div>
      </div>

    </section>
  );
});

export default FirstSection;
