import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ExternalLink, Code2 } from 'lucide-react';
import { Button } from '../components/ui/button';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      title: 'E-commerce Platform',
      category: 'Web Apps',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c',
      problem: 'Complex inventory management and real-time stock updates across multiple warehouses',
      solution: 'Built scalable React app with real-time updates, automated inventory tracking, and multi-warehouse management',
      tech: ['React', 'Node.js', 'MongoDB', 'Socket.io']
    },
    {
      title: 'SaaS Admin Dashboard',
      category: 'SaaS',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
      problem: 'Manual data management and lack of real-time analytics for business decisions',
      solution: 'Created intuitive dashboard with interactive charts, real-time data sync, and custom reporting',
      tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Chart.js']
    },
    {
      title: 'AI-Powered Chatbot',
      category: 'AI',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995',
      problem: 'Customer support bottleneck with delayed response times and high operational costs',
      solution: 'Integrated AI chatbot for 24/7 support, reducing response time by 80% and support costs by 60%',
      tech: ['React', 'OpenAI API', 'Node.js', 'WebSocket']
    },
    {
      title: 'Grocery Delivery App',
      category: 'Web Apps',
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e',
      problem: 'Fragmented delivery system with poor route optimization and customer tracking',
      solution: 'Built end-to-end delivery platform with real-time tracking, route optimization, and multi-vendor support',
      tech: ['React Native', 'Node.js', 'Firebase', 'Google Maps API']
    }
  ];

  const categories = ['All', 'Web Apps', 'SaaS', 'AI'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <>
      <Helmet>
        <title>Projects & Portfolio - Aman Kumar</title>
        <meta
          name="description"
          content="Explore Aman Kumar's portfolio of web applications, SaaS dashboards, AI integrations, and delivery platforms built for modern businesses."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-slate-950">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              My <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
            </h1>
            <p className="text-xl text-gray-300">
              Real-world solutions that drive business results
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setFilter(category)}
                variant={filter === category ? 'default' : 'outline'}
                className={
                  filter === category
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white'
                    : 'border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white'
                }
              >
                {category}
              </Button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-slate-900 rounded-xl overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transition-all hover:shadow-xl hover:shadow-purple-500/10"
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                  
                  <div className="mb-4">
                    <span className="text-purple-400 font-semibold">Problem:</span>
                    <p className="text-gray-400 mt-1">{project.problem}</p>
                  </div>

                  <div className="mb-6">
                    <span className="text-purple-400 font-semibold">Solution:</span>
                    <p className="text-gray-400 mt-1">{project.solution}</p>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <span className="text-sm text-gray-500 mb-2 block">Tech Stack:</span>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-slate-800 text-purple-400 px-3 py-1 rounded-full text-sm border border-purple-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      className="flex-1 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      View Live
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
                    >
                      <Code2 size={16} className="mr-2" />
                      View Code
                    </Button>
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