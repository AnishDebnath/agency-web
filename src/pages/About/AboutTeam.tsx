import React from 'react';
import { motion } from 'framer-motion';
import { teamMembers } from './data';
import TeamMember from './TeamMember';

const AboutTeam: React.FC = () => {
    return (
        <div className="mb-20 lg:mb-24">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-6">
                <div className="max-w-xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block mb-3 px-3 py-1 rounded-full border border-dashed border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm"
                    >
                        <span className="text-primary font-bold tracking-widest uppercase text-[10px] flex items-center gap-2">
                            <span className="material-symbols-rounded text-xs">groups</span> Our Culture
                        </span>
                    </motion.div>
                    <h2 className="text-3xl md:text-5xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                        Meet the <span className="text-primary italic">creative</span> minds.
                    </h2>
                </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                {teamMembers.map((member, i) => (
                    <TeamMember key={i} member={member} delay={i * 0.1} />
                ))}
            </div>
        </div>
    );
};

export default AboutTeam;
