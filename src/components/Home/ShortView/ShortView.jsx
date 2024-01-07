import { Box, Button, Grid, Text } from "@chakra-ui/react";

export function ShortView() {
  return (
    <div>
      ShortView
      <Grid templateColumns="repeat(2, 1fr)" gap={"106px"} alignItems="center">
        <Box>
          <Text color="#171923" fontSize="48px">
            Краткий обзор
          </Text>
          <Text color="#805AD5" fontSize="48px">
            — 120 секунд
          </Text>
          <Text fontSize="18px" mt="32px">
            Используйте разное время публикации, разные станции метро и адреса,
            отслеживайте статистику и включайте рекламу —
          </Text>
          <Text fontSize="18px" color="#805AD5">
            Это все не покидая таблицы.
          </Text>
          <Button color="white" backgroundColor="#805AD5">
            Начните сейчас
          </Button>
        </Box>
        <Box bg="blue.500"></Box>
      </Grid>
    </div>
  );
}
