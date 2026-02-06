import React, { useState } from 'react';
import SectionContainer from './SectionContainer';
import { FiMail, FiMapPin, FiPhone, FiSend } from 'react-icons/fi';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs.send(
            "service_p3um23j",      // 🔴 replace
            "template_dzzgzfr",     // 🔴 replace
            {
                name: formData.name,
                email: formData.email,
                message: formData.message,
            },
            "SMUYOTFAmiaa_oK0B"       // 🔴 replace
        )
            .then(() => {
                alert("Message sent successfully!");
                setFormData({ name: "", email: "", message: "" });
            })
            .catch((error) => {
                console.error("EmailJS error:", error);
                alert("Failed to send message. Please try again.");
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <SectionContainer id="contact" className="bg-neutral-50 relative overflow-hidden">
            <div className="text-center mb-10">
                <h2 className="text-4xl font-bold text-neutral-900 mb-6">Get In Touch</h2>
                <p className="text-neutral-600 max-w-2xl mx-auto text-lg">
                    Have a project in mind or want to say hello? I'd love to hear from you.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {/* LEFT */}
                <div>
                    <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

                    <div className="space-y-6 text-neutral-600">
                        <div className="flex items-center gap-4">
                            <FiMail /> jeevapersonal1101@gmail.com
                        </div>
                        <div className="flex items-center gap-4">
                            <FiMapPin /> Dindigul, Tamil Nadu, India
                        </div>
                        <div className="flex items-center gap-4">
                            <FiPhone /> +91 93442 21553
                        </div>
                    </div>
                </div>

                {/* RIGHT */}
                <form onSubmit={handleSubmit} className="glass-card p-6 rounded-2xl">
                    <div className="space-y-4">
                        <div>
                            <label className="block mb-2 font-semibold">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border rounded-xl bg-white/50"
                            />
                        </div>

                        <div>
                            <label className="block mb-2 font-semibold">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border rounded-xl bg-white/50"
                            />
                        </div>

                        <div>
                            <label className="block mb-2 font-semibold">Message</label>
                            <textarea
                                name="message"
                                rows="3"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border rounded-xl bg-white/50 resize-none"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="btn-primary w-full flex items-center justify-center gap-2 py-3"
                        >
                            {loading ? "Sending..." : "Send Message"} <FiSend />
                        </button>
                    </div>
                </form>
            </div>
        </SectionContainer>
    );
};

export default Contact;
