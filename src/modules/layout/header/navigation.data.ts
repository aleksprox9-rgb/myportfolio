export type NavId = 'projects' | 'about' | 'contact';

export type IHeaderNav = {
    path: string;
    navLinks: { id: NavId, link: `#${string}` }[];
}

export const HeaderNav: IHeaderNav = {
    path: 'header.nav',
    navLinks: [
        { id: 'projects', link: '#projects' },
        { id: 'about', link: '#about' },
        { id: 'contact', link: '#contact' }
    ]
};