import React from 'react';
import { motion } from 'framer-motion';
const marqueeItems = [
    "Fast Delivery",
    "500+ Videos Delivered",
    "2x Engagement Boost",
    "4.9 Stars Rating",
    "Top Rated Editors On Fiverr"
];

const Marquee: React.FC = () => {
    return (
        <section className="py-12 overflow-hidden relative z-20">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#FAFAFA] dark:from-background-dark to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#FAFAFA] dark:from-background-dark to-transparent z-10"></div>

            <div className="flex">
                <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: "-25%" }}
                    transition={{
                        duration: 12,
                        ease: "linear",
                        repeat: Infinity
                    }}
                    className="flex items-center gap-6 pr-6"
                    style={{ width: "max-content" }}
                >
                    {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((text, i) => (
                        <div key={i} className="flex items-center gap-3 px-8 py-4 rounded-full bg-white dark:bg-slate-900 shadow-md whitespace-nowrap min-w-max">
                            <span className="text-xl text-primary">✦</span>
                            <span className="font-bold text-slate-700 dark:text-slate-300 text-lg">{text}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Marquee;
