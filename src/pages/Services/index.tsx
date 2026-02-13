import React from 'react';
const servicesList = [
    {
        title: "Website Templates",
        description: "Ready-to-launch website templates for various industries. Fully responsive, SEO-optimized, and easy to customize. Perfect for businesses that need a professional online presence quickly and affordably.",
        image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=1000",
        tags: ["Responsive Design", "SEO Ready", "Easy Customization"]
    },
    {
        title: "Custom Website Development",
        description: "Bespoke websites tailored to your unique business needs. From landing pages to complex web applications, we build digital experiences that convert visitors into customers.",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1000",
        tags: ["Custom Design", "Performance Optimized", "Scalable Architecture"]
    },
    {
        title: "Social Media Management",
        description: "Comprehensive social media services including strategy, content creation, and community management. We help you build a strong brand presence across all major platforms.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
        tags: ["Content Strategy", "Analytics", "Multi-Platform"]
    },
    {
        title: "SaaS Product Development",
        description: "End-to-end SaaS development from concept to launch. We build scalable, cloud-based software solutions that solve real problems and generate recurring revenue for your business.",
        image: "https://images.unsplash.com/photo-1626785774583-b756dfe96564?auto=format&fit=crop&q=80&w=1000",
        tags: ["MVP Development", "Cloud Infrastructure", "Ongoing Support"]
    }
];
import ServiceItem from './ServiceItem';
import ServicesHeader from './ServicesHeader';
import { FAQ, Process, WhyChooseUs, CTA } from '../../components';

const ServicesPage: React.FC = () => {
    return (
        <div className="pt-25 pb-0 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ServicesHeader />

                <div className="flex flex-col mb-16">
                    {servicesList.map((service, i) => (
                        <ServiceItem key={i} service={service} index={i} />
                    ))}
                </div>
            </div>

            <WhyChooseUs />
            <Process />
            <FAQ />
            <CTA />
        </div>
    );
};

export default ServicesPage;
