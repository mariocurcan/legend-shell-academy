import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        welcome: "Welcome to the Academy",
        playerStatus: "Player Status",
        name: "Name",
        level: "Level",
        xp: "XP",
        zone: "Current Zone",
        spells: "Spells Learned",
      },
    },
    es: {
      translation: {
        welcome: "Bienvenido a la Academia",
        playerStatus: "Estado del Jugador",
        name: "Nombre",
        level: "Nivel",
        xp: "Experiencia",
        zone: "Zona Actual",
        spells: "Hechizos Aprendidos",
      },
    },
  },
  lng: "en", // idioma por defecto
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
