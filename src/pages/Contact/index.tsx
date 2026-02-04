import React from 'react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import { FAQ } from '../../components';

const ContactPage: React.FC = () => {
    return (
        <div className="flex flex-col">
            {/* Contact Section */}
            <div className="relative min-h-[85vh] flex items-center justify-center py-20 lg:py-32 overflow-hidden">
                {/* Background elements to fill space */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                    <div className="absolute top-[10%] -left-[5%] w-[30%] h-[30%] bg-primary/5 rounded-full blur-[120px] animate-blob" />
                    <div className="absolute bottom-[10%] -right-[5%] w-[30%] h-[30%] bg-blue-500/5 rounded-full blur-[120px] animate-blob animation-delay-2000" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                        <div className="lg:sticky lg:top-32">
                            <ContactInfo />
                        </div>
                        <div className="relative h-full flex flex-col justify-center">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="pb-24">
                <FAQ />
            </div>
        </div>
    );
};

export default ContactPage;
