import About from '@/components/About';
import Contact from '@/components/Contact';
import Hero from '@/components/Hero';
import Portfolio from '@/components/Portfolio';
import { portfolioItems } from '@/data/portfolio';


export default async function Home() {

  return (
    <div className={`bg-primary text-dark min-h-screen`}>
      
      <main>
        <Hero />
        <About />
        <Portfolio items={portfolioItems} />
        <Contact />
      </main>
      
    </div>
  );
}

