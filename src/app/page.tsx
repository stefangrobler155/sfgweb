import About from '@/components/About';
import Contact from '@/components/Contact';
import Hero from '@/components/Hero';
import Portfolio from '@/components/Portfolio';


export default async function Home() {

  return (
    <div className={`bg-primary text-dark min-h-screen`}>
      
      <main>
        <Hero />
        <About />
        {/* <Portfolio items={portfolioItems} /> */}
        <Contact />
      </main>
      
    </div>
  );
}

// Mock function to simulate fetching from WordPress REST API
async function fetchPortfolioItems() {
  
  return [
    { id: 1, title: 'Project 1', description: 'A modern web app built with Next.js', image: '/images/project1.jpg' },
    { id: 2, title: 'Project 2', description: 'E-commerce platform with Tailwind CSS', image: '/images/project2.jpg' },
    { id: 3, title: 'Project 3', description: 'Headless CMS integration', image: '/images/project3.jpg' },
  ];
}