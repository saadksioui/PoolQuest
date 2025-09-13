'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import {
  Terminal,
  Code,
  Play,
  CheckCircle,
  ArrowRight,
  FileText
} from 'lucide-react';

const InteractiveDemo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState('terminal');
  const [typedCode, setTypedCode] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const codeExample = `#include <stdio.h>
#include <unistd.h>

int main(void)
{
    char *str = "Hello, 1337!";
    int i = 0;

    while (str[i])
    {
        write(1, &str[i], 1);
        i++;
    }
    write(1, "\\n", 1);
    return (0);
}`;

  const terminalCommands = [
    { command: 'gcc -Wall -Wextra -Werror main.c -o hello', delay: 0 },
    { command: './hello', delay: 1000 },
    { command: 'Hello, 1337!', delay: 1500, output: true },
    { command: 'norminette main.c', delay: 2500 },
    { command: 'main.c: OK!', delay: 3000, output: true, success: true }
  ];

  const [currentCommand, setCurrentCommand] = useState(0);

  useEffect(() => {
    if (activeTab === 'code' && isInView) {
      setIsTyping(true);
      let index = 0;
      const interval = setInterval(() => {
        if (index <= codeExample.length) {
          setTypedCode(codeExample.slice(0, index));
          index++;
        } else {
          setIsTyping(false);
          clearInterval(interval);
        }
      }, 30);
      return () => clearInterval(interval);
    }
  }, [activeTab, isInView]);

  useEffect(() => {
    if (activeTab === 'terminal' && isInView) {
      const timer = setTimeout(() => {
        if (currentCommand < terminalCommands.length - 1) {
          setCurrentCommand(prev => prev + 1);
        }
      }, terminalCommands[currentCommand]?.delay || 1000);
      return () => clearTimeout(timer);
    }
  }, [currentCommand, activeTab, isInView]);

  const tabs = [
    { id: 'terminal', label: 'Terminal', icon: Terminal },
    { id: 'code', label: 'Code Editor', icon: Code },
    { id: 'exercises', label: 'Exercises', icon: FileText }
  ];

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Experience the{' '}
            <span className="text-gradient-primary">Piscine Environment</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Get familiar with the tools and workflow you'll use during your 1337 journey
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Interactive Demo Panel */}
          <motion.div
            className="glass-morphism rounded-3xl overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Tab Navigation */}
            <div className="flex border-b border-white/10">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 flex items-center justify-center space-x-2 py-4 px-6 transition-all ${
                    activeTab === tab.id
                      ? 'bg-[#00ff41]/10 text-[#00ff41] border-b-2 border-[#00ff41]'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <tab.icon size={20} />
                  <span className="font-medium">{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="p-6 h-96">
              <AnimatePresence mode="wait">
                {activeTab === 'terminal' && (
                  <motion.div
                    key="terminal"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="font-mono text-sm bg-black/50 rounded-xl p-4 h-full overflow-hidden"
                  >
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <span className="ml-4 text-gray-400">student@1337:~/piscine$</span>
                    </div>
                    {terminalCommands.slice(0, currentCommand + 1).map((cmd, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className={`mb-2 ${cmd.output ? 'text-gray-300' : 'text-[#00ff41]'} ${
                          cmd.success ? 'text-[#00ff41]' : ''
                        }`}
                      >
                        {!cmd.output && <span className="text-gray-400">$ </span>}
                        {cmd.command}
                        {cmd.success && <CheckCircle size={16} className="inline ml-2" />}
                      </motion.div>
                    ))}
                    <motion.div
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="inline-block w-2 h-4 bg-[#00ff41] ml-1"
                    />
                  </motion.div>
                )}

                {activeTab === 'code' && (
                  <motion.div
                    key="code"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="font-mono text-sm bg-black/50 rounded-xl p-4 h-full overflow-auto"
                  >
                    <pre className="text-gray-300 whitespace-pre-wrap">
                      {typedCode}
                      {isTyping && (
                        <motion.span
                          animate={{ opacity: [1, 0, 1] }}
                          transition={{ duration: 0.5, repeat: Infinity }}
                          className="bg-[#00ff41] text-black"
                        >
                          |
                        </motion.span>
                      )}
                    </pre>
                  </motion.div>
                )}

                {activeTab === 'exercises' && (
                  <motion.div
                    key="exercises"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-4 h-full overflow-auto"
                  >
                    {[
                      { title: 'Shell 00', progress: 100, difficulty: 'Easy' },
                      { title: 'Shell 01', progress: 80, difficulty: 'Medium' },
                      { title: 'C 00', progress: 60, difficulty: 'Hard' },
                      { title: 'C 01', progress: 0, difficulty: 'Hard' }
                    ].map((exercise, index) => (
                      <motion.div
                        key={index}
                        className="glass-morphism p-4 rounded-xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-semibold">{exercise.title}</h4>
                          <span className={`text-xs px-2 py-1 rounded ${
                            exercise.difficulty === 'Easy' ? 'bg-green-500/20 text-green-400' :
                            exercise.difficulty === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                            'bg-red-500/20 text-red-400'
                          }`}>
                            {exercise.difficulty}
                          </span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                          <motion.div
                            className="bg-gradient-to-r from-[#00ff41] to-[#00d4ff] h-2 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${exercise.progress}%` }}
                            transition={{ duration: 1, delay: index * 0.2 }}
                          />
                        </div>
                        <p className="text-sm text-gray-400">{exercise.progress}% Complete</p>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Feature Highlights */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Practice Before You <span className="text-[#00ff41]">Dive In</span>
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Get comfortable with the exact tools and environment you'll use during the piscine.
                Practice shell commands, C programming, and learn the norminette before day one.
              </p>
            </div>

            {[
              {
                title: 'Real Terminal Environment',
                description: 'Practice with the same bash commands and file structure used at 1337',
                icon: Terminal
              },
              {
                title: 'Norminette Integration',
                description: 'Check your code against 1337\'s coding standards before submission',
                icon: CheckCircle
              },
              {
                title: 'Progressive Learning',
                description: 'Start with Shell exercises and advance to complex C projects',
                icon: ArrowRight
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="flex space-x-4 glass-morphism p-4 rounded-xl hover:bg-white/5 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <div className="p-2 rounded-lg bg-[#00ff41]/20 shrink-0">
                  <feature.icon size={24} className="text-[#00ff41]" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">{feature.title}</h4>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              </motion.div>
            ))}

            <motion.button
              className="w-full glass-morphism px-6 py-4 rounded-xl text-[#00ff41] border border-[#00ff41]/30 hover:border-[#00ff41] hover:bg-[#00ff41]/10 transition-all duration-300 font-semibold flex items-center justify-center space-x-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 1 }}
            >
              <Play size={20} />
              <span>Try Interactive Demo</span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemo;