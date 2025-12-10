import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import StartProject from "./StartProject";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<StartProject />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
