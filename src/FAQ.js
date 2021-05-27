import React from 'react';
import './App.css';
import ReactCardFlip from 'react-card-flip';
import Topbar from './Topbar';
import { AnimatePresence, motion } from 'framer-motion';

class FAQ extends React.Component {

    constructor() {
        super();
        this.state = {
            q1: false,
            q2: false,
            q3: false,
            q4: false
        };
        this.q1Flip = this.q1Flip.bind(this);
        this.q2Flip = this.q2Flip.bind(this);
        this.q3Flip = this.q3Flip.bind(this);
        this.q4Flip = this.q4Flip.bind(this);
    }

    q1Flip(e) {
        e.preventDefault();
        this.setState(prevState => ({ q1: !prevState.q1 }));
    }

    q2Flip(e) {
        e.preventDefault();
        this.setState(prevState => ({ q2: !prevState.q2 }));
    }

    q3Flip(e) {
        e.preventDefault();
        this.setState(prevState => ({ q3: !prevState.q3 }));
    }

    q4Flip(e) {
        e.preventDefault();
        this.setState(prevState => ({ q4: !prevState.q4 }));
    }

    render() {
        return(
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <Topbar />
                <div className="header-image2">
                    <div className="services1">FAQ</div>
                </div>
                <div>
                    <div className="faq-container">
                    <ReactCardFlip isFlipped={this.state.q1} flipDirection="vertical">
                        <button onClick={this.q1Flip} className="faq-card">
                            <div className="faq-question">
                                What is your dog's name?
                            </div>
                        </button>

                        <button onClick={this.q1Flip} className="faq-card2">
                            <div className="faq-answer">
                                My dog's name is Mara. She is a good doggy.
                            </div>
                        </button>
                    </ReactCardFlip>
                    </div>
                    <div className="faq-container">
                    <ReactCardFlip isFlipped={this.state.q2} flipDirection="vertical">
                        <button onClick={this.q2Flip} className="faq-card">
                            <div className="faq-question">
                                What is your cat's name?
                            </div>
                        </button>

                        <button onClick={this.q2Flip} className="faq-card2">
                            <div className="faq-answer">
                                My cat's name is Georgia. She is a good kitty cat.
                            </div>
                        </button>
                    </ReactCardFlip>
                    </div>
                    <div className="faq-container">
                    <ReactCardFlip isFlipped={this.state.q3} flipDirection="vertical">
                        <button onClick={this.q3Flip} className="faq-card">
                            <div className="faq-question">
                                What does a very long question with a lot of words look like with this layout?
                            </div>
                        </button>

                        <button onClick={this.q3Flip} className="faq-card2">
                            <div className="faq-answer">
                            Psychotherapy (also psychological therapy or talking therapy) is the use of psychological methods, particularly when based on regular personal interaction with adults, to help a person change behavior and overcome problems in desired ways. Psychotherapy aims to improve an individual's well-being and mental health, to resolve or mitigate troublesome behaviors, beliefs, compulsions, thoughts, or emotions, and to improve relationships and social skills.
                            </div>
                        </button>
                    </ReactCardFlip>
                    </div>
                    <div className="faq-container">
                    <ReactCardFlip isFlipped={this.state.q4} flipDirection="vertical">
                        <button onClick={this.q4Flip} className="faq-card">
                            <div className="faq-question">
                                Who is Jake Briltz?
                            </div>
                        </button>

                        <button onClick={this.q4Flip} className="faq-card2">
                            <div className="faq-answer">
                                Jake Briltz is the coolest guy I know.
                            </div>
                        </button>
                    </ReactCardFlip>
                    </div>
                </div>
            </motion.div>
        )
    }
}

export default FAQ;