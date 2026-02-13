import React from 'react';
import { motion } from 'framer-motion';
const marqueeItems = [
    "Fast Delivery",
    "200+ Websites Delivered",
    "5+ SaaS Products Built",
    "4.9 Stars Rating",
    "Award-Winning Agency"
];

const Marquee: React.FC = () => {
    return (
        <section className="py-10 overflow-hidden relative z-20">
            {/* Edge Fades */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background-light dark:from-background-dark to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background-light dark:from-background-dark to-transparent z-10"></div>

            <div className="flex">
                <motion.div
                    initial={{ x: "-25%" }}
                    animate={{ x: 0 }}
                    transition={{
                        duration: 30,
                        ease: "linear",
                        repeat: Infinity
                    }}
                    className="flex items-center gap-6 pr-6"
                    style={{ width: "max-content" }}
                >
                    {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((text, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-3 px-8 py-4 rounded-full bg-white/70 dark:bg-slate-900/40 backdrop-blur-sm border border-slate-200/50 dark:border-slate-800/50 shadow-sm whitespace-nowrap min-w-max group hover:border-primary/20 transition-colors duration-300"
                        >
                            <span className="text-xl text-primary animate-pulse">✦</span>
                            <span className="font-display font-bold text-slate-700 dark:text-slate-300 text-lg tracking-tight uppercase">
                                {text}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Marquee;
