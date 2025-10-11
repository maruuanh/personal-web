import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { 
  Home, 
  Linkedin, 
  Instagram, 
  Github, 
  Sun, 
  Moon 
} from 'lucide-react';

const PersonalWebsite = () => {
  const { isDark, toggleTheme } = useTheme();
  const { language, switchLanguage, t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      {/* Language Switcher */}
      <div className="fixed top-6 right-6 z-50 flex gap-2">
        <button
          onClick={() => switchLanguage('en')}
          className={`w-8 h-6 rounded-sm overflow-hidden border-2 transition-all duration-200 hover:scale-110 ${
            language === 'en' ? 'border-green-500' : 'border-gray-300 dark:border-gray-600'
          }`}
        >
          <div className="w-full h-full bg-gradient-to-b from-blue-500 via-white to-red-500 flex items-center justify-center">
            <span className="text-[8px] font-bold text-blue-800">EN</span>
          </div>
        </button>
        <button
          onClick={() => switchLanguage('id')}
          className={`w-8 h-6 rounded-sm overflow-hidden border-2 transition-all duration-200 hover:scale-110 ${
            language === 'id' ? 'border-green-500' : 'border-gray-300 dark:border-gray-600'
          }`}
        >
          <div className="w-full h-full bg-gradient-to-b from-red-500 to-white flex items-center justify-center">
            <span className="text-[8px] font-bold text-red-800">ID</span>
          </div>
        </button>
      </div>

      <div className="container mx-auto px-6 py-12">
        {/* Landing Section */}
        <section className="min-h-screen flex flex-col justify-center items-center text-center space-y-8">
          <div className="relative group">
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center overflow-hidden border-4 border-green-500 shadow-2xl transition-all duration-300 group-hover:shadow-green-500/20 group-hover:border-green-400">
              <div className="w-32 h-32 rounded-full bg-gray-400 dark:bg-gray-500 flex items-center justify-center">
                <span className="text-6xl text-gray-600 dark:text-gray-300">👤</span>
              </div>
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white dark:border-gray-800 animate-pulse"></div>
          </div>
          
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-gray-100 animate-fade-in">
              {t('greeting')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl animate-fade-in-delay">
              {t('subtitle')}
            </p>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-8 relative">
              {t('about')}
              <div className="absolute bottom-0 left-0 w-16 h-1 bg-green-500 rounded-full"></div>
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {t('aboutDescription')}
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 text-center space-y-8">
          <Badge className="bg-black dark:bg-white text-white dark:text-black px-6 py-3 text-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-200">
            {t('contactBadge')}
          </Badge>
          
          <p className="text-gray-700 dark:text-gray-300 text-lg max-w-md mx-auto">
            {t('contactText')}{' '}
            <a 
              href="mailto:marwan@example.com" 
              className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 underline decoration-2 underline-offset-4 transition-colors duration-200 font-medium"
            >
              {t('emailLink')}
            </a>
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 pt-4">
            <Button 
              variant="ghost" 
              size="lg"
              className="group hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
            >
              <Home className="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-green-600 dark:group-hover:text-green-400 group-hover:scale-110 transition-all duration-200" />
              <span className="ml-2 text-gray-600 dark:text-gray-400 group-hover:text-green-600 dark:group-hover:text-green-400">
                {t('home')}
              </span>
            </Button>
            
            <Button 
              variant="ghost" 
              size="lg"
              className="group hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-200"
            >
              <Linkedin className="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:scale-110 transition-all duration-200" />
            </Button>
            
            <Button 
              variant="ghost" 
              size="lg"
              className="group hover:bg-pink-50 dark:hover:bg-pink-900/20 transition-all duration-200"
            >
              <Instagram className="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-pink-600 dark:group-hover:text-pink-400 group-hover:scale-110 transition-all duration-200" />
            </Button>
            
            <Button 
              variant="ghost" 
              size="lg"
              className="group hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
            >
              <Github className="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-white group-hover:scale-110 transition-all duration-200" />
            </Button>
          </div>

          {/* Theme Toggle */}
          <div className="pt-8">
            <Button
              onClick={toggleTheme}
              variant="outline"
              size="lg"
              className="group border-2 border-gray-300 dark:border-gray-600 hover:border-green-500 dark:hover:border-green-400 transition-all duration-200"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-yellow-500 group-hover:rotate-12 transition-transform duration-200" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700 group-hover:-rotate-12 transition-transform duration-200" />
              )}
              <span className="ml-2 text-gray-700 dark:text-gray-300">
                {isDark ? 'Light Mode' : 'Dark Mode'}
              </span>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PersonalWebsite;