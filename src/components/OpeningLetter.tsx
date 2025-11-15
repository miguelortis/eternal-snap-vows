// src/components/OpeningLetter.tsx
import { useState, useEffect } from "react";

interface OpeningLetterProps {
  onOpenComplete: () => void;
}

export const OpeningLetter = ({ onOpenComplete }: OpeningLetterProps) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // 1. Inicia la animación de apertura después de 500ms
    const animTimer = setTimeout(() => {
      setIsAnimating(true);
    }, 500);

    // 2. Inicia la animación de desaparición (fade-out)
    // Duración: 500ms (espera) + 2000ms (animación) = 2.5s
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 3000);

    // 3. Llama a onOpenComplete cuando todo termine
    // Duración: 2.8s + 0.5s (fade-out) = 3.3s
    const completeTimer = setTimeout(() => {
      onOpenComplete();
    }, 3300);

    return () => {
      clearTimeout(animTimer);
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onOpenComplete]);

  const overlayClasses = [
    "letter-overlay",
    isAnimating ? "animating" : "",
    isFading ? "fade-out" : "",
  ]
    .join(" ")
    .trim();

  return (
    <div className={overlayClasses}>
      <div className="envelope-wrapper">
        {/* 1. LA CARTA (al fondo de todo) */}
        <div className="envelope-card">
          <div className="mb-6">
            <span className="font-serif text-3xl font-bold text-gold">
              Adelis & Débora
            </span>
          </div>
          <p className="font-serif text-lg text-olive-dark text-center leading-relaxed">
            TENEMOS EL HONOR DE INVITARLES
            <br /> A NUESTRA BODA
          </p>
        </div>

        {/* 2. LAS 4 SOLAPAS DEL SOBRE */}
        <div className="envelope-flap-bottom"></div>
        <div className="envelope-flap-left"></div>
        <div className="envelope-flap-right"></div>
        <div className="envelope-flap-top"></div>

        {/* 3. DECORACIÓN (encima de las solapas) */}
        <div className="envelope-decoration">
          <div className="envelope-string"></div>
          <div className="envelope-seal"></div>
        </div>
      </div>
    </div>
  );
};
