import { ReactNode } from "react";
import { HStack } from "@chakra-ui/react";

interface CategoriesRowProps {
  children: ReactNode;
  hasCategorySelected: boolean;
}

export function CategoriesRow({
  children,
  hasCategorySelected
}: CategoriesRowProps) {
  return (
    <HStack
      display='flex'
      maxW='100%'
      alignItems='flex-start'
      justifyContent="space-between"
      spacing={0}
      flexWrap='wrap'
      p={8}
      {...(hasCategorySelected
        ? {
          opacity: 0.4,
          cursor: "disabled",
        }
        : {}
      )}
    >
      {children}
    </HStack>
  )
}