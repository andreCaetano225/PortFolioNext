import { Box, Button, Flex, Text } from "@chakra-ui/react"
import { MutableRefObject } from "react"
import { BsBoxArrowInRight } from 'react-icons/bs'
import { AnnimationLottie } from "./annimationLottie"

import { MotionFlex, MotionItem, MotionContainer } from './annimationMotion'

export interface HomeProps {
    colortheme: boolean;
}

export const HomePage = (props: HomeProps) => {
    return (
        <>
            <div>
                {props.colortheme ? (
                    <>
                        <Flex
                            w='100%'
                            h='94.7vh'
                            bg={'#FFF'}
                            justifyContent={'center'}
                            alignItems='center'>
                            <Box
                                w={'100%'}
                                maxWidth='1280'
                                mx='auto'
                            >
                                <MotionFlex
                                    initial="hidden"
                                    animate="visible"
                                    variants={MotionContainer}
                                >

                                    <MotionFlex
                                        w={'100%'}
                                        maxWidth='100%'
                                        justify={'space-between'}
                                        alignItems={'center'}
                                        marginLeft='20px'
                                        variants={MotionItem}

                                    >
                                        <Box
                                            color={'black.900'}
                                            w={'100%'}
                                            maxWidth='100%'
                                        >
                                            <Text
                                                fontSize={'25px'}
                                                fontWeight='light'
                                            >Olá, eu sou o</Text>
                                            <Text
                                                fontSize={'45px'}
                                                fontWeight='bold'
                                            >André Sousa</Text>
                                            <Text
                                                fontSize={'25px'}
                                                fontWeight='light'
                                            >Desenvolvedor Front-End e UI Designer.</Text>

                                            <Button
                                                bg={'orange.900'}
                                                mt='20px'
                                                height={'60px'}
                                                w='200px'
                                                fontSize={'20px'}
                                                _hover={{ bg: '#dd2d05' }}
                                                color={'#fff'}
                                            >
                                                Quem sou  <span style={{ marginLeft: '5px', fontSize: '30px' }}><BsBoxArrowInRight /></span>
                                            </Button>
                                        </Box>
                                        <Box marginLeft={100}>
                                            <AnnimationLottie />
                                        </Box>
                                    </MotionFlex>
                                </MotionFlex>
                            </Box>
                        </Flex>
                    </>
                ) : (
                    <>
                        <Flex
                            w='100%'
                            h='94.8vh'
                            bg={'black.900'}
                            justifyContent={'center'}
                            alignItems='center'>
                            <Box
                                w={'100%'}
                                maxWidth='1280'
                                mx='auto'
                            >
                                <MotionFlex
                                    initial="hidden"
                                    animate="visible"
                                    variants={MotionContainer}
                                >

                                    <MotionFlex
                                        w={'100%'}
                                        maxWidth='100%'
                                        justify={'space-between'}
                                        alignItems={'center'}
                                        marginLeft='20px'
                                        variants={MotionItem}

                                    >
                                        <Box
                                            color={'#fff'}
                                            w={'100%'}
                                            maxWidth='100%'
                                        >
                                            <Text
                                                fontSize={'25px'}
                                                fontWeight='light'
                                            >Olá, eu sou o</Text>
                                            <Text
                                                fontSize={'45px'}
                                                fontWeight='bold'
                                            >André Sousa</Text>
                                            <Text
                                                fontSize={'25px'}
                                                fontWeight='light'
                                            >Desenvolvedor Front-End e UI Designer.</Text>

                                            <Button
                                                bg={'orange.900'}
                                                mt='20px'
                                                height={'60px'}
                                                w='200px'
                                                fontSize={'20px'}
                                                _hover={{ bg: '#dd2d05' }}
                                            >
                                                Quem sou  <span style={{ marginLeft: '5px', fontSize: '30px' }}><BsBoxArrowInRight /></span>
                                            </Button>
                                        </Box>
                                        <Box marginLeft={100}>
                                            <AnnimationLottie />
                                        </Box>
                                    </MotionFlex>
                                </MotionFlex>
                            </Box>
                        </Flex>
                    </>
                )}
            </div>
        </>
    )
}