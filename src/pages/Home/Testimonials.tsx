import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { scrollTestimonials, imageTestimonials } from './data';

const Testimonials: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const featuredTestimonial = imageTestimonials[currentIndex];
    const marqueeTestimonials = scrollTestimonials;

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % imageTestimonials.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + imageTestimonials.length) % imageTestimonials.length);
    };

    return (
        <section className="py-24 bg-transparent relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block mb-6 px-4 py-1.5 rounded-full border border-dashed border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm"
                    >
                        <span className="text-primary font-bold tracking-widest uppercase text-xs">✦ Testimonials</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl lg:text-7xl font-display font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight flex justify-center items-center gap-x-4 whitespace-nowrap"
                    >
                        <span>Kind words from</span>
                        <motion.div
                            whileHover={{ rotate: 10, scale: 1.1 }}
                            className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl shadow-xl flex items-center justify-center transform rotate-[10deg] border-t border-white/20 relative top-2"
                        >
                            <span className="material-symbols-rounded text-white text-4xl md:text-5xl drop-shadow-md">sentiment_satisfied</span>
                        </motion.div>
                        <span>clients</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed"
                    >
                        We've partnered with creators, founders, and studios who value editing that works, here's what they had to say.
                    </motion.p>
                </div>

                {/* Two Column Layout */}
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-stretch">

                    {/* Left Column - Featured Card + Marquee */}
                    <div className="w-full lg:flex-1 flex flex-col gap-6 lg:gap-8 min-w-0">

                        {/* Featured Testimonial Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="relative w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-auto lg:h-[400px] rounded-[2.5rem] overflow-hidden group"
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentIndex}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="absolute inset-0"
                                >
                                    {/* Background Image */}
                                    <img
                                        src={featuredTestimonial.image}
                                        alt="Workspace"
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                    />
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                                </motion.div>
                            </AnimatePresence>

                            {/* Content */}
                            <div className="absolute inset-0 p-8 md:p-8 flex flex-col justify-between">
                                {/* Top: Counter */}
                                <div>
                                    <span className="text-white/60 font-bold mb-2 block">
                                        {(currentIndex + 1).toString().padStart(2, '0')} / {imageTestimonials.length.toString().padStart(2, '0')}
                                    </span>
                                    <div className="h-0.5 w-12 bg-white/30" />
                                </div>

                                {/* Bottom: Quote + Author */}
                                <div className="space-y-8">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={currentIndex}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            transition={{ duration: 0.4, ease: "easeOut" }}
                                        >
                                            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight min-h-[4.5em] md:min-h-[3.5em]">
                                                "{featuredTestimonial.text}"
                                            </blockquote>
                                        </motion.div>
                                    </AnimatePresence>

                                    <div className="flex items-end justify-between gap-4">
                                        <AnimatePresence mode="wait">
                                            <motion.div
                                                key={currentIndex}
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                className="text-white"
                                            >
                                                <p className="font-bold text-lg">{featuredTestimonial.name}</p>
                                                <p className="text-white/60 text-sm">
                                                    {featuredTestimonial.title}
                                                </p>
                                            </motion.div>
                                        </AnimatePresence>

                                        <div className="flex gap-2 relative z-20">
                                            <button
                                                onClick={handlePrev}
                                                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-all active:scale-95"
                                            >
                                                <span className="material-symbols-rounded text-xl">arrow_back</span>
                                            </button>
                                            <button
                                                onClick={handleNext}
                                                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-all active:scale-95"
                                            >
                                                <span className="material-symbols-rounded text-xl">arrow_forward</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Marquee Testimonials */}
                        <div className="w-full relative overflow-hidden mask-linear-fade flex-1 flex flex-col justify-center">
                            <motion.div
                                animate={{ x: ["0%", "-50%"] }}
                                transition={{ duration: 20, ease: "linear", repeat: Infinity }}
                                className="flex gap-5 w-max"
                            >
                                {[...marqueeTestimonials, ...marqueeTestimonials, ...marqueeTestimonials].map((item, i) => (
                                    <div key={i} className="w-[400px] bg-white dark:bg-slate-900 p-5 rounded-[1.5rem] border border-slate-100 dark:border-slate-800 shadow-sm flex-shrink-0">
                                        <div className="flex items-center gap-3 mb-3">
                                            <img src={item.avatar} alt={item.handle} className="w-10 h-10 rounded-full object-cover" />
                                            <div>
                                                <p className="font-bold text-slate-900 dark:text-white text-sm">{item.name || item.handle}</p>
                                            </div>
                                        </div>
                                        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed line-clamp-3">"{item.text}"</p>
                                    </div>
                                ))}
                            </motion.div>
                            {/* Gradient Fade Edges */}
                            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#FAFAFA] dark:from-background-dark to-transparent z-10 pointer-events-none" />
                            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#FAFAFA] dark:from-background-dark to-transparent z-10 pointer-events-none" />
                        </div>
                    </div>

                    {/* Right Column - Sticky CTA Card */}
                    <div className="w-full lg:w-[420px] flex-shrink-0 flex flex-col">
                        <div className="h-full">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-[#111] text-white rounded-[2.5rem] p-8 md:p-10 text-center relative overflow-hidden shadow-2xl h-full min-h-[500px] flex flex-col justify-center"
                            >
                                <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white/10 bg-white/5 relative z-10">
                                    <img
                                        src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
                                        alt="Avatar"
                                        className="w-full h-full object-cover"
                                    />
                                    {/* Stress/Busy indicator just for fun/detail if requested, else plain */}
                                </div>

                                <h3 className="text-3xl md:text-4xl font-display font-bold mb-8 leading-tight relative z-10">
                                    Book a 15-min call
                                </h3>

                                <Link
                                    to="/contact"
                                    className="inline-flex items-center justify-center gap-3 bg-white text-black pl-8 pr-2 py-2 rounded-full font-bold text-lg hover:scale-105 transition-transform group mb-10 w-full max-w-xs mx-auto relative z-10"
                                >
                                    Book a Call
                                    <div className="w-10 h-10 bg-[#FF5C00] rounded-full flex items-center justify-center text-white group-hover:rotate-45 transition-transform duration-300">
                                        <span className="material-symbols-rounded">arrow_forward</span>
                                    </div>
                                </Link>

                                <div className="mb-10 relative z-10">
                                    <p className="text-slate-400 text-sm font-bold mb-1">Prefer to Email?</p>
                                    <a
                                        href="mailto:ajoy.sayhello@gmail.com"
                                        className="text-slate-200 hover:text-white transition-colors"
                                    >
                                        ajoy.sayhello@gmail.com
                                    </a>
                                </div>

                                <div className="flex flex-wrap justify-center gap-x-2 gap-y-3 relative z-10">
                                    {['Collaboration', 'Business Inquiry', 'Want My Videos Edited', 'Send Me Samples'].map((tag, i) => (
                                        <span
                                            key={i}
                                            className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-slate-300 hover:bg-white/10 transition-colors cursor-default"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Background Effects */}
                                <div className="absolute top-0 right-0 w-80 h-80 bg-primary/20 blur-[100px] rounded-full pointer-events-none"></div>
                                <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none"></div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
