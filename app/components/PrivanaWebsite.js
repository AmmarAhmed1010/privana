'use client';

import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Shield, Zap, Users, ArrowRight, CheckCircle, Smartphone, Lock, Globe, ChevronDown } from 'lucide-react';

const AnimatedSection = ({ children, className = "", delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const GlowCard = ({ children, className = "" }) => {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.05,
        boxShadow: `0 20px 40px rgba(0, 255, 255, 0.3), 0 0 60px rgba(0, 255, 255, 0.2)`,
      }}
      transition={{ duration: 0.3 }}
      className={`relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

const FlowStep = ({ icon: Icon, title, description, index, isLast }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="flex items-center gap-4 relative"
    >
      <div className="flex-shrink-0">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 360 }}
          transition={{ duration: 0.5 }}
          className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/25"
        >
          <Icon className="w-8 h-8 text-white" />
        </motion.div>
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
      {!isLast && (
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
          className="absolute -bottom-8 left-8 w-0.5 h-16 bg-gradient-to-b from-cyan-500 to-purple-500 origin-top"
        />
      )}
    </motion.div>
  );
};

const TeamCard = ({ name, role, description }) => {
  return (
    <GlowCard className="text-center group">
      <motion.div
        whileHover={{ rotateY: 180 }}
        transition={{ duration: 0.6 }}
        className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-white shadow-lg shadow-cyan-500/25"
      >
        {name.charAt(0)}
      </motion.div>
      <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
      <p className="text-cyan-400 mb-3">{role}</p>
      <p className="text-gray-300 text-sm">{description}</p>
    </GlowCard>
  );
};

export default function PrivanaWebsite() {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const [activeQuestion, setActiveQuestion] = useState(null);

  const questions = [
    {
      q: "How do you ensure legal compliance in Switzerland?",
      a: "We align with FADP, ZertES, and GDPR—no PII on-chain, full user consent."
    },
    {
      q: "Can this expand beyond real estate?",
      a: "Yes, our platform is industry-agnostic and can be used in banking, healthcare, and more."
    },
    {
      q: "How secure is the blockchain technology?",
      a: "We use tamper-proof blockchain technology with zero-knowledge proofs for maximum security."
    }
  ];

  return (
    <div className="bg-black text-white font-['Inter',sans-serif] overflow-x-hidden">
      {/* Animated Background */}
      <motion.div 
        style={{ y: backgroundY }}
        className="fixed inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.1),transparent_50%)]" />
      </motion.div>

      {/* Header Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center text-3xl font-bold shadow-lg shadow-cyan-500/50">
              P
            </div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent leading-tight"
          >
            Privana
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-2xl md:text-3xl text-gray-300 mb-8 font-light"
          >
            One Identity. Trusted Everywhere.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto"
          >
            Decentralized Digital Identity for Real Estate in Switzerland
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="animate-bounce"
          >
            <ChevronDown className="w-8 h-8 text-cyan-400 mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <AnimatedSection className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold mb-8 text-red-400"
          >
            The Problem
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl text-gray-300 leading-relaxed"
          >
            Identity verification is{" "}
            <span className="text-red-400 font-semibold">slow</span>,{" "}
            <span className="text-red-400 font-semibold">repetitive</span>, and{" "}
            <span className="text-red-400 font-semibold">insecure</span>{" "}
            in real estate.
          </motion.p>
        </div>
      </AnimatedSection>

      {/* Pain Points Section */}
      <AnimatedSection className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-center mb-16 text-white"
          >
            Top 3 Pain Points
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <GlowCard>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-red-400" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Redundancy</h3>
                <p className="text-gray-300">Clients must submit the same documents to every party (agent, notary, bank).</p>
              </div>
            </GlowCard>
            
            <GlowCard>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-red-400" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Fraud & Privacy Risk</h3>
                <p className="text-gray-300">Centralized document storage is vulnerable to breaches and forgery.</p>
              </div>
            </GlowCard>
            
            <GlowCard>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-red-400" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Compliance Burden</h3>
                <p className="text-gray-300">Agencies face costly, manual KYC/AML checks.</p>
              </div>
            </GlowCard>
          </div>
        </div>
      </AnimatedSection>

      {/* Solution Section */}
      <AnimatedSection className="py-20 px-4 bg-gradient-to-r from-cyan-900/20 to-purple-900/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Our Solution
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A mobile digital identity wallet powered by blockchain, Self-Sovereign Identity, and Zero-Knowledge Proofs.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">One-time Verification</h3>
                  <p className="text-gray-300">Verified once by trusted authorities (government, notary, bank)</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">User Control</h3>
                  <p className="text-gray-300">Users own their credentials—share only proofs, not documents</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Instant Verification</h3>
                  <p className="text-gray-300">Agencies verify instantly—no PII stored, no paperwork</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-8 backdrop-blur-sm border border-cyan-500/30">
                <Smartphone className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-center text-white mb-4">Digital Identity Wallet</h3>
                <p className="text-center text-gray-300">Secure, private, and user-controlled</p>
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* User Journey Flow */}
      <AnimatedSection className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-center mb-16 text-white"
          >
            User Journey
          </motion.h2>
          
          <div className="space-y-16">
            <FlowStep
              icon={Smartphone}
              title="Mobile Wallet"
              description="User downloads and sets up their secure digital identity wallet"
              index={0}
            />
            <FlowStep
              icon={Shield}
              title="Verify Identity"
              description="One-time verification by trusted authority with blockchain-backed credentials"
              index={1}
            />
            <FlowStep
              icon={Lock}
              title="Share Proof"
              description="Share zero-knowledge proofs with agencies—no personal data exposed"
              index={2}
              isLast
            />
          </div>
        </div>
      </AnimatedSection>

      {/* Why Now Section */}
      <AnimatedSection className="py-20 px-4 bg-gradient-to-r from-purple-900/20 to-cyan-900/20">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-center mb-16 text-white"
          >
            Why Now? Why Blockchain?
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-cyan-400">Why Now?</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <Globe className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <span>Switzerland leads in blockchain regulation and adoption</span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <span>Rising fraud and data breach concerns in real estate</span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <span>Digital transformation accelerated by recent global events</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-purple-400">Why Blockchain?</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <Lock className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                  <span>Tamper-proof and decentralized verification</span>
                </li>
                <li className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                  <span>User-owned identity without central authority</span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                  <span>Zero-knowledge proofs for maximum privacy</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Team Section */}
      <AnimatedSection className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-center mb-16 text-white"
          >
            Meet the Team
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <TeamCard
              name="Rasil"
              role="Co-Founder & CTO"
              description="Blockchain architect with expertise in decentralized identity systems"
            />
            <TeamCard
              name="Hassaan"
              role="Co-Founder & CEO"
              description="Product visionary focused on real estate technology innovation"
            />
            <TeamCard
              name="Ammar"
              role="Co-Founder & CPO"
              description="Privacy expert specializing in zero-knowledge proof implementations"
            />
          </div>
        </div>
      </AnimatedSection>

      {/* Q&A Section */}
      <AnimatedSection className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-center mb-16 text-white"
          >
            Questions & Answers
          </motion.h2>
          
          <div className="space-y-4">
            {questions.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border border-gray-800 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setActiveQuestion(activeQuestion === index ? null : index)}
                  className="w-full p-6 text-left bg-gray-900/50 hover:bg-gray-800/50 transition-colors duration-300 flex justify-between items-center"
                >
                  <span className="text-lg font-semibold text-white">{item.q}</span>
                  <motion.div
                    animate={{ rotate: activeQuestion === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-cyan-400" />
                  </motion.div>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: activeQuestion === index ? 'auto' : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 bg-gray-800/30 text-gray-300">
                    {item.a}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
          >
            Ready to Transform Identity?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
          >
            Join us in revolutionizing digital identity for the Swiss real estate market and beyond.
          </motion.p>
          
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0, 255, 255, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 flex items-center gap-3 mx-auto"
          >
            Get Started Today
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </AnimatedSection>

      {/* Footer */}
      <footer className="relative z-10 py-12 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center text-xl font-bold">
            P
          </div>
          <p className="text-gray-400 mb-4">© 2024 Privana. All rights reserved.</p>
          <p className="text-gray-500 text-sm">
            Decentralized Digital Identity for Real Estate in Switzerland
          </p>
        </div>
      </footer>
    </div>
  );
}
