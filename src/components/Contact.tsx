export default function Contact() {
  return (
    <section id="contact" className="bg-primary text-dark py-16 px-6 md:px-12">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-inter text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
        <p className="font-roboto text-lg text-light mb-8">
          Ready to start your next project? Reach out to us!
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <input
            type="text"
            placeholder="Your Name"
            className="font-roboto bg-secondary text-dark p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="font-roboto bg-secondary text-dark p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <button
            className="font-poppins bg-accent text-primary px-6 py-3 rounded-md hover:bg-light hover:text-dark transition-colors"
          >
            Submit
          </button>
        </div>
      </div>
    </section>
  );
}