
const PortfolioSection = () => {
  // Arrays de exemplos para cada categoria
  const portfolioItems = [
    {
      category: "Vídeo",
      image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=2000",
      title: "Edição Cinematográfica"
    },
    {
      category: "Foto",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000",
      title: "Retoque Profissional"
    },
    {
      category: "Slides",
      image: "https://images.unsplash.com/photo-1616531770192-6eaea74c2456?q=80&w=2000",
      title: "Apresentação Corporativa"
    },
    {
      category: "Logotipo",
      image: "https://images.unsplash.com/photo-1563694983011-6f4d90358083?q=80&w=2000",
      title: "Design de Marca"
    },
    {
      category: "Web",
      image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?q=80&w=2000",
      title: "Website Responsivo"
    },
    {
      category: "Foto",
      image: "https://images.unsplash.com/photo-1520207588543-270e16fa96ea?q=80&w=2000",
      title: "Edição Editorial"
    }
  ];

  return (
    <section className="py-20 bg-darkgray">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Portfolio de Trabalhos</h2>
        <div className="w-24 h-1 gold-gradient mx-auto mb-12"></div>
        
        <p className="text-center max-w-2xl mx-auto text-lightgray mb-16">
          Uma seleção curada dos nossos projetos mais recentes, demonstrando nossa expertise em diferentes áreas de edição digital.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <div key={index} className="group relative overflow-hidden rounded-md h-64">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-darkgray-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-gold-light text-sm mb-1">{item.category}</span>
                <h3 className="text-xl font-semibold">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
