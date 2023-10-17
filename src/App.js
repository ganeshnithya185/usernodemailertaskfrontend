import React, { createContext } from "react";
import Home from "./Components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Resetpassword from "./Components/Resetpassword";
import { useState } from "react";
import ForgotPassword from "./Components/Forgetpassword";

export const myContext = createContext();

const App = () => {
  const [token, setToken] = useState("");
  return (
    <div>
      <myContext.Provider value={{ token, setToken }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forget" element={<ForgotPassword />} />
          <Route path="/reset-password/:id/:token" element={<Resetpassword />} />
        </Routes>
      </myContext.Provider>
    </div> 
  );
};

export default App;
