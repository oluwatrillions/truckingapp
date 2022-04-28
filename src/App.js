import Hero from './Hero'
import './Hero.css'
import Services from './Services'
import Experience from './Experience'
import Offers from './Offers'
import Testimonial from './Testimonial'
import './App.css'
import Database from './Database'
import Contact from './Contact'

function App() {
  return (
    <div className="App">
      <Hero />
      <Services />
      <Experience />
      <Offers />
      <Testimonial />
      <Database />
        <Contact />
    </div>
  );
}

export default App;
