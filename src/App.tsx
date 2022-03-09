import React, { useState } from "react";

import "./App.css";
import Auth from "./components/Auth/Auth";
import BoardContent from "./components/Content/BoardContent";
import BoardSelection from "./components/Content/BoardSelection";

import { AppProvider } from "./context/sample-context";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <div className="App">
      {isLoggedIn ? (
        <AppProvider>
          <BoardContent />
        </AppProvider>
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
