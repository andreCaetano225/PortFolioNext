import { Box, Button, Flex, Text } from "@chakra-ui/react"
import { BsMoonFill } from 'react-icons/bs'
import { FaSun } from 'react-icons/fa'
import { useHeaderHooks } from "./header.hooks"


export interface HeaderPropsInterface {
    buttonThemeBlack: () => void;
    buttonThemeWhite: () => void;
    buttonThemes: boolean;
}

export const Header = (props: HeaderPropsInterface) => {

    return (
        <>
            <div>
                {props.buttonThemes ? (
                    <>
                        <Box w={'100%'} bg={'#FFF'}>
                            <Flex
                                as='header'
                                w={'100%'}
                                maxWidth={'1480'}
                                h={'50px'}
                                mx={'auto'}
                                bg={'#FFF'}
                                color={'black.900'}
                                justify='space-between'
                                align={'center'}

                            >
                                <Text
                                    fontSize={'25px'}
                                >{'{André Sousa}'}</Text>
                                <Flex
                                    w={'100%'}
                                    maxWidth='400'
                                    justify={'space-between'}
                                    fontSize={'17px'}
                                >
                                    {props.buttonThemes ? (
                                        <>
                                            <Button
                                                marginRight={'10px'}
                                                bg={'#FFF'}
                                                color={'black.900'}
                                                onClick={props.buttonThemeBlack}
                                            >
                                                <BsMoonFill />
                                            </Button>
                                        </>
                                    ) : (
                                        <>
                                            <Button
                                                marginRight={'10px'}
                                                bg={'black.900'}
                                                onClick={props.buttonThemeWhite}
                                                _hover={{ bg: 'black.900' }}
                                            >
                                                <FaSun />
                                            </Button>
                                        </>
                                    )}


                                    <Text>Quem sou</Text>
                                    <Text>Serviços</Text>
                                    <Text>Habilidades</Text>
                                </Flex>
                            </Flex>
                        </Box>
                    </>
                ) : (
                    <>
                        <Box w={'100%'} bg={'black.900'}>
                            <Flex
                                as='header'
                                w={'100%'}
                                maxWidth={'1480'}
                                h={'50px'}
                                mx={'auto'}
                                bg={'black.900'}
                                color={'#fff'}
                                justify='space-between'
                                align={'center'}

                            >
                                <Text
                                    fontSize={'25px'}
                                >{'{André Sousa}'}</Text>
                                <Flex
                                    w={'100%'}
                                    maxWidth='400'
                                    justify={'space-between'}
                                    fontSize={'17px'}
                                >
                                    {props.buttonThemes ? (
                                        <>
                                            <Button
                                                marginRight={'10px'}
                                                bg={'#FFF'}
                                                color={'black.900'}
                                                onClick={props.buttonThemeBlack}
                                            >
                                                <BsMoonFill />
                                            </Button>
                                        </>
                                    ) : (
                                        <>
                                            <Button
                                                marginRight={'10px'}
                                                bg={'black.900'}
                                                onClick={props.buttonThemeWhite}
                                                _hover={{ bg: 'black.900' }}
                                            >
                                                <FaSun />
                                            </Button>
                                        </>
                                    )}


                                    <Text>Quem sou</Text>
                                    <Text>Serviços</Text>
                                    <Text>Habilidades</Text>
                                </Flex>
                            </Flex>
                        </Box>
                    </>
                )}
            </div>
        </>
    )
}