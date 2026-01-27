import React from 'react';
import { motion } from 'framer-motion';

const WorkHeader: React.FC = () => {
    return (
        <div className="text-center mb-16">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl font-display font-extrabold text-slate-900 dark:text-white mb-6"
            >
                Selected <span className="text-primary">Work</span>
            </motion.h1>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto"
            >
                A showcase of our best edits, designs, and growth stories.
            </motion.p>
        </div>
    );
};

export default WorkHeader;
