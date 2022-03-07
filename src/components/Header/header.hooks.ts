import { useCallback, useState } from "react";

export interface HeaderExit {
    ButtonThemeBlack: () => void;
    ButtonThemeWhite: () => void;
    buttonTheme: boolean;
}

export const useHeaderHooks = (): HeaderExit =>  {

    const [buttonTheme,setButtonTheme] = useState(false);


    const ButtonThemeWhite = useCallback(() => {
        setButtonTheme(true);
    }, [buttonTheme])

    const ButtonThemeBlack = useCallback(() => {
        setButtonTheme(false);
    }, [buttonTheme])

    return{
        ButtonThemeBlack,
        buttonTheme,
        ButtonThemeWhite
    }

}