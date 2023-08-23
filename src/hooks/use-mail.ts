type MailData = {
  name?: string;
  email: string;
  message: string;
};

export default function useMail() {
  const sendMail = async (data: MailData) => {
    const response = await fetch("/api/mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        from: process.env.NEXT_PUBLIC_SITE_EMAIL as string,
        to: process.env.NEXT_PUBLIC_CONTACT_EMAIL as string,
        cc: process.env.NEXT_PUBLIC_CONTACT_EMAIL_CC as string,
      },
      body: JSON.stringify(data),
    });
    return response.json();
  };

  return {
    sendMail,
  };
}