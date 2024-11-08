import { LanguageProvider } from "./context/LanguageContext.tsx";
import { ViewProvider } from "./context/ViewContext.tsx";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ViewProvider>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </ViewProvider>
  </StrictMode>
);
