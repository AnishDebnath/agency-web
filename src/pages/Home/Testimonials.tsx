import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { scrollTestimonials } from './data';

const Testimonials: React.FC = () => {
    return (
        <section className="py-24 bg-transparent relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-20">
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
                        className="text-5xl md:text-6xl lg:text-7xl font-display font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight flex flex-wrap justify-center items-center gap-x-4 gap-y-2"
                    >
                        <span>Kind words from</span>
                        <motion.div
                            whileHover={{ rotate: 0, scale: 1.1 }}
                            className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl shadow-xl flex items-center justify-center rotate-12 transform border-t border-white/20 relative top-2"
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
                        We’ve partnered with creators, founders, and studios who value editing that works, here’s what they had to say.
                    </motion.p>
                </div>
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
                    {/* Left Column - Scrolling List */}
                    <div className="w-full lg:flex-1 space-y-8">
                        {scrollTestimonials.map((testimonial, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="sticky top-28 sm:top-32 bg-white dark:bg-slate-900 p-2 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-xl"
                            >
                                <div className="bg-white dark:bg-slate-900 rounded-[2rem] p-8 md:p-10 shadow-sm relative overflow-hidden">
                                    <div className="flex items-start gap-4">
                                        <img src={testimonial.avatar} alt={testimonial.handle} className="w-12 h-12 rounded-full object-cover" />
                                        <div>
                                            <p className="text-slate-500 dark:text-slate-400 font-bold mb-2 text-sm">{testimonial.handle}</p>
                                            <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white leading-snug">
                                                {testimonial.text}
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right Column - Sticky Card */}
                    <div className="w-full lg:w-[420px] sticky top-24">
                        <div className="bg-[#111] text-white rounded-[2.5rem] p-8 md:p-10 text-center relative overflow-hidden shadow-2xl">
                            <div className="w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white/10 bg-white/5">
                                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="Avatar" className="w-full h-full object-cover" />
                            </div>
                            <h3 className="text-3xl md:text-4xl font-display font-bold mb-8 leading-tight">
                                Book a 15-min intro call
                            </h3>
                            <Link to="/contact" className="inline-flex items-center gap-3 bg-white text-black pl-6 pr-2 py-2 rounded-full font-bold text-lg hover:scale-105 transition-transform group mb-8">
                                Book a Call
                                <div className="w-10 h-10 bg-[#FF5C00] rounded-full flex items-center justify-center text-white group-hover:rotate-45 transition-transform duration-300">
                                    <span className="material-symbols-rounded">arrow_forward</span>
                                </div>
                            </Link>
                            <div className="mb-10">
                                <p className="text-slate-400 text-sm font-bold mb-1">Prefer to Email?</p>
                                <a href="mailto:ajoy.sayhello@gmail.com" className="text-slate-200 hover:text-white transition-colors">ajoy.sayhello@gmail.com</a>
                            </div>
                            <div className="flex flex-wrap justify-center gap-2">
                                {['Collaboration', 'Business Inquiry', 'Want My Videos Edited', 'Send Me Samples'].map((tag, i) => (
                                    <span key={i} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-slate-300 hover:bg-white/10 transition-colors cursor-default">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] rounded-full pointer-events-none"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
