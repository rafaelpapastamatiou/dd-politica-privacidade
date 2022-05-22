import React from "react";
import { Box, Icon, IconProps, Text, VStack } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface CategoryButtonProps {
  icon: IconType;
  title: string;
  selected: boolean;
  onClick: () => void;
}

const baseIconProps: IconProps = {
  w: 24,
  h: 24
}

const defaultBoxStyles = {
  borderColor: "gray.800",
}

const defaultIconStyles = {
  color: "gray.200"
}

const selectedBoxStyles = {
  borderColor: "brand.500",
}

const selectedIconStyles: IconProps = {
  color: "brand.500"
}

export function CategoryButton({
  title,
  icon,
  onClick,
  selected = false,
}: CategoryButtonProps) {

  return (
    <VStack
      display='flex'
      justifyContent='center'
      maxW={40}
      w={40}
    >
      <Box
        display='flex'
        w={40}
        h={40}
        justifyContent='center'
        alignItems='center'
        background="gray.900"
        transition="all 0.4s"
        borderRadius={32}
        borderWidth={3}
        onClick={onClick}
        _hover={{
          cursor: 'pointer'
        }}
        {...(selected ? selectedBoxStyles : defaultBoxStyles)}
      >
        <Icon
          as={icon}
          transition="all 0.4s"
          {...baseIconProps}
          {...(selected ? selectedIconStyles : defaultIconStyles)}
        />
      </Box>

      <Text
        display='flex'
        flexWrap='wrap'
        wordBreak='break-all'
        fontSize={18}
        color='gray.200'
      >
        {title}
      </Text>
    </VStack >
  )
}