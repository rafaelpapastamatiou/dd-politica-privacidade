import React from "react";
import { Box, Text, VStack } from "@chakra-ui/react";
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

  return (
    <Box
      as={motion.div}
      layoutId={layoutId}
      display="flex"
      alignItems="flex-start"
      justifyContent="center"
      w={"50%"}
      p={4}
      alignSelf="stretch"
      whileHover={{ scale: 1.1 }}
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
          }
        }}
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
        >
          {title}
        </Text>
      </VStack>
    </Box>
  )
}