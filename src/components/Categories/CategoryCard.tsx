import { Center, Divider, Heading, HStack, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion"
import { IconType } from "react-icons";
import { MotionIcon } from "../MotionIcon";
import { Spacer } from "../Spacer";

interface CategoryCardProps {
  icon: IconType;
  layoutId: string;
  title: string;
}

export function CategoryCard({
  layoutId,
  icon,
  title,
}: CategoryCardProps) {
  return (
    <VStack
      w={"100%"}
      maxW={600}
      as={motion.div}
      layoutId={layoutId}
      backgroundColor="gray.900"
      p={8}
      borderRadius={32}
      spacing={4}
      shadow="md"
    >
      <MotionIcon
        as={icon}
        w={32}
        h={32}
        color="brand.500"
      />

      <Heading
        as={motion.h4}
        size='md'
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

    </VStack>
  )
}