'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  ArrowRight,
  Sparkles,
  Zap,
  Target,
  CheckCircle
} from 'lucide-react';

const FinalCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isHovered, setIsHovered] = useState(false);

  const benefits = [
    'Access to 500+ practice exercises',
    'Complete survival guide with insider tips',
    'Active community of 1000+ poolers',
    '24/7 support during your piscine',
    'Tools and resources used by successful graduates'
  ];

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#00ff41]/5 via-transparent to-[#00d4ff]/5" />

        {/* Floating Elements */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#00ff41]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-[#00d4ff]/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5]
          }}
          transition={{ duration: 4, repeat: Infinity, delay: 2 }}
        />

        {/* Particle Effects */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#00ff41] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center space-x-2 glass-morphism px-4 py-2 rounded-full mb-8"
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <Sparkles size={16} className="text-[#00ff41]" />
            <span className="text-sm font-medium text-[#00ff41]">
              Join 1000+ Successful Poolers
            </span>
            <Sparkles size={16} className="text-[#00d4ff]" />
          </motion.div>

          <motion.h2
            className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Ready to Dive into the{' '}
            <span className="text-gradient-primary relative">
              Piscine?
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-[#00ff41] to-[#00d4ff] rounded-lg opacity-20 blur"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.2, 0.3, 0.2]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </span>
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Don't face the most challenging 4 weeks of your coding journey alone.
            Join our community and give yourself every advantage to succeed.
          </motion.p>

          {/* Benefits Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-3 glass-morphism p-4 rounded-xl"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.02, backgroundColor: 'rgba(0, 255, 65, 0.05)' }}
              >
                <CheckCircle size={20} className="text-[#00ff41] shrink-0" />
                <span className="text-gray-300 text-sm font-medium">{benefit}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            className="relative inline-block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <motion.button
              className="group relative px-12 py-6 bg-gradient-to-r from-[#00ff41] to-[#00d4ff] rounded-full font-black text-black text-xl overflow-hidden"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 25px 50px rgba(0, 255, 65, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Button Background Animation */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#00d4ff] to-[#00ff41]"
                initial={{ x: '100%' }}
                animate={isHovered ? { x: '0%' } : { x: '100%' }}
                transition={{ duration: 0.3 }}
              />

              {/* Button Content */}
              <span className="relative flex items-center space-x-3">
                <Zap size={24} className="group-hover:rotate-12 transition-transform" />
                <span>Join the Hub</span>
                <ArrowRight
                  size={24}
                  className="group-hover:translate-x-2 transition-transform"
                />
              </span>

              {/* Sparkle Effects */}
              <AnimatePresence>
                {isHovered && (
                  <>
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`
                        }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                          opacity: [0, 1, 0],
                          scale: [0, 1, 0],
                          x: Math.random() * 40 - 20,
                          y: Math.random() * 40 - 20
                        }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                      />
                    ))}
                  </>
                )}
              </AnimatePresence>
            </motion.button>

            {/* Glow Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#00ff41] to-[#00d4ff] rounded-full blur-xl opacity-30 -z-10"
              animate={{
                scale: isHovered ? [1, 1.2, 1] : [1, 1.1, 1],
                opacity: isHovered ? [0.3, 0.5, 0.3] : [0.3, 0.4, 0.3]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>

          {/* Success Guarantee */}
          <motion.div
            className="mt-8 flex items-center justify-center space-x-2 text-gray-400"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 1 }}
          >
            <Target size={16} className="text-[#00ff41]" />
            <span className="text-sm">
              Join risk-free • Start preparing today • Success guaranteed
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;