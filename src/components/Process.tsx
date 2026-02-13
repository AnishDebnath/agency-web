import React from 'react';
import { motion } from 'framer-motion';

const Process: React.FC = () => {
    return (
        <section className="py-25 bg-transparent" id="process">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block mb-6 px-4 py-1.5 rounded-full border border-dashed border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm"
                    >
                        <span className="text-primary font-bold tracking-widest uppercase text-xs">✦ Process</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-slate-900 dark:text-white mb-6"
                    >
                        How It Works?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-slate-500 dark:text-slate-400 max-w-xl mx-auto"
                    >
                        A quick overview of how we work together to deliver exceptional digital solutions!
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {/* Step 01 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-10 border border-slate-200 dark:border-slate-800 shadow-xl hover:shadow-2xl transition-all duration-300"
                    >
                        <div className="flex justify-between items-start mb-10">
                            <span className="text-sm font-bold text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">01</span>
                        </div>
                        <div className="h-48 flex items-center justify-center relative mb-8">
                            <svg className="absolute w-64 h-32 pointer-events-none" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                                <path d="M 40 40 Q 128 40 128 64" fill="none" stroke="#E2E8F0" strokeWidth="2" strokeDasharray="6 6" className="dark:stroke-slate-700" />
                                <path d="M 40 90 Q 128 90 128 64" fill="none" stroke="#E2E8F0" strokeWidth="2" strokeDasharray="6 6" className="dark:stroke-slate-700" />
                                <path d="M 216 64 L 128 64" fill="none" stroke="#E2E8F0" strokeWidth="2" strokeDasharray="6 6" className="dark:stroke-slate-700" />
                            </svg>
                            <div className="relative z-10 w-20 h-20 rounded-full bg-gradient-to-tr from-primary to-orange-400 shadow-lg shadow-primary/30 flex items-center justify-center animate-pulse">
                                <span className="material-symbols-rounded text-white text-3xl">auto_awesome</span>
                            </div>
                            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="absolute top-10 left-12 w-12 h-12 bg-white dark:bg-slate-800 rounded-full shadow-md flex items-center justify-center p-2.5 z-20">
                                <img src="https://cdn.simpleicons.org/dropbox/0061FF" alt="Dropbox" className="w-full h-full object-contain" />
                            </motion.div>
                            <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute bottom-6 left-24 w-10 h-10 bg-white dark:bg-slate-800 rounded-full shadow-md flex items-center justify-center p-2 z-20">
                                <img src="https://cdn.simpleicons.org/googledrive" alt="Drive" className="w-full h-full object-contain" />
                            </motion.div>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Share Your Vision</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">Tell us about your project goals, target audience, and requirements through our simple onboarding process.</p>
                    </motion.div>

                    {/* Step 02 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-10 border border-slate-100 dark:border-slate-800 shadow-xl hover:shadow-2xl transition-all duration-300"
                    >
                        <div className="flex justify-between items-start mb-10">
                            <span className="text-sm font-bold text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">02</span>
                        </div>
                        <div className="h-48 flex items-center justify-center gap-6 relative mb-8">
                            <motion.div whileHover={{ scale: 1.1, rotate: -5 }} className="w-16 h-16 bg-black rounded-2xl p-3 shadow-xl transform -translate-y-4">
                                <img src="https://cdn.simpleicons.org/capcut/white" alt="CapCut" className="w-full h-full object-contain" />
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="w-20 h-20 bg-[#111] rounded-2xl p-4 shadow-2xl z-10 relative">
                                <img src="https://cdn.simpleicons.org/davinciresolve/white" alt="DaVinci" className="w-full h-full object-contain" />
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.1, rotate: -3 }} className="w-16 h-16 bg-[#2D004F] rounded-2xl p-3 shadow-xl transform translate-y-4">
                                <img src="https://cdn.simpleicons.org/adobepremierepro/9999FF" alt="Premiere" className="w-full h-full object-contain" />
                            </motion.div>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">We Build & Design</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">Our expert team designs, develops, and tests your digital solution using industry-leading tools and best practices.</p>
                    </motion.div>

                    {/* Step 03 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-10 border border-slate-100 dark:border-slate-800 shadow-xl hover:shadow-2xl transition-all duration-300"
                    >
                        <div className="flex justify-between items-start mb-10">
                            <span className="text-sm font-bold text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">03</span>
                        </div>
                        <div className="h-48 flex flex-col items-center justify-center relative mb-8">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 }}
                                className="bg-slate-100 dark:bg-slate-800 rounded-2xl rounded-tl-none px-5 py-3 shadow-sm mb-4 self-start ml-8 relative"
                            >
                                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" className="absolute -left-10 top-0 w-8 h-8 rounded-full border-2 border-white dark:border-slate-900" alt="Client" />
                                <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Requested a Revision</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.8, type: "spring" }}
                                className="bg-primary text-white rounded-2xl rounded-br-none px-6 py-3 shadow-lg shadow-primary/30 self-end mr-8 transform rotate-1"
                            >
                                <p className="text-sm font-bold flex items-center gap-2">
                                    Revision is in progress! <span className="material-symbols-rounded text-base">check_circle</span>
                                </p>
                            </motion.div>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Review & Refine</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">We present the work for your feedback and make revisions until you're completely satisfied with the result.</p>
                    </motion.div>

                    {/* Step 04 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-10 border border-slate-100 dark:border-slate-800 shadow-xl hover:shadow-2xl transition-all duration-300"
                    >
                        <div className="flex justify-between items-start mb-10">
                            <span className="text-sm font-bold text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">04</span>
                        </div>
                        <div className="h-48 flex flex-col items-center justify-center relative mb-8">
                            <motion.div whileHover={{ y: -5 }} className="bg-slate-900 text-white rounded-xl px-4 py-2 flex items-center gap-3 shadow-lg mb-4 transform -rotate-2">
                                <span className="material-symbols-rounded text-orange-400">movie</span>
                                <div className="flex flex-col">
                                    <span className="text-xs font-bold">Final_Cut_v2.mp4</span>
                                    <span className="text-[10px] text-slate-400">1.2 GB • Ready to upload</span>
                                </div>
                            </motion.div>
                            <motion.div whileHover={{ y: -5 }} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2 flex items-center gap-3 shadow-sm mb-6 transform rotate-2 z-10">
                                <span className="material-symbols-rounded text-blue-500">image</span>
                                <div className="flex flex-col">
                                    <span className="text-xs font-bold text-slate-700 dark:text-slate-200">Thumbnail.png</span>
                                    <span className="text-[10px] text-slate-400">2.4 MB • High Res</span>
                                </div>
                            </motion.div>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Launch & Support</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">We deliver your final product ready to launch, with ongoing support to ensure continued success.</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Process;
