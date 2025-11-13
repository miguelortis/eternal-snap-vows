import { Countdown } from "@/components/Countdown";
import { Button } from "@/components/ui/button";
import { Calendar, Church, Home, Shirt, MessageCircle } from "lucide-react";
import Bg1 from "@/assets/angulo-izq.png";
import Bg2 from "@/assets/angulo-der.png";
import Bg3 from "@/assets/fondo.png";

const Index = () => {
  const whatsappNumber = "XXXXXXXXXX"; // Replace with actual WhatsApp number
  const whatsappMessage = encodeURIComponent(
    "Hola! Confirmo mi asistencia a la boda de Adelis y Deboda 💚"
  );

  return (
    <div
      style={{
        backgroundImage: `url(${Bg3})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        padding: "20px",
      }}
      className="snap-y snap-mandatory h-screen overflow-y-scroll"
    >
      <div
        className="flowers-up-left"
        style={{
          backgroundImage: `url(${Bg1})`,
        }}
      ></div>
      <div
        className="flowers-down-right"
        style={{
          backgroundImage: `url(${Bg2})`,
        }}
      ></div>
      {/* Section 1: Welcome */}
      <section className="snap-start h-screen flex items-center justify-center relative">
        <div className="absolute inset-0 " />
        <div className="max-w-full max-h-full relative z-10 text-center px-4">
          <div className="bg-cream/90 backdrop-blur-md rounded-3xl p-8 md:p-12 max-w-3xl mx-auto shadow-2xl border border-olive-light/30">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-olive-dark mb-4">
              Nos Casamos
            </h1>
            <div className="h-px w-24 bg-gold mx-auto my-6" />
            <p className="text-2xl md:text-4xl font-serif text-olive-medium mb-2">
              Adelis & Deboda
            </p>
            <p className="text-lg md:text-xl font-sans text-olive-dark/80 mt-6">
              Sábado, 13 de Diciembre de 2025
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Countdown */}
      <section className="snap-start h-screen flex items-center justify-center relative">
        <div className="absolute inset-0" />
        <div className="max-w-full max-h-full relative z-10 text-center px-4">
          <div className="bg-cream/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 max-w-4xl mx-auto shadow-2xl border border-olive-light/30">
            <Calendar className="w-12 h-12 md:w-16 md:h-16 text-gold mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-olive-dark mb-8">
              Cuenta Regresiva
            </h2>
            <Countdown />
            <p className="text-base md:text-lg font-sans text-olive-dark/70 mt-8">
              ¡Faltan muy pocos días para nuestra celebración!
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Ceremony & Reception */}
      <section className="snap-start h-screen flex items-center justify-center relative">
        <div className="absolute inset-0" />
        <div className="max-w-full max-h-full relative z-10 text-center px-4">
          <div className="bg-cream/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 max-w-4xl mx-auto shadow-2xl border border-olive-light/30">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-olive-dark mb-12">
              Ceremonia & Recepción
            </h2>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {/* Ceremony */}
              <div className="space-y-4">
                <Church className="w-12 h-12 text-gold mx-auto" />
                <h3 className="text-2xl md:text-3xl font-serif font-semibold text-olive-dark">
                  Ceremonia Religiosa
                </h3>
                <div className="h-px w-16 bg-olive-light mx-auto my-4" />
                <p className="text-lg md:text-xl font-sans text-olive-medium">
                  Iglesia San Francisco
                </p>
                <p className="text-xl md:text-2xl font-serif text-gold">
                  7:00 PM
                </p>
              </div>

              {/* Reception */}
              <div className="space-y-4">
                <Home className="w-12 h-12 text-gold mx-auto" />
                <h3 className="text-2xl md:text-3xl font-serif font-semibold text-olive-dark">
                  Recepción
                </h3>
                <div className="h-px w-16 bg-olive-light mx-auto my-4" />
                <p className="text-lg md:text-xl font-sans text-olive-medium">
                  Finca la Isabella
                </p>
                <p className="text-xl md:text-2xl font-serif text-gold">
                  8:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Dress Code */}
      <section className="snap-start h-screen flex items-center justify-center relative">
        <div className="absolute inset-0" />
        <div className="max-w-full max-h-full relative z-10 text-center p-4">
          <div className="bg-cream/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 max-w-4xl mx-auto shadow-2xl border border-olive-light/30">
            <Shirt className="w-12 h-12 md:w-16 md:h-16 text-gold mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-olive-dark mb-6">
              Código de Vestimenta
            </h2>
            <p className="text-xl md:text-2xl font-serif text-gold mb-8">
              Formal
            </p>
            <p className="text-base md:text-lg font-sans text-olive-dark/80 mb-10 max-w-2xl mx-auto">
              Esperamos que vengas elegante para celebrar este día tan especial.
            </p>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12 text-left">
              {/* Men */}
              <div className="bg-olive-light/10 rounded-2xl p-6 border border-olive-light/30">
                <h3 className="text-xl md:text-2xl font-serif font-semibold text-olive-dark mb-4">
                  Ellos
                </h3>
                <ul className="space-y-2 text-sm md:text-base font-sans text-olive-dark/80">
                  <li>• Traje formal</li>
                  <li>• Corbata o moño</li>
                  <li>• Colores oscuros o tonos tierra</li>
                </ul>
              </div>

              {/* Women */}
              <div className="bg-olive-light/10 rounded-2xl p-6 border border-olive-light/30">
                <h3 className="text-xl md:text-2xl font-serif font-semibold text-olive-dark mb-4">
                  Ellas
                </h3>
                <ul className="space-y-2 text-sm md:text-base font-sans text-olive-dark/80">
                  <li>• Vestido largo o cocktail elegante</li>
                  <li>• Evitar blanco y tonos muy claros</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: RSVP */}
      <section className="snap-start h-screen flex items-center justify-center relative">
        <div className="absolute inset-0" />
        <div className="max-w-full max-h-full  relative z-10 text-center px-4">
          <div className="bg-cream/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 max-w-3xl mx-auto shadow-2xl border border-olive-light/30">
            <MessageCircle className="w-12 h-12 md:w-16 md:h-16 text-gold mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-olive-dark mb-6">
              Confirma tu Asistencia
            </h2>
            <p className="text-base md:text-lg font-sans text-olive-dark/80 mb-10 max-w-xl mx-auto">
              Tu presencia es muy importante para nosotros. Por favor, confirma
              tu asistencia lo antes posible.
            </p>

            <Button
              size="lg"
              className="bg-olive-dark hover:bg-olive-medium text-primary-foreground font-sans text-base md:text-lg px-8 py-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-105"
              onClick={() =>
                window.open(
                  `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`,
                  "_blank"
                )
              }
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Confirmar por WhatsApp
            </Button>

            <p className="text-sm md:text-base font-sans text-olive-dark/60 mt-8">
              ¡Esperamos verte el 13 de Diciembre!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
