import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "@/components/pages/Home";
import Contacts from "./components/pages/Contacts";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
