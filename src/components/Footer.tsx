const Footer = () => {

  return (
    <footer 
      className="bg-transparent py-4 overflow-hidden relative -mt-20 min-h-[50vh] flex items-center justify-center"
      style={{
        zIndex: 0
      }}
    >
      <div className="w-full px-6 text-center">
        <h2
  className="text-[1.6rem] md:text-[2.3rem] lg:text-[5.3rem] xl:text-[8.7rem] font-black tracking-tight leading-none transform scale-x-125 scale-y-125 w-full opacity-20"
  style={{
    fontFamily: 'Montserrat, sans-serif',
    WebkitTextStroke: '1px black', // Outline thickness & color
    color: 'white',                // Fill color
  }}
>
  BUDDHIVOICEAI<span style={{ WebkitTextStroke: '2px black', color: '#2563eb' }}></span>
</h2>

      </div>
    </footer>
  );
};

export default Footer;