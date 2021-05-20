import './App.css';
import Topbar from './Topbar';
import Home2 from './Home2';
import Contact from './Contact';
import About from './About';
import Learn from './Learn';
import Services from './Services';
import FAQ from './FAQ';
import { HashRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
    <div className="App">
      <Route path="/" exact component={Home2}/>
      <Route path="/contact" exact component={Contact}/>
      <Route path="/about" exact component={About}/>
      <Route path="/learn" exact component={Learn}/>
      <Route path="/services" exact component={Services}/>
      <Route path="/faq" exact component={FAQ}/>
    </div>
    </Router>
  );
}

export default App;
