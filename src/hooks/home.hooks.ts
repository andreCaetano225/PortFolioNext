import { MutableRefObject, useCallback, useEffect, useMemo, useRef, useState } from "react";


export interface HomeExit {
    buttonTheme: boolean;
    ButtonThemeWhite: () => void;
    ButtonThemeBlack: () => void;
    buttonThemeTest: boolean;
    ColorTheme: void;
}

export const useHomeHooks = (): HomeExit => {
    
    const [buttonTheme,setButtonTheme] = useState(false);
    const [buttonThemeTest,setButtonThemeTest] = useState(false);

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

    const ColorTheme = useMemo(() => {
       // Metodo para criar logica relacionada ao NAVBAR para troca de thema
    } , [buttonTheme, buttonThemeTest])

    return{
        buttonTheme,
        ButtonThemeWhite,
        ButtonThemeBlack,
        buttonThemeTest,
        ColorTheme
    }
}