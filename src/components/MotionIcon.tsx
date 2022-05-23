import { chakra } from "@chakra-ui/react";
import { isValidMotionProp, motion } from "framer-motion";

export const MotionIcon = chakra(motion.svg, {
  shouldForwardProp: isValidMotionProp
})