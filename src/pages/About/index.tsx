import React from 'react';
import AboutHeader from './AboutHeader';
import AboutHeroImage from './AboutHeroImage';
import AboutValues from './AboutValues';
import AboutTeam from './AboutTeam';

const AboutPage: React.FC = () => {
    return (
        <div className="bg-[#FAFAFA] dark:bg-background-dark min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <AboutHeader />
                <AboutHeroImage />
                <AboutValues />
                <AboutTeam />
            </div>
        </div>
    );
};

export default AboutPage;
