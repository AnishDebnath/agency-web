import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { homeFaqs } from './data';

const FAQ: React.FC = () => {
    const [openFAQ, setOpenFAQ] = useState<number | null>(0);

    return (
        <section className="py-24 bg-white dark:bg-slate-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
                    {/* Left Column - Text */}
                    <div className="lg:col-span-5">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-dashed border-slate-300 dark:border-slate-700 mb-8"
                        >
                            <span className="text-primary font-bold text-xs uppercase flex items-center gap-1">
                                <span className="text-[#FF5C00] text-sm">✦</span> FAQ
                            </span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-slate-900 dark:text-white mb-6 leading-[1.1]"
                        >
                            Got Questions?<br />
                            We Got Answers
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed max-w-md"
                        >
                            Straightforward, no-fluff answers to help you feel confident about working with us.
                        </motion.p>
                    </div>

                    {/* Right Column - Accordion */}
                    <div className="lg:col-span-7 flex flex-col gap-4">
                        {homeFaqs.map((faq, index) => {
                            const isOpen = openFAQ === index;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`rounded-[2rem] transition-all duration-300 ${isOpen ? 'bg-[#FAFAFA] dark:bg-slate-900 p-8' : 'bg-transparent px-8 py-5 hover:bg-slate-50 dark:hover:bg-slate-900/50'}`}
                                >
                                    <button
                                        onClick={() => setOpenFAQ(isOpen ? null : index)}
                                        className="flex justify-between items-start w-full text-left gap-4"
                                    >
                                        <h3 className={`font-bold text-lg md:text-xl leading-snug ${isOpen ? 'text-slate-900 dark:text-white' : 'text-slate-800 dark:text-slate-200'}`}>
                                            {faq.q}
                                        </h3>
                                        <div className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-colors duration-300 ${isOpen ? 'border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800' : 'border-slate-200 dark:border-slate-800'}`}>
                                            <span className={`material-symbols-rounded text-xl transition-transform duration-300 ${isOpen ? 'rotate-180 text-slate-900 dark:text-white' : 'text-slate-400'}`}>
                                                expand_more
                                            </span>
                                        </div>
                                    </button>
                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0, marginTop: 0 }}
                                                animate={{ height: "auto", opacity: 1, marginTop: 24 }}
                                                exit={{ height: 0, opacity: 0, marginTop: 0 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="p-6 bg-slate-100 dark:bg-slate-800 rounded-2xl">
                                                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                                        {faq.a}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
