import React from 'react';
import { servicesList } from './data';
import ServiceItem from './ServiceItem';
import ServicesHeader from './ServicesHeader';
import FAQ from '../Home/FAQ';
import Process from '../Home/Process';
import WhyChooseUs from '../Home/WhyChooseUs';

const ServicesPage: React.FC = () => {
    return (
        <div className="max-w-7xl mx-auto pt-32 pb-24 px-4 sm:px-6 lg:px-8">
            <ServicesHeader />

            <div className="flex flex-col mb-24">
                {servicesList.map((service, i) => (
                    <ServiceItem key={i} service={service} index={i} />
                ))}
            </div>

            <WhyChooseUs />
            <Process />
            <FAQ />
        </div>
    );
};

export default ServicesPage;
