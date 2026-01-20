import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ExternalLink, Code2, Lock } from 'lucide-react';
import { Button } from '../components/ui/button';
import fomoImg from '../assets/fomo.png';
import koinpr from '../assets/koinpr.png';
import ecomadmin from '../assets/ecomadmin.png';
import unibazar from '../assets/unibazar.png';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      title: 'FOMO3D – Blockchain Game',
      category: 'Web3 / Blockchain',
      badge: 'Blockchain',
      image: fomoImg, // place your image here
      metrics: ['Decentralized on-chain game mechanics'],
      problem:
        'Traditional online games lack transparency and trust in reward distribution.',
      solution:
        'Developed a blockchain-based game implementing decentralized mechanics, smart-contract driven rewards, and real-time gameplay.',
      tech: [
        'React',
        'Blockchain',
        'Web3',
        'Smart Contracts',
        'Vercel'
      ],
      liveUrl: 'https://demofomo3d-8s2ilxf5s-amankumarsuman.vercel.app/',
      repoUrl: 'https://github.com/amankumarsuman/fomo3D'
    },
    {
      title: 'KoinPR – PR Management Platform',
      category: 'SaaS',
      badge: 'NDA / Enterprise',
      image: koinpr, // place your image here
      metrics: ['Used by crypto & Web3 brands globally'],
      problem:
        'Crypto startups needed a streamlined way to manage PR campaigns, journalists, and outreach without manual workflows.',
      solution:
        'Built a scalable PR management platform enabling Web3 companies to manage campaigns, media outreach, and analytics efficiently.',
      tech: [
        'React',
        'Next.js',
        'Node.js',
        'SaaS Architecture'
      ],
      liveUrl: 'https://www.koinpr.com/',
      repoUrl: null // NDA protected
    },
    {
      title: 'UniBazar – Seller Management Platform',
      category: 'SaaS',
      badge: 'Startup / E-commerce',
      image: unibazar, // place your image here
      metrics: ['Unified selling across Amazon, Flipkart, Myntra & more'],
      problem:
        'Online sellers faced operational chaos managing inventory, orders, and pricing separately across multiple marketplaces.',
      solution:
        'Developed a unified seller platform allowing merchants to link multiple marketplaces and manage inventory, orders, and operations from one place.',
      tech: [
        'React',
        'Redux',
        'REST APIs',
        'E-commerce Integrations',
        'Tailwind CSS'
      ],
      liveUrl: 'https://unibazar.in/',
      repoUrl: 'https://github.com/Unibazar/frontend-react'
    },
    {
      title: 'Multi-Commerce Admin Portal',
      category: 'Web Apps',
      badge: 'Enterprise',
      image: ecomadmin, // place your image here
      metrics: ['Manage 5+ marketplaces from one dashboard'],
      problem:
        'Businesses selling on multiple e-commerce platforms struggled to track orders, inventory, and analytics across different dashboards.',
      solution:
        'Built a centralized admin portal where users can connect multiple e-commerce platforms and manage inventory, orders, and insights from a single interface.',
      tech: [
        'React',
        'Redux',
        'Node.js',
        'REST APIs',
        'Material UI',
        'Vercel'
      ],
      liveUrl: 'https://multicommerce-git-main-amankumarsumans-projects.vercel.app/login',
      repoUrl: 'https://github.com/amankumarsuman/multicommerce'
    },
    {
      title: 'E-commerce Platform',
      category: 'Web Apps',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c',
      problem:
        'Complex inventory management and real-time stock updates across multiple warehouses.',
      solution:
        'Built a scalable React-based platform with real-time updates, automated inventory tracking, and multi-warehouse support.',
      tech: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      badges: ['Production', 'Scalable'],
      metrics: ['50K+ Users', '99.9% Uptime'],
      liveUrl: '',
      repoUrl: 'https://github.com/amankumarsuman/ecommerce-platform',
    },

    {
      title: 'Labgen Physician Portal',
      category: 'SaaS',
      image: 'https://verisys.com/wp-content/uploads/2022/01/Medical-Credentialing-101.jpg',
      badges: ['Healthcare', 'Enterprise', 'NDA'],
      metrics: [
        '100+ Physicians',
        'Active in USA & UK',
        'HIPAA-Compliant',
      ],
      problem:
        'Physicians lacked a secure and unified platform to access lab reports and patient insights.',
      solution:
        'Developed a secure, role-based physician portal enabling real-time access to reports, analytics, and patient history.',
      tech: [
        'React',
        'Redux',
        'Material UI',
        'shadcn/ui',
        'Monorepo Architecture',
      ],
      liveUrl: null,
      repoUrl: null,
    },

    {
      title: 'Laboratory Information System (LIS)',
      category: 'SaaS',
      image: 'https://www.isotekindo.co.id/assets/upload/lg/untuk-artikel-narkoba-3-434b4.png',
      badges: ['Healthcare', 'Enterprise', 'NDA'],
      metrics: [
        '10K+ Reports / Day',
        'Multi-Lab Workflow',
        'Physician Integration',
      ],
      problem:
        'Labs needed a centralized system to manage samples, workflows, reporting, and compliance.',
      solution:
        'Built an end-to-end LIS to manage lab operations, reporting lifecycle, and physician integrations at scale.',
      tech: [
        'React',
        'Redux',
        'Material UI',
        'shadcn/ui',
        'Monorepo Architecture',
      ],
      liveUrl: null,
      repoUrl: null,
    },

    {
      title: 'Grocery Delivery Platform',
      category: 'Web Apps',
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e',
      badges: ['Logistics', 'Real-Time'],
      metrics: ['Live Tracking', 'Multi-Vendor'],
      problem:
        'Fragmented delivery system with poor route optimization and customer tracking.',
      solution:
        'Developed a real-time delivery platform with route optimization, vendor dashboards, and order tracking.',
      tech: [
        'React',
        'Node.js',
        'Firebase',
        'Google Maps API',
        'MUI',
      ],
      liveUrl: 'https://dehatmall.in',
      repoUrl: null,
    },
  ];

  const categories = ['All', 'Web Apps', 'SaaS','Web3 / Blockchain'];

  const filteredProjects =
    filter === 'All'
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <>
      <Helmet>
        <title>Projects & Portfolio | Aman Kumar</title>
        <meta
          name="description"
          content="Explore real-world projects by Aman Kumar including SaaS platforms, healthcare systems, enterprise dashboards, and scalable web applications."
        />
      </Helmet>

      <section className="pt-32 pb-16 bg-slate-950">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              My{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h1>
            <p className="text-xl text-gray-300">
              Production-grade solutions solving real business problems
            </p>
          </motion.div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-14">
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

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
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
                  <h3 className="text-2xl font-semibold mb-3">
                    {project.title}
                  </h3>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.badges?.map((badge, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border border-purple-500/30"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>

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

                  {/* Metrics */}
                  {project.metrics && (
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {project.metrics.map((metric, i) => (
                        <div
                          key={i}
                          className="bg-slate-800/60 border border-purple-500/20 rounded-lg px-4 py-3 text-sm text-purple-300 text-center"
                        >
                          {metric}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech Stack */}
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
