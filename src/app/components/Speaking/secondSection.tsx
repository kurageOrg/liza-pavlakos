"use client";
import React, { useState, useRef, useEffect } from "react";
import classes from "@/app/styles/components/Speaking/secondSection.module.scss";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import Link from "next/link";

export default function SecondSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoRefSecond = useRef<HTMLVideoElement>(null);
  const videoRefThird = useRef<HTMLVideoElement>(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isModalOpenSecond, setModalOpenSecond] = useState(false);
  const [isModalOpenThird, setModalOpenThird] = useState(false);
  const [isMuted, setMuted] = useState(true);
  const [isMutedSecond, setMutedSecond] = useState(true);
  const [isMutedThird, setMutedThird] = useState(true);

  const toggleModal = () => {
    setModalOpen((prevModalOpen) => {
      const newModalState = !prevModalOpen;

      if (videoRef.current) {
        if (newModalState) {
          videoRef.current.muted = true;
          setMuted(true);
        } else {
          videoRef.current.muted = isMuted;
        }
      } else {
        console.log("Video ref is not available.");
      }

      return newModalState;
    });
  };
  const toggleModalSecond = () => {
    setModalOpenSecond((prevModalOpenSecond) => {
      const newModalStateSecond = !prevModalOpenSecond;

      if (videoRefSecond.current) {
        if (newModalStateSecond) {
          videoRefSecond.current.muted = true;
          setMutedSecond(true);
        } else {
          videoRefSecond.current.muted = isMutedSecond;
        }
      } else {
        console.log("Video ref is not available.");
      }

      return newModalStateSecond;
    });
  };
  const toggleModalThird = () => {
    setModalOpenThird((prevModalOpenThird) => {
      const newModalStateThird = !prevModalOpenThird;

      if (videoRefThird.current) {
        if (newModalStateThird) {
          videoRefThird.current.muted = true;
          setMutedThird(true);
        } else {
          videoRefThird.current.muted = isMutedThird;
        }
      } else {
        console.log("Video ref is not available.");
      }

      return newModalStateThird;
    });
  };

  const toggleMute = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (videoRef.current) {
      const currentMutedState = !videoRef.current.muted;
      videoRef.current.muted = currentMutedState;
      setMuted(currentMutedState);
      if (!currentMutedState && !videoRef.current.paused) {
      }
    } else {
      console.log("Video ref is not available.");
    }
  };
  const toggleMuteSecond = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    if (videoRefSecond.current) {
      const currentMutedState = !videoRefSecond.current.muted;
      videoRefSecond.current.muted = currentMutedState;
      setMutedSecond(currentMutedState);
      if (!currentMutedState && !videoRefSecond.current.paused) {
      }
    } else {
      console.log("Video ref is not available.");
    }
  };
  const toggleMuteThird = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (videoRefThird.current) {
      const currentMutedStateThird = !videoRefThird.current.muted;
      videoRefThird.current.muted = currentMutedStateThird;
      setMutedThird(currentMutedStateThird);
      if (!currentMutedStateThird && !videoRefThird.current.paused) {
      }
    } else {
      console.log("Video ref is not available.");
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);
  useEffect(() => {
    if (videoRefSecond.current) {
      videoRefSecond.current.muted = isMutedSecond;
    }
  }, [isMutedSecond]);
  useEffect(() => {
    if (videoRefThird.current) {
      videoRefThird.current.muted = isMutedThird;
    }
  }, [isMutedThird]);

  const logoData = [
    { src: "lizaMicrosoft.svg", alt: "Microsoft Logo" },
    { src: "lizaCocacola.svg", alt: "Coca Cola Logo" },
    { src: "lizaEmirates.svg", alt: "Emirates Logo" },
    { src: "lizaLenovo.svg", alt: "Lenovo Logo" },
    { src: "lizaDell.svg", alt: "Dell Logo" },
    { src: "lizaOberoi.svg", alt: "Oberoi Logo" },
    { src: "lizaVista.svg", alt: "Vista Logo" },
    { src: "lizaQatar.svg", alt: "Qatar Airways Logo" },
  ];
  return (
    <section className={classes.section}>
      <div className={classes.top}>
        <div className={classes.heading}>LIZA PAVLAKOS</div>
        <div className={classes.sub_heading}>Empowering Keynote Programs</div>
        <div className={classes.dec}>
          Select from our range of engaging keynote topics or allow us to
          customise one that perfectly aligns with your corporate event
          preferences.
        </div>
      </div>
      <div className={`${classes.gridSection} container`}>
        <div className={classes.singleItem}>
          <div className={classes.left}>
            <div className={classes.transparentLayer}></div>
            <Image
            src="/assets/Images/about/cover_image_first.png"
            alt="Cover Image"
            layout="fill"
            className={classes.coverImageMob}
          />
            {/* <video
              ref={videoRef}
              autoPlay
              width={100}
              height={100}
              loop
              muted={isMuted}
              playsInline
              className={classes.video}
            >
              <source
                src="assets/Images/speaking/A_WINNING_MINDSET_LIZA_PAVLAKOS_CORPORATE_SHOWREEL.mp4"
                type="video/mp4"
              />
            </video> */}
            <button className={classes.playbtn} onClick={toggleModal}>
              <svg
                width="91"
                height="91"
                viewBox="0 0 91 91"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_b_637_1149)">
                  <path
                    d="M45.5 0C20.3 0 0 20.3 0 45.5C0 70.7 20.3 91 45.5 91C70.7 91 91 70.7 91 45.5C91 20.3 70.7 0 45.5 0ZM66.3 48.8L36 66.5C35.4 66.9 34.7 67 34.1 67C33.5 67 32.8 66.9 32.2 66.5C31.1 65.9 30.3 64.6 30.3 63.2V27.8C30.3 26.4 31.1 25.1 32.2 24.5C33.3 23.9 34.9 23.9 36 24.5L66.4 42.2C67.5 42.8 68.2 44.1 68.2 45.5C68.2 46.9 67.4 48.2 66.3 48.8Z"
                    fill="white"
                    fill-opacity="0.5"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_b_637_1149"
                    x="-40"
                    y="-40"
                    width="171"
                    height="171"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="20" />
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur_637_1149"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur_637_1149"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </button>
            <button className={classes.mute} onClick={toggleMute}>
              {isMuted ? (
                <svg
                  width="43"
                  height="34"
                  viewBox="0 0 43 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_761_1001)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M23.4549 20.2296V30.2955C23.4549 32.465 22.1258 33.0905 20.4644 31.7223L9.77304 24.4319H1.93531C0.87986 24.4319 0.000314588 23.5523 0.000314588 22.4773V10.7696C0.000314588 9.6555 0.860315 8.7955 1.93531 8.7955H7.44713L10.1835 10.75H9.77304H1.95486V22.4773H10.4962L11.0435 22.9269L21.5394 30.061V18.8419L23.4549 20.2296ZM23.4549 15.4214V2.93187C23.4549 0.781867 22.1062 0.136867 20.4644 1.50505L12.0208 7.25141L13.7212 8.46323L21.5003 3.22505V14.0141L23.4549 15.4019V15.4214ZM38.6417 26.2691C39.7949 23.4546 40.479 20.2296 40.479 16.6137C40.479 12.3332 39.5212 8.60005 37.938 5.43369C37.3908 4.33914 36.7849 3.38141 36.1985 2.58005C35.8467 2.11096 35.5926 1.79823 35.4558 1.66141C35.0844 1.2705 35.0844 0.645049 35.4753 0.273685C35.8662 -0.0976785 36.4917 -0.0976785 36.863 0.293231C37.0585 0.488685 37.3712 0.860049 37.7817 1.40732C38.4267 2.28687 39.0912 3.34232 39.6971 4.55414C41.4171 7.99414 42.453 12.0205 42.453 16.6137C42.453 20.6596 41.6517 24.2755 40.2835 27.4223L38.6612 26.2496L38.6417 26.2691ZM36.8044 29.7678C36.609 30.0805 36.394 30.3737 36.1985 30.6473C35.8467 31.1164 35.5926 31.4291 35.4558 31.566C35.0844 31.9569 35.0844 32.5823 35.4753 32.9537C35.8662 33.3251 36.4917 33.3251 36.863 32.9341C37.0585 32.7387 37.3712 32.3673 37.7817 31.8201C37.9967 31.5269 38.2117 31.2337 38.4071 30.9014L36.824 29.7678H36.8044ZM33.6576 22.7119C34.2635 20.7378 34.6153 18.6855 34.6153 16.6137C34.6153 13.8969 34.0094 11.1996 33.0126 8.65868C32.6608 7.75959 32.2894 6.95823 31.918 6.25459C31.703 5.84414 31.5271 5.55096 31.4294 5.41414C31.1362 4.96459 31.273 4.35869 31.7226 4.0655C32.1721 3.77232 32.778 3.90914 33.0712 4.35869C33.1885 4.53459 33.3839 4.86687 33.638 5.33596C34.0485 6.09823 34.459 6.97778 34.8303 7.9355C35.9053 10.6914 36.5699 13.6232 36.5699 16.6137C36.5699 19.1155 36.1203 21.5587 35.3385 23.9041L33.6771 22.7119H33.6576ZM32.1721 26.445C32.0744 26.621 31.9962 26.7969 31.8985 26.9532C31.6835 27.3637 31.5076 27.6569 31.4099 27.7937C31.1167 28.2432 31.2535 28.8491 31.703 29.1423C32.1526 29.4355 32.7585 29.2987 33.0517 28.8491C33.1689 28.6732 33.3644 28.341 33.6185 27.8719C33.6771 27.7741 33.7162 27.6764 33.7749 27.5787L32.1721 26.4255V26.445ZM28.9667 19.3696C29.1817 18.4705 29.3185 17.5519 29.3185 16.6137C29.3185 15.0891 28.9862 13.5646 28.4194 12.1182C28.0871 11.2582 27.7353 10.6328 27.5203 10.3005C27.2271 9.85096 27.364 9.24505 27.8135 8.95187C28.263 8.65869 28.869 8.7955 29.1621 9.24505C29.4358 9.67505 29.8267 10.4178 30.2176 11.4146C30.8626 13.0564 31.273 14.8155 31.273 16.6332C31.273 17.9819 31.058 19.311 30.6671 20.5814L28.9667 19.3696ZM27.4421 23.0637C27.2662 23.4937 27.403 24.0019 27.8135 24.2755C28.1849 24.5296 28.6735 24.471 29.0058 24.1778L27.4617 23.0637H27.4421ZM41.4562 31.8787C41.8862 32.1914 42.5117 32.0937 42.8244 31.6441C43.1371 31.2141 43.0394 30.5887 42.5899 30.276L1.54441 0.977322C1.11441 0.664594 0.488951 0.762322 0.176224 1.21187C-0.136504 1.64187 -0.0387763 2.26732 0.410769 2.58005L41.4562 31.8982V31.8787Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_761_1001">
                      <rect width="43" height="33.2273" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              ) : (
                <svg
                  width="43"
                  height="33"
                  viewBox="0 0 43 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_761_999)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 10.6763V22.3039C0 23.3716 0.891294 24.2451 1.96085 24.2451H9.90327L20.7374 31.4857C22.4012 32.8445 23.7678 32.2233 23.7678 30.0686V2.91155C23.7678 0.776258 22.4012 0.13567 20.7374 1.49449L9.90327 8.73508H1.96085C0.871488 8.73508 0 9.5892 0 10.6763ZM9.90327 10.6763H10.6163L11.1709 10.2298L21.7872 3.22214L21.8268 29.8551L11.1907 22.7698L10.6361 22.3233H1.96085V10.6763H9.88346H9.90327ZM36.6817 2.56214C37.2759 3.35802 37.8701 4.3092 38.4445 5.39626C40.0488 8.54096 41.0193 12.2486 41.0193 16.4998C41.0193 20.751 40.0488 24.4586 38.4445 27.6033C37.8899 28.6904 37.2759 29.6416 36.6817 30.4374C36.3252 30.9033 36.0677 31.2139 35.9291 31.3498C35.5527 31.738 35.5527 32.3592 35.9489 32.728C36.345 33.0968 36.9788 33.0968 37.3551 32.7086C37.5532 32.5145 37.8701 32.1457 38.286 31.6021C38.9397 30.7286 39.6131 29.6804 40.2271 28.4768C41.9701 25.0604 43.0198 21.0616 43.0198 16.4998C43.0198 11.938 41.9701 7.91979 40.2271 4.52273C39.6131 3.3192 38.9595 2.29038 38.286 1.39743C37.8899 0.853905 37.5532 0.485082 37.3551 0.290964C36.9788 -0.0972712 36.345 -0.0972712 35.9489 0.271552C35.5527 0.640376 35.5527 1.26155 35.9291 1.64979C36.0677 1.78567 36.3252 2.09626 36.6817 2.56214ZM32.3441 6.21155C32.7204 6.91038 33.0967 7.70626 33.4532 8.5992C34.4634 11.1227 35.0774 13.8016 35.0774 16.4998C35.0774 19.198 34.4634 21.8768 33.4532 24.4004C33.0967 25.2933 32.7204 26.0892 32.3441 26.788C32.1262 27.1957 31.948 27.4868 31.8489 27.6227C31.5518 28.0692 31.6905 28.671 32.146 28.9621C32.6016 29.2533 33.2156 29.1174 33.5127 28.671C33.6315 28.4963 33.8296 28.1663 34.0871 27.7004C34.503 26.9433 34.9189 26.0698 35.2953 25.1186C36.3846 22.3816 37.058 19.4698 37.058 16.4998C37.058 13.5298 36.4044 10.618 35.2953 7.88096C34.9189 6.92979 34.503 6.05626 34.0871 5.2992C33.8296 4.83332 33.6315 4.50332 33.5127 4.32861C33.2156 3.88214 32.6016 3.74626 32.146 4.03743C31.6905 4.32861 31.5518 4.93038 31.8489 5.37685C31.948 5.51273 32.1064 5.80391 32.3441 6.21155ZM28.7987 12.0351C29.3731 13.4521 29.7098 14.9663 29.7098 16.4998C29.7098 18.0333 29.3731 19.528 28.7987 20.9645C28.462 21.8186 28.1055 22.4398 27.8876 22.7698C27.5905 23.2163 27.7292 23.818 28.1847 24.1092C28.6403 24.4004 29.2543 24.2645 29.5514 23.818C29.8287 23.391 30.2248 22.6533 30.6209 21.6633C31.2745 20.0327 31.6905 18.2857 31.6905 16.4804C31.6905 14.6751 31.2943 12.9474 30.6209 11.2974C30.2248 10.3074 29.8287 9.56979 29.5514 9.14273C29.2543 8.69626 28.6403 8.56038 28.1847 8.85155C27.7292 9.14273 27.5905 9.74449 27.8876 10.191C28.1055 10.521 28.4422 11.1421 28.7987 11.9963V12.0351Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_761_999">
                      <rect width="43" height="33" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              )}
            </button>
          </div>
          <div className={classes.right}>
            <h1 className={classes.heading}>KEYNOTE 01</h1>
            <h1 className={classes.sub_heading}>Becoming by Overcoming</h1>
            <p className={classes.dec}>How to Thrive in Times of Uncertainty</p>
            <div className={classes.content}>
              <ul className={classes.bulletedList}>
                <li>Embrace Challenges, Seize Opportunities</li>
                <li>⁠Foster Growth in Demanding Environments</li>
                <li> Thrive Through Change</li>
                <li>Harness Resilience and Persistence</li>
                <li>Trust Your Judgment, Inspire Transformation.</li>
              </ul>
              <div className={classes.footer}>
                <p className={classes.top}>
                  Educational, informative, and <br></br> inspiring – a
                  transformative experience for your audience
                </p>
                <div className={classes.getIn}>
                  <span>
                    <Link href="/contact">
                      <svg
                        width="58"
                        height="58"
                        viewBox="0 0 58 58"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g
                          className={classes.first}
                          clip-path="url(#clip0_356_1288)"
                        >
                          <path
                            d="M26.079 24.0699H34.0269C34.0269 24.0699 34.1471 24.077 34.2036 24.1053C34.2602 24.1336 34.3168 24.1618 34.3592 24.2043C34.4016 24.2467 34.437 24.2962 34.4582 24.3598C34.4865 24.4164 34.4936 24.48 34.4936 24.5366L34.4936 32.4845C34.4936 32.6118 34.4511 32.7249 34.3592 32.8168C34.2673 32.9087 34.1541 32.9512 34.0269 32.9512C33.8996 32.9512 33.7794 32.9017 33.6945 32.8168C33.6097 32.732 33.5602 32.6118 33.5602 32.4845L33.5531 25.6609L24.6365 34.5775C24.5516 34.6624 24.4314 34.7119 24.3041 34.7119C24.1769 34.7119 24.0567 34.6624 23.9718 34.5775C23.887 34.4927 23.8375 34.3725 23.8375 34.2452C23.8375 34.1179 23.887 33.9977 23.9718 33.9128L32.8955 24.9891L26.0719 24.9821C25.9446 24.9821 25.8244 24.9326 25.7396 24.8477C25.6547 24.7629 25.6052 24.6427 25.6052 24.5154C25.6052 24.3881 25.6476 24.275 25.7396 24.183C25.8315 24.0911 25.9446 24.0487 26.0719 24.0487L26.079 24.0699Z"
                            fill="#CBBD70"
                          />
                        </g>
                        <g
                          className={classes.second}
                          clip-path="url(#clip0_356_1288)"
                        >
                          <path
                            d="M26.079 24.0699H34.0269C34.0269 24.0699 34.1471 24.077 34.2036 24.1053C34.2602 24.1336 34.3168 24.1618 34.3592 24.2043C34.4016 24.2467 34.437 24.2962 34.4582 24.3598C34.4865 24.4164 34.4936 24.48 34.4936 24.5366L34.4936 32.4845C34.4936 32.6118 34.4511 32.7249 34.3592 32.8168C34.2673 32.9087 34.1541 32.9512 34.0269 32.9512C33.8996 32.9512 33.7794 32.9017 33.6945 32.8168C33.6097 32.732 33.5602 32.6118 33.5602 32.4845L33.5531 25.6609L24.6365 34.5775C24.5516 34.6624 24.4314 34.7119 24.3041 34.7119C24.1769 34.7119 24.0567 34.6624 23.9718 34.5775C23.887 34.4927 23.8375 34.3725 23.8375 34.2452C23.8375 34.1179 23.887 33.9977 23.9718 33.9128L32.8955 24.9891L26.0719 24.9821C25.9446 24.9821 25.8244 24.9326 25.7396 24.8477C25.6547 24.7629 25.6052 24.6427 25.6052 24.5154C25.6052 24.3881 25.6476 24.275 25.7396 24.183C25.8315 24.0911 25.9446 24.0487 26.0719 24.0487L26.079 24.0699Z"
                            fill="#CBBD70"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_356_1288">
                            <rect
                              width="12.18"
                              height="14.69"
                              fill="white"
                              transform="translate(28.2852 38.8909) rotate(-135)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </Link>
                  </span>
                  <Link href="/contact">GET IN TOUCH</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${classes.singleItem} ${classes.singleItemSecond}`}>
          <div className={classes.right}>
            <h1 className={classes.heading}>KEYNOTE 02</h1>
            <h1 className={classes.sub_heading}>Extraordinary Experiences</h1>
            <p className={classes.dec}>How to Achieve Extraordinary Results </p>
            <div className={classes.content}>
              <ul className={classes.bulletedList}>
                <li>Uncovering Strategies: Embracing Your Strength</li>
                <li>Mastering Accountable Excellence </li>
                <li>Cultivating a Winning Mindset</li>
                <li>Maintaining Control in Adversity</li>
                <li>Embracing Calculated Risks for Success</li>
              </ul>
              <div className={classes.footer}>
                <p className={classes.top}>
                  Leadership, motivation, entrepreneurship, mental strength,
                  health and wellness – an unforgettable experience for your
                  audience
                </p>
                <div className={classes.getIn}>
                  <span>
                    <Link href="/contact">
                      <svg
                        width="58"
                        height="58"
                        viewBox="0 0 58 58"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g
                          className={classes.first}
                          clip-path="url(#clip0_356_1288)"
                        >
                          <path
                            d="M26.079 24.0699H34.0269C34.0269 24.0699 34.1471 24.077 34.2036 24.1053C34.2602 24.1336 34.3168 24.1618 34.3592 24.2043C34.4016 24.2467 34.437 24.2962 34.4582 24.3598C34.4865 24.4164 34.4936 24.48 34.4936 24.5366L34.4936 32.4845C34.4936 32.6118 34.4511 32.7249 34.3592 32.8168C34.2673 32.9087 34.1541 32.9512 34.0269 32.9512C33.8996 32.9512 33.7794 32.9017 33.6945 32.8168C33.6097 32.732 33.5602 32.6118 33.5602 32.4845L33.5531 25.6609L24.6365 34.5775C24.5516 34.6624 24.4314 34.7119 24.3041 34.7119C24.1769 34.7119 24.0567 34.6624 23.9718 34.5775C23.887 34.4927 23.8375 34.3725 23.8375 34.2452C23.8375 34.1179 23.887 33.9977 23.9718 33.9128L32.8955 24.9891L26.0719 24.9821C25.9446 24.9821 25.8244 24.9326 25.7396 24.8477C25.6547 24.7629 25.6052 24.6427 25.6052 24.5154C25.6052 24.3881 25.6476 24.275 25.7396 24.183C25.8315 24.0911 25.9446 24.0487 26.0719 24.0487L26.079 24.0699Z"
                            fill="#CBBD70"
                          />
                        </g>
                        <g
                          className={classes.second}
                          clip-path="url(#clip0_356_1288)"
                        >
                          <path
                            d="M26.079 24.0699H34.0269C34.0269 24.0699 34.1471 24.077 34.2036 24.1053C34.2602 24.1336 34.3168 24.1618 34.3592 24.2043C34.4016 24.2467 34.437 24.2962 34.4582 24.3598C34.4865 24.4164 34.4936 24.48 34.4936 24.5366L34.4936 32.4845C34.4936 32.6118 34.4511 32.7249 34.3592 32.8168C34.2673 32.9087 34.1541 32.9512 34.0269 32.9512C33.8996 32.9512 33.7794 32.9017 33.6945 32.8168C33.6097 32.732 33.5602 32.6118 33.5602 32.4845L33.5531 25.6609L24.6365 34.5775C24.5516 34.6624 24.4314 34.7119 24.3041 34.7119C24.1769 34.7119 24.0567 34.6624 23.9718 34.5775C23.887 34.4927 23.8375 34.3725 23.8375 34.2452C23.8375 34.1179 23.887 33.9977 23.9718 33.9128L32.8955 24.9891L26.0719 24.9821C25.9446 24.9821 25.8244 24.9326 25.7396 24.8477C25.6547 24.7629 25.6052 24.6427 25.6052 24.5154C25.6052 24.3881 25.6476 24.275 25.7396 24.183C25.8315 24.0911 25.9446 24.0487 26.0719 24.0487L26.079 24.0699Z"
                            fill="#CBBD70"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_356_1288">
                            <rect
                              width="12.18"
                              height="14.69"
                              fill="white"
                              transform="translate(28.2852 38.8909) rotate(-135)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </Link>
                  </span>
                  <Link href="/contact">GET IN TOUCH</Link>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.left}>
            <div className={classes.transparentLayer}></div>
            <Image
            src="/assets/Images/about/cover_image_second.png"
            alt="Cover Image"
            layout="fill"
            className={classes.coverImageMob}
          />
            {/* <video
              ref={videoRefSecond}
              autoPlay
              width={100}
              height={100}
              loop
              muted={isMutedSecond}
              playsInline
              className={classes.video}
            >
              <source
                src="assets/Images/speaking/WHY_YOU SHOULD_BOOK LIZA_PAVLAKOS FOR_YOUR_NEXT_EVENT!.mp4"
                type="video/mp4"
              />
            </video> */}
            <button className={classes.playbtn} onClick={toggleModalSecond}>
              <svg
                width="91"
                height="91"
                viewBox="0 0 91 91"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_b_637_1149)">
                  <path
                    d="M45.5 0C20.3 0 0 20.3 0 45.5C0 70.7 20.3 91 45.5 91C70.7 91 91 70.7 91 45.5C91 20.3 70.7 0 45.5 0ZM66.3 48.8L36 66.5C35.4 66.9 34.7 67 34.1 67C33.5 67 32.8 66.9 32.2 66.5C31.1 65.9 30.3 64.6 30.3 63.2V27.8C30.3 26.4 31.1 25.1 32.2 24.5C33.3 23.9 34.9 23.9 36 24.5L66.4 42.2C67.5 42.8 68.2 44.1 68.2 45.5C68.2 46.9 67.4 48.2 66.3 48.8Z"
                    fill="white"
                    fill-opacity="0.5"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_b_637_1149"
                    x="-40"
                    y="-40"
                    width="171"
                    height="171"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="20" />
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur_637_1149"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur_637_1149"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </button>
            <button className={classes.mute} onClick={toggleMuteSecond}>
              {isMutedSecond ? (
                <svg
                  width="43"
                  height="34"
                  viewBox="0 0 43 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_761_1001)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M23.4549 20.2296V30.2955C23.4549 32.465 22.1258 33.0905 20.4644 31.7223L9.77304 24.4319H1.93531C0.87986 24.4319 0.000314588 23.5523 0.000314588 22.4773V10.7696C0.000314588 9.6555 0.860315 8.7955 1.93531 8.7955H7.44713L10.1835 10.75H9.77304H1.95486V22.4773H10.4962L11.0435 22.9269L21.5394 30.061V18.8419L23.4549 20.2296ZM23.4549 15.4214V2.93187C23.4549 0.781867 22.1062 0.136867 20.4644 1.50505L12.0208 7.25141L13.7212 8.46323L21.5003 3.22505V14.0141L23.4549 15.4019V15.4214ZM38.6417 26.2691C39.7949 23.4546 40.479 20.2296 40.479 16.6137C40.479 12.3332 39.5212 8.60005 37.938 5.43369C37.3908 4.33914 36.7849 3.38141 36.1985 2.58005C35.8467 2.11096 35.5926 1.79823 35.4558 1.66141C35.0844 1.2705 35.0844 0.645049 35.4753 0.273685C35.8662 -0.0976785 36.4917 -0.0976785 36.863 0.293231C37.0585 0.488685 37.3712 0.860049 37.7817 1.40732C38.4267 2.28687 39.0912 3.34232 39.6971 4.55414C41.4171 7.99414 42.453 12.0205 42.453 16.6137C42.453 20.6596 41.6517 24.2755 40.2835 27.4223L38.6612 26.2496L38.6417 26.2691ZM36.8044 29.7678C36.609 30.0805 36.394 30.3737 36.1985 30.6473C35.8467 31.1164 35.5926 31.4291 35.4558 31.566C35.0844 31.9569 35.0844 32.5823 35.4753 32.9537C35.8662 33.3251 36.4917 33.3251 36.863 32.9341C37.0585 32.7387 37.3712 32.3673 37.7817 31.8201C37.9967 31.5269 38.2117 31.2337 38.4071 30.9014L36.824 29.7678H36.8044ZM33.6576 22.7119C34.2635 20.7378 34.6153 18.6855 34.6153 16.6137C34.6153 13.8969 34.0094 11.1996 33.0126 8.65868C32.6608 7.75959 32.2894 6.95823 31.918 6.25459C31.703 5.84414 31.5271 5.55096 31.4294 5.41414C31.1362 4.96459 31.273 4.35869 31.7226 4.0655C32.1721 3.77232 32.778 3.90914 33.0712 4.35869C33.1885 4.53459 33.3839 4.86687 33.638 5.33596C34.0485 6.09823 34.459 6.97778 34.8303 7.9355C35.9053 10.6914 36.5699 13.6232 36.5699 16.6137C36.5699 19.1155 36.1203 21.5587 35.3385 23.9041L33.6771 22.7119H33.6576ZM32.1721 26.445C32.0744 26.621 31.9962 26.7969 31.8985 26.9532C31.6835 27.3637 31.5076 27.6569 31.4099 27.7937C31.1167 28.2432 31.2535 28.8491 31.703 29.1423C32.1526 29.4355 32.7585 29.2987 33.0517 28.8491C33.1689 28.6732 33.3644 28.341 33.6185 27.8719C33.6771 27.7741 33.7162 27.6764 33.7749 27.5787L32.1721 26.4255V26.445ZM28.9667 19.3696C29.1817 18.4705 29.3185 17.5519 29.3185 16.6137C29.3185 15.0891 28.9862 13.5646 28.4194 12.1182C28.0871 11.2582 27.7353 10.6328 27.5203 10.3005C27.2271 9.85096 27.364 9.24505 27.8135 8.95187C28.263 8.65869 28.869 8.7955 29.1621 9.24505C29.4358 9.67505 29.8267 10.4178 30.2176 11.4146C30.8626 13.0564 31.273 14.8155 31.273 16.6332C31.273 17.9819 31.058 19.311 30.6671 20.5814L28.9667 19.3696ZM27.4421 23.0637C27.2662 23.4937 27.403 24.0019 27.8135 24.2755C28.1849 24.5296 28.6735 24.471 29.0058 24.1778L27.4617 23.0637H27.4421ZM41.4562 31.8787C41.8862 32.1914 42.5117 32.0937 42.8244 31.6441C43.1371 31.2141 43.0394 30.5887 42.5899 30.276L1.54441 0.977322C1.11441 0.664594 0.488951 0.762322 0.176224 1.21187C-0.136504 1.64187 -0.0387763 2.26732 0.410769 2.58005L41.4562 31.8982V31.8787Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_761_1001">
                      <rect width="43" height="33.2273" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              ) : (
                <svg
                  width="43"
                  height="33"
                  viewBox="0 0 43 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_761_999)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 10.6763V22.3039C0 23.3716 0.891294 24.2451 1.96085 24.2451H9.90327L20.7374 31.4857C22.4012 32.8445 23.7678 32.2233 23.7678 30.0686V2.91155C23.7678 0.776258 22.4012 0.13567 20.7374 1.49449L9.90327 8.73508H1.96085C0.871488 8.73508 0 9.5892 0 10.6763ZM9.90327 10.6763H10.6163L11.1709 10.2298L21.7872 3.22214L21.8268 29.8551L11.1907 22.7698L10.6361 22.3233H1.96085V10.6763H9.88346H9.90327ZM36.6817 2.56214C37.2759 3.35802 37.8701 4.3092 38.4445 5.39626C40.0488 8.54096 41.0193 12.2486 41.0193 16.4998C41.0193 20.751 40.0488 24.4586 38.4445 27.6033C37.8899 28.6904 37.2759 29.6416 36.6817 30.4374C36.3252 30.9033 36.0677 31.2139 35.9291 31.3498C35.5527 31.738 35.5527 32.3592 35.9489 32.728C36.345 33.0968 36.9788 33.0968 37.3551 32.7086C37.5532 32.5145 37.8701 32.1457 38.286 31.6021C38.9397 30.7286 39.6131 29.6804 40.2271 28.4768C41.9701 25.0604 43.0198 21.0616 43.0198 16.4998C43.0198 11.938 41.9701 7.91979 40.2271 4.52273C39.6131 3.3192 38.9595 2.29038 38.286 1.39743C37.8899 0.853905 37.5532 0.485082 37.3551 0.290964C36.9788 -0.0972712 36.345 -0.0972712 35.9489 0.271552C35.5527 0.640376 35.5527 1.26155 35.9291 1.64979C36.0677 1.78567 36.3252 2.09626 36.6817 2.56214ZM32.3441 6.21155C32.7204 6.91038 33.0967 7.70626 33.4532 8.5992C34.4634 11.1227 35.0774 13.8016 35.0774 16.4998C35.0774 19.198 34.4634 21.8768 33.4532 24.4004C33.0967 25.2933 32.7204 26.0892 32.3441 26.788C32.1262 27.1957 31.948 27.4868 31.8489 27.6227C31.5518 28.0692 31.6905 28.671 32.146 28.9621C32.6016 29.2533 33.2156 29.1174 33.5127 28.671C33.6315 28.4963 33.8296 28.1663 34.0871 27.7004C34.503 26.9433 34.9189 26.0698 35.2953 25.1186C36.3846 22.3816 37.058 19.4698 37.058 16.4998C37.058 13.5298 36.4044 10.618 35.2953 7.88096C34.9189 6.92979 34.503 6.05626 34.0871 5.2992C33.8296 4.83332 33.6315 4.50332 33.5127 4.32861C33.2156 3.88214 32.6016 3.74626 32.146 4.03743C31.6905 4.32861 31.5518 4.93038 31.8489 5.37685C31.948 5.51273 32.1064 5.80391 32.3441 6.21155ZM28.7987 12.0351C29.3731 13.4521 29.7098 14.9663 29.7098 16.4998C29.7098 18.0333 29.3731 19.528 28.7987 20.9645C28.462 21.8186 28.1055 22.4398 27.8876 22.7698C27.5905 23.2163 27.7292 23.818 28.1847 24.1092C28.6403 24.4004 29.2543 24.2645 29.5514 23.818C29.8287 23.391 30.2248 22.6533 30.6209 21.6633C31.2745 20.0327 31.6905 18.2857 31.6905 16.4804C31.6905 14.6751 31.2943 12.9474 30.6209 11.2974C30.2248 10.3074 29.8287 9.56979 29.5514 9.14273C29.2543 8.69626 28.6403 8.56038 28.1847 8.85155C27.7292 9.14273 27.5905 9.74449 27.8876 10.191C28.1055 10.521 28.4422 11.1421 28.7987 11.9963V12.0351Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_761_999">
                      <rect width="43" height="33" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              )}
            </button>
          </div>
        </div>
        <div className={classes.singleItem}>
          <div className={classes.left}>
            <div className={classes.transparentLayer}></div>
            {/* <video
              ref={videoRefThird}
              autoPlay
              width={100}
              height={100}
              loop
              muted={isMutedThird}
              playsInline
              className={classes.video}
            >
              <source
                src="assets/Images/speaking/BEST_SPEAKER_MINI_SHOWREEL_LIZA_PAVLAKOS_BEYOND_SURVIVAL_RESILIENCE..mp4"
                type="video/mp4"
              />
            </video> */}
                        <Image
            src="/assets/Images/about/cover_image_third.png"
            alt="Cover Image"
            layout="fill"
            className={classes.coverImageMob}
          />
            <button className={classes.playbtn} onClick={toggleModalThird}>
              <svg
                width="91"
                height="91"
                viewBox="0 0 91 91"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_b_637_1149)">
                  <path
                    d="M45.5 0C20.3 0 0 20.3 0 45.5C0 70.7 20.3 91 45.5 91C70.7 91 91 70.7 91 45.5C91 20.3 70.7 0 45.5 0ZM66.3 48.8L36 66.5C35.4 66.9 34.7 67 34.1 67C33.5 67 32.8 66.9 32.2 66.5C31.1 65.9 30.3 64.6 30.3 63.2V27.8C30.3 26.4 31.1 25.1 32.2 24.5C33.3 23.9 34.9 23.9 36 24.5L66.4 42.2C67.5 42.8 68.2 44.1 68.2 45.5C68.2 46.9 67.4 48.2 66.3 48.8Z"
                    fill="white"
                    fill-opacity="0.5"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_b_637_1149"
                    x="-40"
                    y="-40"
                    width="171"
                    height="171"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="20" />
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur_637_1149"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur_637_1149"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </button>
            <button className={classes.mute} onClick={toggleMuteThird}>
              {isMutedThird ? (
                <svg
                  width="43"
                  height="34"
                  viewBox="0 0 43 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_761_1001)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M23.4549 20.2296V30.2955C23.4549 32.465 22.1258 33.0905 20.4644 31.7223L9.77304 24.4319H1.93531C0.87986 24.4319 0.000314588 23.5523 0.000314588 22.4773V10.7696C0.000314588 9.6555 0.860315 8.7955 1.93531 8.7955H7.44713L10.1835 10.75H9.77304H1.95486V22.4773H10.4962L11.0435 22.9269L21.5394 30.061V18.8419L23.4549 20.2296ZM23.4549 15.4214V2.93187C23.4549 0.781867 22.1062 0.136867 20.4644 1.50505L12.0208 7.25141L13.7212 8.46323L21.5003 3.22505V14.0141L23.4549 15.4019V15.4214ZM38.6417 26.2691C39.7949 23.4546 40.479 20.2296 40.479 16.6137C40.479 12.3332 39.5212 8.60005 37.938 5.43369C37.3908 4.33914 36.7849 3.38141 36.1985 2.58005C35.8467 2.11096 35.5926 1.79823 35.4558 1.66141C35.0844 1.2705 35.0844 0.645049 35.4753 0.273685C35.8662 -0.0976785 36.4917 -0.0976785 36.863 0.293231C37.0585 0.488685 37.3712 0.860049 37.7817 1.40732C38.4267 2.28687 39.0912 3.34232 39.6971 4.55414C41.4171 7.99414 42.453 12.0205 42.453 16.6137C42.453 20.6596 41.6517 24.2755 40.2835 27.4223L38.6612 26.2496L38.6417 26.2691ZM36.8044 29.7678C36.609 30.0805 36.394 30.3737 36.1985 30.6473C35.8467 31.1164 35.5926 31.4291 35.4558 31.566C35.0844 31.9569 35.0844 32.5823 35.4753 32.9537C35.8662 33.3251 36.4917 33.3251 36.863 32.9341C37.0585 32.7387 37.3712 32.3673 37.7817 31.8201C37.9967 31.5269 38.2117 31.2337 38.4071 30.9014L36.824 29.7678H36.8044ZM33.6576 22.7119C34.2635 20.7378 34.6153 18.6855 34.6153 16.6137C34.6153 13.8969 34.0094 11.1996 33.0126 8.65868C32.6608 7.75959 32.2894 6.95823 31.918 6.25459C31.703 5.84414 31.5271 5.55096 31.4294 5.41414C31.1362 4.96459 31.273 4.35869 31.7226 4.0655C32.1721 3.77232 32.778 3.90914 33.0712 4.35869C33.1885 4.53459 33.3839 4.86687 33.638 5.33596C34.0485 6.09823 34.459 6.97778 34.8303 7.9355C35.9053 10.6914 36.5699 13.6232 36.5699 16.6137C36.5699 19.1155 36.1203 21.5587 35.3385 23.9041L33.6771 22.7119H33.6576ZM32.1721 26.445C32.0744 26.621 31.9962 26.7969 31.8985 26.9532C31.6835 27.3637 31.5076 27.6569 31.4099 27.7937C31.1167 28.2432 31.2535 28.8491 31.703 29.1423C32.1526 29.4355 32.7585 29.2987 33.0517 28.8491C33.1689 28.6732 33.3644 28.341 33.6185 27.8719C33.6771 27.7741 33.7162 27.6764 33.7749 27.5787L32.1721 26.4255V26.445ZM28.9667 19.3696C29.1817 18.4705 29.3185 17.5519 29.3185 16.6137C29.3185 15.0891 28.9862 13.5646 28.4194 12.1182C28.0871 11.2582 27.7353 10.6328 27.5203 10.3005C27.2271 9.85096 27.364 9.24505 27.8135 8.95187C28.263 8.65869 28.869 8.7955 29.1621 9.24505C29.4358 9.67505 29.8267 10.4178 30.2176 11.4146C30.8626 13.0564 31.273 14.8155 31.273 16.6332C31.273 17.9819 31.058 19.311 30.6671 20.5814L28.9667 19.3696ZM27.4421 23.0637C27.2662 23.4937 27.403 24.0019 27.8135 24.2755C28.1849 24.5296 28.6735 24.471 29.0058 24.1778L27.4617 23.0637H27.4421ZM41.4562 31.8787C41.8862 32.1914 42.5117 32.0937 42.8244 31.6441C43.1371 31.2141 43.0394 30.5887 42.5899 30.276L1.54441 0.977322C1.11441 0.664594 0.488951 0.762322 0.176224 1.21187C-0.136504 1.64187 -0.0387763 2.26732 0.410769 2.58005L41.4562 31.8982V31.8787Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_761_1001">
                      <rect width="43" height="33.2273" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              ) : (
                <svg
                  width="43"
                  height="33"
                  viewBox="0 0 43 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_761_999)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 10.6763V22.3039C0 23.3716 0.891294 24.2451 1.96085 24.2451H9.90327L20.7374 31.4857C22.4012 32.8445 23.7678 32.2233 23.7678 30.0686V2.91155C23.7678 0.776258 22.4012 0.13567 20.7374 1.49449L9.90327 8.73508H1.96085C0.871488 8.73508 0 9.5892 0 10.6763ZM9.90327 10.6763H10.6163L11.1709 10.2298L21.7872 3.22214L21.8268 29.8551L11.1907 22.7698L10.6361 22.3233H1.96085V10.6763H9.88346H9.90327ZM36.6817 2.56214C37.2759 3.35802 37.8701 4.3092 38.4445 5.39626C40.0488 8.54096 41.0193 12.2486 41.0193 16.4998C41.0193 20.751 40.0488 24.4586 38.4445 27.6033C37.8899 28.6904 37.2759 29.6416 36.6817 30.4374C36.3252 30.9033 36.0677 31.2139 35.9291 31.3498C35.5527 31.738 35.5527 32.3592 35.9489 32.728C36.345 33.0968 36.9788 33.0968 37.3551 32.7086C37.5532 32.5145 37.8701 32.1457 38.286 31.6021C38.9397 30.7286 39.6131 29.6804 40.2271 28.4768C41.9701 25.0604 43.0198 21.0616 43.0198 16.4998C43.0198 11.938 41.9701 7.91979 40.2271 4.52273C39.6131 3.3192 38.9595 2.29038 38.286 1.39743C37.8899 0.853905 37.5532 0.485082 37.3551 0.290964C36.9788 -0.0972712 36.345 -0.0972712 35.9489 0.271552C35.5527 0.640376 35.5527 1.26155 35.9291 1.64979C36.0677 1.78567 36.3252 2.09626 36.6817 2.56214ZM32.3441 6.21155C32.7204 6.91038 33.0967 7.70626 33.4532 8.5992C34.4634 11.1227 35.0774 13.8016 35.0774 16.4998C35.0774 19.198 34.4634 21.8768 33.4532 24.4004C33.0967 25.2933 32.7204 26.0892 32.3441 26.788C32.1262 27.1957 31.948 27.4868 31.8489 27.6227C31.5518 28.0692 31.6905 28.671 32.146 28.9621C32.6016 29.2533 33.2156 29.1174 33.5127 28.671C33.6315 28.4963 33.8296 28.1663 34.0871 27.7004C34.503 26.9433 34.9189 26.0698 35.2953 25.1186C36.3846 22.3816 37.058 19.4698 37.058 16.4998C37.058 13.5298 36.4044 10.618 35.2953 7.88096C34.9189 6.92979 34.503 6.05626 34.0871 5.2992C33.8296 4.83332 33.6315 4.50332 33.5127 4.32861C33.2156 3.88214 32.6016 3.74626 32.146 4.03743C31.6905 4.32861 31.5518 4.93038 31.8489 5.37685C31.948 5.51273 32.1064 5.80391 32.3441 6.21155ZM28.7987 12.0351C29.3731 13.4521 29.7098 14.9663 29.7098 16.4998C29.7098 18.0333 29.3731 19.528 28.7987 20.9645C28.462 21.8186 28.1055 22.4398 27.8876 22.7698C27.5905 23.2163 27.7292 23.818 28.1847 24.1092C28.6403 24.4004 29.2543 24.2645 29.5514 23.818C29.8287 23.391 30.2248 22.6533 30.6209 21.6633C31.2745 20.0327 31.6905 18.2857 31.6905 16.4804C31.6905 14.6751 31.2943 12.9474 30.6209 11.2974C30.2248 10.3074 29.8287 9.56979 29.5514 9.14273C29.2543 8.69626 28.6403 8.56038 28.1847 8.85155C27.7292 9.14273 27.5905 9.74449 27.8876 10.191C28.1055 10.521 28.4422 11.1421 28.7987 11.9963V12.0351Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_761_999">
                      <rect width="43" height="33" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              )}
            </button>
          </div>
          <div className={classes.right}>
            <h1 className={classes.heading}>KEYNOTE 03</h1>
            <h1 className={classes.sub_heading}>
              Dreaming, Achieving, Succeeding
            </h1>
            <p className={classes.dec}>How to Cultivate a Winning Mindset</p>
            <div className={classes.content}>
              <ul className={classes.bulletedList}>
                <li>Ignite Visionary Action</li>
                <li>Conquer Adversity</li>
                <li>Foster Resilience and Coping Strategies</li>
                <li>⁠Embrace Growth Mindset for Lifelong Learning</li>
                <li>Cultivate Leadership Through Resilience</li>
              </ul>
              <div className={classes.footer}>
                <p className={classes.top}>
                  Leadership, mental strength, corporate psychology, sales,
                  audience engagement – an inspirational journey for your
                  organisation
                </p>
                <div className={classes.getIn}>
                  <span>
                    <Link href="/contact">
                      <svg
                        width="58"
                        height="58"
                        viewBox="0 0 58 58"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g
                          className={classes.first}
                          clip-path="url(#clip0_356_1288)"
                        >
                          <path
                            d="M26.079 24.0699H34.0269C34.0269 24.0699 34.1471 24.077 34.2036 24.1053C34.2602 24.1336 34.3168 24.1618 34.3592 24.2043C34.4016 24.2467 34.437 24.2962 34.4582 24.3598C34.4865 24.4164 34.4936 24.48 34.4936 24.5366L34.4936 32.4845C34.4936 32.6118 34.4511 32.7249 34.3592 32.8168C34.2673 32.9087 34.1541 32.9512 34.0269 32.9512C33.8996 32.9512 33.7794 32.9017 33.6945 32.8168C33.6097 32.732 33.5602 32.6118 33.5602 32.4845L33.5531 25.6609L24.6365 34.5775C24.5516 34.6624 24.4314 34.7119 24.3041 34.7119C24.1769 34.7119 24.0567 34.6624 23.9718 34.5775C23.887 34.4927 23.8375 34.3725 23.8375 34.2452C23.8375 34.1179 23.887 33.9977 23.9718 33.9128L32.8955 24.9891L26.0719 24.9821C25.9446 24.9821 25.8244 24.9326 25.7396 24.8477C25.6547 24.7629 25.6052 24.6427 25.6052 24.5154C25.6052 24.3881 25.6476 24.275 25.7396 24.183C25.8315 24.0911 25.9446 24.0487 26.0719 24.0487L26.079 24.0699Z"
                            fill="#CBBD70"
                          />
                        </g>
                        <g
                          className={classes.second}
                          clip-path="url(#clip0_356_1288)"
                        >
                          <path
                            d="M26.079 24.0699H34.0269C34.0269 24.0699 34.1471 24.077 34.2036 24.1053C34.2602 24.1336 34.3168 24.1618 34.3592 24.2043C34.4016 24.2467 34.437 24.2962 34.4582 24.3598C34.4865 24.4164 34.4936 24.48 34.4936 24.5366L34.4936 32.4845C34.4936 32.6118 34.4511 32.7249 34.3592 32.8168C34.2673 32.9087 34.1541 32.9512 34.0269 32.9512C33.8996 32.9512 33.7794 32.9017 33.6945 32.8168C33.6097 32.732 33.5602 32.6118 33.5602 32.4845L33.5531 25.6609L24.6365 34.5775C24.5516 34.6624 24.4314 34.7119 24.3041 34.7119C24.1769 34.7119 24.0567 34.6624 23.9718 34.5775C23.887 34.4927 23.8375 34.3725 23.8375 34.2452C23.8375 34.1179 23.887 33.9977 23.9718 33.9128L32.8955 24.9891L26.0719 24.9821C25.9446 24.9821 25.8244 24.9326 25.7396 24.8477C25.6547 24.7629 25.6052 24.6427 25.6052 24.5154C25.6052 24.3881 25.6476 24.275 25.7396 24.183C25.8315 24.0911 25.9446 24.0487 26.0719 24.0487L26.079 24.0699Z"
                            fill="#CBBD70"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_356_1288">
                            <rect
                              width="12.18"
                              height="14.69"
                              fill="white"
                              transform="translate(28.2852 38.8909) rotate(-135)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </Link>
                  </span>
                  <Link href="/contact">GET IN TOUCH</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${classes.brands}`}>
        <div className={`${classes.content} container`}>
          {logoData.map((logo, index) => (
            <div className={classes.logos} key={index}>
              <Image
                src={`assets/Images/Section_1/${logo.src}`}
                alt={logo.alt}
                layout="fill"
                priority={index < 2}
                loading={index >= 2 ? "lazy" : "eager"}
              />
            </div>
          ))}
        </div>
      </div>
      <div className={`${classes.mob_brands}`}>
        <Marquee gradient={false} speed={50}>
          {logoData.map((logo, index) => (
            <div className={classes.logos} key={index}>
              <Image
                src={`assets/Images/Section_1/${logo.src}`}
                alt={logo.alt}
                layout="fill"
                priority={index < 2}
                loading={index >= 2 ? "lazy" : "eager"}
              />
            </div>
          ))}
        </Marquee>
      </div>

      {isModalOpen && (
        <div className={classes.modal} onClick={toggleModal}>
          <video
            autoPlay
            width="100%"
            height="100%"
            loop
            playsInline
            className={classes.video}
            muted={false}
          >
            <source
              src="assets/Images/speaking/A_WINNING_MINDSET_LIZA_PAVLAKOS_CORPORATE_SHOWREEL.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      )}
      {isModalOpenSecond && (
        <div className={classes.modal} onClick={toggleModalSecond}>
          <video
            autoPlay
            width="100%"
            height="100%"
            loop
            playsInline
            className={classes.video}
            muted={false}
          >
            <source
              src="assets/Images/speaking/WHY_YOU SHOULD_BOOK LIZA_PAVLAKOS FOR_YOUR_NEXT_EVENT!.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      )}
      {isModalOpenThird && (
        <div className={classes.modal} onClick={toggleModalThird}>
          <video
            autoPlay
            width="100%"
            height="100%"
            loop
            playsInline
            className={classes.video}
            muted={false}
          >
            <source
              src="assets/Images/speaking/BEST_SPEAKER_MINI_SHOWREEL_LIZA_PAVLAKOS_BEYOND_SURVIVAL_RESILIENCE..mp4"
              type="video/mp4"
            />
          </video>
        </div>
      )}
    </section>
  );
}
