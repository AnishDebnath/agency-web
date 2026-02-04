import emailjs from '@emailjs/browser';

export const sendPrototypeEmail = (formData: {
    fullName: string;
    email: string;
    phone: string;
    projectType: string;
    website?: string;
    description: string;
}) => {
    // Replace these with your actual EmailJS credentials
    const SERVICE_ID = 'YOUR_SERVICE_ID';
    const TEMPLATE_ID = 'YOUR_PROTOTYPE_TEMPLATE_ID';
    const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

    return emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
            from_name: formData.fullName,
            from_email: formData.email,
            phone_no: formData.phone,
            project_type: formData.projectType,
            current_website: formData.website || 'Not provided',
            project_description: formData.description,
            to_name: 'Agency Team',
        },
        PUBLIC_KEY
    );
};
