import { LanguageProvider } from "./context/LanguageContext.tsx";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </StrictMode>
);
