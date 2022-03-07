import { Box, Button, Flex, Text, Link as LinkChakra } from "@chakra-ui/react"
import Link from "next/link";
import { MutableRefObject } from "react";
import { BsMoonFill } from 'react-icons/bs'
import { FaSun } from 'react-icons/fa'


export interface HeaderPropsInterface {
    buttonThemeWhite: () => void;
    buttonThemeBlack: () => void;
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
                                    <Link href={"/habilidades"}>
                                        <LinkChakra>Habilidades</LinkChakra>
                                    </Link>
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
                                    <Link href={"/habilidades"}>
                                        <LinkChakra>Habilidades</LinkChakra>
                                    </Link>
                                </Flex>
                            </Flex>
                        </Box>
                    </>
                )}
            </div>
        </>
    )
}