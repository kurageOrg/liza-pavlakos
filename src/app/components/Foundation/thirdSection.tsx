import classes from "@/app/styles/components/Foundation/thirdSection.module.scss";
import Image from "next/image";
import React from "react";

const ThirdSection = React.memo(() => {
  return (
    <section className={`${classes.section} `}>
      <div className={`${classes.content}  container`}>
        <div className={classes.left}>
          <Image
            src={`/assets/Images/foundation/Liza_pavlakos_foundation.jpg`}
            alt={"liza_third"}
            fill
          />
        </div>
        <div className={classes.right}>
          <p>
            “I believe we all have the <span className={classes.highlight}> POWER </span>  to make it in life and still
            contribute to making a difference in other people’s lives.”
          </p>
        </div>
      </div>
    </section>
  );
});

export default ThirdSection;
