import { Box, Text, Grid, GridItem } from "@chakra-ui/react";

const Service = () => {
  return (
    <div>
      <Box mt={"144px"}>
        <Text
          fontSize={"40px"}
          fontWeight={700}
          lineHeight={"120%"}
          display={"inline-block"}
          mb={"44px"}
        >
          <Text display={"inline-block"} color={"purple.500"}>
            Что умеет
          </Text>{" "}
          наш сервис
        </Text>
        <Grid
          templateAreas={`"nav main"`}
          gridTemplateColumns={"403px 1fr"}
          gap="40px"
        >
          <GridItem pl="2" bg="pink.300" area={"nav"}>
            Nav
          </GridItem>
          <GridItem pl="2" bg="green.300" area={"main"}>
            Main
          </GridItem>
        </Grid>
      </Box>
    </div>
  );
};

export default Service;
