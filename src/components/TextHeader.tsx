import { Box, Button, Flex, Text } from "@chakra-ui/react"
import { BsBoxArrowInRight } from 'react-icons/bs'
import { AnnimationLottie } from "./annimationLottie"

export const TextHeader = () => {
    return (
        <>
            <Flex
                w='90vw'
                h='90vh'
                justifyContent={'center'}
                alignItems='center'>
                <Box
                    w={'100%'}
                    maxWidth='1280'
                    mx='auto'
                >
                    <Flex
                        w={'100%'}
                        maxWidth='100%'
                        justify={'space-between'}
                        alignItems={'center'}
                        marginLeft='20px'
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
                                _hover={{ bg: '#C05621' }}
                            >
                                Quem sou <span style={{ marginLeft: '5px', fontSize: '30px' }}><BsBoxArrowInRight /></span>
                            </Button>
                        </Box>
                        <Box marginLeft={100}>
                            <AnnimationLottie />
                        </Box>
                    </Flex>
                </Box>
            </Flex>
        </>
    )
}