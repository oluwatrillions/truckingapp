import Hero from './Hero'
import './Hero.css'
import Services from './Services'
import Experience from './Experience'
import Offers from './Offers'
import Testimonial from './Testimonial'
import './App.css'
import Database from './Database'
import Contact from './Contact'
import Container from '@material-ui/core/Container'

function App() {
  return (
    <div className="App">
      <Container>
      <Hero />
      <Services />
      <Experience />
      <Offers />
      <Testimonial />
      <Database />
        <Contact />
        </Container>
    </div>
  );
}

export default App;
