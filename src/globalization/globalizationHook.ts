import { useState, useEffect } from "react";

import FindLocale from './globalization';

const useGlobalization = () => {
    const [locale, setLocale] = useState({
        locale: 'BR',
        words: {
            pageTitle: "You're not authenticated, click to sign in",
            button: "Authenticate",
            version: "Version"
        }
    });

    useEffect(() => {
        setLocale(FindLocale(process.env.REACT_APP_LANGUAGE))
    }, [])

    return locale.words;
}

export default useGlobalization;