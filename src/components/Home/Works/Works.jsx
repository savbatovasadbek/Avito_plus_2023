import { Box, Grid, Image, Text } from "@chakra-ui/react";
import img1 from "../../../assets/images/googleSheets.png";
import img2 from "../../../assets/images/cloud.svg";

export const Works = () => {
  return (
    <div>
      Works
      <Box display="flex" alignItems="center" justifyContent="center" mb="44px">
        <Text color="#171923" fontSize="48px" fontWeight="bold">
          Как работает —
        </Text>
        <Text color="#805AD5" fontSize="48px" fontWeight="bold">
          Avito Plus?
        </Text>
      </Box>
      <Grid templateColumns="repeat(3, 1fr)" gap={"32px"}>
        <Box
          p="32px"
          borderRadius="32"
          backgroundColor="white"
          borderColor="#FAFAFA"
          borderStyle="solid"
          borderWidth="1px"
        >
          1
          <Text color="#171923" fontSize="24px" fontWeight="bold" mb="16px">
            Редактируйте Google Таблицу
          </Text>
          <Text color="#2D3748" fontSize="18px" mb="24px">
            Одна строка в таблице, равна одному объявлению
          </Text>
          <Image src={img1} alt="img." />
        </Box>
        <Box
          p="32px"
          borderRadius="32"
          backgroundColor="white"
          borderColor="#FAFAFA"
          borderStyle="solid"
          borderWidth="1px"
        >
          2
        </Box>
        <Box
          p="32px"
          borderRadius="32"
          backgroundColor="white"
          borderColor="#FAFAFA"
          borderStyle="solid"
          borderWidth="1px"
        >
          3
          <Text color="#171923" fontSize="24px" fontWeight="bold" mb="16px">
            Авито публикует объявления
          </Text>
          <Text color="#2D3748" fontSize="18px">
            Если в объявлении ошибка — мы отобразим ее в таблице рядом с
            объявлением
          </Text>
          <Image src={img2} alt="img." mt="44px" />
        </Box>
      </Grid>
    </div>
  );
};
