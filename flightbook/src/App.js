import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Dashboard from "./pages/Dashboard";
import Hospital from "./pages/Hospital";
function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          {/* <Route path="/" element={<Homepage />} /> */}
          <Route path="/" element={<Dashboard />} />
          {/* <Hospital /> */}
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
