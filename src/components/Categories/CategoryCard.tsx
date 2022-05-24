import { Divider, Heading, IconButton, useBreakpointValue, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion"
import { ReactNode } from "react";
import { IconType } from "react-icons";
import { MdClose } from 'react-icons/md'

import { MotionIcon } from "../MotionIcon";
import { Spacer } from "../Spacer";

interface CategoryCardProps {
  icon: IconType;
  layoutId: string;
  title: string;
  children: ReactNode;
  onClose: () => void;
}

export function CategoryCard({
  layoutId,
  icon,
  title,
  children,
  onClose
}: CategoryCardProps) {
  const w = useBreakpointValue({
    base: "100%",
    md: "auto"
  })
  const maxW = useBreakpointValue({
    base: "100%",
    md: "48em"
  })

  const h = useBreakpointValue({
    base: "100%",
    md: "auto"
  })
  const maxH = useBreakpointValue({
    base: "100%",
    md: "80%"
  })

  const borderRadius = useBreakpointValue({
    base: 0,
    md: 32
  })

  return (
    <VStack
      display="flex"
      w={w}
      maxW={maxW}
      h={h}
      maxH={maxH}
      as={motion.div}
      layoutId={layoutId}
      borderRadius={borderRadius}
      background="gray.900"
      p={8}
      spacing={4}
      shadow="md"
      onClick={(e) => {
        e.stopPropagation()
        e.preventDefault()
      }}
      position="relative"
    >
      <IconButton
        position='absolute'
        top={8}
        right={8}
        aria-label="Close modal"
        background={"gray.900"}
        rounded="full"
        _active={{
          background: "brand.500",
          "& > svg": {
            color: "gray.900"
          }
        }}
        _hover={{
          background: "brand.500",
          "& > svg": {
            color: "gray.900"
          }
        }}
        onClick={onClose}
        icon={(
          <MotionIcon
            as={MdClose}
            w={8}
            h={8}
            color="gray.300"
            _hover={{
              cursor: "pointer"
            }}
          />
        )}
      />


      <MotionIcon
        as={icon}
        w={32}
        h={32}
        color="brand.500"
        marginTop="0px !important"
      />

      <Heading
        as={motion.h4}
        size='lg'
        textAlign='center'
        flexWrap='wrap'
        wordBreak='break-word'
        color='brand.500'
      >
        {title}
      </Heading>

      <Spacer y={2} />
      <Divider />
      <Spacer y={2} />

      <VStack
        overflowY="auto"
        display="flex"
        justifyContent="flex-start"
        width="100%"
        spacing={8}
        as={motion.div}
      >
        {children}
      </VStack>
    </VStack>
  )
}