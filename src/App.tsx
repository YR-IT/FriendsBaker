import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/ContactUs';
import CategoryPage from './components/CategoryPage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
       <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/menu/:slug" element={<CategoryPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
