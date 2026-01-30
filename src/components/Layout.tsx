import React, { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import CTA from './CTA';
import PageBackground from './PageBackground';
import Footer from './Footer/Footer';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const location = useLocation();

    return (
        <div className="relative min-h-screen bg-[#FAFAFA] dark:bg-background-dark transition-colors duration-500 flex flex-col">
            <PageBackground pathname={location.pathname} />

            <div className="relative z-10 flex flex-col flex-grow">
                <main className="flex-grow">
                    {children}
                </main>
                <CTA />
                <Footer />
            </div>
        </div>
    );
};

export default Layout;
