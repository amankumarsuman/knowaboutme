import React from 'react';
import { motion } from 'framer-motion';
import {
  Award,
  Code2,
  Clock,
  Target,
  Headphones,
  TrendingUp
} from 'lucide-react';

const WhyChooseMe = () => {
  const reasons = [
    {
      icon: Award,
      title: '5+ Years of Proven Experience',
      description: 'Delivered 50+ successful projects for startups and established businesses'
    },
    {
      icon: Code2,
      title: 'Clean, Maintainable Code Architecture',
      description: 'Writing scalable code that your team can understand and extend easily'
    },
    {
      icon: Clock,
      title: 'On-Time Delivery Guarantee',
      description: 'Meeting deadlines consistently without compromising on quality'
    },
    {
      icon: Target,
      title: 'Business-Focused Solutions',
      description: 'Thinking like a product owner to deliver features that drive real results'
    },
    {
      icon: Headphones,
      title: 'Long-Term Support & Maintenance',
      description: 'Available for updates, bug fixes, and ongoing improvements post-launch'
    },
    {
      icon: TrendingUp,
      title: 'Transparent Communication',
      description: 'Regular updates, clear documentation, and honest project assessments'
    }
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-xl text-gray-300">
            More than just a developer—a partner committed to your success
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-slate-800 p-8 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all hover:shadow-xl hover:shadow-purple-500/10 group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all">
                  <Icon className="text-purple-400" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
                <p className="text-gray-400">{reason.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMe;