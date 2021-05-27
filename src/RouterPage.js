import React from 'react';
import './App.css';
import Home2 from './Home2';
import Contact from './Contact';
import About from './About';
import Learn from './Learn';
import Services from './Services';
import FAQ from './FAQ';
import { HashRouter as Router, Route , Switch } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

class RouterPage extends React.Component {

    render() {
        return(
            <Router basename={process.env.PUBLIC_URL}>
            <div className="App">
                <AnimatePresence>
                    <Switch>
                        <Route path="/" exact component={Home2}/>
                        <Route path="/contact" exact component={Contact}/>
                        <Route path="/about" exact component={About}/>
                        <Route path="/learn" exact component={Learn}/>
                        <Route path="/services" exact component={Services}/>
                        <Route path="/faq" exact component={FAQ}/>
                    </Switch>
                </AnimatePresence>
            </div>
            </Router>
        )
    }
}

export default RouterPage;