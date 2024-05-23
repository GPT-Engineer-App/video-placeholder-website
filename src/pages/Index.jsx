import { Container, Box, Heading, Table, Tbody, Tr, Td, Image } from "@chakra-ui/react";
import { FaVideo } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Header Section */}
      <Box bgImage="url('https://via.placeholder.com/150')" bgSize="cover" bgPosition="center" height="300px" display="flex" justifyContent="center" alignItems="center">
        <Heading color="white" fontSize="4xl">
          Video Gallery
        </Heading>
      </Box>

      {/* Video Table Section */}
      <Box p={4}>
        <Table variant="simple">
          <Tbody>
            <Tr>
              <Td>
                <Box display="flex" justifyContent="center" alignItems="center" height="200px" border="1px solid #ccc">
                  <FaVideo size="3em" />
                </Box>
              </Td>
              <Td>
                <Box display="flex" justifyContent="center" alignItems="center" height="200px" border="1px solid #ccc">
                  <FaVideo size="3em" />
                </Box>
              </Td>
              <Td>
                <Box display="flex" justifyContent="center" alignItems="center" height="200px" border="1px solid #ccc">
                  <FaVideo size="3em" />
                </Box>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Box display="flex" justifyContent="center" alignItems="center" height="200px" border="1px solid #ccc">
                  <FaVideo size="3em" />
                </Box>
              </Td>
              <Td>
                <Box display="flex" justifyContent="center" alignItems="center" height="200px" border="1px solid #ccc">
                  <FaVideo size="3em" />
                </Box>
              </Td>
              <Td>
                <Box display="flex" justifyContent="center" alignItems="center" height="200px" border="1px solid #ccc">
                  <FaVideo size="3em" />
                </Box>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
    </Container>
  );
};

export default Index;
