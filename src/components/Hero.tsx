export default function Hero() {
  return (
    <section className="bg-secondary text-dark py-20 px-6 md:px-12 flex items-center justify-center min-h-screen">
      <div className="max-w-3xl text-center">
        <h1 className="font-inter text-4xl md:text-6xl font-bold mb-4">Welcome to SFG Web</h1>
        <p className="font-roboto text-lg md:text-xl mb-8 text-light">
          Crafting modern, minimalist, and responsive web solutions for your business.
        </p>
        <a
          href="#contact"
          className="font-poppins bg-accent text-primary px-6 py-3 rounded-md hover:bg-light hover:text-dark transition-colors"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}