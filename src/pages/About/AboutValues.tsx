import React from 'react';
import { values } from './data';
import ValueCard from './ValueCard';

const AboutValues: React.FC = () => {
    return (
        <div className="mb-24">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold font-display text-slate-900 dark:text-white">Our Values</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((val, i) => (
                    <ValueCard key={i} value={val} delay={i * 0.1} />
                ))}
            </div>
        </div>
    );
};

export default AboutValues;
