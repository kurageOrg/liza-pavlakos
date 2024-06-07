import classes from "@/app/styles/components/Foundation/secondSection.module.scss";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SecondSection = React.memo(() => {
  const data = [
    {
      id: 1,
      imageSrc: "liza_foundation_one.jpeg",
      heading: "OUR PURPOSE",
      description:
        "We want to make a difference and better the lives of those who need it most.",
    },
    {
      id: 2,
      imageSrc: "liza_foundation_two.jpeg",
      heading: "OUR MISSION",
      description:
        "We help provide necessities such as food and educational goods. We empower by providing mental health education and counselling services.",
    },
    {
      id: 3,
      imageSrc: "liza_foundation_three.jpeg",
      heading: "OUR VISION",
      description:
        "We are committed to the upliftment and empowerment of underprivileged communities.",
    },
  ];

  return (
    <section className={`${classes.section} `}>
      <div className={`${classes.content}  container`}>
        <h1 className={classes.head}>THE LIZA PAVLAKOS Foundation</h1>
        <p className={classes.text}>FOR BETTER LIVES</p>
        <div className={`${classes.cards} `}>
          {data.map((item) => {
            const descriptionParts = item.description
              ? item.description.split("|||")
              : [];

            return (
              <>
                <div key={item.id} className={classes.singleItem}>
                  <div className={classes.image}>
                    <Image
                      src={`/assets/Images/foundation/${item.imageSrc}`}
                      alt={item.heading}
                      fill
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
                <span className={classes.border}></span>
              </>
            );
          })}
        </div>
        <Link
          href="https://betterunite.com/thelizapavlakosfoundation-alwayson"
          passHref
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className={classes.donate}>DONATE</button>
        </Link>
      </div>
    </section>
  );
});

export default SecondSection;
