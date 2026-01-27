import React, { useState, useEffect } from 'react';
import Hero from './Hero';
import Carousel from './Carousel';
import Marquee from './Marquee';
import About from './About';
import WhyChooseUs from './WhyChooseUs';
import Services from './Services';
import Process from './Process';
import FeaturedWork from './FeaturedWork';
import OurSolution from './OurSolution';
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
        <div className="relative overflow-x-hidden bg-[#FAFAFA] dark:bg-background-dark transition-colors duration-500">
            {/* Unified Global Background Gradients - Now scrolling with the page */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                {/* Hero / Top Blobs */}
                <div className="absolute top-[-2%] left-[-10%] w-[70%] h-[1000px] bg-primary/5 dark:bg-primary/10 rounded-full blur-[120px]"></div>
                <div className="absolute top-[5%] right-[-10%] w-[60%] h-[800px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[120px]"></div>

                {/* Middle Blobs - spread vertically */}
                <div className="absolute top-[25%] left-[-5%] w-[50%] h-[900px] bg-orange-500/5 dark:bg-orange-500/10 rounded-full blur-[120px]"></div>
                <div className="absolute top-[45%] right-[-5%] w-[55%] h-[1000px] bg-primary/5 dark:bg-primary/10 rounded-full blur-[130px]"></div>

                {/* Lower Blobs */}
                <div className="absolute top-[65%] left-[10%] w-[60%] h-[900px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[120px]"></div>
                <div className="absolute top-[85%] right-[-10%] w-[50%] h-[800px] bg-orange-500/5 dark:bg-orange-500/10 rounded-full blur-[120px]"></div>

                {/* Large central ambient light */}
                <div className="absolute top-[10%] left-[50%] translate-x-[-50%] w-[80%] h-[1500px] bg-slate-500/[0.02] dark:bg-slate-500/[0.05] rounded-full blur-[150px]"></div>
            </div>

            <div className="relative z-10">
                <Hero />
                <Carousel windowWidth={windowWidth} />
                <Marquee />
                <About />
                <WhyChooseUs />
                <Services />
                <Process />
                <FeaturedWork />
                <OurSolution />
                <Testimonials />
                <FAQ />
                <Blog />
                <MarqueeWork />
                <CTA />
            </div>
        </div>
    );
};

export default Home;
