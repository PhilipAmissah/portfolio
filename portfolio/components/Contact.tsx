"use client";

import ReCaptchaWrapper from "./ReCaptchaWrapper";
import ContactForm from "./ContactForm";

export default function ContactPage() {
  return (
    <ReCaptchaWrapper>
      <ContactForm />
    </ReCaptchaWrapper>
  );
}
