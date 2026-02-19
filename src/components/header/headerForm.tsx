import { Icon, Input, Stack, StackDivider } from "@chakra-ui/react";

import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const HeaderForm: React.FC = () => {
  let navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    navigate("/search/" + e.target.query.value);
  }
  return (
    <Stack
      maxW={{ lg: "598px" }}
      onSubmit={handleSubmit}
      as="form"
      align="center"
      bg="white"
      borderRadius="sm"
      boxShadow="0 1px 2px 0 rgb(0 0 0 / 20%)"
      direction="row"
      divider={<StackDivider />}
      flexGrow={1}
      h={{ base: "32px", lg: "39px" }}
      justifyContent="revert"
      p={2}
    >
      <Input placeholder="Estoy buscando" variant="unstyled" name="query" />
      <button>
        <Icon as={AiOutlineSearch} color="gray.400" />
      </button>
    </Stack>
  );
};

export default HeaderForm;
