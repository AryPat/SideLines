import "./App.css";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <Box
      height="100vh" // 100% of the viewport height
      width="100vw" // 100% of the viewport width
      minH="100vh" // Minimum height to cover the viewport
      minW="100vw" // Minimum width to cover the viewport
      bgGradient="linear(to-br, #00c2fe, #ef4a75)"
    ></Box>
  );
}

export default App;
