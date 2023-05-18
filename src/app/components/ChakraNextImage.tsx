import {Box} from "@chakra-ui/react";
import Image from "next/image";

const ChakraNextImage: any = ({src, alt, fit,...props}: any) => {
  return (
    <Box height="100%" position="relative" width="100%" {...props}>
      <Image alt={alt} fill style={{ objectFit: fit }} quality="100" src={src} sizes="100%" />
    </Box>
  );
};

export default ChakraNextImage;
