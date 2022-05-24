import { Heading } from "@chakra-ui/react";
import { motion } from 'framer-motion'

interface TitleProps {
  children: string;
}

export function Title({
  children,
}: TitleProps) {

  return (
    <Heading
      as={motion.h3}
      fontSize={18}
      lineHeight={5}
      m={0}
      p={0}
      flex={1}
    >
      {children}
    </Heading>
  )
}