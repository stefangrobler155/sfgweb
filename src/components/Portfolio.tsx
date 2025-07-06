export default function Portfolio({ items }: { items: { id: number; title: string; description: string; image: string }[] }) {
  return (
    <section id="portfolio" className="bg-secondary py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-inter text-3xl md:text-4xl font-bold text-center mb-12">Our Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <div key={item.id} className="bg-primary rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="font-inter text-xl font-bold mb-2">{item.title}</h3>
                <p className="font-roboto text-light">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}