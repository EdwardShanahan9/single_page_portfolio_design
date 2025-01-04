import Container from "./component/Container/Container";
import "./app.css";

function App() {
  return (
    <Container>
      <header>Header</header>
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
