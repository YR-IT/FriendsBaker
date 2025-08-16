
import BestSellers from "./components/BestSeller";
import Footer from "./components/Footer";
import GiftHamper from "./components/GiftHamper";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import TeaTimeDelights from "./components/TeaTimeDelights";

function App() {
  return (
     <div className="min-h-screen flex flex-col overflow-hidden">
      <Header />
      <main className="flex-grow">
          <Hero />
          <Menu />
          <BestSellers />
          <GiftHamper />
          <TeaTimeDelights />
      </main>
      <Footer />
    </div>
  );
}

export default App;
