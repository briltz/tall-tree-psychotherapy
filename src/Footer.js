import React from 'react';
import './App.css';
import { AnimatePresence, motion } from 'framer-motion';


class Footer extends React.Component {
    render() {
        return(
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <div className = "footer">
                    <div>Website created by Jake Briltz</div>
                </div>
            </motion.div>
        )
    }
}

export default Footer;