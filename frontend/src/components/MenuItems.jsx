import { Home, Linkedin, Instagram, Github, Sun, Moon } from "lucide-react";
import MenuButton from "./MenuButton";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";
export default function MenuItems() {
  const { isDark, toggleTheme } = useTheme();
  const { language, switchLanguage } = useLanguage();

  const menuItems = [
    {
      name: "Home",
      logo: (
        <Home className="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover/item:scale-110 transition-all duration-200" />
      ),
    },
    {
      name: "Linkedin",
      logo: (
        <Linkedin className="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover/item:scale-110 transition-all duration-200" />
      ),
    },
    {
      name: "Instagram",
      logo: (
        <Instagram className="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover/item:scale-110 transition-all duration-200" />
      ),
    },
    {
      name: "Github",
      logo: (
        <Github className="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover/item:scale-110 transition-all duration-200" />
      ),
    },
    {
      name: "Dark Mode",
      logo: isDark ? (
        <Sun className="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover/item:scale-110 transition-all duration-200" />
      ) : (
        <Moon className="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover/item:scale-110 transition-all duration-200" />
      ),
      onClick: toggleTheme,
    },
    {
      name: language === "en" ? "Language" : "Bahasa",
      logo: (
        <div className="flex items-center space-x-2">
          <Switch
            onCheckedChange={() =>
              switchLanguage(language === "en" ? "id" : "en")
            }
          />
          <Label className="text-gray-600 dark:text-gray-300">
            {language === "en" ? "EN" : "ID"}
          </Label>
        </div>
      ),
    },
  ];

  return (
    <div className="bar py-0 relative px-3 hover:px-3 border dark:border-gray-500 w-max pointer-events-auto rounded-full space-x-6 shadow-sm mx-auto flex min-h-full h-full overflow-visible bg-white dark:bg-[#202023]">
      {menuItems.map((item, index) => (
        <MenuButton
          key={index}
          name={item.name}
          icon={item.logo}
          onClick={item.onClick}
        />
      ))}
    </div>
  );
}
