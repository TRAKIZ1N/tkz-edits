
import { Send, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const openWhatsApp = () => {
    // Substitua pelo número real
    window.open("https://wa.me/5511999999999?text=Olá!%20Tenho%20interesse%20nos%20serviços%20da%20TKZ%20Edits.", "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-darkgray">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Entre em Contato</h2>
        <div className="w-24 h-1 gold-gradient mx-auto mb-12"></div>
        
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lightgray mb-8">
            Estamos prontos para transformar suas ideias em realidade digital. Entre em contato para discutir seu projeto e receber uma proposta personalizada.
          </p>
          
          <div className="flex flex-col items-center justify-center mt-12">
            <p className="text-lightgray-light mb-8">Clique abaixo para falar diretamente pelo WhatsApp Business:</p>
            
            <Button 
              onClick={openWhatsApp}
              className="whatsapp-btn bg-gold hover:bg-gold-light text-darkgray-dark font-semibold px-8 py-6 rounded-md transition-all duration-300 flex items-center space-x-2 shadow-[0_0_15px_rgba(212,175,55,0.3)]"
            >
              <Phone className="mr-2" size={20} />
              <span>Fale Conosco Agora</span>
            </Button>
            
            <p className="text-sm text-lightgray mt-6">
              Resposta rápida e atendimento personalizado para cada cliente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
