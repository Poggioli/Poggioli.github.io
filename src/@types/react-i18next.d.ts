import "react-i18next";
import ptBR from "../translations/resources/pt-br.json";

declare module "react-i18next" {
  interface CustomTypeOptions {
    defaultNS: "common";
    resources: typeof ptBR;
    allowObjectInHTMLChildren: true;
  }
}
