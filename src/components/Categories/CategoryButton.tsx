import React from "react";
import { Box, Text, useBreakpointValue, VStack } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { motion } from 'framer-motion'
import { MotionIcon } from "../MotionIcon";

export interface CategoryButtonProps {
  icon: IconType;
  title: string;
  onClick: () => void;
  layoutId: string;
}

export function CategoryButton({
  title,
  icon,
  onClick,
  layoutId,
}: CategoryButtonProps) {

  const w = useBreakpointValue({
    base: '96%',
    md: '48%',
    lg: '32%'
  })

  return (
    <Box
      as={motion.div}
      layoutId={layoutId}
      display="flex"
      alignItems="flex-start"
      justifyContent="center"
      w={w}
      p={6}
      alignSelf="stretch"
    >
      <VStack
        display='flex'
        justifyContent='center'
        maxW={52}
        w={52}
        _hover={{
          cursor: 'pointer',
          borderColor: "brand.500",
          svg: {
            color: "brand.500",
          },
          "> div": {
            cursor: "pointer",
            borderColor: "brand.500",
          },
          "span": {
            color: "brand.500"
          }
        }}
        as={motion.div}
        whileHover={{ scale: 1.15 }}
      >
        <Box
          display='flex'
          as={motion.div}
          w={52}
          h={52}
          justifyContent='center'
          alignItems='center'
          background="gray.900"
          transition="all 0.4s"
          borderRadius={32}
          borderWidth={3}
          borderColor="gray.900"
          onClick={(event) => {
            event.stopPropagation();
            onClick()
          }}
          shadow="md"
        >
          <MotionIcon
            as={icon}
            w={32}
            h={32}
            transition="all 0.4s"
            color="gray.200"
          />
        </Box>

        <Text
          as={motion.span}
          display='flex'
          flexWrap='wrap'
          wordBreak='break-all'
          fontSize={24}
          color='gray.200'
          textAlign='center'
          transition="all 0.4s"
        >
          {title}
        </Text>
      </VStack>
    </Box>
  )
}