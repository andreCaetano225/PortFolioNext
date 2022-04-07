import { Box, Button, Flex, Text, Link as LinkChakra } from "@chakra-ui/react"
import Link from "next/link";
import { MutableRefObject } from "react";
import { BsMoonFill } from 'react-icons/bs'
import { FaSun } from 'react-icons/fa'


export interface HeaderPropsInterface {
    buttonThemeWhite: () => void;
    buttonThemeBlack: () => void;
    buttonThemes: boolean;
    onClickHabilidade: () => void;
    onClickHomePage: () => void;
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
                                    onClick={props.onClickHomePage}
                                    fontSize={'25px'}
                                >
                                    {'{André Sousa}'}
                                </Text>

                                <Flex
                                    w={'100%'}
                                    maxWidth='300'
                                    justify={'space-between'}
                                    fontSize={'17px'}
                                    mt={"10px"}
                                >
                                    {props.buttonThemes ? (
                                        <>
                                            <Button
                                                marginRight={'10px'}
                                                mt={"-8px"}
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
                                    <Text onClick={props.onClickHabilidade}>Habilidades</Text>
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
                                    onClick={props.onClickHomePage}
                                    fontSize={'25px'}>
                                    {'{André Sousa}'}
                                </Text>
                                <Flex
                                    w={'100%'}
                                    maxWidth='300'
                                    justify={'space-between'}
                                    fontSize={'17px'}
                                    mt={"10px"}
                                >
                                    {props.buttonThemes ? (
                                        <>
                                            <Button
                                                marginRight={'10px'}
                                                mt={"-8px"}
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
                                                mt={"-8px"}
                                                onClick={props.buttonThemeWhite}
                                                _hover={{ bg: 'black.900' }}

                                            >
                                                <FaSun />
                                            </Button>
                                        </>
                                    )}


                                    <Text>Quem sou</Text>
                                    <Text
                                        onClick={props.onClickHabilidade}
                                        transition={'0.2s'}
                                        _hover={{
                                            cursor: 'pointer',
                                            color: '#2D3748'
                                        }}
                                    >Habilidades</Text>

                                </Flex>
                            </Flex>
                        </Box>
                    </>
                )}
            </div>
        </>
    )
}