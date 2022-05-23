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
      maxW={"900"}
      marginX="auto"
      px={8}
      h="auto"
      overflow="hidden"
    >
      {children}
    </VStack>
  )
}