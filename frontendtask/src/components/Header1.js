import { useState } from "react";
import {
  Flex,
  Box,
  Text,
  Icon,
  Image,
  Link,
  Button,
  Spacer,
} from "@chakra-ui/react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { IoMdCall } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const MenuItem = ({ children, url }) => {
  return (
    <Link
      as={RouterLink}
      to={url}
      fontSize="12px"
      marginLeft="4"
      letterSpacing="wide"
      color="blackAlpha.800"
      fontWeight="semibold"
      textTransform="uppercase"
      display="flex"
      alignItems="center"
      opacity="1"
      fontFamily="Montserrat"
    >
      {children}
    </Link>
  );
};
const HeaderOne = () => {
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
      >
        <Box
          display={{ base: "block", md: "none", sm: "block" }}
          onClick={() => setShow(!show)}
        >
          <Icon as={HiOutlineMenuAlt3} color="pink.800" w="6" h="6" />
          <title>Menu</title>
        </Box>
        <Image
          src="Group19.png"
          display={{ base: "block", md: "none", sm: "block" }}
          marginLeft="40"
        />
        <Flex
          display={{ base: show ? "block" : "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
        >
          <MenuItem url="/">
            <Icon as={AiOutlineClockCircle} marginRight="1" />
            Mall Timings :{" "}
            <span style={{ fontWeight: "lighter" }}>
              Mon - Sun, 11:00AM - 12:00AM
            </span>
            {/* Mon - Sun, 11:00AM - 12:00AM */}
          </MenuItem>
          <span style={{ marginLeft: "10px" }}>|</span>
          <MenuItem url="/">COVID 19</MenuItem>
          <span style={{ marginLeft: "10px" }}>|</span>
          <MenuItem url="/">
            {" "}
            <Icon as={IoMdCall} marginRight="1" />
            022 44001000
          </MenuItem>
          <span style={{ marginLeft: "10px" }}>|</span>
          <MenuItem url="/">
            <Icon as={IoLocationSharp} marginRight="1" />
            Location :
            <span style={{ fontWeight: "lighter" }}>
              Indore, Phoenix Citadel
              {/* <Icon as={RiArrowDropDownLine} w="3" h="3" /> */}
            </span>
          </MenuItem>
          <span style={{ marginLeft: "10px" }}>|</span>
          <MenuItem url="/">Getting Here</MenuItem>
          <span style={{ marginLeft: "10px" }}>|</span>
          <MenuItem url="/">
            <Icon as={FaFacebookF} marginRight="2" />
            <Icon as={FaTwitter} marginRight="2" />
            <Icon as={FaYoutube} marginRight="2" />
            <Icon as={FaInstagram} marginRight="2" />
          </MenuItem>{" "}
          <Box
            marginLeft="1"
            as="button"
            height="22px"
            bgColor="yellow.200"
            width="192px"
            top="16px"
            fontSize="sm"
            onClick="/"
          >
            LOGIN | SIGN UP
          </Box>
        </Flex>
      </Flex>
    </>
  );
};
export default HeaderOne;
