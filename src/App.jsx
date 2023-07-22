import { HashRouter as Router, Route } from "react-router-dom";

import { About, Contact, Experience, Hero, Navbar, StarsCanvas } from "./components";

const App = () => {
  return (
    <Router>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <div className='relative z-0'>
        </div>
      </div>
    </Router>
  );
}

export default App;