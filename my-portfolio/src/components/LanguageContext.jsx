import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

const translations = {
  kg: {
    home: "Башкы бет",
    about: "Мен жөнүндө",
    skills: "Жөндөмдөр",
    projects: "Долбоорлор",
    contact: "Байланыш",
    hello: "Салам! Мен React Developerмин",
    description: "Мен заманбап жана кооз веб-сайттарды жасайм.",
    viewProjects: "Долбоорлорду көрүү",
  },

  ru: {
    home: "Главная",
    about: "Обо мне",
    skills: "Навыки",
    projects: "Проекты",
    contact: "Контакты",
    hello: "Привет! Я React Developer",
    description: "Я создаю современные и красивые веб-сайты.",
    viewProjects: "Посмотреть проекты",
  },

  en: {
    home: "Home",
    about: "About me",
    skills: "Skills",
    projects: "Projects",
    contact: "Contact",
    hello: "Hello! I'm a React Developer",
    description: "I create modern and beautiful websites.",
    viewProjects: "View Projects",
  },
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "kg"
  );

  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        changeLanguage,
        t: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);