import Container from "./component/Container/Container";
import "./app.css";
import Header from "./layout/Header/Header";
import Hero from "./layout/Hero/Hero";

function App() {
  return (
    <Container>
      <Header />
      <main>
        <Hero />
        <section>Services</section>
        <section>About</section>
        <section>Work</section>
        <section>CTA</section>
      </main>
      <footer>Footer</footer>
    </Container>
  );
}

export default App;
