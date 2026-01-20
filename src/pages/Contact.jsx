import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useToast } from '../components/ui/use-toast';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectDescription: '',
    budget: '',
    services: [],
  });

  const budgetRanges = [
    'Less than $1,000',
    '$1,000 - $5,000',
    '$5,000 - $10,000',
    '$10,000 - $20,000',
    'More than $20,000',
  ];

  const serviceOptions = [
    'Web App Development',
    'Admin Dashboard',
    'SaaS MVP',
    'E-commerce',
    'Delivery Platform',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceToggle = (service) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.projectDescription) {
      toast({
        title: 'Missing Information',
        description: 'Please fill all required fields.',
        variant: 'destructive',
      });
      return;
    }

    try {
      await emailjs.send(
        'service_kaigsz5', // ✅ Service ID
        'template_2t8uqt8', // ✅ Template ID
        {
          name: formData.name,
          email: formData.email,
          budget: formData.budget || 'Not specified',
          services:
            formData.services.length > 0
              ? formData.services.join(', ')
              : 'Not specified',
          project: formData.projectDescription,
        },
        'Lq5pi1uwrcpm8qluS' // ✅ Public Key
      );

      toast({
        title: 'Message Sent 🎉',
        description: 'Thanks for reaching out! I’ll get back to you within 24 hours.',
      });

      setFormData({
        name: '',
        email: '',
        projectDescription: '',
        budget: '',
        services: [],
      });
    } catch (error) {
      console.error(error);
      toast({
        title: 'Something went wrong',
        description: 'Failed to send message. Please try again later.',
        variant: 'destructive',
      });
    }
  };

  const whatsappMessage = encodeURIComponent(
    "Hi Aman! I'd like to discuss a project with you."
  );

  return (
    <>
      <Helmet>
        <title>Contact Aman Kumar | Freelance Software Developer</title>
        <meta
          name="description"
          content="Contact Aman Kumar for freelance web development, SaaS, admin panels and scalable applications."
        />
      </Helmet>

      <section className="pt-32 pb-20 bg-slate-950">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Let’s Discuss{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Your Project
              </span>
            </h1>
            <p className="text-xl text-gray-300">
              Have an idea? Let’s turn it into a scalable, high-quality product.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* FORM */}
            <div className="bg-slate-900 p-8 rounded-xl border border-purple-500/20">
              <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name *"
                  className="w-full bg-slate-800 border border-purple-500/30 rounded-lg px-4 py-3 text-white"
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email *"
                  className="w-full bg-slate-800 border border-purple-500/30 rounded-lg px-4 py-3 text-white"
                />

                <textarea
                  name="projectDescription"
                  rows={5}
                  value={formData.projectDescription}
                  onChange={handleChange}
                  placeholder="Describe your project *"
                  className="w-full bg-slate-800 border border-purple-500/30 rounded-lg px-4 py-3 text-white resize-none"
                />

                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full bg-slate-800 border border-purple-500/30 rounded-lg px-4 py-3 text-white"
                >
                  <option value="">Select Budget</option>
                  {budgetRanges.map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </select>

                <div className="grid grid-cols-2 gap-3">
                  {serviceOptions.map((service) => (
                    <button
                      key={service}
                      type="button"
                      onClick={() => handleServiceToggle(service)}
                      className={`px-3 py-2 rounded-lg text-sm border ${
                        formData.services.includes(service)
                          ? 'bg-purple-500 text-white border-purple-500'
                          : 'bg-slate-800 border-purple-500/30 text-gray-300'
                      }`}
                    >
                      {service}
                    </button>
                  ))}
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-6 text-lg"
                >
                  <Send className="mr-2" size={18} />
                  Send Message
                </Button>
              </form>
            </div>

            {/* CONTACT OPTIONS */}
            <div className="space-y-8">
              <div className="bg-slate-900 p-8 rounded-xl border border-purple-500/20">
                <Mail className="text-purple-400 mb-3" />
                <h3 className="text-xl font-semibold">Email</h3>
                <p className="text-gray-400 mb-4">
                  Aman Kumar
                </p>
                <a
                  href="mailto:amankumar.dev98@gmail.com"
                  className="text-purple-400 underline"
                >
                  Send Email
                </a>
              </div>

              <div className="bg-slate-900 p-8 rounded-xl border border-purple-500/20">
                <MessageSquare className="text-green-400 mb-3" />
                <h3 className="text-xl font-semibold">WhatsApp</h3>
                <p className="text-gray-400 mb-4">+91 8360105386</p>
                <a
                  href={`https://wa.me/918360105386?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 underline"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
