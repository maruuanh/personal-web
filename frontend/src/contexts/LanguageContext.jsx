import React, { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

const translations = {
  en: {
    greeting: "Hi, I'm Marwan",
    subtitle:
      "A software developer based in Indonesia, loves to create solutions using code",
    about: "About",
    aboutDescription: `I started coding from zero as a dummy. For the first time, I had no a good understanding about programming. It took me a while to learn the fundamentals of programming.
                        Facing many bugs and errors always made me frustrated, but I never stopped learning. I kept learning and practicing to understand the problem and find the solution. With 
                        coding, I gradually thought computationally and solved problems structurally.
    `,
    contactBadge: "Contact",
    contactText: "If you would like to chat, just message me a dm via",
    emailLink: "my email",
    home: "Home",
  },
  id: {
    greeting: "Halo, saya Marwan",
    subtitle:
      "Seorang software developer yang berbasis di Indonesia, suka menciptakan solusi menggunakan kode",
    about: "Tentang Saya",
    aboutDescription: `Saya memulai coding dari nol sebagai seorang pemula. Pada awalnya, saya tidak memiliki pemahaman yang baik tentang pemrograman. Butuh waktu bagi saya untuk mempelajari dasar-dasar pemrograman.
      Menghadapi banyak bug dan error selalu membuat saya frustrasi, tetapi saya tidak pernah berhenti belajar. Saya terus belajar dan berlatih untuk memahami masalah dan menemukan solusinya. Dengan
      coding, saya secara bertahap berpikir secara komputasional dan menyelesaikan masalah secara struktural.
      `,
    contactBadge: "Kontak",
    contactText: "Jika Anda ingin mengobrol, kirimkan pesan langsung melalui",
    emailLink: "email saya",
    home: "Beranda",
  },
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const t = (key) => translations[language][key] || key;

  const switchLanguage = (lang) => setLanguage(lang);

  return (
    <LanguageContext.Provider value={{ language, switchLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
