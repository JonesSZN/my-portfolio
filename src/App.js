import {
  Header,
  Hero,
  Faq,
  Slider,
  Showcase,
  Specialist,
  Achievements,
  Services,
  Work,
  Footer,
} from "./sections";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <main className="relative flex flex-col items-center">
      <Header />
      <Hero />
      <Slider />
      <Showcase />
      <Specialist />
      <Achievements />
      <Services />
      <Faq />
      <Work />
      <Footer />
    </main>
  );
}

export default App;
