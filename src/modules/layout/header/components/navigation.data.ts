import { I18N_PATHS } from '@/config/i18n-paths';

export type NavId = "about" | "contact" | "skills";

type INavConfig = {
  path: string;
  navLinks: { id: NavId; link: `#${string}` }[];
};

export const NavConfig: INavConfig = {
  path: I18N_PATHS.navigation,
  navLinks: [
    { id: "about", link: "#about" },
    { id: "skills", link: "#skills" },
    { id: "contact", link: "#contact" },
  ],
};
