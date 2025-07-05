import React from "react";
import ContactUsForm from "./ContactUsForm";

const ContactForm = () => {
  return (
    <div className="border border-richblack-600 text-richblack-300 rounded-xl p-4 lg:p-5 flex gap-2 flex-col">
      <h1 className="text-2xl leading-8 font-semibold text-richblack-5">
        Got a Idea? We&apos;ve got the skills. Let&apos;s team up
      </h1>
      <p className="text-sm">
        Tell us more about yourself and what you&apos;re got in mind.
      </p>

      <div className="mt-1">
        <ContactUsForm />
      </div>
    </div>
  );
};

export default ContactForm;