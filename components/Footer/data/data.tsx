interface footerLinkProps{
    title:string,
    href:string,
}

interface MedsosProps{
    name:string,
    link:string,
}

export const footerLink:footerLinkProps [] = [
    {
        title:'home',
        href:'/'
    },
    {
        title:'about',
        href:'/about'
    },
    {
        title:'news',
        href:'/news'
    },
    {
        title:'careers',
        href:'/careers'
    },
]

export const Medsos:MedsosProps[] = [
    {
    name:'Instagram',
    link:'/'
    },
    {
        name:'Linkedin',
        link:'/'
     },
    {
        name:'Twitter(X)',
        link:'/'
     },
]