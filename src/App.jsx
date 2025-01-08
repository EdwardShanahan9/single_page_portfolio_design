import Container from "./component/Container/Container";
import "./app.css";
import Header from "./layout/Header/Header";
import Hero from "./layout/Hero/Hero";
import Services from "./layout/Services/Servies";
import About from "./layout/About/About";

function App() {
  return (
    <Container>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <section>Work</section>
        <section>CTA</section>
      </main>
      <footer>Footer</footer>
    </Container>
  );
}

export default App;
