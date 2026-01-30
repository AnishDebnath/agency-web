import React from 'react';
import { motion } from 'framer-motion';
import { categories } from './data';

interface WorkFilterProps {
    activeCategory: string;
    setActiveCategory: (category: string) => void;
}

const WorkFilter: React.FC<WorkFilterProps> = ({ activeCategory, setActiveCategory }) => {
    return (
        <div className="flex justify-center mb-16 px-4">
            <div className="inline-flex flex-wrap items-center bg-white/80 dark:bg-black/10 backdrop-blur-xl p-1.5 rounded-[2rem] border border-slate-200 dark:border-white/5 shadow-xl shadow-black/5 dark:shadow-black/20">
                {categories.map((cat, i) => (
                    <motion.button
                        key={i}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setActiveCategory(cat)}
                        className={`relative px-6 py-2.5 rounded-full text-sm font-bold tracking-tight transition-all duration-300 ${activeCategory === cat
                                ? 'text-white'
                                : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                            }`}
                    >
                        <span className="relative z-10">{cat}</span>
                        {activeCategory === cat && (
                            <motion.div
                                layoutId="activeTab"
                                className="absolute inset-0 bg-primary rounded-full shadow-lg shadow-primary/20"
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                    </motion.button>
                ))}
            </div>
        </div>
    );
};

export default WorkFilter;
