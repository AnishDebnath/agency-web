import React from 'react';
import { motion } from 'framer-motion';

const WhyChooseUs: React.FC = () => {
    return (
        <section className="py-24 bg-transparent relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
                    backgroundSize: '24px 24px'
                }}>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block mb-6 px-4 py-1.5 rounded-full border border-dashed border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm"
                    >
                        <span className="text-primary font-bold tracking-widest uppercase text-xs">✦ Why Choose Us</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-display font-extrabold mt-4 mb-6 text-slate-900 dark:text-white"
                    >
                        Why everyone loves CreatorFlow
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-slate-500 dark:text-slate-400"
                    >
                        There’s a reason studios keep choosing CreatorFlow, it just gets what you need to stand out and make an impact.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1: Bold and purposeful */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col group bg-white dark:bg-slate-900 rounded-[2.5rem] p-4 shadow-xl border border-slate-100 dark:border-slate-800 hover:shadow-2xl transition-all duration-300"
                    >
                        <div className="bg-slate-50 dark:bg-slate-900 rounded-[2.5rem] h-[320px] mb-8 relative overflow-hidden flex items-center justify-center p-8 border border-slate-100 dark:border-slate-800">
                            <div className="grid grid-cols-3 gap-6 opacity-30 absolute inset-0 p-8 place-content-center">
                                {[...Array(9)].map((_, i) => (
                                    <div key={i} className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-700 mx-auto"></div>
                                ))}
                            </div>
                            <motion.div
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                className="w-24 h-24 bg-gradient-to-br from-primary to-orange-600 rounded-2xl shadow-2xl shadow-primary/40 relative z-10 flex items-center justify-center text-white"
                            >
                                <span className="material-symbols-rounded text-5xl">movie</span>
                            </motion.div>
                        </div>
                        <div className="px-2 pb-4">
                            <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">Bold and purposeful</h3>
                            <p className="text-slate-500 text-sm leading-relaxed">Our edits make a statement, every cut, sound effect, and transition chosen with intention to keep viewers hooked.</p>
                        </div>
                    </motion.div>

                    {/* Card 2: Easy to customize */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col group bg-white dark:bg-slate-900 rounded-[2.5rem] p-4 shadow-xl border border-slate-100 dark:border-slate-800 hover:shadow-2xl transition-all duration-300"
                    >
                        <div className="bg-[#0A0A0A] rounded-[2.5rem] h-[320px] mb-8 relative overflow-hidden border border-slate-800 flex select-none">
                            <div className="hidden sm:flex w-16 h-full border-r border-white/10 flex-col p-3 gap-3 shrink-0">
                                <div className="flex gap-1.5 mb-2">
                                    <div className="w-2 h-2 rounded-full bg-red-500/80"></div>
                                    <div className="w-2 h-2 rounded-full bg-yellow-500/80"></div>
                                    <div className="w-2 h-2 rounded-full bg-green-500/80"></div>
                                </div>
                                {[1, 2, 3, 4, 5, 6].map((_, i) => (
                                    <div key={i} className="flex items-center gap-1.5 opacity-40">
                                        <span className="material-symbols-rounded text-[8px] text-white">folder</span>
                                        <div className="h-1 bg-white rounded-full w-full"></div>
                                    </div>
                                ))}
                            </div>
                            <div className="flex-1 bg-[#111] relative flex items-center justify-center p-4 sm:p-8 overflow-hidden">
                                <div className="w-full max-w-[220px] aspect-[3/4] bg-white rounded-md shadow-2xl overflow-hidden relative origin-top transform group-hover:scale-[1.02] transition-transform duration-500">
                                    <div className="h-6 border-b border-slate-100 flex items-center justify-between px-2">
                                        <div className="flex items-center gap-1">
                                            <div className="w-3 h-3 bg-slate-900 rounded-sm"></div>
                                            <div className="w-8 h-1 bg-slate-200 rounded-full"></div>
                                        </div>
                                    </div>
                                    <div className="p-4 flex flex-col items-center text-center mt-2">
                                        <div className="px-1.5 py-0.5 bg-[#FFD54F] rounded text-[5px] font-bold tracking-wider mb-2">EDITING</div>
                                        <h4 className="text-[9px] font-bold text-slate-900 leading-tight mb-2">Video Editor crafting <br /> viral social content</h4>
                                        <div className="flex items-center gap-2 mb-4">
                                            <div className="px-2 py-1 bg-black text-white text-[5px] font-bold rounded">Get Quote</div>
                                        </div>
                                        <div className="relative w-20 h-24 mt-1">
                                            <div className="w-full h-full rounded-md overflow-hidden bg-slate-100">
                                                <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&q=80" className="w-full h-full object-cover grayscale-[20%]" alt="Portrait" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="px-2 pb-4">
                            <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">Easy to customize</h3>
                            <p className="text-slate-500 text-sm leading-relaxed">We tailor every project to fit your needs, style, and vision, ensuring your space feels uniquely yours from start to finish.</p>
                        </div>
                    </motion.div>

                    {/* Card 3: Fast delivery time */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="flex flex-col group bg-white dark:bg-slate-900 rounded-[2.5rem] p-4 shadow-xl border border-slate-100 dark:border-slate-800 hover:shadow-2xl transition-all duration-300"
                    >
                        <div className="bg-slate-50 dark:bg-slate-900 rounded-[2.5rem] h-[320px] mb-8 relative overflow-hidden flex items-center justify-center gap-3 md:gap-4 px-4 md:px-8 border border-slate-100 dark:border-slate-800">
                            {[
                                { d: '02', l: 'Raw Footage' },
                                { d: '06', l: 'Assembly' },
                                { d: '24', l: 'Final Cut', highlight: true }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -5 }}
                                    className="bg-white dark:bg-slate-900 p-2 md:p-2.5 rounded-2xl shadow-md border border-slate-100 dark:border-slate-800 w-[28%] min-w-[90px] md:w-28 aspect-[3/4] flex flex-col"
                                >
                                    <div className={`
                                flex-1 flex items-center justify-center rounded-xl mb-1
                                ${item.highlight
                                            ? 'bg-gradient-to-br from-green-400 to-green-600 text-white shadow-inner'
                                            : 'bg-transparent text-slate-900 dark:text-white'}
                             `}>
                                        <span className="text-4xl font-bold tracking-tight">{item.d}</span>
                                    </div>
                                    <div className="text-center py-2">
                                        <div className={`text-xs font-medium ${item.highlight ? 'text-slate-900 dark:text-white font-bold' : 'text-slate-400'}`}>{item.l}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                        <div className="px-2 pb-4">
                            <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">Fast delivery time</h3>
                            <p className="text-slate-500 text-sm leading-relaxed">We work efficiently without compromising quality, ensuring your project is delivered on time and with care.</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
