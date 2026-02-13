import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
    {
        name: "Stephan P.",
        handle: "@steipete",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Stephan",
        text: "Tried Claw by @steipete. I tried to build my own AI assistant bots before, and I am very impressed how many hard things Claw gets right. Persistence, context...",
    },
    {
        name: "Aryeh Dubois",
        handle: "@AryehDubois",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aryeh",
        text: "It feels like I have a junior developer always ready to help. It's incredibly fast and accurate.",
    },
    {
        name: "Mark Jaquith",
        handle: "@markjaquith",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mark",
        text: "I've been saying for like six months that even if LLMs suddenly stopped improving, we could spend *years* discovering new transformative uses.",
    },
    {
        name: "Philo",
        handle: "@Philo01",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Philo",
        text: "Feels like we're living in the future.",
    },
    {
        name: "Senator NFTs",
        handle: "@Senator_NFTs",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Senator",
        text: "OpenClaw is a game changer. The potential for custom extensions is huge, and AI really speeds up the process.",
    },
    {
        name: "M. Neves",
        handle: "@mneves",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Neves",
        text: "Try @openclaw. And you can talk to it.",
    },
    {
        name: "Sarah J.",
        handle: "@sarah_dev",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
        text: "The speed at which I can iterate now is mind-blowing. Highly recommended.",
    },
    {
        name: "Alex T.",
        handle: "@alexthedev",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
        text: "This tool has completely changed my workflow. I can't imagine going back.",
    }
];

const TestimonialCard: React.FC<{ item: typeof testimonials[0] }> = ({ item }) => (
    <motion.div
        whileHover={{ scale: 1.02, translateY: -5 }}
        className="flex-shrink-0 w-[400px] h-[180px] bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-[1.5rem] p-6 mr-6 shadow-xl shadow-black/5"
    >
        <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
                <div className="flex-shrink-0 relative">
                    <img src={item.avatar} alt={item.handle} className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 object-cover border-2 border-primary/20" />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-primary rounded-full flex items-center justify-center border-2 border-white dark:border-slate-900">
                        <span className="material-symbols-rounded text-[8px] text-white">verified</span>
                    </div>
                </div>
                <div>
                    <p className="font-bold text-slate-900 dark:text-white text-sm leading-tight">{item.name}</p>
                    <p className="text-primary font-bold text-[10px] tracking-wider uppercase">{item.handle}</p>
                </div>
            </div>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed font-medium line-clamp-4">
                "{item.text}"
            </p>
        </div>
    </motion.div>
);

const WorkTestimonials: React.FC = () => {
    const row1 = [...testimonials].sort(() => Math.random() - 0.5);
    const row2 = [...testimonials].sort(() => Math.random() - 0.5);

    return (
        <section className="py-25 bg-transparent relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none -z-10" />

            <div className="mb-20 px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="inline-block mb-6 px-4 py-1.5 rounded-full border border-dashed border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm"
                >
                    <span className="text-primary font-bold tracking-widest uppercase text-xs flex items-center gap-2">
                        <span className="material-symbols-rounded text-sm">stars</span> Wall of Love
                    </span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-display font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight"
                >
                    Trusted by builders <span className="text-primary">everywhere.</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed"
                >
                    Join 100+ businesses and brands who have accelerated their growth with our premium digital solutions and strategic expertise.
                </motion.p>
            </div>

            <div className="flex flex-col gap-10 relative">
                {/* Row 1: Right to Left */}
                <div className="flex overflow-hidden relative w-full group">
                    <motion.div
                        className="flex"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 40
                        }}
                    >
                        {[...row1, ...row1].map((item, idx) => (
                            <TestimonialCard key={`r1-${idx}`} item={item} />
                        ))}
                    </motion.div>
                </div>

                {/* Row 2: Left to Right */}
                <div className="flex overflow-hidden relative w-full group">
                    <motion.div
                        className="flex"
                        animate={{ x: ["-50%", "0%"] }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 45
                        }}
                    >
                        {[...row2, ...row2].map((item, idx) => (
                            <TestimonialCard key={`r2-${idx}`} item={item} />
                        ))}
                    </motion.div>
                </div>

                {/* Gradient Mask Overlays */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#FAFAFA] dark:from-[#050505] to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#FAFAFA] dark:from-[#050505] to-transparent z-10 pointer-events-none" />
            </div>
        </section>
    );
};

export default WorkTestimonials;
