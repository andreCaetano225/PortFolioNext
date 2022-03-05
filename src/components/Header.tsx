import { Box, Flex, Text } from "@chakra-ui/react"


export const Header = () => {
    return (
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
                        maxWidth='339'
                        justify={'space-between'}
                        fontSize={'17px'}
                    >
                        <Text>Quem sou</Text>
                        <Text>Serviços</Text>
                        <Text>Habilidades</Text>
                    </Flex>
                </Flex>
            </Box>
        </>
    )
}