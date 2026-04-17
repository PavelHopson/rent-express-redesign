import Header from './components/Header';
import Hero from './components/Hero';
import BookingWidget from './components/BookingWidget';
import Fleet from './components/Fleet';
import Advantages from './components/Advantages';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="grain min-h-screen bg-bg text-text">
      <Header />
      <main>
        <Hero />
        <BookingWidget />
        <Fleet />
        <Advantages />
        <Process />
        <Testimonials />
        <FAQ />
        <Contact />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
