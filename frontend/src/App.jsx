import React from "react";
import "./App.css";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import PersonalWebsite from "./components/PersonalWebsite";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <LanguageProvider>
          <PersonalWebsite />
        </LanguageProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
