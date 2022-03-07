import { useCallback, useState } from "react";


export interface HomeExit {
    buttonTheme: boolean;
    ButtonThemeWhite: () => void;
    ButtonThemeBlack: () => void;
}

export const useHomeHooks = (): HomeExit => {
    
    const [buttonTheme,setButtonTheme] = useState(false);

    const ButtonThemeWhite = useCallback(() => {
        setButtonTheme(true);
    }, [buttonTheme])

    const ButtonThemeBlack = useCallback(() => {
        setButtonTheme(false);
    }, [buttonTheme])

    return{
        buttonTheme,
        ButtonThemeWhite,
        ButtonThemeBlack
    }
}