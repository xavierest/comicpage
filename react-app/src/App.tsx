import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Feature } from "./pages/Feature";
import { About } from "./pages/About";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/feature" element={<Feature />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
