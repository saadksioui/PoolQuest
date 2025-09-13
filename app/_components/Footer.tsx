'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, Twitter, Disc as Discord, Mail, Heart, ExternalLink, Code, BookOpen, Users, Zap } from 'lucide-react';

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const quickLinks = [
    { label: 'Survival Guide', href: '#guide', icon: BookOpen },
    { label: 'Practice Exercises', href: '#exercises', icon: Code },
    { label: 'Community', href: '#community', icon: Users },
    { label: 'Resources', href: '#resources', icon: Zap }
  ];

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/piscine-survival-hub',
      label: 'GitHub',
      color: 'hover:text-white'
    },
    {
      icon: Discord,
      href: '#',
      label: 'Discord Community',
      color: 'hover:text-[#5865F2]'
    },
    {
      icon: Twitter,
      href: '#',
      label: 'Twitter',
      color: 'hover:text-[#1DA1F2]'
    },
    {
      icon: Mail,
      href: 'mailto:hello@piscinesurvival.com',
      label: 'Email',
      color: 'hover:text-[#00ff41]'
    }
  ];

  const legalLinks = [
    { label: 'Privacy Policy', href: '#privacy' },
    { label: 'Terms of Service', href: '#terms' },
    { label: 'Code of Conduct', href: '#conduct' }
  ];

  return (
    <footer ref={ref} className="relative bg-black/50 border-t border-white/10 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(90deg, #00ff41 1px, transparent 1px),
            linear-gradient(180deg, #00ff41 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
        >
          {/* Brand Section */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 rounded-xl bg-gradient-to-r from-[#00ff41] to-[#00d4ff]">
                <Code size={24} className="text-black" />
              </div>
              <span className="text-2xl font-bold text-gradient-primary">
                PoolQuest
              </span>
            </div>

            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Empowering the next generation of 1337 students with the tools,
              knowledge, and community support needed to thrive in the piscine
              and beyond.
            </p>

            <div className="flex items-center space-x-2 text-gray-500 text-sm">
              <span>Made with</span>
              <Heart size={16} className="text-red-500 animate-pulse" />
              <span>by ex-poolers for poolers</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <a
                    href={link.href}
                    className="flex items-center space-x-3 text-gray-400 hover:text-[#00ff41] transition-colors group"
                  >
                    <link.icon size={16} className="group-hover:scale-110 transition-transform" />
                    <span>{link.label}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social & Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold text-white mb-6">Connect</h3>

            <div className="space-y-4 mb-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className={`flex items-center space-x-3 text-gray-400 ${social.color} transition-colors group`}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon size={16} className="group-hover:scale-110 transition-transform" />
                  <span>{social.label}</span>
                  <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>
              ))}
            </div>

            {/* Newsletter Signup */}
            <motion.div
              className="glass-morphism p-4 rounded-xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ delay: 0.6 }}
            >
              <h4 className="text-sm font-semibold text-[#00ff41] mb-2">
                Stay Updated
              </h4>
              <p className="text-xs text-gray-400 mb-3">
                Get notified about new exercises and tips
              </p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-3 py-2 bg-black/50 border border-white/10 rounded-lg text-sm text-white placeholder-gray-500 focus:border-[#00ff41] focus:outline-none"
                />
                <button className="px-3 py-2 bg-[#00ff41] text-black rounded-lg text-sm font-medium hover:bg-[#00d4ff] transition-colors">
                  Join
                </button>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="pt-8 border-t border-white/10"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-500 text-sm">
              © 2025 PoolQuest. Built for the 1337 community.
            </div>

            {/* Legal Links */}
            <div className="flex space-x-6">
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Status Badge */}
            <motion.div
              className="flex items-center space-x-2 glass-morphism px-3 py-1 rounded-full"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-2 h-2 bg-[#00ff41] rounded-full animate-pulse" />
              <span className="text-xs text-gray-400">All systems operational</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Floating Decoration */}
      <motion.div
        className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-[#00ff41]/5 to-transparent rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
    </footer>
  );
};

export default Footer;