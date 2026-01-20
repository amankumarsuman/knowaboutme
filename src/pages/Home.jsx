import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import WhyChooseMe from '../components/WhyChooseMe';

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Aman Kumar - Full Stack Developer | React, Next.js & AI Solutions</title>
        <meta
          name="description"
          content="Expert full-stack developer with 5+ years of experience in React, Next.js, and AI-powered applications. Building scalable web solutions for modern businesses."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1675627453057-c56dc0502ffd"
            alt="Modern web development workspace"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/85 to-slate-950"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-32">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              I Build{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Scalable, High-Performance
              </span>{' '}
              Web Applications for Modern Businesses
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              Transforming complex problems into elegant solutions. 5+ years of expertise in
              React, Next.js, and AI-powered applications.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                onClick={() => navigate('/contact')}
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white text-lg px-8 py-6"
              >
                Hire Me
              </Button>
              <Button
                onClick={() => navigate('/projects')}
                size="lg"
                variant="outline"
                className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white text-lg px-8 py-6"
              >
                View Projects
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-purple-400 rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Why Choose Me Section */}
      <WhyChooseMe />
    </>
  );
};

export default Home;

// import React from 'react';
// import { Helmet } from 'react-helmet';
// import { motion } from 'framer-motion';
// import { Button } from '../components/ui/button';
// import { ExternalLink, Code2 } from 'lucide-react';

// const projects = [
//   {
//     title: 'E-commerce Platform',
//     category: 'Web Apps',
//     image: 'https://images.unsplash.com/photo-1557821552-17105176677c',
//     problem: 'Complex inventory management and real-time stock updates across multiple warehouses',
//     solution: 'Built scalable React app with real-time updates, automated inventory tracking, and multi-warehouse management',
//     tech: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
//     liveUrl: '#',
//     codeUrl: '#',
//   },
//   {
//     title: 'SaaS Admin Dashboard',
//     category: 'SaaS',
//     image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
//     problem: 'Manual data management and lack of real-time analytics for business decisions',
//     solution: 'Created intuitive dashboard with interactive charts, real-time data sync, and custom reporting',
//     tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Chart.js'],
//     liveUrl: '#',
//     codeUrl: '#',
//   },
//   {
//     title: 'Grocery Delivery App',
//     category: 'Web Apps',
//     image: 'https://images.unsplash.com/photo-1542838132-92c53300491e',
//     problem: 'Fragmented delivery system with poor route optimization and customer tracking',
//     solution: 'Built end-to-end delivery platform with real-time tracking, route optimization, and multi-vendor support',
//     tech: ['React Native', 'Node.js', 'Firebase', 'Google Maps API'],
//     liveUrl: '#',
//     codeUrl: '#',
//   },
// ];

// const services = [
//   'Web Application Development',
//   'SaaS Platforms & Admin Dashboards',
//   'API Development & Integration',
//   'Full-Stack Solutions',
//   'AI & Automation Solutions',
// ];

// const Home = () => {
//   const schemaData = {
//     "@context": "https://schema.org",
//     "@type": "Person",
//     "name": "Aman Kumar",
//     "url": "https://yourdomain.com",
//     "sameAs": [
//       "https://www.linkedin.com/in/your-linkedin",
//       "https://github.com/amankumarsuman",
//       "https://twitter.com/your-twitter"
//     ],
//     "jobTitle": "Full-Stack Software Developer",
//     "worksFor": {
//       "@type": "Organization",
//       "name": "Freelance"
//     },
//     "email": "mailto:amankumar.dev98@gmail.com",
//     "telephone": "+918360105386",
//     "image": "https://comtronus.keka.com/files/ae509465-ed9c-4b22-97cf-4466793b1020/200x200/profileimage/ca6dfd94502347a38a7dcd95d4e8b797.jpg",
//     "description": "Aman Kumar is a freelance full-stack software developer specializing in React, Next.js, SaaS platforms, and scalable web applications."
//   };

//   return (
//     <>
//       <Helmet>
//         <title>Aman Kumar | Full-Stack Software Developer | React, Next.js & SaaS</title>
//         <meta
//           name="description"
//           content="Aman Kumar is a freelance full-stack software developer specializing in React, Next.js, Node.js, SaaS platforms, and web applications. Hire now!"
//         />
//         <meta
//           name="keywords"
//           content="Aman Kumar, Software Developer, Freelance Developer, React Developer, Next.js Developer, Full Stack Developer, SaaS Developer, Web App Development, India Freelancer"
//         />
//         <link rel="icon" href="%PUBLIC_URL%/ak.png" />

