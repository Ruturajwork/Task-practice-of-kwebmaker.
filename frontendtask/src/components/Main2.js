import { Box, Image, Text } from "@chakra-ui/react";
import "./main2.css";
const Main2 = () => {
  return (
    <>
      <Image
        src="oppo-xcYaxvcAv3E-unsplash.png"
        paddingTop="4"
        className="image"
      />

      <Text className="text1" fontSize={{ lg: "5xl", base: "2xl" }}>
        Fresh Looks for Sunny Days.
      </Text>
      <Text className="text2" fontSize={{ lg: "6xl", base: "2xl" }}>
        SUMMER STYLE
      </Text>
      <Text className="text3" color="whiteAlpha.900">
        SHOP NOW
      </Text>

      <Text
        className="text4"
        display={{ base: "none", md: "block", sm: "none" }}
      >
        Shop
      </Text>
      <Text
        className="text5"
        display={{ base: "none", md: "block", sm: "none" }}
      >
        Dine
      </Text>
      <Text
        className="text6"
        display={{ base: "none", md: "block", sm: "none" }}
      >
        Events
      </Text>
      <Text
        className="text7"
        display={{ base: "none", md: "block", sm: "none" }}
      >
        &more
      </Text>
    </>
  );
};
export default Main2;
