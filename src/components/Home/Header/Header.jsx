import { Text } from "@chakra-ui/react";

export const Header = () => {
  return (
    <div style={{ margin: "0 auto", width: "1280px" }}>
      <h1>Header</h1>
      <Text fontSize="50px" color="tomato">
        I`m using a custom font-size value for this text
      </Text>
    </div>
  );
};
