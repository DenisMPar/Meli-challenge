import { Icon, Input, Stack, StackDivider } from "@chakra-ui/react";
import React from "react";
import { useRef } from "react";

import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const HeaderForm: React.FC = () => {
  let navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    navigate("/search/" + e.target.query.value, { replace: true });
  }
  return (
    <Stack
      onSubmit={handleSubmit}
      as="form"
      align="center"
      bg="white"
      borderRadius="sm"
      boxShadow="sm"
      direction="row"
      divider={<StackDivider />}
      flexGrow={1}
      h="32px"
      justifyContent="revert"
      p={2}
    >
      <Input placeholder="Estoy buscando" variant="unstyled" name="query" />
      <Icon as={AiOutlineSearch} color="gray.400" />
    </Stack>
  );
};

export default HeaderForm;
