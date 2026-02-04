import React from 'react';
const servicesList = [
    {
        title: "Long-Form Editing",
        description: "Documentaries, Vlogs, Educational Content, Podcasts. We handle multi-cam syncing, sound design, and storytelling cuts to keep your audience engaged from start to finish.",
        image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=1000",
        tags: ["4k Rendering", "Sound Mixing", "Motion Graphics"]
    },
    {
        title: "Short-Form Content",
        description: "TikToks, Reels, YouTube Shorts. High-energy edits designed to stop the scroll and maximize retention with trending audio and visual hooks.",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1000",
        tags: ["Captioning", "Visual Hooks", "Fast Turnaround"]
    },
    {
        title: "Channel Strategy",
        description: "Not just edits, but growth. We analyze your analytics and help plan content calendars and topics that your audience actually wants to watch.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
        tags: ["Analytics", "Topic Research", "A/B Testing"]
    },
    {
        title: "Thumbnail Design",
        description: "The most important part of your video. We design high-CTR thumbnails that scream 'click me' without being clickbait, using psychology-based principles.",
        image: "https://images.unsplash.com/photo-1626785774583-b756dfe96564?auto=format&fit=crop&q=80&w=1000",
        tags: ["3 Variations", "High Res", "Brand Consistent"]
    }
];
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
