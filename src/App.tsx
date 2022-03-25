import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import "./App.css";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import BoardContent from "./components/Content/BoardContent";
import BoardSelection from "./components/Content/BoardSelection";
import { AppProvider } from "./context/sample-context";
import ProtectedRoutes from "./components/Content/ProtectedRoutes";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState<any>();

  const getToken = () => {
    let token = localStorage.getItem("token");
    return token
  }

  useEffect(() => {
    setToken(getToken())
  },[])
 
  return (
    <AppProvider>
      <Routes>
        <Route
          path="/login"
          element={<Login onLogin={() => setIsLoggedIn(true)} />}
        />
        <Route
          path="/register"
          element={<Register onRegister={() => setIsLoggedIn(true)} />}
        />
        <Route element={<ProtectedRoutes  token = {token}/>}>
          <Route path="/boards" element={<BoardSelection />} />
          <Route path="/boardcontent/:id" element={<BoardContent />} />
        </Route>
      </Routes>
    </AppProvider>
  );
}

export default App;
