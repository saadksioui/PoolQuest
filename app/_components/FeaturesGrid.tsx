'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  BookOpen,
  FolderOpen,
  Puzzle,
  Users,
  ArrowUpRight,
  Code,
  Terminal,
  GitBranch
} from 'lucide-react';

const FeaturesGrid = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: BookOpen,
      title: 'Survival Guide',
      description: 'Tips, strategies, and do\'s & don\'ts from students who\'ve been through the piscine',
      color: 'from-[#00ff41] to-[#32ff7e]',
      details: ['Time management strategies', 'Common pitfalls to avoid', 'Peer evaluation tips']
    },
    {
      icon: FolderOpen,
      title: 'Essential Resources',
      description: 'Curated C programming, Git, and Vim essentials you\'ll need during the piscine',
      color: 'from-[#00d4ff] to-[#4facfe]',
      details: ['C language references', 'Git workflow guides', 'Vim configuration files']
    },
    {
      icon: Puzzle,
      title: 'Practice Exercises',
      description: 'Track your progress and practice piscine-style challenges before you dive in',
      color: 'from-[#ff006e] to-[#ff8500]',
      details: ['Shell exercises', 'C programming challenges', 'Progress tracking']
    },
    {
      icon: Users,
      title: 'Pooler Community',
      description: 'Connect and collaborate with current and former 1337 students worldwide',
      color: 'from-[#8b5cf6] to-[#a78bfa]',
      details: ['Study groups', 'Mentorship program', '24/7 Discord support']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const // ✅ tell TS it's a valid easing
      }
    }
  };

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6"
            variants={itemVariants}
          >
            Everything You Need to{' '}
            <span className="text-gradient-primary">Survive</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Comprehensive tools and resources designed specifically for the unique challenges of the 1337 piscine
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group glass-morphism p-8 rounded-3xl hover:bg-white/10 transition-all duration-500 cursor-pointer"
              variants={itemVariants}
              whileHover={{
                scale: 1.03,
                rotateX: 5,
                rotateY: 5,
              }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="flex items-start space-x-6">
                <div className={`p-4 rounded-2xl bg-gradient-to-br ${feature.color} shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon size={32} className="text-black" />
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-[#00ff41] transition-colors">
                      {feature.title}
                    </h3>
                    <ArrowUpRight
                      size={24}
                      className="text-gray-500 group-hover:text-[#00ff41] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                    />
                  </div>

                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {feature.description}
                  </p>

                  <ul className="space-y-2">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-500">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${feature.color} mr-3`} />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Hover Effect Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`} />
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {[
            { icon: Code, stat: '500+', label: 'Exercises' },
            { icon: Terminal, stat: '50+', label: 'Shell Scripts' },
            { icon: GitBranch, stat: '100+', label: 'Git Tips' }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="text-center group"
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
            >
              <div className="inline-flex p-4 rounded-2xl glass-morphism mb-4 group-hover:bg-[#00ff41]/10 transition-colors">
                <item.icon size={32} className="text-[#00ff41]" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{item.stat}</div>
              <div className="text-gray-400 text-sm">{item.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesGrid;