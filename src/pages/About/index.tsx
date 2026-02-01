import React from 'react';
import AboutHeader from './AboutHeader';
import AboutHeroImage from './AboutHeroImage';
import AboutStats from './AboutStats';
import AboutValues from './AboutValues';
import AboutTeam from './AboutTeam';

const AboutPage: React.FC = () => {
    return (
        <div className="relative pt-28 pb-20 overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-primary/[0.02] -z-10" />
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none -z-10" />
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <AboutHeader />
                <div className="max-w-5xl mx-auto">
                    <AboutHeroImage />
                    <AboutStats />
                </div>
                <AboutValues />
                <AboutTeam />
            </div>
        </div>
    );
};

export default AboutPage;
