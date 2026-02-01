import React from 'react';
import { motion } from 'framer-motion';
import { teamMembers } from './data';
import TeamMember from './TeamMember';

const AboutTeam: React.FC = () => {
    return (
        <div className="mb-24 lg:mb-32">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-20 gap-8">
                <div className="max-w-2xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block mb-4 px-4 py-1.5 rounded-full border border-dashed border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm"
                    >
                        <span className="text-primary font-bold tracking-widest uppercase text-xs flex items-center gap-2">
                            <span className="material-symbols-rounded text-sm">groups</span> Our Culture
                        </span>
                    </motion.div>
                    <h2 className="text-4xl md:text-6xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
                        Meet the <span className="text-primary italic">creative</span> minds.
                    </h2>
                </div>
                {/* <motion.button
                    whileHover={{ scale: 1.05 }}
                    active={{ scale: 0.95 }}
                    className="px-8 py-4 rounded-full bg-[#111] dark:bg-white text-white dark:text-[#111] font-bold text-sm uppercase tracking-widest transition-all shadow-xl hover:shadow-primary/20"
                >
                    Join our team
                </motion.button> */}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
                {teamMembers.map((member, i) => (
                    <TeamMember key={i} member={member} delay={i * 0.1} />
                ))}
            </div>
        </div>
    );
};

export default AboutTeam;
