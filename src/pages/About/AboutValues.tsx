import React from 'react';
import { motion } from 'framer-motion';

const AboutValues: React.FC = () => {
    return (
        <div className="mb-24 lg:mb-32">
            <div className="text-center mb-16 md:mb-20">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="inline-block mb-6 px-4 py-2 rounded-full border border-dashed border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm"
                >
                    <span className="text-primary font-bold tracking-widest uppercase text-xs flex items-center gap-2">
                        <span className="material-symbols-rounded text-sm">rocket_launch</span> Agency Purpose
                    </span>
                </motion.div>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight mb-6"
                >
                    Our <span className="text-primary">Mission</span> & <span className="text-primary">Vision.</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto"
                >
                    The principles that define who we are and where we're headed.
                </motion.p>
            </div>

            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto">

                {/* Mission Card - Large */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="lg:col-span-2 bg-white dark:bg-slate-900/40 backdrop-blur-xl rounded-[2rem] p-8 md:p-10 border border-slate-200/60 dark:border-white/10 shadow-xl group hover:shadow-2xl transition-all duration-500"
                >
                    <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                        <div className="flex-shrink-0">
                            <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center shadow-lg group-hover:bg-primary/10 transition-colors duration-300">
                                <span className="material-symbols-rounded text-primary text-3xl">rocket_launch</span>
                            </div>
                        </div>
                        <div className="flex-1">
                            <h3 className="text-3xl md:text-4xl font-display font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">
                                Our Mission
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                                Empowering creators to scale their impact through high-retention, conversion-focused video editing that converts viewers into fans.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Vision Card - Medium */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900/60 dark:to-slate-900/40 backdrop-blur-xl rounded-[2rem] p-8 border border-slate-200/60 dark:border-white/10 shadow-xl group hover:shadow-2xl transition-all duration-500"
                >
                    <div className="mb-6">
                        <div className="w-14 h-14 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                            <span className="material-symbols-rounded text-primary text-2xl">visibility</span>
                        </div>
                    </div>
                    <h3 className="text-2xl font-display font-extrabold text-slate-900 dark:text-white mb-3 tracking-tight">
                        Our Vision
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
                        Setting the global standard for creative post-production where every frame serves a purpose.
                    </p>
                </motion.div>

                {/* Strategy Card - Medium with Image */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="bg-white dark:bg-slate-900/40 backdrop-blur-xl rounded-[2rem] overflow-hidden border border-slate-200/60 dark:border-white/10 shadow-xl group hover:shadow-2xl transition-all duration-500"
                >
                    <div className="aspect-[4/3] bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 relative overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80"
                            alt="Strategy"
                            className="w-full h-full object-cover opacity-70 group-hover:scale-105 group-hover:opacity-80 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4">
                            <div className="w-12 h-12 bg-white/90 dark:bg-slate-900/90 rounded-xl flex items-center justify-center mb-3 shadow-lg">
                                <span className="material-symbols-rounded text-primary text-xl">auto_awesome</span>
                            </div>
                        </div>
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-display font-extrabold text-slate-900 dark:text-white mb-2 tracking-tight">
                            Our Strategy
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                            Merging human creative intuition with hyper-efficient workflows.
                        </p>
                    </div>
                </motion.div>

                {/* Culture Card - Large with Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="lg:col-span-2 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 dark:from-slate-900 dark:via-slate-950 dark:to-black rounded-[2rem] p-8 md:p-10 border border-slate-700/50 dark:border-slate-800/50 shadow-xl shadow-black/30 group hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
                >
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-[0.03]">
                        <div className="absolute inset-0" style={{
                            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
                            backgroundSize: '24px 24px'
                        }} />
                    </div>

                    {/* Subtle gradient accent */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/[0.08] blur-[120px] rounded-full pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/[0.05] blur-[120px] rounded-full pointer-events-none" />

                    <div className="relative">
                        <div className="flex items-start justify-between mb-6">
                            <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/10">
                                <span className="material-symbols-rounded text-white text-2xl">favorite</span>
                            </div>
                            <div className="flex gap-2">
                                <div className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-sm border border-white/10" />
                                <div className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-sm border border-white/10" />
                                <div className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-sm border border-white/10" />
                            </div>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-display font-extrabold text-white mb-4 tracking-tight">
                            Our Culture
                        </h3>
                        <p className="text-slate-300 text-lg leading-relaxed mb-8">
                            A results-obsessed collective of artists and strategists dedicated to the long-term success and scaling of the creators we serve.
                        </p>
                        <div className="flex gap-3 flex-wrap">
                            <div className="px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 hover:bg-white/10 transition-colors">
                                <span className="text-white text-sm font-bold">Collaboration First</span>
                            </div>
                            <div className="px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 hover:bg-white/10 transition-colors">
                                <span className="text-white text-sm font-bold">Results Driven</span>
                            </div>
                            <div className="px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 hover:bg-white/10 transition-colors">
                                <span className="text-white text-sm font-bold">Always Learning</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default AboutValues;
