import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
};

const About: React.FC = () => {
    return (
        <section className="py-24 md:py-32 relative overflow-hidden" id="about">
            {/* Background Decorations */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="inline-block mb-8 px-4 py-1.5 rounded-full border border-dashed border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm"
                >
                    <span className="text-primary font-bold tracking-widest uppercase text-xs flex items-center gap-2">
                        <span className="material-symbols-rounded text-sm">info</span> The Agency
                    </span>
                </motion.div>

                {/* Headline with Image Pill */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-tighter leading-[1.05] text-[#111] dark:text-white mb-10"
                >
                    <div className="flex flex-wrap justify-center items-center gap-x-4 md:gap-x-6">
                        <span>Creative</span>
                        <motion.span
                            whileHover={{ scale: 1.05, rotate: 2 }}
                            className="relative inline-flex w-20 h-12 md:w-32 md:h-16 lg:w-40 lg:h-20 rounded-full overflow-hidden items-center justify-center bg-blue-100 align-middle shadow-inner"
                        >
                            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=300&q=80" className="w-full h-full object-cover opacity-90" alt="Team" />
                        </motion.span>
                        <span>Partners</span>
                    </div>
                    <div className="flex flex-wrap justify-center items-center gap-x-4 md:gap-x-6">
                        <span>For High</span>
                        <span className="text-primary italic">Growth</span>
                        <span>Creators.</span>
                    </div>
                </motion.h2>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-16 leading-relaxed font-medium"
                >
                    We're not just editors; we're content architects. We help world-class creators and brands translate their vision into high-impact digital experiences that actually move the needle.
                </motion.p>

                {/* Stats Block */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-4 shadow-2xl shadow-black/5 dark:shadow-black/20 border border-slate-200 dark:border-white/10"
                >
                    {[
                        { count: '1,200+', label: 'Videos Delivered', icon: 'edit_square' },
                        { count: '300+', label: 'Creators Served', icon: 'groups' },
                        { count: '450M+', label: 'Total Views', icon: 'visibility' },
                    ].map((stat, idx) => (
                        <div
                            key={idx}
                            className={`flex flex-col items-center justify-center py-8 md:py-12 px-6 ${idx !== 2 ? 'md:border-r border-slate-200 dark:border-white/5' : ''
                                } group hover:bg-slate-50 dark:hover:bg-white/5 transition-colors duration-500 first:rounded-l-[2rem] last:rounded-r-[2rem]`}
                        >
                            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                                <span className="material-symbols-rounded">{stat.icon}</span>
                            </div>
                            <div className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-2 font-display tracking-tight group-hover:text-primary transition-colors">
                                {stat.count}
                            </div>
                            <div className="text-slate-500 dark:text-slate-400 font-bold text-[10px] uppercase tracking-[0.2em]">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default About;
