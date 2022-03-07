import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    colors: {
        black: {
            "900": "#201E2B",
            "800": "#2D2B38"
        },
        orange: {
            "900": "#FF481E"
        }
    },
    fonts: {
        heading: 'Fira Code',
        body: 'Fira Code'
    },
    styles: {
        global: {
            body:{
                bg: '#FFFF'
            }
        }
    }
})