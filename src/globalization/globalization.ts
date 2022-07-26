import ptbr from './locales/pt-br'
import en from './locales/en'

const languages : any = [
    {
        locale: 'BR',
        words: ptbr
    },
    {
        locale: 'EN',
        words: en
    }
]

const FindLocale = (locale: any) => {
     return languages.find((x: any) => x.locale === locale)
};

export default FindLocale;
