import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
    const [isAvatarHovered, setIsAvatarHovered] = useState(false);

    return (
        <header className="pt-32 lg:pt-48 relative flex flex-col items-center justify-center">

            {/* Main Hero Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center pb-20">
                {/* Available for New Projects Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="flex justify-center mb-8"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50/80 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-800/50 backdrop-blur-sm shadow-sm transition-all hover:bg-emerald-100/50 dark:hover:bg-emerald-900/40">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span className="text-sm font-medium text-emerald-700 dark:text-emerald-400">
                            Available for New Projects
                        </span>
                    </div>
                </motion.div>

                {/* Trusted Badge */}
                <motion.div
                    initial="hidden"
                    animate="show"
                    variants={{
                        hidden: { opacity: 0, y: -20 },
                        show: {
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: 0.6,
                                ease: "easeOut",
                                staggerChildren: 0.15
                            }
                        }
                    }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-12"
                >
                    <div
                        className="flex items-center h-16 cursor-pointer"
                        onMouseEnter={() => setIsAvatarHovered(true)}
                        onMouseLeave={() => setIsAvatarHovered(false)}
                    >
                        {[
                            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
                            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80",
                            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
                        ].map((src, i) => (
                            <motion.div
                                key={i}
                                variants={{
                                    hidden: { opacity: 0, x: -15, scale: 0.8 },
                                    show: { opacity: 1, x: 0, scale: 1 }
                                }}
                                animate={{
                                    marginLeft: i === 0 ? 0 : (isAvatarHovered ? -6 : -20),
                                    zIndex: i,
                                }}
                                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                className="relative rounded-full border-[4px] border-[#FAFAFA] dark:border-background-dark overflow-hidden w-14 h-14 shadow-sm"
                            >
                                <img
                                    className="w-full h-full object-cover"
                                    src={src}
                                    alt="Founder"
                                />
                            </motion.div>
                        ))}
                    </div>
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, x: 10 },
                            show: { opacity: 1, x: 0 }
                        }}
                        className="text-center sm:text-left"
                    >
                        <div className="flex items-center justify-center sm:justify-start gap-1 mb-1">
                            {[1, 2, 3, 4, 5].map((_, i) => (
                                <motion.span
                                    key={i}
                                    initial={{ opacity: 0, scale: 0, rotate: -45 }}
                                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                    transition={{ delay: 0.8 + (i * 0.1), type: "spring", stiffness: 300, damping: 15 }}
                                    className="material-symbols-rounded text-[#FFC107] text-[18px]"
                                >
                                    star
                                </motion.span>
                            ))}
                        </div>
                        <p className="text-sm font-bold text-slate-700 dark:text-slate-300">Trusted by 100+ clients</p>
                    </motion.div>
                </motion.div>

                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-7xl lg:text-[7.5rem] font-display font-extrabold tracking-tighter leading-[1.05] text-[#111] dark:text-white"
                >
                    <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 md:gap-x-6">
                        <span>Effortless</span>
                        <motion.span
                            whileHover={{ scale: 1.05, rotate: -2 }}
                            className="relative inline-flex w-20 h-12 md:w-32 md:h-20 lg:w-40 lg:h-24 rounded-full overflow-hidden items-center justify-center bg-orange-100 align-middle shadow-inner"
                        >
                            <img src="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=300&q=80" className="w-full h-full object-cover opacity-90" alt="Video" />
                        </motion.span>
                        <span className="text-[#FF5C00]">Editing</span>
                    </div>

                    <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 md:gap-x-6 mt-2">
                        <span className="text-slate-400">for</span>
                        <motion.span
                            whileHover={{ scale: 1.05, rotate: 2 }}
                            className="relative inline-flex w-20 h-12 md:w-32 md:h-20 lg:w-40 lg:h-24 rounded-full overflow-hidden items-center justify-center bg-slate-200 align-middle shadow-inner"
                        >
                            <img src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=300&q=80" className="w-full h-full object-cover" alt="Creator" />
                        </motion.span>
                        <span>Content Creators</span>
                    </div>

                    <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 md:gap-x-6 mt-2">
                        <span className="text-slate-400">based in London,</span>
                        <motion.span
                            whileHover={{ scale: 1.05, rotate: -2 }}
                            className="relative inline-flex w-16 h-16 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden items-center justify-center bg-blue-100 align-middle shadow-inner border-4 border-white dark:border-slate-800"
                        >
                            <img src="https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=300&q=80" className="w-full h-full object-cover" alt="London" />
                        </motion.span>
                        <span>UK</span>
                    </div>
                </motion.h1>

                {/* Subheading */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mt-10 leading-relaxed font-medium"
                >
                    We make it easy for creators to publish, grow, and scale with high-retention, conversion focused edits — no delays, no drama.
                </motion.p>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="mt-12 flex flex-col items-center"
                >
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-4 bg-[#111] dark:bg-white text-white dark:text-[#111] pl-8 pr-2 py-2 rounded-full font-bold text-lg hover:scale-105 transition-all group shadow-xl"
                    >
                        Book a Call
                        <div className="w-10 h-10 bg-white dark:bg-[#111] rounded-full flex items-center justify-center text-[#111] dark:text-white group-hover:rotate-45 transition-transform duration-300">
                            <span className="material-symbols-rounded">arrow_forward</span>
                        </div>
                    </Link>
                    <p className="mt-4 text-sm text-slate-500 font-medium">No pressure, just possibilities.</p>
                </motion.div>
            </div>
        </header>
    );
};

export default Hero;
