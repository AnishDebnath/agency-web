import React from 'react';
import { motion } from 'framer-motion';
import { services } from './data';

const Services: React.FC = () => {
    return (
        <section className="py-32 bg-transparent relative overflow-hidden" id="services">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 dark:bg-orange-900/10 border border-orange-100 dark:border-orange-900/20 text-primary text-xs font-bold uppercase tracking-widest mb-6"
                    >
                        <span className="w-2 h-2 rounded-full bg-primary"></span>
                        Services
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight"
                    >
                        What We Do Best
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-slate-500 dark:text-slate-400 leading-relaxed"
                    >
                        We craft scroll-stopping edits that keep your audience hooked and your content looking top-tier.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="group relative overflow-hidden rounded-[2.5rem] bg-[#0A0A0A] p-8 md:p-12 flex flex-col justify-between min-h-[420px] shadow-2xl border border-white/5"
                        >
                            <div className="absolute inset-0 opacity-30 pointer-events-none"
                                style={{
                                    backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)",
                                    backgroundSize: "48px 48px"
                                }}>
                            </div>
                            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                            <div className="relative z-10">
                                <h3 className="text-3xl font-bold text-white mb-4 font-display">{service.title}</h3>
                                <p className="text-slate-400 text-lg leading-relaxed">{service.desc}</p>
                            </div>

                            <div className="relative z-10 flex flex-wrap gap-3 mt-12">
                                {service.tags.map((tag, i) => (
                                    <div key={i} className="flex items-center gap-2 bg-[#1A1A1A] border border-white/10 rounded-full px-5 py-2.5 text-white text-xs font-bold uppercase tracking-wider group-hover:border-primary/30 transition-colors">
                                        <span className="material-symbols-rounded text-primary text-base">{tag.icon}</span>
                                        {tag.text}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
