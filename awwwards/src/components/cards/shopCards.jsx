import { Box, Image, Text, Button, IconButton } from "@chakra-ui/react";
import { HeartIcon, AddIcon } from "@chakra-ui/icons";

const ShopCards = () => {
  return (
    <Box display="flex" justifyContent="space-between">
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Image src="/path/to/product1.jpg" alt="Product 1" />

        <Box p="6">
          <Box d="flex" alignItems="baseline">
            <IconButton
              aria-label="Like"
              icon={<HeartIcon />}
              colorScheme="red"
              mr="2"
            />
            <Text
              fontSize="sm"
              fontWeight="semibold"
              color="gray.500"
              textTransform="uppercase"
            >
              Product 1
            </Text>
          </Box>

          <Text mt="1" fontWeight="semibold" lineHeight="tight">
            Product 1 Description
          </Text>

          <Text mt="1" fontWeight="bold" fontSize="lg">
            $19.99
          </Text>

          <Button mt="2" colorScheme="teal" rightIcon={<AddIcon />}>
            Add to Cart
          </Button>
        </Box>
      </Box>

      {/* Repeat the above code for the remaining three product cards */}
    </Box>
  );
};
const Card1 = () => {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src="/path/to/product2.jpg" alt="Product 2" />

      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <IconButton
            aria-label="Like"
            icon={<HeartIcon />}
            colorScheme="red"
            mr="2"
          />
          <Text
            fontSize="sm"
            fontWeight="semibold"
            color="gray.500"
            textTransform="uppercase"
          >
            Product 2
          </Text>
        </Box>

        <Text mt="1" fontWeight="semibold" lineHeight="tight">
          Product 2 Description
        </Text>

        <Text mt="1" fontWeight="bold" fontSize="lg">
          $29.99
        </Text>

        <Button mt="2" colorScheme="teal" rightIcon={<AddIcon />}>
          Add to Cart
        </Button>
      </Box>
    </Box>
  );
};

const Card2 = () => {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src="/path/to/product3.jpg" alt="Product 3" />

      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <IconButton
            aria-label="Like"
            icon={<HeartIcon />}
            colorScheme="red"
            mr="2"
          />
          <Text
            fontSize="sm"
            fontWeight="semibold"
            color="gray.500"
            textTransform="uppercase"
          >
            Product 3
          </Text>
        </Box>

        <Text mt="1" fontWeight="semibold" lineHeight="tight">
          Product 3 Description
        </Text>

        <Text mt="1" fontWeight="bold" fontSize="lg">
          $39.99
        </Text>

        <Button mt="2" colorScheme="teal" rightIcon={<AddIcon />}>
          Add to Cart
        </Button>
      </Box>
    </Box>
  );
};

const Card3 = () => {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src="/path/to/product4.jpg" alt="Product 4" />

      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <IconButton
            aria-label="Like"
            icon={<HeartIcon />}
            colorScheme="red"
            mr="2"
          />
          <Text
            fontSize="sm"
            fontWeight="semibold"
            color="gray.500"
            textTransform="uppercase"
          >
            Product 4
          </Text>
        </Box>

        <Text mt="1" fontWeight="semibold" lineHeight="tight">
          Product 4 Description
        </Text>

        <Text mt="1" fontWeight="bold" fontSize="lg">
          $49.99
        </Text>

        <Button mt="2" colorScheme="teal" rightIcon={<AddIcon />}>
          Add to Cart
        </Button>
      </Box>
    </Box>
  );
};
export { ShopCards, Card1, Card2, Card3 };
