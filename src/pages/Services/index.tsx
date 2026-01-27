import React from 'react';
import { servicesList } from './data';
import ServiceCard from './ServiceCard';
import ServicesHeader from './ServicesHeader';
import ServicesCTA from './ServicesCTA';

const ServicesPage: React.FC = () => {
    return (
        <div className="bg-[#FAFAFA] dark:bg-background-dark min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <ServicesHeader />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
                    {servicesList.map((service, i) => (
                        <ServiceCard key={i} service={service} delay={i * 0.1} />
                    ))}
                </div>

                <ServicesCTA />
            </div>
        </div>
    );
};

export default ServicesPage;
