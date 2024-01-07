import { Box, Text, Image, Button, Grid, GridItem } from "@chakra-ui/react";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { TiArrowSortedUp } from "react-icons/ti";
import avito from "../../../assets/images/avito-logo-vector 1.svg";
import GoogleSheet from "../../../assets/images/google-sheets-full-logo.svg";

const Main = () => {
  const mainBoxStyle = {
    p: "12px",
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    bgColor: "#FAFAFA",
    borderRadius: "12px",
  };

  return (
    <div>
      <Box
        maxWidth={"100%"}
        bgColor={"#FAFAFA"}
        p={"64px 40px 174px 40px"}
        pb={"174px"}
        borderRadius={"32px"}
        mb={"312px"}
        position={"relative"}
        display={"flex"}
        alignItems={"center"}
        flexDirection={"column"}
        gap={31}
      >
        <Box
          fontSize={72}
          display={"flex"}
          flexWrap={"wrap"}
          fontWeight={700}
          textAlign={"center"}
          justifyContent={"center"}
          lineHeight={"110%"}
          alignItems={"center"}
        >
          <Text>Продвигай</Text>
          <Image display={"inline-block"} src={avito} alt="Avito logo" />{" "}
          <Text>—</Text>
          <Text>Управляй объявлениями</Text>
        </Box>
        <Box>
          <Text
            maxWidth={616}
            textAlign={"center"}
            color={"gray.900"}
            fontSize={18}
            fontWeight={400}
            lineHeight={"150%"}
          >
            Используйте Google Таблицы для управления Avito аккаунтами.
            Добавляйте, клонируйте и редактируйте объявления в пару кликов.
          </Text>
        </Box>
        <Box>
          <Button
            leftIcon={<BsFillLightningChargeFill />}
            colorScheme="teal"
            bg={"#805AD5"}
            variant="solid"
          >
            Начните сейчас
          </Button>
        </Box>
        <Box
          display={"flex"}
          justifyContent={"center"}
          position={"absolute"}
          bottom={"-164px"}
          gap={"40px"}
        >
          <Box
            maxWidth={667}
            bgColor={"white"}
            borderRadius={"32px"}
            p={"40px"}
            boxShadow={
              "-40px 40px 80px 0px rgba(145, 158, 171, 0.16), 0px 0px 2px 0px rgba(145, 158, 171, 0.20)"
            }
          >
            <Box display={"flex"} flexDirection={"column"} gap={"24px"}>
              <Text
                fontSize={"36px"}
                fontWeight={700}
                lineHeight={"120%"}
                color={"#171923"}
                display={"inline-block"}
              >
                Получайте больше заявок — используя{" "}
                <Text color={"#805AD5"} display={"inline-block"}>
                  {" "}
                  Avito Plus
                </Text>
              </Text>
              <Grid templateColumns="repeat(4, 1fr)" gap={"12px"}>
                <GridItem sx={mainBoxStyle}>
                  <Text fontSize={"14px"} fontWeight={500} lineHeight={"20px"}>
                    Просмотры
                  </Text>
                  <Text fontSize={"24px"} fontWeight={600} lineHeight={"32px"}>
                    👀 783
                  </Text>

                  <Box display={"flex"} alignItems={"center"} gap={"4px"}>
                    <Text>
                      <TiArrowSortedUp color="#48BB78" />
                    </Text>
                    <Text>87.09%</Text>
                  </Box>
                </GridItem>
                <GridItem sx={mainBoxStyle}>
                  <Text fontSize={"14px"} fontWeight={500} lineHeight={"20px"}>
                    Конверсия
                  </Text>
                  <Text fontSize={"24px"} fontWeight={600} lineHeight={"32px"}>
                    🔥 23%
                  </Text>

                  <Box display={"flex"} alignItems={"center"} gap={"4px"}>
                    <Text>
                      <TiArrowSortedUp color="#48BB78" />
                    </Text>
                    <Text>65.31%</Text>
                  </Box>
                </GridItem>
                <GridItem sx={mainBoxStyle}>
                  <Text fontSize={"14px"} fontWeight={500} lineHeight={"20px"}>
                    Сообщения
                  </Text>
                  <Text fontSize={"24px"} fontWeight={600} lineHeight={"32px"}>
                    💬 34
                  </Text>

                  <Box display={"flex"} alignItems={"center"} gap={"4px"}>
                    <Text>
                      <TiArrowSortedUp color="#48BB78" />
                    </Text>
                    <Text>79.48%</Text>
                  </Box>
                </GridItem>
                <GridItem sx={mainBoxStyle}>
                  <Text fontSize={"14px"} fontWeight={500} lineHeight={"20px"}>
                    Избранное
                  </Text>
                  <Text fontSize={"24px"} fontWeight={600} lineHeight={"32px"}>
                    💜 45
                  </Text>

                  <Box display={"flex"} alignItems={"center"} gap={"4px"}>
                    <Text>
                      <TiArrowSortedUp color="#48BB78" />
                    </Text>
                    <Text>55.44%</Text>
                  </Box>
                </GridItem>
              </Grid>
            </Box>
          </Box>
          <Box
            maxWidth={381}
            bg={
              "linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), #805AD5"
            }
            borderRadius={"32px"}
            p={"40px"}
            display={"flex"}
            flexDirection={"column"}
            gap={"24px"}
          >
            <Box bg={"white"} px={"32px"} py={"20px"} borderRadius={"12px"}>
              <Image src={GoogleSheet} alt="Google Sheet logo" />
            </Box>
            <Box
              display={"flex"}
              flexDirection={"column"}
              gap={"8px"}
              alignItems={"center"}
              textAlign={"center"}
              color={"white"}
            >
              <Text fontSize={"20px"} fontWeight={800} lineHeight={"120%"}>
                10.000+ объявлений
              </Text>
              <Text fontSize={"16px"} fontWeight={400} lineHeight={"150%"}>
                Через Google Таблицы вы можете выкладывать и легко
                контролировать тысячи объявлений
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Main;
