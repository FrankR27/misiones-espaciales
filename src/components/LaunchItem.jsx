import { HiCalendar } from "react-icons/hi";
import { Box, Flex, Text, Spacer, Tag, Icon } from "@chakra-ui/react";

export const LaunchItem = (launch) => {
  return (
    <Box bg="gray.100" p={4} m={4} borderRadius="lg">
      <Flex display="flex">
        <Text fontSize="2xl">
          Mission <strong>{launch.mission_name}</strong> ({launch.launch_year})
        </Text>
        <Spacer />
        <Tag p={2} colorScheme={launch.launch_success ? "green" : "red"}>
          {launch.launch_success ? "Success" : "Failure"}
        </Tag>
      </Flex>
      <Flex align="center">
        <Icon as={HiCalendar} color="gray.500" />
        <Text fontSize="sm" ml={1} color="gray.500">
          {launch.launch_date_local.split("T")[0]}
        </Text>
      </Flex>
    </Box>
  );
};
