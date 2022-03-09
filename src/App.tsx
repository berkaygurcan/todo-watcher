import React, { useState } from "react";

import "./App.css";
import Auth from "./components/Auth/Auth";
import Login from "./components/Auth/Login";
import { AppProvider } from "./context/sample-context";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="App">
      {isLoggedIn ? (
        <AppProvider>Content</AppProvider>
      ) : (
        <Auth
          onLogin={() => setIsLoggedIn(true)}
          onRegister={() => setIsLoggedIn(true)}
        />
      )}
    </div>
  );
}

export default App;
