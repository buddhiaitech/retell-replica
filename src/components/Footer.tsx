const Footer = () => {

  return (
    <footer 
      className="bg-transparent py-4 overflow-hidden relative -mt-20 min-h-[50vh] flex items-center justify-center"
      style={{
        zIndex: 0
      }}
    >
      <div className="w-full px-6 text-center">
        <h2 className="text-[1.6rem] md:text-[2.3rem] lg:text-[5.3rem] xl:text-[8.7rem] font-black tracking-tight text-black leading-none transform scale-x-125 scale-y-125 w-full" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          BUDDHI<span className="text-blue-600">VOICE</span>AI
        </h2>
      </div>
    </footer>
  );
};

export default Footer;