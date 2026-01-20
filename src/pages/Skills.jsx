import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import {
  Code2,
  Database,
  Brain,
  Settings,
  CheckCircle2
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      category: 'Frontend Development',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'React', proficiency: 95 },
        { name: 'Next.js', proficiency: 90 },
        { name: 'TypeScript', proficiency: 85 },
        { name: 'TailwindCSS', proficiency: 95 },
        { name: 'JavaScript (ES6+)', proficiency: 95 },
        { name: 'HTML5 & CSS3', proficiency: 100 }
      ]
    },
    {
      icon: Database,
      category: 'Backend & Databases',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'Node.js', proficiency: 85 },
        { name: 'Express.js', proficiency: 85 },
        { name: 'REST APIs', proficiency: 90 },
        { name: 'MongoDB', proficiency: 80 },
        { name: 'PostgreSQL', proficiency: 75 },
        { name: 'Firebase', proficiency: 85 }
      ]
    },
    {
      icon: Brain,
      category: 'AI & Machine Learning',
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'OpenAI API Integration', proficiency: 90 },
        { name: 'ChatGPT Implementation', proficiency: 90 },
        { name: 'AI Workflow Automation', proficiency: 85 },
        { name: 'Natural Language Processing', proficiency: 80 }
      ]
    },
    {
      icon: Settings,
      category: 'DevOps & Tools',
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Git & GitHub', proficiency: 95 },
        { name: 'Docker', proficiency: 75 },
        { name: 'CI/CD Pipelines', proficiency: 80 },
        { name: 'Vercel & Netlify', proficiency: 90 },
        { name: 'AWS Basics', proficiency: 70 }
      ]
    }
  ];

  const technologies = [
    'React', 'Next.js', 'TypeScript', 'JavaScript', 'Node.js', 'Express.js',
    'TailwindCSS', 'MongoDB', 'PostgreSQL', 'Firebase', 'Git', 'Docker',
    'OpenAI API', 'REST APIs', 'GraphQL', 'Vercel', 'Netlify', 'AWS'
  ];

  return (
    <>
      <Helmet>
        <title>Skills & Tech Stack - Aman Kumar</title>
        <meta
          name="description"
          content="Explore Aman Kumar's technical skills including React, Next.js, TypeScript, Node.js, AI integrations, and modern web development tools."
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
              Skills & <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Tech Stack</span>
            </h1>
            <p className="text-xl text-gray-300">
              Comprehensive expertise across modern web technologies
            </p>
          </motion.div>

          {/* Skill Categories */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-900 p-8 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all"
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center`}>
                      <Icon className="text-white" size={24} />
                    </div>
                    <h2 className="text-2xl font-semibold">{category.category}</h2>
                  </div>

                  {/* Skills with Proficiency Bars */}
                  <div className="space-y-4">
                    {category.skills.map((skill, idx) => (
                      <div key={idx}>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-300">{skill.name}</span>
                          <span className="text-purple-400 font-semibold">{skill.proficiency}%</span>
                        </div>
                        <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.proficiency}%` }}
                            transition={{ duration: 1, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className={`h-full bg-gradient-to-r ${category.color}`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Technologies Badge Cloud */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-8">Technologies I Work With</h2>
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                  className="bg-slate-900 border border-purple-500/30 px-6 py-3 rounded-full text-gray-300 hover:border-purple-500 hover:text-white transition-all cursor-default"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-purple-400" />
                    <span className="font-medium">{tech}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Skills;