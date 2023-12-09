import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import AdminPanel from "./pages/AdminPanel";
import SystemManager from "./pages/SystemManager";

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/adminpanel" exact element={<AdminPanel />}></Route>
          <Route path="/systemmanager" exact element={<SystemManager />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
