import Container from "./component/Container/Container";
import "./app.css";
import Header from "./layout/Header/Header";
import Hero from "./layout/Hero/Hero";
import Services from "./layout/Services/Servies";
import About from "./layout/About/About";
import Gallery from "./layout/Gallery/Gallery";

function App() {
  return (
    <Container>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Gallery />
        <section>CTA</section>
      </main>
      <footer>Footer</footer>
    </Container>
  );
}

export default App;
