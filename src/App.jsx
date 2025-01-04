import Container from "./component/Container/Container";
import "./app.css";
import Header from "./layout/Header/Header";

function App() {
  return (
    <Container>
      <Header />
      <main>
        <section>Hero</section>
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
