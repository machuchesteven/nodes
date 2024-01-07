import { ChakraProvider } from "@chakra-ui/react";
import Homepage from "./pages/Homepage";
import Dashboard from "./pages/Dashboard";
import Hospital from "./pages/Hospital";
function App() {
  return (
    <ChakraProvider>
      <Dashboard />
      {/* <Hospital /> */}
    </ChakraProvider>
  );
}

export default App;
