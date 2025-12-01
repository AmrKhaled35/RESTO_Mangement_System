import Hero from "./components/Hero";
import Features from "./components/Features";
import FAQ from "./components/FAQ";
import Benefits from "./components/Benefits";
import CreativeSection from "./components/CreativeSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <Features />
      <CreativeSection />
      <Benefits />
      <FAQ />
      <a
        href="https://wa.me/970599346610"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 bg-red-600 p-4 rounded-full shadow-lg hover:bg-red-700 transition-all duration-300 z-50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="black"
          viewBox="0 0 24 24"
          className="w-6 h-6"
        >
          <path d="M20.52 3.48A11.86 11.86 0 0 0 12 0C5.37 0 0 5.37 0 12a11.9 11.9 0 0 0 1.65 6l-1.1 4.06 4.16-1.09A11.9 11.9 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.18-3.48-8.52zM12 22a9.9 9.9 0 0 1-5-.71l-.36-.16-2.47.65.66-2.4-.17-.38A9.87 9.87 0 1 1 22 12c0 5.52-4.48 10-10 10zm5.13-7.47c-.28-.14-1.65-.81-1.9-.9-.25-.1-.44-.14-.63.14-.19.28-.72.9-.88 1.08-.16.19-.33.21-.61.07-.28-.14-1.18-.44-2.24-1.41-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.33.42-.49.14-.16.19-.28.28-.47.09-.19.05-.35-.02-.49-.07-.14-.63-1.51-.86-2.07-.23-.55-.46-.48-.63-.48-.16 0-.35-.02-.54-.02-.19 0-.49.07-.75.35-.26.28-.98.96-.98 2.34 0 1.38 1 2.71 1.14 2.9.14.19 1.96 2.99 4.8 4.19 2.84 1.19 2.84.79 3.35.74.51-.05 1.65-.67 1.88-1.32.23-.65.23-1.21.16-1.33-.06-.12-.25-.19-.53-.33z" />
        </svg>
      </a>

      <Footer />
    </div>
  );
}

export default App;
