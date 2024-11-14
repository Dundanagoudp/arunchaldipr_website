import React, { createContext, useContext, useState } from 'react';

// Create a context
const LanguageContext = createContext();

// Create a provider
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const translations = {
    en: {
      header: {
        about: 'About Us',
        contact: 'Contact Us',
      },
    },
    hi: {
      header: {
        about: 'हमारे बारे में',
        contact: 'संपर्क करें',
      },
    },
  };

  const getTranslation = (key) => {
    const keys = key.split('.'); // Handle nested keys
    let translation = translations[language];
    keys.forEach((k) => {
      translation = translation[k];
    });
    return translation || key; // Fallback if translation is not found
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, getTranslation }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the context
export const useLanguage = () => useContext(LanguageContext);