//         {/* JSON-LD Structured Data */}
//         <script type="application/ld+json">
//           {JSON.stringify(schemaData)}
//         </script>
//       </Helmet>

//       {/* Hero Section */}
//       <section className="pt-32 pb-20 bg-slate-950">
//         <div className="container mx-auto px-4 text-center">
//           <motion.h1
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"
//           >
//             Aman Kumar
//           </motion.h1>
//           <p className="text-xl text-gray-300 mb-6">
//             Freelance Full-Stack Developer specializing in React, Next.js, SaaS platforms, and scalable web applications.
//           </p>
//           <Button
//             className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
//             onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
//           >
//             Let's Build Your Project
//           </Button>
//         </div>
//       </section>

//       {/* About Me */}
//       <section className="py-20 bg-slate-900">
//         <div className="container mx-auto px-4 max-w-4xl text-center">
//           <h2 className="text-4xl font-bold mb-6 text-purple-400">About Me</h2>
//           <p className="text-gray-300 text-lg">
//             I’m Aman Kumar, a passionate full-stack software developer with 5+ years of experience creating
//             web apps, SaaS platforms, and custom software solutions. I specialize in React, Next.js, Node.js,
//             and modern web technologies to help startups and enterprises bring their ideas to life.
//           </p>
//         </div>
//       </section>

//       {/* Services */}
//       <section className="py-20 bg-slate-950">
//         <div className="container mx-auto px-4 max-w-5xl text-center">
//           <h2 className="text-4xl font-bold mb-12 text-purple-400">Services</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {services.map((service, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: idx * 0.1 }}
//                 viewport={{ once: true }}
//                 className="bg-slate-900 p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all hover:shadow-lg"
//               >
//                 <p className="text-gray-300 text-lg font-semibold">{service}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Projects */}
//       <section className="py-20 bg-slate-900">
//         <div className="container mx-auto px-4 max-w-6xl text-center">
//           <h2 className="text-4xl font-bold mb-12 text-purple-400">My Projects</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {projects.map((project, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: idx * 0.1 }}
//                 viewport={{ once: true }}
//                 className="bg-slate-950 rounded-xl overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transition-all hover:shadow-lg"
//               >
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-64 object-cover"
//                 />
//                 <div className="p-6 text-left">
//                   <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
//                   <p className="text-purple-400 font-semibold">Problem:</p>
//                   <p className="text-gray-300 mb-2">{project.problem}</p>
//                   <p className="text-purple-400 font-semibold">Solution:</p>
//                   <p className="text-gray-300 mb-4">{project.solution}</p>
//                   <div className="flex flex-wrap gap-2 mb-4">
//                     {project.tech.map((tech, i) => (
//                       <span
//                         key={i}
//                         className="bg-slate-800 text-purple-400 px-3 py-1 rounded-full text-sm border border-purple-500/20"
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                   <div className="flex gap-4">
//                     <Button
//                       variant="outline"
//                       className="flex-1 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
//                       asChild
//                     >
//                       <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
//                         <ExternalLink size={16} className="mr-2" />
//                         Live
//                       </a>
//                     </Button>
//                     <Button
//                       variant="outline"
//                       className="flex-1 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
//                       asChild
//                     >
//                       <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
//                         <Code2 size={16} className="mr-2" />
//                         Code
//                       </a>
//                     </Button>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact CTA */}
//       <section id="contact" className="py-20 bg-slate-950 text-center">
//         <div className="container mx-auto px-4 max-w-3xl">
//           <h2 className="text-4xl font-bold mb-6 text-purple-400">Let's Build Something Amazing</h2>
//           <p className="text-gray-300 mb-6">
//             Have a project idea? Contact me and let's create a product that scales and performs.
//           </p>
//           <Button
//             asChild
//             className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
//           >
//             <a href="mailto:amankumar.dev98@gmail.com">Email Me</a>
//           </Button>
//           <Button
//             asChild
//             className="ml-4 bg-green-500 hover:bg-green-600 text-white"
//           >
//             <a href="https://wa.me/918360105386?text=Hi%20Aman!%20I%20want%20to%20discuss%20a%20project" target="_blank" rel="noopener noreferrer">
//               WhatsApp
//             </a>
//           </Button>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Home;
