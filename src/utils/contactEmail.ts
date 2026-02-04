import emailjs from '@emailjs/browser';

export const sendContactEmail = (formData: {
    fullName: string;
    email: string;
    phone: string;
    purpose: string;
    message: string;
}) => {
    // Replace these with your actual EmailJS credentials
    const SERVICE_ID = 'YOUR_SERVICE_ID';
    const TEMPLATE_ID = 'YOUR_CONTACT_TEMPLATE_ID';
    const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

    return emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
            from_name: formData.fullName,
            from_email: formData.email,
            phone_no: formData.phone,
            contact_purpose: formData.purpose,
            message_details: formData.message,
            to_name: 'Agency Team',
        },
        PUBLIC_KEY
    );
};
