import { ReactNode } from "react";
import { VStack } from "@chakra-ui/react";

interface ContentContainerProps {
  children: ReactNode;
}

export function ContentContainer({
  children,
}: ContentContainerProps) {

  return (
    <VStack
      display='flex'
      maxW={"1120"}
      marginX="auto"
    >
      {children}
    </VStack>
  )
}