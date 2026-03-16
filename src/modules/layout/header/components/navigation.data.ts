export type NavId = "projects" | "about" | "contact" | "skills";

export type IHeaderData = {
  path: string;
  navLinks: { id: NavId; link: `#${string}` }[];
};

export const HeaderData: IHeaderData = {
  path: "header.nav",
  navLinks: [
    { id: "about", link: "#about" },
    { id: "skills", link: "#skills" },
    { id: "projects", link: "#projects" },
    { id: "contact", link: "#contact" },
  ],
};
