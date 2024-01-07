import { Box, Image, Stack, Button, Link } from "@chakra-ui/react";
import logo from "../../../assets/images/icon_logo.svg";

export const Header = () => {
  return (
    <Box py={"20px"} mb={"20px"}>
      <Stack direction={"row"} align={"center"} justify={"space-between"}>
        <Box>
          <Link href="./">
            <Image src={logo} alt="Company logo" />
          </Link>
        </Box>
        <Box>
          <Stack
            spacing={3}
            direction={"row"}
            align={"center"}
            justify={"space-between"}
          >
            <Button
              colorScheme="teal"
              borderColor={"#805AD5"}
              color={"#805AD5"}
              variant="outline"
            >
              Вход
            </Button>
            <Button colorScheme="teal" bg={"#805AD5"} variant="solid">
              Регистрация
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};
