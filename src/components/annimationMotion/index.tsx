import { motion } from "framer-motion";
import { Flex, FlexProps } from "@chakra-ui/react";

export const MotionFlex = motion<FlexProps>(Flex);


export const MotionContainer = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.5,
            staggerChildren: 0.2
        }
    }
}

export const MotionItem = {
    hidden: { y: -90, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
    }
}