import { Box, Text } from "@chakra-ui/react";

const Service = () => {
  return (
    <div>
      <Box>
        <Text
          fontSize={"40px"}
          fontWeight={700}
          lineHeight={"120%"}
          display={"inline-block"}
        >
          <Text display={"inline-block"} color={"purple.500"}>
            Что умеет
          </Text>{" "}
          наш сервис
        </Text>
      </Box>
    </div>
  );
};

export default Service;
