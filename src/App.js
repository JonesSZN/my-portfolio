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

function App() {
  return (
    <main className="flex flex-col items-center">
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
