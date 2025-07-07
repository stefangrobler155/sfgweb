export default function Hero() {
  return (
    <section className="sfg__text-dark py-20 px-6 md:px-12 flex  flec-col items-center justify-center min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[70vh] border-2">
        <div className="border-2 col-span-full">
          <h1 className="font-inter text-8xl md:text-8xl font-bold uppercase mb-4">Hello, I'm Stefan</h1>
        </div>
        <div className="border-2">
              
            <p className="font-roboto text-lg md:text-xl mb-8 text-light">
              Crafting modern, minimalist, and responsive web solutions for your business.
            </p>
            <a
              href="#contact"
              className="font-poppins btn__primary"
            >
              Get in Touch
            </a>
        </div>
        
        <div className="border-2  col-span-2">
          <img src={`/images/Feature/hero-image.png`} alt="programmer sitting at his desk" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}