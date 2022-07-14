import { Image, Text } from "@chakra-ui/react";

const Main = () => {
  return (
    <>
      <Image src="oppo-xcYaxvcAv3E-unsplash.png" paddingTop="4" />

      <Text
        fontStyle="Playfair Display"
        textAlign="left"
        letterSpacing="2.69px"
        opacity="1"
        position="absolute"
        top="532px"
        left="181px"
        width="711px"
        color="whiteAlpha.900"
        bgColor="whiteAlpha.400"
        h="65px"
        fontSize="45px"
      >
        Fresh Looks for Sunny Days.
      </Text>
      <Text
        position="absolute"
        fontStyle="Playfair Display"
        top="602px"
        h="113px"
        left="179px"
        width="682px"
        fontSize="85px"
        bgColor="blackAlpha.400"
      >
        SUMMER STYLE
      </Text>
      <Text
        fontSize="20px"
        position="absolute"
        top=" 767px"
        h="25"
        left="162px"
        width="138px"
      >
        SHOP NOW
      </Text>
    </>
  );
};
export default Main;
