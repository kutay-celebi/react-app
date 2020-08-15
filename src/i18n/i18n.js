import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import {common, company, contact, messages, role, table, validation} from "./locales";


i18n.use(initReactI18next)
    .use(LanguageDetector)
    .init({
              ns         : ["common"],
              defaultNS  : "common",
              fallbackLng: "en",
              resources  : {
                  en: {
                      common    : common.en,
                      validation: validation.en,
                      company   : company.en,
                      table     : table.en,
                      contact   : contact.en,
                      role      : role.en,
                      messages  : messages.en
                  },
                  tr: {
                      common    : common.tr,
                      validation: validation.tr,
                      company   : company.tr,
                      table     : table.tr,
                      contact   : contact.tr,
                      role      : role.tr,
                      messages  : messages.tr
                  }
              },

              interpolation: {
                  escapeValue: false // react already safes from xss
              }
          });
export default i18n;