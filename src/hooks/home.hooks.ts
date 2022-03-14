import { MutableRefObject, useCallback, useEffect, useMemo, useRef, useState } from "react";


export interface HomeExit {
    buttonTheme: boolean;
    ButtonThemeWhite: () => void;
    ButtonThemeBlack: () => void;
    buttonThemeTest: boolean;
    homePage: boolean;
    habilidadePage: boolean;
    OnclickHabilidade: () => void;
    OnclickHomePage: () => void;
}

export const useHomeHooks = (): HomeExit => {
    
    const [buttonTheme,setButtonTheme] = useState(false);
    const [buttonThemeTest,setButtonThemeTest] = useState(false);
    const [homePage,setHomePage] = useState(true);
    const [habilidadePage,setHabilidadePage] = useState(false);

    useEffect(() => {
    }, [buttonTheme, buttonThemeTest])
    

    const ButtonThemeWhite = useCallback(() => {
        setButtonTheme(true);
        setButtonThemeTest(true);

    }, [buttonTheme, buttonThemeTest])

    const ButtonThemeBlack = useCallback(() => {
        setButtonTheme(false);
        setButtonThemeTest(false);

    }, [buttonTheme, buttonThemeTest])

    const OnclickHabilidade = useCallback(() => {
        setHomePage(false);
        setHabilidadePage(true);
    }, [homePage,habilidadePage])
    const OnclickHomePage = useCallback(() => {
        setHomePage(true);
        setHabilidadePage(false);
    }, [homePage,habilidadePage])

    return{
        buttonTheme,
        ButtonThemeWhite,
        ButtonThemeBlack,
        buttonThemeTest,
        habilidadePage,
        homePage,
        OnclickHabilidade,
        OnclickHomePage
    }
}