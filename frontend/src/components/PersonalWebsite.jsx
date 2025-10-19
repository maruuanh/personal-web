import React from "react";
import { Badge } from "./ui/badge";
import MenuItems from "./MenuItems";
import { useLanguage } from "../contexts/LanguageContext";

const PersonalWebsite = () => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-[#202023] dark:to-[#202023] transition-colors duration-300 flex flex-col">
      <div className="fixed top-6 right-6 z-50"></div>

      <div className="container mx-auto px-6 pt-12 py-24 sm:pt-12 md:w-[745px] gap-5 grow">
        {/* Landing Section */}
        <section className="h-100 flex justify-center items-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-3xl md:text-6xl font-bold text-gray-800 dark:text-gray-100 animate-fade-in">
              {t("greeting")}
            </h1>
            <p className="text-lg md:text-xl font-normal text-gray-600 dark:text-gray-300 max-w-2xl animate-fade-in-delay">
              {t("subtitle")}
            </p>
          </div>
          <div className="relative group">
            <div className="w-24 h-24 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center overflow-hidden border-4 border-green-500 shadow-2xl transition-all duration-300 group-hover/item:shadow-green-500/20 group-hover/item:border-green-400">
              <div className="w-20 h-20 md:w-32 md:h-32 rounded-full bg-gray-400 dark:bg-gray-500 flex items-center justify-center">
                <span className="text-6xl text-gray-600 dark:text-gray-300">
                  👤
                </span>
              </div>
            </div>
            <div className="absolute -bottom-3 -right-3 w-8 h-8 bg-green-500 rounded-full border-4 border-white dark:border-gray-800 animate-pulse"></div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-5 flex flex-col justify-center text-justify">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2 relative">
            {t("about")}
            <div className="absolute bottom-0 left-0 w-16 h-1 bg-green-500 rounded-full"></div>
          </h2>
          <p className="text-md text-gray-500 dark:text-gray-300 leading-relaxed">
            {t("aboutDescription")}
          </p>
        </section>

        {/* Portfolio Section */}
        {/* <section className="py-5 flex flex-col justify-center text-justify">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2 relative">
            Works
            <div className="absolute bottom-0 left-0 w-16 h-1 bg-green-500 rounded-full"></div>
          </h2>
        </section> */}

        {/* Contact Section */}
        <section className="py-15 text-center space-y-8 ">
          <Badge className="bg-black dark:bg-white text-white dark:text-black px-3 py-1 text-md font-medium hover:bg-gray-800  transition-colors duration-200">
            {t("contactBadge")}
          </Badge>

          <p className="text-gray-700 dark:text-gray-300 text-lg max-w-md mx-auto">
            {t("contactText")}{" "}
            <a
              href="mailto:marwan@example.com"
              className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 underline decoration-2 underline-offset-4 transition-colors duration-200 font-medium"
            >
              {t("emailLink")}
            </a>
          </p>
        </section>
        {/* Social Links */}
      </div>
      <section className="sm:static fixed bottom-0 w-full py-5">
        <MenuItems />
      </section>
    </div>
  );
};

export default PersonalWebsite;
