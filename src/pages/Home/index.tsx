import React, { useState, useEffect } from 'react';
import Hero from './Hero';
import Carousel from './Carousel';
import Marquee from './Marquee';
import About from './About';
import WhyChooseUs from './WhyChooseUs';
import Services from './Services';
import Process from './Process';
import Testimonials from './Testimonials';
import FAQ from './FAQ';
import Blog from './Blog';
import MarqueeWork from './MarqueeWork';
import CTA from './CTA';

const Home: React.FC = () => {
    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="overflow-x-hidden bg-[#FAFAFA] dark:bg-background-dark transition-colors duration-500">
            <Hero />
            <Carousel windowWidth={windowWidth} />
            <Marquee />
            <About />
            <WhyChooseUs />
            <Services />
            <Process />
            <Testimonials />
            <FAQ />
            <Blog />
            <MarqueeWork />
            <CTA />
        </div>
    );
};

export default Home;
