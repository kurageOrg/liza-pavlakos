"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import classes from "@/app/styles/components/Contact/firstSection.module.scss";
import Image from "next/image";
import CustomSelect from "./customSelect";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import emailjs from "emailjs-com";

interface FormData {
  fullName: string;
  email: string;
  companyName: string;
  companyWebsite: string;
  eventDate: any;
  eventLocation: string;
  eventType: string;
  keynoteType: string;
  message: string;
}

interface Errors {
  [key: string]: string;
}

const eventTypeOptions = [
  { value: "Conference", label: "Conference" },
  { value: "Seminar", label: "Seminar" },
  { value: "Workshop", label: "Workshop" },
];

const keynoteTypeOptions = [
  { value: "Business", label: "Business" },
  { value: "Domestic Violence", label: "Domestic Violence" },
  { value: "Inspirational", label: "Inspirational" },
  { value: "IT (Information Technology)", label: "IT (Information Technology)" },
  { value: "Leadership", label: "Leadership" },
  { value: "Mental Health", label: "Mental Health" },
  { value: "Motivational", label: "Motivational" },
  { value: "Sales", label: "Sales" },
  { value: "Women In Business", label: "Women In Business" },
  { value: "Technical", label: "Technical" },
  { value: "Others", label: "Others" }
];


