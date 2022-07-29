import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";
import Navbar from "./components/Navbar/Navbar";
import ShopsPage from "./components/pages/ShopsPage/ShopsPage";
import CartPage from "./components/pages/CartPage/CartPage";
import HistoryPage from "./components/pages/HistoryPage/HistoryPage";

const App = () => {
  return (
    <Container maxWidth="lg">
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<ShopsPage></ShopsPage>}></Route>
          <Route path="/cart" element={<CartPage></CartPage>}></Route>
          <Route path="/history" element={<HistoryPage></HistoryPage>}></Route>
        </Routes>
      </Router>
    </Container>
  );
};

export default App;
