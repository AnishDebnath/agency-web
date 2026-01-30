import React from 'react';
import AboutHeader from './AboutHeader';
import AboutHeroImage from './AboutHeroImage';
import AboutValues from './AboutValues';
import AboutTeam from './AboutTeam';

const AboutPage: React.FC = () => {
    return (
        <div className="max-w-7xl mx-auto pt-32 pb-24 px-4 sm:px-6 lg:px-8">
            <AboutHeader />
            <AboutHeroImage />
            <AboutValues />
            <AboutTeam />
        </div>
    );
};

export default AboutPage;
