import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CTA: React.FC = () => {
    return (
        <section className="py-24 px-4 bg-transparent relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-6xl mx-auto relative rounded-[3rem] overflow-hidden bg-gradient-to-br from-[#FFC682] via-[#FFD6A5] to-[#FFC682] p-8 md:p-16 shadow-2xl"
            >
                {/* Decorative Circles */}
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/20 rounded-full blur-3xl -translate-y-1/2 pointer-events-none"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FF5C00]/10 rounded-full blur-3xl translate-y-1/2 pointer-events-none"></div>

                {/* Concentric Circles SVG overlay */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <circle cx="50" cy="-20" r="40" stroke="black" strokeWidth="0.5" fill="none" />
                    <circle cx="50" cy="120" r="40" stroke="black" strokeWidth="0.5" fill="none" />
                </svg>

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Side */}
                    <div className="text-left">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-xs font-bold tracking-[0.2em] text-slate-800/70 uppercase mb-4 block"
                        >
                            Let's build something great
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-slate-900 leading-[1.1] mb-8"
                        >
                            Ready to transform your digital presence?
                        </motion.h2>
                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-slate-950 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-slate-900/10 hover:shadow-2xl transition-all"
                        >
                            Get started
                        </motion.button>
                    </div>

                    {/* Right Side - The Card */}
                    <div className="relative flex justify-center lg:justify-end">
                        <motion.div
                            initial={{ opacity: 0, rotate: 6, y: 40 }}
                            whileInView={{ opacity: 1, rotate: 3, y: 0 }}
                            whileHover={{ rotate: 0, scale: 1.02 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.4 }}
                            className="bg-white/90 backdrop-blur-xl p-8 rounded-[2rem] shadow-2xl w-full max-w-md relative border border-white/50"
                        >
                            <div className="flex items-center gap-3 mb-8 border-b border-slate-100 pb-4">
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                                </span>
                                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Available for Project</span>
                            </div>

                            <div className="flex items-center gap-4 mb-6 relative">
                                <div className="flex items-center gap-2">
                                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" className="w-12 h-12 rounded-full border-2 border-white object-cover shadow-sm" alt="Amanda" />
                                    <span className="text-slate-400 font-bold">+</span>
                                    <div className="w-12 h-12 rounded-full border-2 border-white bg-slate-900 flex items-center justify-center text-white text-xs font-bold shadow-sm">You</div>
                                </div>
                                <motion.div
                                    animate={{ x: [0, 10, 0], y: [0, -10, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute left-14 top-6 z-20 pointer-events-none"
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-md">
                                        <path d="M5.65376 12.3673H5.46026L5.31717 12.4976L0.500002 16.8829L0.500002 1.19841L11.7841 12.3673H5.65376Z" fill="black" stroke="white" />
                                    </svg>
                                    <div className="bg-black text-white text-[10px] font-bold px-2 py-1 rounded-md absolute left-4 top-4 whitespace-nowrap">
                                        AMANDA
                                    </div>
                                </motion.div>
                            </div>

                            <h3 className="text-2xl font-bold text-slate-900 mb-2">Quick 15-minute call</h3>
                            <p className="text-slate-500 mb-8">Pick a time that works for you.</p>

                            <Link to="/contact" className="block w-full bg-[#FF5C00] hover:bg-[#E04F00] text-white text-center py-4 rounded-xl font-bold shadow-lg shadow-orange-500/30 transition-all hover:scale-[1.02] active:scale-[0.98]">
                                Book a free call
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default CTA;
