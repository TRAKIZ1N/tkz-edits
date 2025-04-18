
import { UserCheck, Clock, Award, Sparkles } from "lucide-react";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature = ({ icon, title, description }: FeatureProps) => {
  return (
    <div className="flex flex-col items-center text-center p-6">
      <div className="text-gold mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-lightgray text-sm">{description}</p>
    </div>
  );
};

const AboutSection = () => {
  const features = [
    {
      icon: <Award size={32} />,
      title: "Qualidade Premium",
      description: "Cada projeto é tratado com o mais alto nível de cuidado e precisão, garantindo resultados excepcionais."
    },
    {
      icon: <Clock size={32} />,
      title: "Entregas Pontuais",
      description: "Respeitamos prazos e mantemos uma comunicação clara durante todo o processo de desenvolvimento."
    },
    {
      icon: <UserCheck size={32} />,
      title: "Atendimento Exclusivo",
      description: "Cada cliente recebe atenção personalizada, com soluções adaptadas às suas necessidades específicas."
    },
    {
      icon: <Sparkles size={32} />,
      title: "Técnicas Avançadas",
      description: "Utilizamos as mais recentes ferramentas e técnicas de edição para entregar resultados de alta qualidade."
    }
  ];

  return (
    <section id="about" className="py-20 bg-darkgray">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Sobre a TKZ Edits</h2>
        <div className="w-24 h-1 gold-gradient mx-auto mb-12"></div>
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-lightgray mb-6">
            A TKZ Edits é um atelier digital dedicado à excelência em edição e criação de conteúdo visual. 
            Fundada com a visão de oferecer serviços de alta qualidade que destacam a singularidade de cada cliente.
          </p>
          <p className="text-lightgray">
            Nossa missão é transformar ideias em realidade digital com precisão artística e técnica apurada, 
            colaborando com empresas e indivíduos que buscam se destacar no mundo digital.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Feature 
              key={index} 
              icon={feature.icon} 
              title={feature.title} 
              description={feature.description} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
