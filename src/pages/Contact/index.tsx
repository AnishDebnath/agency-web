import React from 'react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

const ContactPage: React.FC = () => {
    return (
        <div className="max-w-7xl mx-auto pt-32 pb-24 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                <ContactInfo />
                <ContactForm />
            </div>
        </div>
    );
};

export default ContactPage;
