import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import { HashRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
    <div className="App">
      <Navbar></Navbar>
      <Route path="/" exact component={Home}/>
      <Route path="/contact" exact component={Contact}/>
      <Route path="/about" exact component={About}/>
    </div>
    </Router>
  );
}

export default App;
