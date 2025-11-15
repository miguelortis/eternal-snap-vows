// src/App.tsx
import { useState, useEffect } from "react"; // Importa useState y useEffect
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import "./App.css";

// --- Imports nuevos ---
import { OpeningLetter } from "./components/OpeningLetter"; // El componente de la carta
import "./OpeningLetter.css"; // Los estilos para la carta
// --- Fin de imports nuevos ---

const queryClient = new QueryClient();

const App = () => {
  // Estado para mostrar/ocultar la carta
  const [showLetter, setShowLetter] = useState(true);

  useEffect(() => {
    // Comprueba si el usuario ya vio la intro en esta sesión
    if (sessionStorage.getItem("introSeen")) {
      setShowLetter(false);
    }
  }, []);

  // Esta función será llamada por la carta cuando termine su animación
  const handleOpenComplete = () => {
    sessionStorage.setItem("introSeen", "true"); // Marca que ya se vio
    setShowLetter(false);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        {/* --- Lógica de la carta --- */}
        {/* Muestra la carta como una superposición si showLetter es true */}
        {true && <OpeningLetter onOpenComplete={handleOpenComplete} />}
        {/* --- Fin de la lógica de la carta --- */}

        {/* La aplicación principal siempre se renderiza debajo.
          La carta (con z-index alto) se mostrará encima 
          y se desmontará cuando la animación termine.
        */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
