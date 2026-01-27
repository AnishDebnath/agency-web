import React from 'react';
import { motion } from 'framer-motion';

const MarqueeWork: React.FC = () => {
    return (
        <section className="py-24 bg-[#111] border-y border-white/5 overflow-hidden">
            <div className="flex flex-col gap-8">
                {/* Row 1 - Left */}
                <div className="flex">
                    <motion.div
                        initial={{ x: 0 }}
                        animate={{ x: "-50%" }}
                        transition={{ duration: 30, ease: "linear", repeat: Infinity }}
                        className="flex whitespace-nowrap gap-12 pr-12"
                    >
                        {[...Array(12)].map((_, i) => (
                            <div key={i} className="flex items-center gap-12">
                                <span className="text-7xl md:text-9xl font-display font-black text-white tracking-tighter">
                                    Let’s work together.
                                </span>
                                <span className="text-4xl md:text-6xl text-[#FF5C00]">✦</span>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Row 2 - Right */}
                <div className="flex">
                    <motion.div
                        initial={{ x: "-50%" }}
                        animate={{ x: 0 }}
                        transition={{ duration: 30, ease: "linear", repeat: Infinity }}
                        className="flex whitespace-nowrap gap-12 pr-12"
                    >
                        {[...Array(12)].map((_, i) => (
                            <div key={i} className="flex items-center gap-12">
                                <span className="text-7xl md:text-9xl font-display font-black text-white tracking-tighter">
                                    Let’s work together.
                                </span>
                                <span className="text-4xl md:text-6xl text-slate-800">✦</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default MarqueeWork;
