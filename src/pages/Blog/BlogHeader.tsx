import React from 'react';
import { motion } from 'framer-motion';

const BlogHeader: React.FC = () => {
    return (
        <header className="text-center py-10">
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="inline-block py-1 px-3 rounded-full bg-orange-100 dark:bg-orange-900/30 text-primary text-xs font-bold uppercase tracking-wider mb-4"
            >
                Blog & Resources
            </motion.span>
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight"
            >
                Creator Insights <span className="text-primary">& Tips</span>
            </motion.h1>
        </header>
    );
};

export default BlogHeader;
