
import { Camera, Film, Layout, FileText, Paintbrush } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  return (
    <div className="bg-darkgray p-6 rounded-md border border-darkgray-lighter transition-all duration-300 hover:border-gold/30 hover:shadow-[0_0_20px_rgba(212,175,55,0.1)]">
      <div className="text-gold-light mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3 gold-border pb-2">{title}</h3>
      <p className="text-lightgray text-sm">{description}</p>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      title: "Edição de Vídeo",
      description: "Transforme seu material bruto em narrativas cativantes com cortes precisos, correção de cor e efeitos visuais de alto impacto.",
      icon: <Film size={32} />
    },
    {
      title: "Edição de Fotos",
      description: "Aprimoramento profissional para suas imagens, desde retoques básicos até manipulações complexas, preservando a autenticidade.",
      icon: <Camera size={32} />
    },
    {
      title: "Criação de Slides",
      description: "Apresentações visualmente impactantes que comunicam suas ideias com clareza e estilo, personalizadas para sua marca.",
      icon: <FileText size={32} />
    },
    {
      title: "Design de Logotipos",
      description: "Identidades visuais distintas que capturam a essência da sua marca e se destacam no mercado digital competitivo.",
      icon: <Paintbrush size={32} />
    },
    {
      title: "Web Design",
      description: "Websites responsivos e esteticamente refinados, construídos com foco na experiência do usuário e na conversão.",
      icon: <Layout size={32} />
    }
  ];

  return (
    <section id="services" className="py-20 bg-darkgray-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Serviços Exclusivos</h2>
        <div className="w-24 h-1 gold-gradient mx-auto mb-12"></div>
        
        <p className="text-center max-w-2xl mx-auto text-lightgray mb-16">
          Oferecemos uma gama completa de serviços de edição digital, cada um executado com uma atenção meticulosa aos detalhes para garantir resultados excepcionais.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
