import { Flex, Box, Text, Icon, Image, Link } from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi";
import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const MenuItem = ({ children, url }) => {
  return (
    <Link
      as={RouterLink}
      to={url}
      fontSize="sm"
      marginLeft="10"
      marginRight="2"
      letterSpacing="wide"
      color="blackAlpha.800"
      fontWeight="semibold"
      textTransform="uppercase"
      display="flex"
      alignItems="center"
      opacity="1"
    >
      {children}
    </Link>
  );
};

const HeaderTwo = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Flex
        Flex
        as="header"
        align="center"
        bgColor="whiteAlpha.800"
        justify="space-between"
        wrap="wrap"
        marginTop="3"
      >
        <Box
          display={{ base: "block", md: "none", sm: "block" }}
          onClick={() => setShow(!show)}
        >
          <Icon as={HiOutlineMenuAlt3} color="pink.800" w="6" h="6" />
          <title>Menu</title>
        </Box>
        <Flex
          display={{ base: show ? "block" : "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
        >
          <MenuItem url="/">BRANDS</MenuItem>
          <MenuItem url="/">DINE</MenuItem>
          <MenuItem url="/">ENTERTAINMENT</MenuItem>
          <MenuItem url="/">OFFERS & PACKAGES</MenuItem>
          <MenuItem url="/">
            <Image
              src="Group19.png"
              
            />
          </MenuItem>

          <MenuItem url="/">EVENTS</MenuItem>
          <MenuItem url="/">MALL MAP</MenuItem>
          <MenuItem url="/">SERVICES</MenuItem>
          <MenuItem url="/">GIFT CARD</MenuItem>
          <MenuItem url="/">
            <Icon as={BiSearch} w="6" h="6" />
          </MenuItem>
        </Flex>
      </Flex>
    </>
  );
};
export default HeaderTwo;
