import React from 'react';
import AboutHeader from './AboutHeader';
import AboutHeroImage from './AboutHeroImage';
import BrandShowcase from '../../components/BrandShowcase';
import AboutValues from './AboutValues';
import AboutStats from './AboutStats';
import AboutTeam from './AboutTeam';
import WhyChooseUs from '../Home/WhyChooseUs';
import WorkTestimonials from '../Work/WorkTestimonials';


const AboutPage: React.FC = () => {
    return (
        <div className="pt-32 pb-24 relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
                    backgroundSize: '24px 24px'
                }}>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-24">
                <AboutHeader />
                <div className="mb-24 -mx-4 sm:-mx-6 lg:-mx-8">
                    <BrandShowcase />
                </div>
                <AboutHeroImage />
                <AboutStats />
                <AboutValues />
                <AboutTeam />
                <WhyChooseUs />
                <WorkTestimonials />
            </div>


        </div>
    );
};

export default AboutPage;
