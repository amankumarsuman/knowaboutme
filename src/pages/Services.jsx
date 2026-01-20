import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import {
  Globe,
  LayoutDashboard,
  Rocket,
  Brain,
  ShoppingCart,
  Truck,
  Check
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Web App Development',
      description: 'Custom React & Next.js applications tailored to your business needs',
      benefits: [
        'Lightning-fast performance',
        'SEO-optimized architecture',
        'Scalable & maintainable code',
        'Modern UI/UX design'
      ]
    },
    {
      icon: LayoutDashboard,
      title: 'Admin Dashboards',
      description: 'Powerful admin panels and management systems for data-driven businesses',
      benefits: [
        'Real-time data visualization',
        'Role-based access control',
        'Custom reporting features',
        'Responsive design'
      ]
    },
    {
      icon: Rocket,
      title: 'SaaS MVPs',
      description: 'Rapid MVP development to validate your startup ideas quickly',
      benefits: [
        'Fast time-to-market',
        'Cost-effective development',
        'Scalable infrastructure',
        'Iterative improvements'
      ]
    },
    {
      icon: Brain,
      title: 'AI Integrations',
      description: 'AI-powered features and automation to enhance your applications',
      benefits: [
        'ChatGPT & OpenAI integration',
        'Smart automation workflows',
        'Natural language processing',
        'Predictive analytics'
      ]
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Solutions',
      description: 'Full-featured online stores with seamless checkout experiences',
      benefits: [
        'Payment gateway integration',
        'Inventory management',
        'Order tracking system',
        'Mobile-responsive design'
      ]
    },
    {
      icon: Truck,
      title: 'Grocery Delivery Apps',
      description: 'Specialized delivery platform development for modern retail',
      benefits: [
        'Real-time order tracking',
        'Multi-vendor support',
        'Route optimization',
        'Customer & driver apps'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Services - Web Development & AI Solutions | Aman Kumar</title>
        <meta
          name="description"
          content="Professional web development services including React apps, admin dashboards, SaaS MVPs, AI integrations, e-commerce solutions, and delivery platforms."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-slate-950">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              My <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-300">
              Comprehensive web development solutions to bring your ideas to life
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-slate-900 p-8 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all hover:shadow-xl hover:shadow-purple-500/10 group"
                >
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all">
                    <Icon className="text-purple-400" size={32} />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-400 mb-6">{service.description}</p>

                  {/* Benefits */}
                  <div className="space-y-3">
                    {service.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Check className="text-purple-400 mt-1 flex-shrink-0" size={16} />
                        <span className="text-gray-300 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;