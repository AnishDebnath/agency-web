import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
};

const About: React.FC = () => {
    return (
        <section className="py-24" id="about">
            <div className="max-w-5xl mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="inline-block mb-6 px-4 py-1.5 rounded-full border border-dashed border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm"
                >
                    <span className="text-primary font-bold tracking-widest uppercase text-xs">✦ About</span>
                </motion.div>
                <motion.h2 {...fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold mb-12 leading-tight text-slate-900 dark:text-white">
                    We're the Editing Partners Behind the <br className="hidden md:block" /> Creators Who Actually Grow with <br className="hidden md:block" /> Results. <span className="text-primary">Fast, Reliable</span> and <span className="text-[#FF5C00]">Obsessed.</span>
                </motion.h2>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 bg-white dark:bg-slate-900 rounded-[3rem] px-12 py-10 shadow-xl shadow-slate-200/50 dark:shadow-black/50 border-2 border-dashed border-slate-200 dark:border-slate-800"
                >
                    {[
                        { count: '1,200+', label: 'Videos Delivered' },
                        { count: '300+', label: 'Creators Served' },
                        { count: '450M+', label: 'Total Views' },
                    ].map((stat, idx) => (
                        <div key={idx} className="text-center min-w-[140px]">
                            <div className="text-4xl md:text-5xl font-extrabold text-primary mb-2 font-display">{stat.count}</div>
                            <div className="text-slate-900 dark:text-slate-100 font-bold text-sm tracking-tight">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default About;
