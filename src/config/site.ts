export const languages = ["ko", "en"] as const;

export type Lang = (typeof languages)[number];

const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");

export const siteConfig = {
  name: "HEV",
  businessEmail: "",
  images: {
    homeHero: "",
    aboutStudio: "",
  },
  location: {
    ko: "대한민국 광주",
    en: "Gwangju, South Korea",
  },
  socialLinks: [] as Array<{ label: string; href: string }>,
};

export function isLang(value: string | undefined): value is Lang {
  return value === "ko" || value === "en";
}

export function getOtherLang(lang: Lang): Lang {
  return lang === "ko" ? "en" : "ko";
}

export function getLanguageSwitchPath(pathname: string, lang: Lang): string {
  const other = getOtherLang(lang);
  const token = `/${lang}`;
  const index = pathname.indexOf(token);

  if (index === -1) return `/${other}/`;

  return `${pathname.slice(0, index)}/${other}${pathname.slice(index + token.length)}`;
}

export function withBase(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalized}` || "/";
}
