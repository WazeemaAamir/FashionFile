'use client';

import React, { useState } from 'react';
import { Mail, Github } from 'lucide-react';
import { FaWhatsappSquare } from 'react-icons/fa';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const mailtoTo = 'wazeemaamir145@gmail.com';
  const mailtoSubject = encodeURIComponent('Customer Inquiry');
  const mailtoBody = encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`
  );

  return (
    <section className="w-full bg-gray-100 py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Contact Info */}
        <div>
          <h2 className="text-4xl font-extrabold text-blue-700 mb-6">Get in Touch</h2>
          <p className="text-gray-700 mb-6 text-lg">
            Have questions about buying or selling Cosmetics, Men's Cloth, Women's Cloth, or Stationary? Reach out to our team and we will respond quickly!
          </p>
          <div className="space-y-4 text-gray-600 text-base">
            <p><strong>📍 Address:</strong> Al Markaz, Karachi</p>
            <p><strong>📞 Phone:</strong> +92 3708709782 , +92 3702440409</p>
            <p><strong>📧 Email:</strong> {mailtoTo}</p>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="bg-white shadow-2xl rounded-xl p-8 space-y-6">
          {submitted && (
            <div className="text-green-600 font-medium border border-green-200 bg-green-50 p-4 rounded-lg">
              ✅ Your message has been sent successfully!
            </div>
          )}
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
              placeholder="your@email.com"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-700">
              Your Message
            </label>
            <textarea
              id="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
              placeholder="How can we help you?"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 rounded-md shadow-md transition"
          >
            Send Message
          </button>

          {/* Icons Section */}
          <div className="flex items-center space-x-6 mt-4">
            {/* Email Icon */}
            <a
              href={`mailto:${mailtoTo}?subject=${mailtoSubject}&body=${mailtoBody}`}
              target="_blank"
              rel="noopener noreferrer"
              title="Send Email"
              className="text-blue-700 hover:text-blue-900"
            >
              <Mail className="w-6 h-6" />
            </a>

            {/* WhatsApp Icon */}
            <a
              href={`https://wa.me/923708709782?text=${encodeURIComponent(
                'Hi, I want to inquire about your products.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              title="Chat on WhatsApp"
              className="text-green-600 hover:text-green-800"
            >
              <FaWhatsappSquare className="w-7 h-7" />
            </a>

            {/* GitHub Icon */}
            <a
              href="https://github.com/your-username" // ← Replace with your GitHub profile
              target="_blank"
              rel="noopener noreferrer"
              title="View GitHub"
              className="text-gray-700 hover:text-black"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
