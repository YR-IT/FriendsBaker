
import BestSellers from "./components/BestSeller";
import CTASection from "./components/CTA";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Testimonials from "./components/Testimonials";

function App() {
  return (
     <div className="min-h-screen flex flex-col overflow-hidden">
      <Header />
      <main className="flex-grow">
          <Hero />
          <Menu />
          <BestSellers />
          <Testimonials />
          <CTASection/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
