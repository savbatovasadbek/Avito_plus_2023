import { Box, Button, Grid, Image, Text } from "@chakra-ui/react";
import img1 from "../../../assets/images/googleSheets.png";
import img2 from "../../../assets/images/bg_image_work_box.png";
import img3 from "../../../assets/images/cloud.svg";
import img4 from "../../../assets/images/bg_image_work_bottom.png";

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
          backgroundColor="#6E4EB4"
          borderColor="#FAFAFA"
          borderStyle="solid"
          borderWidth="1px"
          backgroundImage={`url('${img2}')`}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Text
            color="white"
            fontSize="28px"
            textAlign="center"
            fontWeight={800}
          >
            Выгрузка на Авито раз в 60 минут
          </Text>
        </Box>
        <Box
          p="32px"
          borderRadius="32"
          backgroundColor="white"
          borderColor="#FAFAFA"
          borderStyle="solid"
          borderWidth="1px"
        >
          <Text color="#171923" fontSize="24px" fontWeight="bold" mb="16px">
            Авито публикует объявления
          </Text>
          <Text color="#2D3748" fontSize="18px">
            Если в объявлении ошибка — мы отобразим ее в таблице рядом с
            объявлением
          </Text>
          <Image src={img3} alt="img." mt="44px" />
        </Box>
      </Grid>
      <Grid
        templateColumns="repeat(2,1fr)"
        gap="24px"
        mt="30px"
        backgroundImage={`url('${img4}')`}
        p="32px"
      >
        <Box>
          <Text color="#171923" fontSize="24px" fontWeight="bold" mb="16px">
            Статистика Авито
          </Text>
          <Text color="#2D3748" fontSize="18px" mb="16px">
            Отслеживайте статистику по объявлениями и Авито аккаунтам.
            Анализируйте и принимайте решения на основе просмотров, конверсий,
            лайков и сообщений.
          </Text>
          <Button
            color="purple.500"
            borderWidth={1}
            borderColor="purple.500"
            backgroundColor="white"
          >
            Яндекс Диск
          </Button>
        </Box>
        <Box display="flex" justifyContent="center" gap="10px">
          <Box>
            <Box w="200px" p="12px" borderRadius={12} backgroundColor="white">
              <Box> Просмотры за 7 дней</Box>
              <Box>👀 783</Box>
              <Box> Icon 87.09%</Box>
            </Box>

            <Box
              w="200px"
              p="12px"
              borderRadius={12}
              mt="20px"
              ml="10px"
              backgroundColor="white"
            >
              <Box> Просмотры за 7 дней</Box>
              <Box>🔥 23%</Box>
              <Box> Icon 87.09%</Box>
            </Box>
          </Box>
          <Box mt="20px">
            <Box w="200px" p="12px" borderRadius={12} backgroundColor="white">
              <Box> Просмотры за 7 дней</Box>
              <Box>💬 12</Box>
              <Box> Icon 87.09%</Box>
            </Box>
            <Box
              w="200px"
              p="12px"
              borderRadius={12}
              mt="20px"
              ml="10px"
              backgroundColor="white"
            >
              <Box> Просмотры за 7 дней</Box>
              <Box>💜 45</Box>
              <Box> Icon 87.09%</Box>
            </Box>
          </Box>
        </Box>
      </Grid>
    </div>
  );
};
