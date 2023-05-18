"use client";

import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import ChakraNextImage from "./ChakraNextImage";
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "./context/CartContext";

const Navbar = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      color="font"
      w="100%"
      h="80px"
      alignItems="center"
      justifyContent="space-around"
    >
      <ChakraNextImage
        src="/images/navbarlogo.png"
        alt="logo"
        fit="cover"
        h={{ base: "45px", lg: "60px" }}
        w={{ base: "65px", lg: "80px" }}
      />
      <Flex>
        <Button
          bg="none"
          _hover={{ bg: "none", color: "secondary" }}
          _active={{ bg: "none" }}
        >
          Home
        </Button>
        <Button
          bg="none"
          _hover={{ bg: "none", color: "secondary" }}
          _active={{ bg: "none" }}
        >
          Browse
        </Button>
      </Flex>
      <Button
        onClick={onOpen}
        position="relative"
        display="flex"
        gap="1"
        cursor="pointer"
        variant="outline"
        color="secondary"
        borderColor="secondary"
        _hover={{ bg: "secondary", color: "font" }}
        _active={{ bg: "secondary", color: "font" }}
      >
        <FaShoppingCart size={20} />
        <Text>Cart</Text>
        <Text
          position="absolute"
          top="-2"
          right="-2"
          bg="secondary"
          color="font"
          borderRadius="full"
          w="20px"
          h="20px"
          fontSize="xs"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {cartItems.length}
        </Text>
      </Button>

      {/* Cart Modal */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="primary" color="font" m="auto">
          <ModalHeader>Cart</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            You added the following items to your cart:
            <Flex flexDir="column" gap="4" mt="4" color="secondary" justify="center">
              {cartItems.map((deal) => (
                <Flex key={deal.dealID} align="center" fontWeight={600}>
                  {deal.title}
                  <Button
                    onClick={() => removeFromCart(deal)}
                    cursor="pointer"
                    color="font"
                    bg="none"
                    _hover={{ bg: "none", color: "secondary" }}
                    _active={{ bg: "none", color: "secondary" }}
                    mt="0.5"
                  >
                    X
                  </Button>
                </Flex>
              ))}
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button
              cursor="pointer"
              variant="outline"
              color="secondary"
              borderColor="secondary"
              _hover={{ bg: "secondary", color: "font" }}
              _active={{ bg: "secondary", color: "font" }}
              onClick={onClose}
            >
              Cerrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default Navbar;
