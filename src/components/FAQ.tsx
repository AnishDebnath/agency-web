import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
const homeFaqs = [
    {
        q: "What services do you offer?",
        a: "We offer website templates, custom website development, social media management, and SaaS product development. Each service is tailored to meet your specific business needs and goals."
    },
    {
        q: "How long does a typical project take?",
        a: "Website templates are available immediately. Custom websites typically take 2-4 weeks, while SaaS products take 8-12 weeks depending on complexity. We'll provide a detailed timeline during our initial consultation."
    },
    {
        q: "What technologies do you use?",
        a: "We use modern, industry-standard technologies including React, Next.js, Node.js, and cloud platforms like AWS. We choose the best tech stack for each project based on your specific requirements."
    },
    {
        q: "Do you provide ongoing support after launch?",
        a: "Yes! We offer maintenance packages and ongoing support for all our projects. This includes updates, bug fixes, and technical assistance to ensure your digital solution continues to perform optimally."
    },
    {
        q: "Can you help with existing projects?",
        a: "Absolutely. We can take over existing projects, provide audits, optimize performance, or add new features. We'll assess your current setup and provide recommendations."
    },
    {
        q: "What makes your agency different?",
        a: "We combine technical expertise with strategic thinking. Every project is approached with your business goals in mind, ensuring we deliver solutions that not only look great but drive real results."
    }
];

const FAQ: React.FC = () => {
    const [openFAQ, setOpenFAQ] = useState<number | null>(0);

    return (
        <section className="py-24 bg-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-24">
                    {/* Left Column - Text */}
                    <div className="lg:col-span-5">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-block mb-6 px-4 py-1.5 rounded-full border border-dashed border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm"
                        >
                            <span className="text-primary font-bold tracking-widest uppercase text-xs">✦ FAQ</span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-display font-extrabold text-slate-900 dark:text-white mb-6 leading-[1.1]"
                        >
                            Got Questions?<br />
                            We Got Answers
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed max-w-md"
                        >
                            Straightforward, no-fluff answers to help you feel confident about working with us.
                        </motion.p>
                    </div>

                    {/* Right Column - Accordion */}
                    <div className="lg:col-span-7 flex flex-col gap-4">
                        {homeFaqs.map((faq, index) => {
                            const isOpen = openFAQ === index;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`rounded-[2rem] transition-all duration-300 border border-slate-100 dark:border-slate-800 shadow-lg hover:shadow-xl ${isOpen ? 'bg-white dark:bg-slate-900 p-6 md:p-8 lg:p-7 xl:p-8' : 'bg-white/80 dark:bg-slate-900/50 px-6 py-5 md:px-8 hover:bg-white dark:hover:bg-slate-900'}`}
                                >
                                    <button
                                        onClick={() => setOpenFAQ(isOpen ? null : index)}
                                        className="flex justify-between items-start w-full text-left gap-4"
                                    >
                                        <h4 className={`font-bold text-lg md:text-xl leading-snug ${isOpen ? 'text-slate-900 dark:text-white' : 'text-slate-800 dark:text-slate-200'}`}>
                                            {faq.q}
                                        </h4>
                                        <div className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-colors duration-300 ${isOpen ? 'border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800' : 'border-slate-200 dark:border-slate-800'}`}>
                                            <span className={`material-symbols-rounded text-xl transition-transform duration-300 ${isOpen ? 'rotate-180 text-slate-900 dark:text-white' : 'text-slate-400'}`}>
                                                expand_more
                                            </span>
                                        </div>
                                    </button>
                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0, marginTop: 0 }}
                                                animate={{ height: "auto", opacity: 1, marginTop: 24 }}
                                                exit={{ height: 0, opacity: 0, marginTop: 0 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="p-6 bg-slate-100 dark:bg-slate-800 rounded-2xl">
                                                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                                        {faq.a}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
