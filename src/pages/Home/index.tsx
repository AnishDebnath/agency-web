import React, { useState, useEffect } from 'react';
import {
    FreePrototype,
    WhyChooseUs,
    Process,
    FAQ,
    BrandShowcase,
    OurSolution
} from '../../components';
import Hero from './Hero';
import Carousel from './Carousel';
import Marquee from './Marquee';
import About from './About';
import Services from './Services';
import FeaturedWork from './FeaturedWork';
import Testimonials from './Testimonials';
import Blog from './Blog';
import MarqueeWork from './MarqueeWork';

const Home: React.FC = () => {
    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="relative z-10">
            <Hero />
            <Carousel windowWidth={windowWidth} />
            <Marquee />
            <About />
            <BrandShowcase />
            <FreePrototype />
            <WhyChooseUs />
            <Services />
            <Process />
            <FeaturedWork />
            <OurSolution />
            <Testimonials />
            <FAQ />
            <Blog />
            <MarqueeWork />
        </div>
    );
};

export default Home;
