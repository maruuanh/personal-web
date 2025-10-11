import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations = {
  en: {
    greeting: "Hi, I'm Marwan Hadid",
    subtitle: "A programmer specializing in web, mobile, and progressive web applications",
    about: "About Me",
    aboutDescription: "I create innovative solutions through elegant code and solve complex problems with computational thinking. With expertise in modern web technologies, I build seamless digital experiences that bridge the gap between functionality and user delight.",
    contactBadge: "Contact Person",
    contactText: "If you would like to chat, just message me a dm via",
    emailLink: "my email",
    home: "Home"
  },
  id: {
    greeting: "Halo, saya Marwan Hadid",
    subtitle: "Seorang programmer yang berspesialisasi dalam web, mobile, dan aplikasi web progresif",
    about: "Tentang Saya",
    aboutDescription: "Saya menciptakan solusi inovatif melalui kode yang elegan dan memecahkan masalah kompleks dengan pemikiran komputasional. Dengan keahlian dalam teknologi web modern, saya membangun pengalaman digital yang mulus untuk menjembatani celah antara fungsionalitas dan kepuasan pengguna.",
    contactBadge: "Kontak Person",
    contactText: "Jika Anda ingin mengobrol, kirimkan pesan langsung melalui",
    emailLink: "email saya",
    home: "Beranda"
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const t = (key) => translations[language][key] || key;

  const switchLanguage = (lang) => setLanguage(lang);

  return (
    <LanguageContext.Provider value={{ language, switchLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};