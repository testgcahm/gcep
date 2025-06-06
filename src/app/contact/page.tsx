'use client';

import InstagramIcon, { FacebookIcon } from '@/components/socialIcons';
import React, { useState } from 'react';

const GOOGLE_FORM_URL = process.env.NEXT_PUBLIC_GOOGLE_FORM_URL;
const ENTRY_NAME = "entry.1110094383";
const ENTRY_EMAIL = "entry.2010322907";
const ENTRY_MESSAGE = "entry.1535441801";

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({ name: false, email: false, message: false });
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: false });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        let newErrors = {
            name: formData.name.trim() === '',
            email: formData.email.trim() === '' || !/\S+@\S+\.\S+/.test(formData.email),
            message: formData.message.trim() === '',
        };

        if (Object.values(newErrors).some((error) => error)) {
            setErrors(newErrors);
            setLoading(false);
            return;
        }

        const formUrl = `${GOOGLE_FORM_URL}?${ENTRY_NAME}=${encodeURIComponent(formData.name)}&${ENTRY_EMAIL}=${encodeURIComponent(formData.email)}&${ENTRY_MESSAGE}=${encodeURIComponent(formData.message)}`;

        try {
            await fetch(formUrl, {
                mode: 'no-cors',
                method: 'POST',
            });
            setSuccessMessage('Message sent successfully!');
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setSuccessMessage(null), 3000);
        } catch (error) {
            console.error('Error submitting form:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="p-6 min-h-screen flex flex-col items-center justify-center bg-white">
            <h2 className="text-3xl font-bold text-primary mb-6 text-center">Contact Us</h2>
            <p className="text-primary text-center max-w-2xl mx-auto font-semibold mb-6">
                Have questions or want to reach out? Contact us through the form below or connect with us on social media.
            </p>
            <div className="flex justify-center space-x-6 mb-3">
                <a href="https://www.instagram.com/gcep2017?igsh=YWMzaTExb2x0b3M4" target="_blank" className="cursor-pointer text-pink-600 hover:text-pink-400 transition">
                    <InstagramIcon />
                </a>
                <a href="https://www.facebook.com/share/1C2rexJsqY/" target="_blank" className="cursor-pointer text-blue-600 hover:text-blue-400 transition">
                    <FacebookIcon />
                </a>
            </div>
            <div className="bg-white shadow-tertiary p-8 rounded-lg max-w-lg w-full">
                {successMessage && <p className="text-green-600 text-center mb-4 font-semibold">{successMessage}</p>}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-primary font-semibold mb-1">Name</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} className={`w-full p-3 border rounded-lg focus:outline-none ${errors.name ? 'border-red-500' : 'border-gray-300'}`} placeholder="Enter your name" required />
                        {errors.name && <p className="text-red-500 text-sm mt-1">Name is required.</p>}
                    </div>
                    <div>
                        <label className="block text-primary font-semibold mb-1">Email</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} className={`w-full p-3 border rounded-lg focus:outline-none ${errors.email ? 'border-red-500' : 'border-gray-300'}`} placeholder="Enter your email" required />
                        {errors.email && <p className="text-red-500 text-sm mt-1">Valid email is required.</p>}
                    </div>
                    <div>
                        <label className="block text-primary font-semibold mb-1">Message</label>
                        <textarea name="message" value={formData.message} onChange={handleChange} className={`w-full p-3 border rounded-lg focus:outline-none ${errors.message ? 'border-red-500' : 'border-gray-300'}`} placeholder="Write your message..." rows={4} required />
                        {errors.message && <p className="text-red-500 text-sm mt-1">Message is required.</p>}
                    </div>
                    <button type="submit" className="w-full bg-primary cursor-pointer text-white py-3 rounded-lg hover:bg-secondary transition duration-300" disabled={loading}>
                        {loading ? <span className="animate-spin border-4 border-white border-t-transparent rounded-full w-6 h-6 inline-block"></span> : 'Send Message'}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
