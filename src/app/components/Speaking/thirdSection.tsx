"use client";
import classes from "@/app/styles/components/Speaking/thirdSection.module.scss";
import React from "react";
const ThirdSection = React.memo(() => {
  const data = [
    {
      id: 1,
      heading: "Toastmasters International",
      description: "Toastmasters' Golden Gavel Award Honouree",
    },
    {
      id: 2,
      heading: "Real Leaders",
      description: "Ranked among the Top 10 Female Speakers in the World",
    },
    {
      id: 3,
      heading: "Engage",
      description: "Ranks 8th in Suicide Prevention speaking globally",
    },
    {
      id: 4,
      heading: "HR Congress & HRD Summit",
      description: "Winner of the People Choice of Excellence Award",
    },
    {
      id: 5,
      heading: "World Congress Awards",
      description: "Women’s Super Achievement Award",
    },
  ];

  return (
    <section className={`${classes.section} `}>
      <div className={classes.layer}></div>
      <div className={classes.layerbottom}></div>
      <div className={classes.content}>
        <div className={classes.top}>
          <h1 className={classes.heading}>Some of Liza’s accomplishments.</h1>
          <h1 className={classes.sub_heading}>
            Award Winning International Keynote Speaker
          </h1>
          <p className={classes.dec}>
            Discover how to tap into the determination individual entrepreneurs
            and corporate teams need to overcome obstacles in their professional
            and personal lives.
          </p>
        </div>
        <div className={`${classes.trophy} container`}>
          {data.map((item) => (
            <div key={item.id} className={classes.singleItem}>
              <div className={classes.img}>
                <svg
                  width="54"
                  height="56"
                  viewBox="0 0 54 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1673_476)">
                    <path
                      d="M29.2069 12.9259L26.9813 8.35205L24.7557 12.9259L19.7969 13.6816L23.3891 17.2611L22.5301 22.3123L26.9813 19.9259L31.4324 22.3123L30.5734 17.2611L34.1656 13.6816L29.2069 12.9259Z"
                      fill="#CBBD70"
                    />
                    <path
                      d="M26.9805 0H8.43384L12.3384 18.2955C7.8872 14.2386 5.77874 7.79545 4.95879 4.29545H6.87202V0H0L0.312364 2.42614C0.390456 3.10227 2.61605 18.9716 13.8221 24.4602C15.2278 28.3977 18.2733 31.5 22.0217 32.9716L20.3427 43.2727H19.9523C17.5705 43.2727 15.423 44.7045 14.5249 46.892L12.3384 51.7045H9.83948V56H44.3167V51.7045H41.8178L39.5531 46.9318C38.6161 44.7045 36.4685 43.2727 34.0868 43.2727H33.6963L32.0174 32.9716C35.7657 31.5 38.8113 28.3977 40.2169 24.4602C51.423 18.9716 53.6486 3.10227 53.7267 2.42614L54 0H47.128V4.29545H49.0412C48.2213 7.79545 46.1128 14.2386 41.6616 18.2955L45.5662 0H27.0195H26.9805ZM35.6876 48.7216L37.0933 51.7045H16.9458L18.3124 48.642C18.5857 48.0057 19.2104 47.5682 19.9132 47.5682H34.0087C34.7115 47.5682 35.3362 47.9659 35.6486 48.7216H35.6876ZM29.4013 43.2727H24.5987L26.1215 33.8466C26.3948 33.8466 26.7072 33.9261 26.9805 33.9261C27.2538 33.9261 27.5662 33.8864 27.8395 33.8466L29.3623 43.2727H29.4013ZM36.5857 21.7557C35.6095 26.3295 31.5879 29.6307 26.9805 29.6307C22.3731 29.6307 18.3514 26.3295 17.3753 21.7557L13.6269 4.29545H40.295L36.5466 21.7557H36.5857Z"
                      fill="#CBBD70"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1673_476">
                      <rect width="54" height="56" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <h1 className={classes.heading}>{item.heading}</h1>
              <p className={classes.dec}>{item.description}</p>
            </div>
          ))}
        </div>
        <div className={`${classes.mob_trophy} container`}>
          <div className={classes.img}>
            <svg
              width="54"
              height="56"
              viewBox="0 0 54 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1673_476)">
                <path
                  d="M29.2069 12.9259L26.9813 8.35205L24.7557 12.9259L19.7969 13.6816L23.3891 17.2611L22.5301 22.3123L26.9813 19.9259L31.4324 22.3123L30.5734 17.2611L34.1656 13.6816L29.2069 12.9259Z"
                  fill="#CBBD70"
                />
                <path
                  d="M26.9805 0H8.43384L12.3384 18.2955C7.8872 14.2386 5.77874 7.79545 4.95879 4.29545H6.87202V0H0L0.312364 2.42614C0.390456 3.10227 2.61605 18.9716 13.8221 24.4602C15.2278 28.3977 18.2733 31.5 22.0217 32.9716L20.3427 43.2727H19.9523C17.5705 43.2727 15.423 44.7045 14.5249 46.892L12.3384 51.7045H9.83948V56H44.3167V51.7045H41.8178L39.5531 46.9318C38.6161 44.7045 36.4685 43.2727 34.0868 43.2727H33.6963L32.0174 32.9716C35.7657 31.5 38.8113 28.3977 40.2169 24.4602C51.423 18.9716 53.6486 3.10227 53.7267 2.42614L54 0H47.128V4.29545H49.0412C48.2213 7.79545 46.1128 14.2386 41.6616 18.2955L45.5662 0H27.0195H26.9805ZM35.6876 48.7216L37.0933 51.7045H16.9458L18.3124 48.642C18.5857 48.0057 19.2104 47.5682 19.9132 47.5682H34.0087C34.7115 47.5682 35.3362 47.9659 35.6486 48.7216H35.6876ZM29.4013 43.2727H24.5987L26.1215 33.8466C26.3948 33.8466 26.7072 33.9261 26.9805 33.9261C27.2538 33.9261 27.5662 33.8864 27.8395 33.8466L29.3623 43.2727H29.4013ZM36.5857 21.7557C35.6095 26.3295 31.5879 29.6307 26.9805 29.6307C22.3731 29.6307 18.3514 26.3295 17.3753 21.7557L13.6269 4.29545H40.295L36.5466 21.7557H36.5857Z"
                  fill="#CBBD70"
                />
              </g>
              <defs>
                <clipPath id="clip0_1673_476">
                  <rect width="54" height="56" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          {data.map((item) => (
            <div key={item.id} className={classes.singleItem}>
              <h1 className={classes.heading}>{item.heading}</h1>
              <p className={classes.dec}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default ThirdSection;
