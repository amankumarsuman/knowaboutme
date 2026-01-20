import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/skills', label: 'Skills' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/amankumarsuman', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/amankumarsuman', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/amankumar', label: 'Twitter' },
    { icon: Mail, href: 'mailto:amankumar.dev98@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-12 md:gap-0">
          
          {/* Brand Section */}
          <div className="flex-1">
            <span className="text-3xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Aman Kumar
            </span>
            <p className="text-gray-400 mt-4 leading-relaxed">
              Freelance full-stack developer building scalable, modern, and high-performance web applications for businesses and startups.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex-1">
            <span className="text-xl font-semibold text-white mb-4 block">Quick Links</span>
            <div className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div className="flex-1">
            <span className="text-xl font-semibold text-white mb-4 block">Get In Touch</span>
            <p className="text-gray-400 mb-4">Email: <a href="mailto:amankumar.dev98@gmail.com" className="hover:text-purple-400 transition-colors">amankumar.dev98@gmail.com</a></p>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                    aria-label={social.label}
                  >
                    <Icon size={24} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 mt-12 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Aman Kumar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
