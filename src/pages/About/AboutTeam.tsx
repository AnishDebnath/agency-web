import React from 'react';
import { teamMembers } from './data';
import TeamMember from './TeamMember';

const AboutTeam: React.FC = () => {
    return (
        <div className="mb-24">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                <div>
                    <span className="text-primary font-bold tracking-widest uppercase text-xs mb-2 block">Our Team</span>
                    <h2 className="text-4xl font-bold font-display text-slate-900 dark:text-white">Meet the creative minds</h2>
                </div>
                <button className="px-6 py-3 rounded-full border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors font-bold text-sm">Join our team</button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {teamMembers.map((member, i) => (
                    <TeamMember key={i} member={member} delay={i * 0.1} />
                ))}
            </div>
        </div>
    );
};

export default AboutTeam;