export default function FirstSection() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    companyName: "",
    companyWebsite: "",
    eventDate: null,
    eventLocation: "",
    eventType: "",
    keynoteType: "",
    message: "",
  });

  const [errors, setErrors] = useState<Errors>({});
  const [isTyping, setIsTyping] = useState<Partial<FormData>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setIsTyping({ ...isTyping, [name]: value !== "" });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
    setIsTyping({ ...isTyping, [name]: value !== "" });
    setErrors({ ...errors, [name]: "" });
  };

  const handleDateChange = (date: Date | null) => {
    setFormData({ ...formData, eventDate: date });
    setIsTyping({ ...isTyping, eventDate: date !== null });
    setErrors({ ...errors, eventDate: "" });
  };

  const validate = (): boolean => {
    let tempErrors: Errors = {};

    // Full Name validation
    if (!formData.fullName) tempErrors.fullName = "Full Name is required";

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      tempErrors.email = "Email is required";
    } else if (!emailPattern.test(formData.email)) {
      tempErrors.email = "Invalid email address";
    }

    // Company Name validation
    if (!formData.companyName)
      tempErrors.companyName = "Company Name is required";

    // Event Date validation
    if (!formData.eventDate) {
      tempErrors.eventDate = "Event Date is required";
    } else {
      const selectedDate = new Date(formData.eventDate);
      const currentDate = new Date();
      if (selectedDate < currentDate) {
        tempErrors.eventDate = "Event Date must be in the future";
      }
    }

    // Event Location validation
    if (!formData.eventLocation)
      tempErrors.eventLocation = "Event Location is required";

    // Event Type validation
    if (!formData.eventType) tempErrors.eventType = "Event Type is required";

    // Keynote Type validation
    if (!formData.keynoteType)
      tempErrors.keynoteType = "Keynote Type is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (validate()) {
      try {
        const serviceId = "service_vpvtb7z";
        const templateId = "template_skvn6cw";
        const userId = "bb3lDZQY1Ulo1Y5w5";
        const templateParams = {
          fullName: formData.fullName,
          email: formData.email,
          companyName: formData.companyName,
          companyWebsite: formData.companyWebsite,
          eventDate: formData.eventDate?.toString(),
          eventLocation: formData.eventLocation,
          eventType: formData.eventType,
          keynoteType: formData.keynoteType,
          message: formData.message,
        };

        await emailjs.send(serviceId, templateId, templateParams, userId);

        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 500000); 

        // Manually reset form values
        setFormData({
          fullName: "",
          email: "",
          companyName: "",
          companyWebsite: "",
          eventDate: null,
          eventLocation: "",
          eventType: "",
          keynoteType: "",
          message: "",
        });

        console.log("Form reset");
        // Show success toast or message here
      } catch (error) {
        console.error("Error sending email:", error);
        // Show error toast or message here
      }
    }
  };

  return (
    <section className={`${classes.section} container`}>
      <div className={classes.left}>
        <Image
          src="/assets/Images/contact/liza_left.jpeg"
          fill
          alt="liza left contact"
        />
      </div>
      <div className={classes.right}>
        <div className={classes.heading}>Contact</div>
        <div className={classes.sub_heading}>Let’s get in touch</div>
        {isSubmitted && (
          <div className={classes.thank_you_message}>
            <h2 className={classes.heading}>Thank You!</h2>
            <p className={classes.dec}>Your submission has been received. We will get back to you soon.</p>
          </div>
        )}
        <form style={{zIndex:isSubmitted ? -111 : 1}} className={classes.form} onSubmit={handleSubmit}>
          <div className={classes.column}>
            <div style={{ position: "relative" }}>
              <input
                name="fullName"
                placeholder="Full Name*"
                value={formData.fullName}
                onChange={handleChange}
                className={`${isTyping.fullName ? classes.typing : ""} ${
                  errors.fullName ? classes.error : ""
                }`}
              />
              {errors.fullName && (
                <p className={classes.error_message}>{errors.fullName}</p>
              )}
            </div>
            <div style={{ position: "relative" }}>
              <input
                name="email"
                placeholder="Email*"
                value={formData.email}
                onChange={handleChange}
                className={`${isTyping.email ? classes.typing : ""} ${
                  errors.email ? classes.error : ""
                }`}
              />
              {errors.email && (
                <p className={classes.error_message}>{errors.email}</p>
              )}
            </div>
          </div>
          <div className={classes.column}>
            <div style={{ position: "relative" }}>
              <input
                name="companyName"
                placeholder="Company Name*"
                value={formData.companyName}
                onChange={handleChange}
                className={`${isTyping.companyName ? classes.typing : ""} ${
                  errors.companyName ? classes.error : ""
                }`}
              />
              {errors.companyName && (
                <p className={classes.error_message}>{errors.companyName}</p>
              )}
            </div>
            <div style={{ position: "relative" }}>
              <input
                name="companyWebsite"
                placeholder="Company Website"
                value={formData.companyWebsite}
                onChange={handleChange}
                className={`${isTyping.companyWebsite ? classes.typing : ""}`}
              />
            </div>
          </div>
          <div className={classes.column}>
            <div style={{ position: "relative" }}>
              <DatePicker
                selected={formData.eventDate}
                onChange={handleDateChange}
                placeholderText="Event Date*"
                minDate={new Date()} // Disable previous dates
                className={`${classes.input} ${
                  isTyping.eventDate ? classes.typing : ""
                } ${errors.eventDate ? classes.error : ""}`}
              />

              {errors.eventDate && (
                <p className={classes.error_message}>{errors.eventDate}</p>
              )}
            </div>
            <div style={{ position: "relative" }}>
              <input
                name="eventLocation"
                placeholder="Event Location*"
                value={formData.eventLocation}
                onChange={handleChange}
                className={`${isTyping.eventLocation ? classes.typing : ""} ${
                  errors.eventLocation ? classes.error : ""
                }`}
              />
              {errors.eventLocation && (
                <p className={classes.error_message}>{errors.eventLocation}</p>
              )}
            </div>
          </div>
          <div className={classes.column}>
            <div style={{ position: "relative" }}>
              <CustomSelect
                name="eventType"
                placeholder="Event Type*"
                options={eventTypeOptions}
                value={formData.eventType}
                onChange={handleSelectChange}
                isTyping={isTyping.eventType}
                errors={errors.eventType}
              />
              {errors.eventType && (
                <p className={classes.error_message}>{errors.eventType}</p>
              )}
            </div>
            <div style={{ position: "relative" }}>
              <CustomSelect
                name="keynoteType"
                placeholder="Keynote Type*"
                options={keynoteTypeOptions}
                value={formData.keynoteType}
                onChange={handleSelectChange}
                isTyping={isTyping.keynoteType}
                errors={errors.keynoteType}
              />
              {errors.keynoteType && (
                <p className={classes.error_message}>{errors.keynoteType}</p>
              )}
            </div>
          </div>
          <div className={classes.textArea}>
            <div style={{ position: "relative" }}>
              <textarea
                name="message"
                placeholder="Your message"
                value={formData.message}
                onChange={handleChange}
                className={`${isTyping.message ? classes.typing : ""}`}
              />
            </div>
          </div>
          <button className={classes.submit} type="submit">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
