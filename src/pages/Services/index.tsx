import React from 'react';
import { servicesList } from './data';
import ServiceItem from './ServiceItem';
import ServicesHeader from './ServicesHeader';
import FAQ from '../Home/FAQ';

const ServicesPage: React.FC = () => {
    return (
        <div className="max-w-7xl mx-auto pt-32 pb-24 px-4 sm:px-6 lg:px-8">
            <ServicesHeader />

            <div className="flex flex-col mb-24">
                {servicesList.map((service, i) => (
                    <ServiceItem key={i} service={service} index={i} />
                ))}
            </div>
            <FAQ />
        </div>
    );
};

export default ServicesPage;
