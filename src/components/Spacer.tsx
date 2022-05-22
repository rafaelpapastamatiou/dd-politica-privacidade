import { Box } from "@chakra-ui/react";

interface SpacerProps {
  x?: number;
  y?: number;
}

export function Spacer({
  x,
  y
}: SpacerProps) {
  return (
    <Box
      width={x}
      height={y}
    />
  )
}