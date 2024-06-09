"use client";
import classes from "@/app/styles/components/Home/sixthSection.module.scss";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Modal = ({
  isOpen,
  onClose,
  videoLink,
}: {
  isOpen: boolean;
  onClose: () => void;
  videoLink: string;
}) => {
  if (!isOpen) return null;
  const videoUrl = `${videoLink}&autoplay=1`;

  return (
    <div onClick={onClose} className={classes.modal}>
        <iframe
          src={videoUrl}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
    </div>
  );
};

const SixthSection: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState("");
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      gsap.to(textRef.current, {
        x: -700,
        ease: "none",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }
  }, []);
  
  const data = [
    {
      id: 1,
      imageSrc: "liza1.png",
      heading:
        "A Powerful Mindset. Liza Pavlakos Documentary. Best Adversity Speaker",
      description:
        "Life in the modern world can be stressful, confusing and challenging even when things are going well, but what happens when forces beyond your control intervene and take you on a dark journey with no escape?|||That’s exactly what has happened to Liza Pavlakos more than once, yet she has survived, and even thrived in the modern world. For her, it... ",
      mob_description:
        "Life in the modern world can be stressful, confusing and challenging even when things are going well, but what happens when forces beyond your control intervene an...",
      videoLink:
        "https://www.youtube.com/embed/5PKkyGts9Is?si=yq8xj7WYS10-k9U_",
    },
    {
      id: 2,
      imageSrc: "liza2.png",
      heading: "Overcoming Depression: Liza Pavlakos Motivation",
      description:
        "Explore the world of motivation and empowerment with Liza Pavlakos, Founder of Mind Hub Directory—a mental health directory that strives to make a positive impact. Liza is a highly sought-after and accomplished speaker, as well as the author of the compelling novel Conviction. Recognized with Toastmasters' Golden Gavel Award, she is ranked among the Top 10 Female Speakers in the World by Real Lead...",
      mob_description:
        "Explore the world of motivation and empowerment with Liza Pavlakos, Founder of Mind Hub Directory—a mental health directory that strives to make a positive impact. Liza is a highly sough...",
      videoLink:
        "https://www.youtube.com/embed/kAF4NHLYM9Q?si=FzGSC8FJNOXdVRl0",
    },
    {
      id: 3,
      imageSrc: "liza3.png",
      heading: "Liza Pavlakos: Qatar Airways",
      description:
        "Liza Pavlakos is a powerful speaker on innovation, creativity and entrepreneurial mindset, sharing with the audience her captivating personal stories that most of us could never imagine. |||||| Surviving sexual abuse as a child, homelessness and intense domestic violence, Liza was determined not to be a victim regardless of her past adversities. She went on to build a successful tailoring franchise bran...",
      mob_description:
        "Liza Pavlakos is a powerful speaker on innovation, creativity and entrepreneurial mindset, sharing with the audience her captivating personal stories that most of us could never imagine.",
      videoLink:
        "https://www.youtube.com/embed/U90Qn9WvaK8?si=p2y7alWk2YwuXFOd",
    },
  ];

  const socialData = [
    {
      id: 1,
      imageSrc: "lizaInstaIcon.svg",
      heading: "instagram",
      description:
        "Captivating visual story of my unique journey and quick updates.",
      link: "https://www.instagram.com/lizapavlakos/?hl=en",
    },
    {
      id: 2,
      imageSrc: "lizaXIcon.svg",
      heading: "twitter",
      description:
        "Engaging conversation and updates that keep you connected with me.",
      link: "https://twitter.com/LizaPavlakos",
    },
    {
      id: 3,
      imageSrc: "lizaYoutubeIcon.svg",
      heading: "youtube",
      description: "Discover showreels and other videos.",
      link: "https://www.youtube.com/@LizaPavlakos",
    },
    {
      id: 4,
      imageSrc: "lizaLINKEDIN.svg",
      heading: "LINKEDIN",
      description: "Know about my foundation, mind hub and other updates.",
      link: "https://au.linkedin.com/in/lizapavlakos",
    },
  ];

  const openModal = (videoLink: string) => {
    setSelectedVideo(videoLink);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedVideo("");
  };
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


  return (
    <section className={`${classes.section} `}>
      <div className={`${classes.top} container `}>
        <h1 className={classes.heading}>Corporate Showreel</h1>
        <div className={classes.viewAll}>
          <Link href="/corporate-showreel">
          <span>
      <svg
        width="42"
        height="42"
        viewBox="0 0 42 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="20.9922"
          cy="20.991"
          r="20.5"
          transform="rotate(-135 20.9922 20.991)"
          fill="#D9D9D9"
          fillOpacity="0.1"
        />
        <circle
          cx="20.9922"
          cy="20.991"
          r="20"
          transform="rotate(-135 20.9922 20.991)"
          stroke="#F4F2EE"
          strokeOpacity="0.2"
        />
        <g  className={classes.first} clipPath="url(#clip0_0_1)">
          <path
            d="M18.079 16.0697H26.0269C26.0269 16.0697 26.1471 16.0767 26.2036 16.105C26.2602 16.1333 26.3168 16.1616 26.3592 16.204C26.4016 16.2464 26.437 16.2959 26.4582 16.3596C26.4865 16.4161 26.4936 16.4798 26.4936 16.5364L26.4936 24.4842C26.4936 24.6115 26.4511 24.7247 26.3592 24.8166C26.2673 24.9085 26.1541 24.9509 26.0269 24.9509C25.8996 24.9509 25.7794 24.9014 25.6945 24.8166C25.6097 24.7317 25.5602 24.6115 25.5602 24.4842L25.5531 17.6607L16.6365 26.5773C16.5516 26.6621 16.4314 26.7116 16.3041 26.7116C16.1769 26.7116 16.0567 26.6621 15.9718 26.5773C15.887 26.4924 15.8375 26.3722 15.8375 26.2449C15.8375 26.1177 15.887 25.9974 15.9718 25.9126L24.8955 16.9889L18.0719 16.9818C17.9446 16.9818 17.8244 16.9323 17.7396 16.8475C17.6547 16.7626 17.6052 16.6424 17.6052 16.5151C17.6052 16.3879 17.6476 16.2747 17.7396 16.1828C17.8315 16.0909 17.9446 16.0485 18.0719 16.0485L18.079 16.0697Z"
            fill="#F4F2EE"
          />
        </g>
        <g className={classes.second} clipPath="url(#clip0_0_1)">
          <path
            d="M18.079 16.0697H26.0269C26.0269 16.0697 26.1471 16.0767 26.2036 16.105C26.2602 16.1333 26.3168 16.1616 26.3592 16.204C26.4016 16.2464 26.437 16.2959 26.4582 16.3596C26.4865 16.4161 26.4936 16.4798 26.4936 16.5364L26.4936 24.4842C26.4936 24.6115 26.4511 24.7247 26.3592 24.8166C26.2673 24.9085 26.1541 24.9509 26.0269 24.9509C25.8996 24.9509 25.7794 24.9014 25.6945 24.8166C25.6097 24.7317 25.5602 24.6115 25.5602 24.4842L25.5531 17.6607L16.6365 26.5773C16.5516 26.6621 16.4314 26.7116 16.3041 26.7116C16.1769 26.7116 16.0567 26.6621 15.9718 26.5773C15.887 26.4924 15.8375 26.3722 15.8375 26.2449C15.8375 26.1177 15.887 25.9974 15.9718 25.9126L24.8955 16.9889L18.0719 16.9818C17.9446 16.9818 17.8244 16.9323 17.7396 16.8475C17.6547 16.7626 17.6052 16.6424 17.6052 16.5151C17.6052 16.3879 17.6476 16.2747 17.7396 16.1828C17.8315 16.0909 17.9446 16.0485 18.0719 16.0485L18.079 16.0697Z"
            fill="#F4F2EE"
          />
        </g>
        <defs>
          <clipPath id="clip0_0_1">
            <rect
              width="12.18"
              height="14.69"
              fill="white"
              transform="translate(20.2852 30.8906) rotate(-135)"
            />
          </clipPath>
        </defs>
      </svg>
    </span>
          </Link>
          <Link href="/corporate-showreel">
            <p className={classes.view}>VIEW ALL</p>
          </Link>
        </div>
      </div>
      <div className={`${classes.cards} container `}>
        {data.map((item) => {
          const descriptionParts = item.description
            ? item.description.split("|||")
            : [];

          return (
            <div
              key={item.id}
              className={classes.singleItem}
              onClick={
                item.videoLink ? () => openModal(item.videoLink) : undefined
              }
            >
              <div className={classes.image}>
                <Image
                  src={`/assets/Images/section_6/${item.imageSrc}`}
                  alt={item.heading}
                  width={500}
                  height={300}
                  style={{ cursor: item.videoLink ? "pointer" : "default" }}
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
      </div>
      <div className={`${classes.mob_cards}`}>
        <Slider {...settings}>
          {data.map((item) => {
            const descriptionParts = item.mob_description
              ? item.mob_description.split("|||")
              : [];

            return (
              <div
                key={item.id}
                className={classes.singleItem}
                onClick={
                  item.videoLink ? () => openModal(item.videoLink) : undefined
                }
              >
                <div className={classes.image}>
                  <Image
                    src={`/assets/Images/section_6/${item.imageSrc}`}
                    alt={item.heading}
                    width={500}
                    height={300}
                    style={{ cursor: item.videoLink ? "pointer" : "default" }}
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
      <div className={classes.mob_viewAll}>
        <Link href="/corporate-showreel">
          <span>
            <svg
              width="42"
              height="42"
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="20.9922"
                cy="20.991"
                r="20.5"
                transform="rotate(-135 20.9922 20.991)"
                fill="#D9D9D9"
                fillOpacity="0.1"
              />
              <circle
                cx="20.9922"
                cy="20.991"
                r="20"
                transform="rotate(-135 20.9922 20.991)"
                stroke="#F4F2EE"
                strokeOpacity="0.2"
              />
              <g clipPath="url(#clip0_0_1)">
                <path
                  d="M18.079 16.0697H26.0269C26.0269 16.0697 26.1471 16.0767 26.2036 16.105C26.2602 16.1333 26.3168 16.1616 26.3592 16.204C26.4016 16.2464 26.437 16.2959 26.4582 16.3596C26.4865 16.4161 26.4936 16.4798 26.4936 16.5364L26.4936 24.4842C26.4936 24.6115 26.4511 24.7247 26.3592 24.8166C26.2673 24.9085 26.1541 24.9509 26.0269 24.9509C25.8996 24.9509 25.7794 24.9014 25.6945 24.8166C25.6097 24.7317 25.5602 24.6115 25.5602 24.4842L25.5531 17.6607L16.6365 26.5773C16.5516 26.6621 16.4314 26.7116 16.3041 26.7116C16.1769 26.7116 16.0567 26.6621 15.9718 26.5773C15.887 26.4924 15.8375 26.3722 15.8375 26.2449C15.8375 26.1177 15.887 25.9974 15.9718 25.9126L24.8955 16.9889L18.0719 16.9818C17.9446 16.9818 17.8244 16.9323 17.7396 16.8475C17.6547 16.7626 17.6052 16.6424 17.6052 16.5151C17.6052 16.3879 17.6476 16.2747 17.7396 16.1828C17.8315 16.0909 17.9446 16.0485 18.0719 16.0485L18.079 16.0697Z"
                  fill="#F4F2EE"
                />
              </g>
              <defs>
                <clipPath id="clip0_0_1">
                  <rect
                    width="12.18"
                    height="14.69"
                    fill="white"
                    transform="translate(20.2852 30.8906) rotate(-135)"
                  />
                </clipPath>
              </defs>
            </svg>
          </span>
        </Link>

        <Link href="/corporate-showreel">
          <p className={classes.view}>VIEW ALL</p>
        </Link>
      </div>
      <div className={`${classes.marquee} container`} >
        <div ref={textRef} className={classes.track}>
          {Array.from({ length: 200 }).map((_, index) => (
            <span key={index} className={classes.content}>
              • FOLLOW LIZA ON SOCIAL MEDIA{" "}
            </span>
          ))}
        </div>
      </div>
      <div className={`${classes.socialCards} container `}>
        {socialData.map((item) => {
          const descriptionParts = item.description
            ? item.description.split("|||")
            : [];

          return (
            <div key={item.id} className={classes.singleItem}>
              <div className={classes.image}>
                <Link
                  href={item.link}
                  passHref
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={`/assets/Images/section_6/${item.imageSrc}`}
                    alt={item.heading}
                    width={25}
                    height={25}
                    priority
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml;base64,..."
                  />
                </Link>
                <Link
                  href={item.link}
                  passHref
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 42 42"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="20.9922"
                        cy="20.991"
                        r="20.5"
                        transform="rotate(-135 20.9922 20.991)"
                        fill="#D9D9D9"
                        fillOpacity="0.1"
                      />
                      <circle
                        cx="20.9922"
                        cy="20.991"
                        r="20"
                        transform="rotate(-135 20.9922 20.991)"
                        stroke="#F4F2EE"
                        strokeOpacity="0.2"
                      />
                      <g className={classes.first} clipPath="url(#clip0_0_1)">
                        <path
                          d="M18.079 16.0697H26.0269C26.0269 16.0697 26.1471 16.0767 26.2036 16.105C26.2602 16.1333 26.3168 16.1616 26.3592 16.204C26.4016 16.2464 26.437 16.2959 26.4582 16.3596C26.4865 16.4161 26.4936 16.4798 26.4936 16.5364L26.4936 24.4842C26.4936 24.6115 26.4511 24.7247 26.3592 24.8166C26.2673 24.9085 26.1541 24.9509 26.0269 24.9509C25.8996 24.9509 25.7794 24.9014 25.6945 24.8166C25.6097 24.7317 25.5602 24.6115 25.5602 24.4842L25.5531 17.6607L16.6365 26.5773C16.5516 26.6621 16.4314 26.7116 16.3041 26.7116C16.1769 26.7116 16.0567 26.6621 15.9718 26.5773C15.887 26.4924 15.8375 26.3722 15.8375 26.2449C15.8375 26.1177 15.887 25.9974 15.9718 25.9126L24.8955 16.9889L18.0719 16.9818C17.9446 16.9818 17.8244 16.9323 17.7396 16.8475C17.6547 16.7626 17.6052 16.6424 17.6052 16.5151C17.6052 16.3879 17.6476 16.2747 17.7396 16.1828C17.8315 16.0909 17.9446 16.0485 18.0719 16.0485L18.079 16.0697Z"
                          fill="#F4F2EE"
                        />
                      </g>
                      <g className={classes.second} clipPath="url(#clip0_0_1)">
                        <path
                          d="M18.079 16.0697H26.0269C26.0269 16.0697 26.1471 16.0767 26.2036 16.105C26.2602 16.1333 26.3168 16.1616 26.3592 16.204C26.4016 16.2464 26.437 16.2959 26.4582 16.3596C26.4865 16.4161 26.4936 16.4798 26.4936 16.5364L26.4936 24.4842C26.4936 24.6115 26.4511 24.7247 26.3592 24.8166C26.2673 24.9085 26.1541 24.9509 26.0269 24.9509C25.8996 24.9509 25.7794 24.9014 25.6945 24.8166C25.6097 24.7317 25.5602 24.6115 25.5602 24.4842L25.5531 17.6607L16.6365 26.5773C16.5516 26.6621 16.4314 26.7116 16.3041 26.7116C16.1769 26.7116 16.0567 26.6621 15.9718 26.5773C15.887 26.4924 15.8375 26.3722 15.8375 26.2449C15.8375 26.1177 15.887 25.9974 15.9718 25.9126L24.8955 16.9889L18.0719 16.9818C17.9446 16.9818 17.8244 16.9323 17.7396 16.8475C17.6547 16.7626 17.6052 16.6424 17.6052 16.5151C17.6052 16.3879 17.6476 16.2747 17.7396 16.1828C17.8315 16.0909 17.9446 16.0485 18.0719 16.0485L18.079 16.0697Z"
                          fill="#F4F2EE"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_0_1">
                          <rect
                            width="12.18"
                            height="14.69"
                            fill="white"
                            transform="translate(20.2852 30.8906) rotate(-135)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                </Link>
              </div>
              <Link
                  href={item.link}
                  passHref
                  target="_blank"
                  rel="noopener noreferrer"
                >
              <h1 className={classes.heading}>{item.heading}</h1>
              </Link>
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
      </div>
      <div className={`${classes.mob_socialCards} container `}>
        <Link href="/">
          <svg
            width="77"
            height="68"
            viewBox="0 0 77 68"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M35.0088 67.9956C31.3725 66.5436 30.392 64.8876 30.7789 60.8978C30.9877 58.7394 31.7528 56.7741 32.9202 54.9799C36.2399 49.8803 39.9114 45.0614 44.4359 40.9399C45.8935 39.6129 45.8605 39.3563 44.293 38.2399C43.7566 37.8582 43.2092 37.4853 42.7211 37.0466C41.2569 35.735 41.0085 34.5374 41.7823 32.7278C42.8464 30.2449 43.9193 27.7663 44.9724 25.279C45.1482 24.8667 45.5572 24.3337 45.0229 24.009C44.6975 23.8116 44.1193 23.8643 43.7126 23.9893C41.8153 24.5749 40.3313 25.7002 39.4497 27.5229C39.2035 28.0317 38.9023 28.4156 38.2648 28.1546C37.6272 27.8958 36.994 27.547 37.1919 26.7332C37.3348 26.1476 37.5964 25.5356 37.9702 25.0684C39.3926 23.2874 41.2393 22.1644 43.5126 21.809C44.7899 21.6094 45.9133 22.0043 46.8653 22.8334C47.7644 23.6164 47.9865 24.6166 47.5226 25.7155C46.641 27.7992 45.7286 29.872 44.8295 31.9492C44.5107 32.6862 44.1633 33.4144 43.8819 34.1645C43.4796 35.2437 43.6401 35.7591 44.5107 36.4764C46.7971 38.3561 47.0477 38.3451 49.3298 36.5136C51.9306 34.4277 54.4171 32.2453 56.5672 29.6658C57.7676 28.2248 59.1966 26.8978 61.0082 26.1673C62.3141 25.6409 62.8483 26.0138 63.1495 27.4176C63.2308 27.7949 63.5188 28.1919 63.8244 28.4441C64.9193 29.3456 64.994 29.5803 64.2641 30.8218C63.875 31.482 63.4353 32.1159 63.0637 32.7849C62.3295 34.1075 62.6526 35.2897 63.9519 36.0574C65.0622 36.7132 66.267 36.9194 67.5465 36.7571C68.272 36.665 69.0085 36.5663 69.734 36.6014C70.0681 36.6167 70.3869 36.9479 70.7123 37.1366C70.4968 37.4327 70.3452 37.8385 70.055 38.0052C67.5289 39.4528 63.9519 38.865 61.7447 36.6825C60.4827 35.4345 60.4058 35.4389 59.0515 36.5422C58.1149 37.3033 57.1872 38.0775 56.2088 38.7838C54.6875 39.8827 53.7136 39.7336 52.5176 38.3013C51.6646 37.2813 51.6558 37.2726 50.6335 38.0995C50.1586 38.4833 49.7211 38.911 49.1781 39.4002C49.576 39.9573 49.8596 40.4684 50.2487 40.8807C53.5003 44.3244 53.907 48.2747 52.6935 52.6966C50.761 59.7352 46.1002 64.212 39.6542 67.138C38.9903 67.4385 38.3153 67.7127 37.647 68H35.0088V67.9956ZM47.5732 40.8588C47.006 41.326 46.4761 41.7164 46.0012 42.1639C42.7936 45.1776 39.9202 48.4853 37.3524 52.0495C35.5276 54.5829 34.0458 57.3093 33.1665 60.3143C32.896 61.2377 32.7487 62.2643 32.8477 63.214C33.1159 65.7627 34.8021 66.8419 37.2447 66.1685C37.7371 66.0325 38.2164 65.8461 38.6891 65.6553C41.2855 64.6134 43.4114 62.8894 45.3879 60.9701C49.3276 57.147 51.2425 52.4926 51.0336 46.9981C50.9347 44.4253 49.8772 42.3657 47.5732 40.8588ZM55.9164 36.2088C58.1831 34.408 60.8411 32.9362 61.4127 29.4048C58.9833 30.8876 57.1652 32.6533 55.723 34.805C55.4504 35.213 55.1712 35.7174 55.9164 36.2088Z"
              fill="white"
            />
            <path
              d="M16.5415 0C17.4055 0.497903 17.3901 1.20857 17.1394 2.06619C15.3697 8.10464 13.092 13.9567 10.7045 19.7692C9.52607 22.6382 8.36526 25.5115 7.15609 28.4836C7.57161 28.5428 7.8816 28.613 8.19598 28.6305C10.4143 28.7446 12.1731 29.7536 13.6394 31.3591C14.2814 32.061 14.9388 32.7476 15.6027 33.4275C17.0361 34.8949 18.7619 35.3775 20.7296 34.8094C23.891 33.8991 26.6941 32.3199 28.886 29.8676C29.7676 28.8806 30.2886 27.5733 30.968 26.4086C31.2999 25.8405 31.577 25.2373 31.9485 24.7C32.4278 24.0047 33.2412 23.8445 33.8678 24.2744C34.5427 24.7394 34.5405 25.3382 34.1712 26.0028C33.7073 26.832 33.2698 27.6742 32.7949 28.4967C31.9683 29.929 31.7704 31.4491 32.1222 33.0459C32.3772 34.204 32.9532 34.522 34.1096 34.2764C34.6636 34.1601 35.3979 33.6798 35.7013 34.5747C35.9915 35.4301 35.2418 35.7087 34.6504 35.9807C33.4699 36.5246 32.3596 36.1956 31.5066 35.3731C30.68 34.5769 30.0468 33.5789 29.2663 32.594C28.222 33.2235 27.0612 33.9518 25.8719 34.6339C25.0804 35.0879 24.2736 35.5332 23.4315 35.882C20.0063 37.3011 16.902 36.7264 14.1781 34.2391C13.18 33.3288 12.2896 32.2979 11.309 31.3679C9.92619 30.0541 9.0468 30.0256 7.55182 31.199C5.70729 32.6445 4.39479 34.5352 3.13285 36.472C2.913 36.8076 2.69315 37.1519 2.42274 37.4437C1.97864 37.9218 1.44881 37.8867 0.927764 37.5687C0.382538 37.2375 0.195666 36.7703 0.46608 36.1693C0.584799 35.9039 0.705716 35.6319 0.868405 35.3928C3.44284 31.6618 5.08511 27.4702 6.82852 23.3313C9.89102 16.0579 12.8084 8.72976 15.0861 1.1647C15.2092 0.756726 15.4708 0.390427 15.6687 0.00438681C15.9611 0.00438681 16.2557 0.00438681 16.5481 0.00438681L16.5415 0Z"
              fill="white"
            />
            <path
              d="M77 37.7266C75.8854 38.3188 75.3028 38.06 74.8587 36.7769C75.6765 35.939 76.0151 35.9499 77 36.8492V37.7266Z"
              fill="white"
            />
            <path
              d="M35.6488 17.4903C35.4202 17.6065 35.1146 17.8675 34.7804 17.9092C34.1802 17.9838 33.2943 17.2249 33.4284 16.7533C33.4943 16.5164 33.912 16.2554 34.1934 16.2247C34.875 16.1479 35.6598 16.7752 35.6488 17.4924V17.4903Z"
              fill="white"
            />
            <path
              d="M0 45.3421V41.4181H1.4554C1.76979 41.4181 2.02921 41.4707 2.23587 41.576C2.44252 41.6813 2.59642 41.8239 2.69755 42.0081C2.79868 42.1924 2.84925 42.3964 2.84925 42.6245C2.84925 42.8526 2.80088 43.0412 2.70415 43.2211C2.60741 43.4031 2.45572 43.5479 2.24906 43.6576C2.0424 43.7672 1.77858 43.8221 1.4576 43.8221H0.721106V45.3399H0V45.3421ZM0.718907 43.2408H1.40923C1.65986 43.2408 1.84014 43.186 1.95226 43.0763C2.06219 42.9667 2.11715 42.8153 2.11715 42.6245C2.11715 42.4337 2.06219 42.2779 1.95226 42.1683C1.84234 42.0586 1.66206 42.0037 1.40923 42.0037H0.718907V43.243V43.2408Z"
              fill="white"
            />
            <path
              d="M4.20103 45.3421L5.63884 41.4181H6.44789L7.8857 45.3421H7.12063L6.80624 44.434H5.27169L4.95071 45.3421H4.19883H4.20103ZM5.47176 43.8747H6.61277L6.03897 42.2428L5.47176 43.8747Z"
              fill="white"
            />
            <path
              d="M10.5 45.3421L9.06219 41.4181H9.83166L10.9441 44.6073L12.0609 41.4181H12.8194L11.3816 45.3421H10.5Z"
              fill="white"
            />
            <path
              d="M14.7517 45.3421V41.4181H15.4706V44.7806H17.2118V45.3421H14.7517Z"
              fill="white"
            />
            <path
              d="M19.0609 45.3421L20.4987 41.4181H21.3078L22.7456 45.3421H21.9805L21.6661 44.434H20.1316L19.8106 45.3421H19.0587H19.0609ZM20.3317 43.8747H21.4727L20.8989 42.2428L20.3317 43.8747Z"
              fill="white"
            />
            <path
              d="M24.7176 45.3421V41.4181H25.4366V43.0039L26.892 41.4181H27.7802L26.3313 42.9754L27.8197 45.3399H26.9381L25.8147 43.5238L25.4388 43.9339V45.3399H24.7198L24.7176 45.3421Z"
              fill="white"
            />
            <path
              d="M31.3371 45.4101C30.9436 45.4101 30.6006 45.3245 30.306 45.1513C30.0114 44.9802 29.7806 44.7411 29.6157 44.4362C29.4486 44.1313 29.365 43.7804 29.365 43.379C29.365 42.9776 29.4486 42.6266 29.6157 42.3218C29.7828 42.0169 30.0136 41.78 30.306 41.6067C30.6006 41.4356 30.9436 41.3479 31.3371 41.3479C31.7306 41.3479 32.0692 41.4334 32.366 41.6067C32.6628 41.7778 32.8914 42.0169 33.0563 42.3218C33.2212 42.6266 33.3025 42.9776 33.3025 43.379C33.3025 43.7804 33.219 44.1313 33.0563 44.4362C32.8914 44.7411 32.6606 44.978 32.366 45.1513C32.0692 45.3223 31.7284 45.4101 31.3371 45.4101ZM31.3371 44.7652C31.7108 44.7652 32.0098 44.6424 32.2341 44.3945C32.4561 44.1489 32.5682 43.8089 32.5682 43.3812C32.5682 42.9535 32.4561 42.6135 32.2341 42.3678C32.012 42.1222 31.713 41.9971 31.3371 41.9971C30.9611 41.9971 30.6622 42.12 30.4379 42.3678C30.2137 42.6135 30.1015 42.9535 30.1015 43.3812C30.1015 43.8089 30.2137 44.1489 30.4379 44.3945C30.6622 44.6402 30.9611 44.7652 31.3371 44.7652Z"
              fill="white"
            />
            <path
              d="M36.7456 45.4101C36.4576 45.4101 36.2026 45.3597 35.9805 45.261C35.7585 45.1623 35.5848 45.0197 35.4573 44.8354C35.3298 44.6512 35.2638 44.4253 35.2616 44.1599H36.0201C36.0267 44.3419 36.0948 44.4977 36.2202 44.6227C36.3455 44.7477 36.5192 44.8113 36.739 44.8113C36.9303 44.8113 37.082 44.7652 37.1941 44.6731C37.3062 44.581 37.3634 44.4604 37.3634 44.3068C37.3634 44.1533 37.3128 44.0217 37.2139 43.9318C37.1149 43.8418 36.983 43.7694 36.8181 43.7124C36.6533 43.6554 36.4774 43.5962 36.2905 43.5325C35.9871 43.4273 35.7563 43.2935 35.5958 43.129C35.4375 42.9645 35.3562 42.7451 35.3562 42.4731C35.3518 42.2406 35.4067 42.0432 35.521 41.8765C35.6354 41.7098 35.7915 41.5804 35.9893 41.4905C36.1872 41.3984 36.4158 41.3523 36.6752 41.3523C36.9347 41.3523 37.1677 41.3984 37.37 41.4927C37.5722 41.587 37.7283 41.7164 37.8426 41.8853C37.957 42.0542 38.0185 42.2538 38.0251 42.4841H37.2556C37.2513 42.3459 37.1985 42.2231 37.0952 42.1178C36.9918 42.0103 36.8489 41.9577 36.6665 41.9577C36.5082 41.9533 36.3763 41.9928 36.2707 42.0717C36.1652 42.1507 36.1102 42.2691 36.1102 42.4227C36.1102 42.5543 36.152 42.6574 36.2333 42.7341C36.3147 42.8109 36.429 42.8745 36.5697 42.9272C36.7126 42.9798 36.8753 43.0346 37.0578 43.0961C37.2534 43.1641 37.4293 43.243 37.592 43.3308C37.7525 43.4207 37.8822 43.5391 37.979 43.6861C38.0757 43.833 38.1241 44.0239 38.1241 44.2542C38.1241 44.4604 38.0713 44.6512 37.9658 44.8267C37.8602 45.0021 37.7063 45.1425 37.4997 45.25C37.293 45.3575 37.0402 45.4101 36.7412 45.4101H36.7456Z"
              fill="white"
            />
          </svg>
        </Link>
        <div className={classes.bottom}>
          {socialData.map((item) => {
            const descriptionParts = item.description
              ? item.description.split("|||")
              : [];

            return (
              <div key={item.id} className={classes.singleItem}>
                <div className={classes.image}>
                  <Link
                    href={item.link}
                    passHref
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={`/assets/Images/section_6/${item.imageSrc}`}
                      alt={item.heading}
                      width={25}
                      height={25}
                      priority
                      placeholder="blur"
                      blurDataURL="data:image/svg+xml;base64,..."
                    />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        videoLink={selectedVideo}
      />
    </section>
  );
};

export default SixthSection;
