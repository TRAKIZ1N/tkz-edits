
const testimonials = [
  {
    content: "A TKZ Edits transformou completamente a imagem da minha empresa. O trabalho de edição de vídeo e design superou todas as minhas expectativas.",
    author: "Ricardo Mendes",
    position: "CEO, Mendes Incorporações"
  },
  {
    content: "Profissionalismo impecável! Desde a criação do meu logotipo até o design completo do website, cada detalhe foi cuidadosamente trabalhado.",
    author: "Ana Carolina",
    position: "Proprietária, Studio Belle"
  },
  {
    content: "A qualidade das edições de foto realizadas para o catálogo da minha loja online elevou significativamente as conversões. Recomendo fortemente.",
    author: "Felipe Martins",
    position: "Diretor, FM Fashion"
  }
];

const TestimonialSection = () => {
  return (
    <section className="py-20 bg-darkgray-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">O Que Nossos Clientes Dizem</h2>
        <div className="w-24 h-1 gold-gradient mx-auto mb-12"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-darkgray border border-darkgray-lighter p-6 rounded-md relative"
            >
              <div className="text-6xl text-gold/10 absolute top-4 left-4">"</div>
              <p className="text-lightgray mb-6 relative z-10">
                {testimonial.content}
              </p>
              <div className="mt-auto">
                <p className="font-semibold text-white">{testimonial.author}</p>
                <p className="text-sm text-lightgray-light">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
