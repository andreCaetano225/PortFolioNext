import { Box, Text } from "@chakra-ui/react";

interface HabilidadeProps {
    colortheme: boolean;
}

export const Habilidade = (props: HabilidadeProps) => {
    return (
        <>
            <div>
                {props.colortheme ? (
                    <Box
                        bg={"#FFF"}
                        h={"100vh"}
                        w={"100vh"}
                    >
                        <Box
                            w={"100%"}
                            maxWidth={"220"}
                            mx="auto"
                            color={"black"}
                            marginTop="100px"
                        >
                            <Text

                            >Habilidades</Text>
                            <hr />
                        </Box>

                    </Box>

                ) : (
                    <Box
                        bg={"black.900"}
                        h={"100vh"}
                    >
                        <Text>Habilidades</Text>
                        <hr />
                    </Box>
                )}
            </div>
        </>
    )
}
