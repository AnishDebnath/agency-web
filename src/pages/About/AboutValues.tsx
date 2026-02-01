import React from 'react';
import { motion } from 'framer-motion';
import { values } from './data';
import ValueCard from './ValueCard';

const AboutValues: React.FC = () => {
    return (
        <div className="mb-24 lg:mb-32">
            <div className="text-center mb-16 md:mb-20">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="inline-block mb-6 px-4 py-1.5 rounded-full border border-dashed border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm"
                >
                    <span className="text-primary font-bold tracking-widest uppercase text-xs flex items-center gap-2">
                        <span className="material-symbols-rounded text-sm">favorite</span> Our DNA
                    </span>
                </motion.div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
                    Values that drive our <br className="hidden md:block" /> <span className="text-primary italic">work ethic.</span>
                </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                {values.map((val, i) => (
                    <ValueCard key={i} value={val} delay={i * 0.1} />
                ))}
            </div>
        </div>
    );
};

export default AboutValues;
