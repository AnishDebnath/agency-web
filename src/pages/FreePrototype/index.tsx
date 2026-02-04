import React, { useState, useEffect } from 'react';
import { motion, animate } from 'framer-motion';
import PrototypeForm from './PrototypeForm';
import { Process, OurSolution, FAQ } from '../../components';

const CountUp: React.FC<{ val: number }> = ({ val }) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        const controls = animate(0, val, {
            duration: 2,
            ease: "easeOut",
            onUpdate: (value) => setCount(Math.floor(value)),
        });
        return () => controls.stop();
    }, [val]);
    return <>{count.toLocaleString()}</>;
};

const FreePrototypePage: React.FC = () => {
    const [isAvatarHovered, setIsAvatarHovered] = useState(false);
    return (
        <div className="flex flex-col">
            <div className="relative min-h-[90vh] flex items-center justify-center py-20 lg:py-32 overflow-hidden">
                {/* Background elements to fill space */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                    <div className="absolute top-[10%] -left-[5%] w-[30%] h-[30%] bg-primary/5 rounded-full blur-[120px] animate-blob" />
                    <div className="absolute bottom-[10%] -right-[5%] w-[30%] h-[30%] bg-purple-500/5 rounded-full blur-[120px] animate-blob animation-delay-2000" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                        {/* Info Section */}
                        <div className="lg:sticky lg:top-32">
                            <div className="flex flex-col gap-4 mb-8">
                                {/* Available for New Projects Badge */}
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                    className="flex justify-start"
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

                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    whileHover={{ scale: 1.02 }}
                                    className="relative flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full shadow-lg shadow-orange-500/30 transition-all duration-300 w-fit cursor-default"
                                >
                                    <span className="material-symbols-rounded text-white text-[18px] drop-shadow-sm">timer</span>
                                    <span className="text-xs font-bold text-white tracking-widest uppercase drop-shadow-sm">Limited Time Offer</span>
                                </motion.div>
                            </div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-5xl md:text-7xl font-display font-extrabold text-slate-900 dark:text-white mb-8 leading-[1.3] tracking-tight"
                            >
                                See It Before <br />
                                <span className="flex flex-wrap items-center gap-x-4 gap-y-2">
                                    <motion.span
                                        initial={{ width: 0, opacity: 0 }}
                                        animate={{ width: 'auto', opacity: 1 }}
                                        transition={{ delay: 0.4, duration: 0.6 }}
                                        className="relative inline-flex h-11 w-20 md:h-16 md:w-32 rounded-3xl overflow-hidden items-center justify-center bg-orange-100 align-middle shadow-xl shrink-0 -mt-2"
                                    >
                                        <img src="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=300&q=80" className="w-full h-full object-cover" alt="Design Prototype" />
                                        <div className="absolute inset-0 ring-1 ring-inset ring-black/10" />
                                    </motion.span>
                                    You <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-500 to-orange-600 py-2">Sign.</span>
                                </span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="text-xl text-slate-500 dark:text-slate-400 mb-12 leading-relaxed max-w-xl"
                            >
                                We're so confident in our design skills that we'll design a high-fidelity prototype of your new website for <strong className="text-slate-900 dark:text-white underline decoration-primary/30 decoration-4 underline-offset-4">free</strong>. No strings attached.
                            </motion.p>

                            <div className="space-y-8">
                                {[
                                    { title: "Review Your Strategy", desc: "In-depth competitor and site analysis.", icon: "analytics", color: "blue" },
                                    { title: "Visual Prototype", desc: "Custom high-fidelity homepage concept.", icon: "palette", color: "orange" },
                                    { title: "Risk-Free Decision", desc: "100% free with no strings attached.", icon: "verified", color: "blue" }
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.3 + (i * 0.1) }}
                                        className="flex items-center gap-4 group"
                                    >
                                        <div className={`w-11 h-11 rounded-full flex items-center justify-center transition-transform group-hover:scale-110 ${item.color === 'blue'
                                            ? 'bg-blue-100/50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                                            : 'bg-orange-100/50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400'
                                            }`}>
                                            <span className="material-symbols-rounded text-[22px]">{item.icon}</span>
                                        </div>
                                        <div>
                                            <h3 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-0.5">{item.title}</h3>
                                            <p className="text-lg font-bold text-slate-900 dark:text-white leading-tight">{item.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Trusted Badge */}
                            <motion.div
                                initial="hidden"
                                animate="show"
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    show: { opacity: 1, y: 0, transition: { delay: 0.6, duration: 0.6 } }
                                }}
                                className="flex flex-col sm:flex-row items-center justify-start gap-4 mt-10 pt-10 border-t border-slate-300 dark:border-slate-600"
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
                                            animate={{
                                                marginLeft: i === 0 ? 0 : (isAvatarHovered ? -6 : -20),
                                                zIndex: i,
                                            }}
                                            className="relative rounded-full border-[4px] border-[#FAFAFA] dark:border-slate-900 overflow-hidden w-12 h-12 shadow-sm"
                                        >
                                            <img className="w-full h-full object-cover" src={src} alt="Client" />
                                        </motion.div>
                                    ))}
                                </div>
                                <div>
                                    <div className="flex gap-1 mb-1">
                                        {[1, 2, 3, 4, 5].map((_, i) => (
                                            <span key={i} className="material-symbols-rounded text-[#FFC107] text-[16px]">star</span>
                                        ))}
                                    </div>
                                    <p className="text-sm font-bold text-slate-700 dark:text-slate-300">
                                        Trusted by <CountUp val={100} />+ clients
                                    </p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Form Section */}
                        <div className="relative h-full flex flex-col justify-center">
                            {/* Blob behind form */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary/10 to-purple-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
                            <PrototypeForm />
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="pb-24">
                <Process />
                <OurSolution />
                <FAQ />
            </div>
        </div>
    );
};

export default FreePrototypePage;
