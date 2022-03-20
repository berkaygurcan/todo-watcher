import React, { useState } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import "./App.css";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import BoardContent from "./components/Content/BoardContent";
import BoardSelection from "./components/Content/BoardSelection";
import { AppProvider } from "./context/sample-context";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

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
        <Route path="/boards" element={<BoardSelection />} />
        <Route path="/boardcontent/:id" element={<BoardContent />} />
        
      </Routes>
    </AppProvider>
  );
}

export default App;
