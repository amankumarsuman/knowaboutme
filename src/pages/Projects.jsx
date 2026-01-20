import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ExternalLink, Code2, Lock } from 'lucide-react';
import { Button } from '../components/ui/button';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      title: 'E-commerce Platform',
      category: 'Web Apps',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c',
      problem:
        'Complex inventory management and real-time stock updates across multiple warehouses',
      solution:
        'Built scalable React app with real-time updates, automated inventory tracking, and multi-warehouse management',
      tech: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      liveUrl: 'https://example-ecommerce.com',
      repoUrl: 'https://github.com/yourusername/ecommerce-platform',
    },
    {
      title: 'SaaS Admin Dashboard',
      category: 'SaaS',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
      problem:
        'Manual data management and lack of real-time analytics for business decisions',
      solution:
        'Created intuitive dashboard with interactive charts, real-time data sync, and custom reporting',
      tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Chart.js'],
      liveUrl: 'https://example-saas.com',
      repoUrl: 'https://github.com/yourusername/saas-dashboard',
    },
    {
      title: 'Grocery Delivery App',
      category: 'Web Apps',
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e',
      problem:
        'Fragmented delivery system with poor route optimization and customer tracking',
      solution:
        'Built end-to-end delivery platform with real-time tracking, route optimization, and multi-vendor support',
      tech: ['React Native', 'Node.js', 'Firebase', 'Google Maps API'],
      liveUrl: 'https://example-grocery.com',
      repoUrl: null, // 🔒 Private / NDA project
    },
  ];

  const categories = ['All', 'Web Apps', 'SaaS', 'AI'];

  const filteredProjects =
    filter === 'All'
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <>
      <Helmet>
        <title>Projects & Portfolio - Aman Kumar</title>
        <meta
          name="description"
          content="Explore Aman Kumar's portfolio of web applications, SaaS dashboards, and scalable platforms."
        />
      </Helmet>

      <section className="pt-32 pb-12 bg-slate-950">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              My{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h1>
            <p className="text-xl text-gray-300">
              Real-world solutions that drive business results
            </p>
          </motion.div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setFilter(category)}
                variant={filter === category ? 'default' : 'outline'}
                className={
                  filter === category
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                    : 'border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white'
                }
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="bg-slate-900 rounded-xl overflow-hidden border border-purple-500/20 hover:border-purple-500/40"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <span className="absolute top-4 right-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm">
                    {project.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-4">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 mb-3">
                    <span className="text-purple-400 font-semibold">
                      Problem:
                    </span>{' '}
                    {project.problem}
                  </p>

                  <p className="text-gray-400 mb-6">
                    <span className="text-purple-400 font-semibold">
                      Solution:
                    </span>{' '}
                    {project.solution}
                  </p>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="bg-slate-800 text-purple-400 px-3 py-1 rounded-full text-sm border border-purple-500/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-4">
                    {project.liveUrl ? (
                      <Button
                        asChild
                        variant="outline"
                        className="flex-1 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
                      >
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink size={16} className="mr-2" />
                          View Live
                        </a>
                      </Button>
                    ) : (
                      <Button disabled className="flex-1 opacity-50">
                        <Lock size={16} className="mr-2" />
                        Private
                      </Button>
                    )}

                    {project.repoUrl ? (
                      <Button
                        asChild
                        variant="outline"
                        className="flex-1 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
                      >
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Code2 size={16} className="mr-2" />
                          View Code
                        </a>
                      </Button>
                    ) : (
                      <Button disabled className="flex-1 opacity-50">
                        <Lock size={16} className="mr-2" />
                        NDA
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
