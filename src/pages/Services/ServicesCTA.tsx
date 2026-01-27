import React from 'react';
import { Link } from 'react-router-dom';

const ServicesCTA: React.FC = () => {
    return (
        <div className="bg-[#111] rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-50"></div>
            <div className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-display font-extrabold text-white mb-8">Ready to get started?</h2>
                <p className="text-slate-400 text-xl max-w-2xl mx-auto mb-10">Stop wasting time editing. Start creating. Join 300+ creators scaling with CreatorFlow.</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link to="/contact" className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform w-full sm:w-auto">Book a Call</Link>
                    <Link to="/contact" className="bg-transparent border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors w-full sm:w-auto">Contact Sales</Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesCTA;
