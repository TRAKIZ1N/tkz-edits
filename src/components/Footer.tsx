
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 bg-darkgray-dark border-t border-darkgray-lighter">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">
              <span className="text-white">TKZ</span>
              <span className="gold-text">EDITS</span>
            </h2>
            <p className="text-lightgray text-sm mt-2">Atelier Digital de Edição Premium</p>
          </div>
          
          <div className="text-sm text-lightgray">
            <p>&copy; {currentYear} TKZ Edits. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
