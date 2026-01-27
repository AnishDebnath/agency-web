import React from 'react';
import { motion } from 'framer-motion';

const OurSolution: React.FC = () => {
    const problems = [
        "Editing takes me forever.",
        "I miss uploads trying to finish videos.",
        "I hate editing. I just want to record.",
        "My videos don't look pro enough.",
        "Captions are a pain to add."
    ];

    const solutions = [
        "Done-for-you edits, always on time.",
        "Fast turnaround",
        "You record. We handle the rest.",
        "Cinematic, clean, and branded.",
        "Burned-in, style-matched captions."
    ];

    return (
        <section className="py-24 bg-transparent" id="solution">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block mb-6 px-4 py-1.5 rounded-full border border-dashed border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm"
                    >
                        <span className="text-primary font-bold tracking-widest uppercase text-xs">✦ Our Solution</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-slate-900 dark:text-white mb-6"
                    >
                        Why Most Creators Burn Out
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed"
                    >
                        A quick side-by-side of the struggles you shouldn’t have to deal with and how we make sure you don’t.
                    </motion.p>
                </div>

                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white dark:bg-slate-900/40 rounded-[3rem] p-2 md:p-4 border border-slate-100 dark:border-slate-800 shadow-2xl relative overflow-hidden"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
                            {/* Problems Column */}
                            <div className="flex flex-col p-8 md:p-12">
                                <h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-200 mb-12 text-center">Creators Problem</h3>
                                <ul className="space-y-8">
                                    {problems.map((problem, idx) => (
                                        <motion.li
                                            key={idx}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.1 }}
                                            className="flex items-center gap-5 text-slate-600 dark:text-slate-400 font-medium text-lg"
                                        >
                                            <div className="flex-shrink-0 w-7 h-7 rounded-full border border-red-500/20 bg-red-500/5 flex items-center justify-center">
                                                <span className="material-symbols-rounded text-red-500 text-sm font-bold">close</span>
                                            </div>
                                            {problem}
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>

                            {/* Solutions Column */}
                            <div className="flex flex-col bg-[#121212] rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
                                <h3 className="text-xl md:text-2xl font-bold text-primary mb-12 text-center relative z-10">Our Solution</h3>
                                <ul className="space-y-8 relative z-10">
                                    {solutions.map((solution, idx) => (
                                        <motion.li
                                            key={idx}
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.1 }}
                                            className="flex items-center gap-5 text-white/90 font-medium text-lg"
                                        >
                                            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/40">
                                                <span className="material-symbols-rounded text-white text-sm font-bold">check</span>
                                            </div>
                                            {solution}
                                        </motion.li>
                                    ))}
                                </ul>
                                {/* Subtle decorative glow */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[80px] rounded-full pointer-events-none" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default OurSolution;
