
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-darkgray-dark z-0"></div>
      <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070')] bg-cover bg-center z-0"></div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
          <span className="block">TKZ</span>
          <span className="gold-text">EDITS</span>
        </h1>
        <div className="w-40 h-1 gold-gradient mx-auto my-6"></div>
        
        <h2 className="text-xl md:text-2xl font-light text-lightgray-light mb-8">
          Atelier Digital de Edição Premium
        </h2>
        
        <p className="max-w-xl mx-auto text-lightgray mb-12 font-light">
          Transformando visões em realidade digital com precisão e elegância.
          Edição profissional de vídeos, fotos, slides, logotipos e websites.
        </p>
        
        <button onClick={scrollToServices} className="group flex flex-col items-center mt-12 transition-all duration-300 hover:opacity-80">
          <span className="text-sm text-lightgray-light mb-2">Descubra Nossos Serviços</span>
          <ChevronDown className="text-gold-light animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
