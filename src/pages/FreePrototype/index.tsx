import React from 'react';
import { motion } from 'framer-motion';
import PrototypeForm from './PrototypeForm';

const FreePrototypePage: React.FC = () => {
    return (
        <div className="max-w-7xl mx-auto pt-32 pb-24 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                {/* Info Section */}
                <div>
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="inline-block px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 font-bold tracking-widest uppercase text-xs mb-6 border border-green-200 dark:border-green-900/50"
                    >
                        ✦ Limited Time Offer
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-display font-extrabold text-slate-900 dark:text-white mb-8 leading-[1.1]"
                    >
                        See It Before <br />
                        You <span className="text-primary">Sign.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-slate-500 dark:text-slate-400 mb-12 leading-relaxed"
                    >
                        We're so confident in our design skills that we'll design a high-fidelity prototype of your new website for <strong>free</strong>. No strings attached.
                    </motion.p>

                    <div className="space-y-8">
                        {[
                            { title: "Review Your Strategy", desc: "We analyze your current site and competitors.", icon: "analytics" },
                            { title: "Visual Prototype", desc: "We design a custom homepage concept.", icon: "palette" },
                            { title: "Risk-Free Decision", desc: "You only move forward if you love it.", icon: "verified" }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 + (i * 0.1) }}
                                className="flex items-start gap-4"
                            >
                                <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-primary border border-slate-200 dark:border-slate-700">
                                    <span className="material-symbols-rounded">{item.icon}</span>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{item.title}</h3>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Form Section */}
                <PrototypeForm />
            </div>
        </div>
    );
};

export default FreePrototypePage;
