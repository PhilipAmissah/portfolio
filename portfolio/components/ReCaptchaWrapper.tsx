"use client";

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

interface Props {
  children: React.ReactNode;
}

export default function ReCaptchaWrapper({ children }: Props) {
  console.log("Loaded site key:", process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY);

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
      scriptProps={{
        async: true,
        defer: true,
      }}
    >
      {children}
    </GoogleReCaptchaProvider>
  );
}
