import React, { useState, useEffect } from 'react';
import { motion, animate } from 'framer-motion';

const contactInfo = [
    {
        title: "Email Us",
        value: "ajoy.sayhello@gmail.com",
        icon: "mail",
        color: "blue"
    },
    {
        title: "Call Us",
        value: "+44 (0) 20 7946 0123",
        icon: "call",
        color: "blue"
    },
    {
        title: "Visit Us",
        value: "123 Creator Lane, London, UK",
        icon: "location_on",
        color: "orange"
    }
];

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

const ContactInfo: React.FC = () => {
    const [isAvatarHovered, setIsAvatarHovered] = useState(false);
    return (
        <div>
            {/* Available for New Projects Badge */}
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex justify-start mb-6"
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

            <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block"
            >
                Contact Us
            </motion.span>
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-6xl font-display font-extrabold text-slate-900 dark:text-white mb-8 leading-tight"
            >
                Let's start a <br />
                <span className="flex items-center gap-3">
                    <motion.span
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: 'auto', opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="relative inline-flex h-12 w-20 md:h-14 md:w-28 rounded-full overflow-hidden items-center justify-center bg-orange-100 align-middle shadow-inner shrink-0"
                    >
                        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=300&q=80" className="w-full h-full object-cover opacity-90" alt="Collaboration" />
                    </motion.span>
                    conversation.
                </span>
            </motion.h1>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-slate-500 dark:text-slate-400 mb-10 leading-relaxed max-w-xl"
            >
                Ready to take your content to the next level? Fill out the form or send us an email, and we'll get back to you within 24 hours.
            </motion.p>

            <div className="space-y-6">
                {contactInfo.map((info, i) => (
                    <div key={i} className="flex items-center gap-4 group">
                        <div className={`w-11 h-11 rounded-full flex items-center justify-center transition-transform group-hover:scale-110 ${info.color === 'blue'
                            ? 'bg-blue-100/50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                            : 'bg-orange-100/50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400'
                            }`}>
                            <span className="material-symbols-rounded text-[22px]">{info.icon}</span>
                        </div>
                        <div>
                            <h3 className="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-0.5">{info.title}</h3>
                            <p className="text-lg font-bold text-slate-900 dark:text-white">{info.value}</p>
                        </div>
                    </div>
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
    );
};

export default ContactInfo;
