import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Code2, MessageSquare, Clock, Target } from 'lucide-react';

const About = () => {
  const milestones = [
    { year: '2018', title: 'Started Career', description: 'Began as a Junior Developer' },
    { year: '2020', title: 'Full Stack Developer', description: 'Mastered React & Node.js' },
    { year: '2022', title: 'Senior Developer', description: 'Led multiple SaaS projects' },
    { year: '2024', title: 'Tech Lead', description: 'Leading teams & AI integrations' }
  ];

  const values = [
    {
      icon: Code2,
      title: 'Clean Architecture',
      description: 'Writing maintainable, scalable code that stands the test of time'
    },
    {
      icon: MessageSquare,
      title: 'Clear Communication',
      description: 'Transparent updates and collaborative problem-solving'
    },
    {
      icon: Clock,
      title: 'On-Time Delivery',
      description: 'Meeting deadlines without compromising quality'
    },
    {
      icon: Target,
      title: 'Business-Focused Solutions',
      description: 'Understanding your goals and delivering results that matter'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Aman Kumar - Senior Full Stack Developer</title>
        <meta
          name="description"
          content="Learn about Aman Kumar's 5+ years of experience in web development, specializing in React, Next.js, and building scalable solutions for startups and SaaS companies."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1636216248918-918b90e6eaeb"
            alt="Professional developer workspace"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/85 to-slate-950"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Me</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Passionate about building solutions that make a difference
          </motion.p>
        </div>
      </section>

      {/* Professional Narrative */}
      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">My Journey</h2>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                With over <span className="text-purple-400 font-semibold">5+ years of experience</span> in web development,
                I've had the privilege of working with startups and SaaS companies to build products that users love and
                businesses rely on.
              </p>
              <p>
                My approach is simple: <span className="text-purple-400 font-semibold">understand the problem deeply</span>,
                design a solution that scales, and execute with precision. I don't just write code—I craft experiences that
                solve real business challenges.
              </p>
              <p>
                I believe in <span className="text-purple-400 font-semibold">clean code philosophy</span>—code that's
                readable, maintainable, and built to last. Whether it's a complex admin dashboard, an AI-powered feature,
                or a complete SaaS platform, I bring the same level of dedication and expertise to every project.
              </p>
              <p>
                What sets me apart is my ability to think like a product owner. I don't just build what's asked—I ask the
                right questions, suggest improvements, and deliver solutions that align with your business goals.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Career Timeline */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
          >
            Career Milestones
          </motion.h2>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-purple-500/30"></div>

              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="bg-slate-800 p-6 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-all">
                      <span className="text-purple-400 font-bold text-xl">{milestone.year}</span>
                      <h3 className="text-xl font-semibold mt-2 mb-2">{milestone.title}</h3>
                      <p className="text-gray-400">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-slate-950"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
          >
            Core Values
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-900 p-8 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-all group"
                >
                  <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-500/20 transition-colors">
                    <Icon className="text-purple-400" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;