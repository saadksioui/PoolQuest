'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import Scene3D from './Scene3D';

const HeroSection = () => {
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
        ease: "easeOut" as const
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Scene3D />
      </div>

      {/* Matrix Code Rain Effect */}
      <div className="absolute inset-0 z-10 opacity-20">
        <div className="animate-code-rain text-[#00ff41] font-mono text-sm leading-tight">
          {Array.from({ length: 20 }, (_, i) => (
            <div
              key={i}
              className="absolute text-xs"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${10 + Math.random() * 10}s`
              }}
            >
              {Array.from({ length: 50 }, () =>
                Math.random() > 0.5 ? '1' : '0'
              ).join('')}
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <motion.div
        className="relative z-20 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight"
          variants={itemVariants}
        >
          <span className="block">Survive the</span>
          <span className="text-gradient-primary block animate-pulse">Piscine</span>
          <span className="block">Thrive in 1337</span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          Comprehensive guides, resources, and practice tools made by{' '}
          <span className="text-[#00d4ff] font-semibold">ex-poolers</span> for{' '}
          <span className="text-[#00ff41] font-semibold">future poolers</span>.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          variants={itemVariants}
        >
          <motion.button
            className="group relative px-8 py-4 bg-gradient-to-r from-[#00ff41] to-[#00d4ff] rounded-full font-bold text-black text-lg neon-glow hover:neon-glow-blue transition-all duration-300 min-w-[200px]"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(0, 255, 65, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center justify-center gap-2">
              Get Started
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.button>

          <motion.button
            className="group glass-morphism px-8 py-4 rounded-full font-bold text-white border border-white/20 hover:border-[#00d4ff] transition-all duration-300 min-w-[200px]"
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(0, 212, 255, 0.1)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center justify-center gap-2">
              <Play size={20} className="group-hover:scale-110 transition-transform" />
              View Exercises
            </span>
          </motion.button>
        </motion.div>

        {/* Floating Stats */}
        <motion.div
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={itemVariants}
        >
          {[
            { number: '1000+', label: 'Students Helped', color: 'text-[#00ff41]' },
            { number: '95%', label: 'Success Rate', color: 'text-[#00d4ff]' },
            { number: '24/7', label: 'Community Support', color: 'text-white' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="glass-morphism p-6 rounded-2xl"
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                rotateX: 5
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                {stat.number}
              </div>
              <div className="text-gray-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <div className="w-6 h-10 border-2 border-[#00ff41] rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-[#00ff41] rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;