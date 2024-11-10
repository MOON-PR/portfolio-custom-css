// components/Contacts.js

'use client'; // Ensure this is a client-side component

import React, { useState, ChangeEvent, FormEvent } from 'react';
import { AiTwotoneMail } from 'react-icons/ai';
import { LiaPhoneVolumeSolid } from 'react-icons/lia';
import { useInView } from 'react-intersection-observer'; // Import the hook for scroll visibility

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState('');

  // Intersection observer for the Contacts section
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger once when the element is in view
    threshold: 0.2, // Trigger when 20% of the section is in view
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = ( e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setFormStatus('Please fill out all fields');
      return;
    }
    setFormStatus('Your message has been sent successfully!');
  };

  return (
    <div
      id="Contacts"
      className="pt-32 container mx-auto px-4 pb-16"
      ref={ref} // Add ref to track visibility
    >
      <div
        className={`grid md:grid-cols-2 gap-10 ${inView ? 'animate-fadeInUp' : 'opacity-0'}`}
      >
        {/* Left side: Contact info */}
        <div className="space-y-8">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">Get in touch</h2>
          <p className="text--[#edcc56] text-sm sm:text-base md:text-lg pt-2">
            Drop me a line, give me a call, or send me a message by submitting the form.
          </p>
          <div className="flex gap-3 items-center">
            <AiTwotoneMail size={30} className="text-red-500" /> xyz@Gmail.com
          </div>
          <div className="flex gap-3 items-center">
            <LiaPhoneVolumeSolid size={30} className="text-red-500" /> (+92) 000-000-0000
          </div>
        </div>

        {/* Right side: Contact form */}
        <div className="space-y-8">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              {/* Name Input */}
              <div className="flex flex-col gap-1">
                <label htmlFor="name" className="text-lg font-medium">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="p-3 bg-gray-800 text-white rounded"
                  required
                />
              </div>

              {/* Email Input */}
              <div className="flex flex-col gap-1">
                <label htmlFor="email" className="text-lg font-medium">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="p-3 bg-gray-800 text-white rounded"
                  required
                />
              </div>

              {/* Message Input */}
              <div className="flex flex-col gap-1">
                <label htmlFor="message" className="text-lg font-medium">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="p-3 bg-gray-800 text-white rounded"
                  required
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#edcc56] text-black rounded hover:bg-yellow-600 transition-all"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>

          {formStatus && (
            <p className={`mt-4 p-2 text-center rounded ${formStatus.includes('success') ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
              {formStatus}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contacts;
