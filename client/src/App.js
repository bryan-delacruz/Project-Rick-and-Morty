import Container from "./components/Container";
import CardDetail from "./components/CardDetail";

import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Container/>} />
        <Route path="/character/:id" element={<CardDetail />} />
      </Routes>
    </>
  );
}

export default App;
