import { Flex, Image, Text } from "@chakra-ui/react";

export default function RecipeCard({ url, title, time }) {
  return (
    <Flex
      flexDir="column"
      padding="20px"
      borderRadius="10px"
      backgroundColor="#fff"
    >
      <Image src={url} w="100%" />

      <Text fontSize="16px" color="black">
        {title}
      </Text>
      <Text fontSize="14px" color="red">
        {time}
      </Text>
    </Flex>
  );
}
