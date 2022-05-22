import { HStack } from "@chakra-ui/react";
import { ReactNode } from "react";

interface CategoriesRowProps {
  children: ReactNode;
}

export function CategoriesRow({ children }: CategoriesRowProps) {

  return (
    <HStack
      display='flex'
      maxW='100%'
      alignItems='flex-start'
      spacing={8}
      flexWrap='nowrap'
      overflowX='auto'
      px={8}
    >
      {children}
    </HStack>
  )
}