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
        <p className="text-white">{description}</p>
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
      <p className="text-purple-400 mb-3">{role}</p>
      <p className="text-white text-sm">{description}</p>
    </GlowCard>
  );
};

export default function PrivanaWebsite() {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);



  return (
    <div className="bg-black text-white font-['Inter',sans-serif] overflow-x-hidden">
      {/* Animated Background */}
      <motion.div 
        style={{ y: backgroundY }}
        className="fixed inset-0 z-0"
      >
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
            className="text-2xl md:text-3xl text-white mb-8 font-light"
          >
            One Identity. Trusted Everywhere.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="text-lg text-purple-300 mb-12 max-w-2xl mx-auto"
          >
            Decentralized Digital Identity for Real Estate
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="animate-bounce"
          >
            <ChevronDown className="w-8 h-8 text-purple-400 mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <AnimatedSection className="py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold mb-8 text-purple-400"
          >
            The Problem
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-left max-w-4xl mx-auto"
          >
            <p className="text-xl text-white leading-relaxed mb-6">
              In the real estate market, verifying the identity of buyers, renters, and property owners, along with validating the authenticity of documents (like ownership papers, lease agreements, and NOCs), is{" "}
              <span className="text-purple-400 font-semibold">manual</span>,{" "}
              <span className="text-purple-400 font-semibold">time-consuming</span>, and{" "}
              <span className="text-purple-400 font-semibold">vulnerable to fraud</span>.
            </p>
            <p className="text-lg text-purple-300">
              There is no trusted, universal system to instantly verify people and documents during a transaction — especially in peer-to-peer or cross-border deals.
            </p>
          </motion.div>
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
          
          <div className="grid lg:grid-cols-3 gap-8">
            <GlowCard>
              <div className="text-left">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">For Buyers and Renters</h3>
                <ul className="text-white space-y-2 text-sm">
                  <li>• Lack of trust in agents or landlords; fear of falling for scams</li>
                  <li>• No easy way to verify ownership or legitimacy of property documents</li>
                  <li>• Delayed deals due to slow, offline paperwork and manual verifications</li>
                </ul>
              </div>
            </GlowCard>
            
            <GlowCard>
              <div className="text-left">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mb-4">
                  <Shield className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">For Sellers and Landlords</h3>
                <ul className="text-white space-y-2 text-sm">
                  <li>• Difficulty in proving ownership quickly to serious buyers</li>
                  <li>• Risk of dealing with fake identities or bad actors</li>
                  <li>• Manual identity verification (KYC) is costly and inconsistent</li>
                </ul>
              </div>
            </GlowCard>
            
            <GlowCard>
              <div className="text-left">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mb-4">
                  <Globe className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">For Real Estate Platforms</h3>
                <ul className="text-white space-y-2 text-sm">
                  <li>• Limited standardization for document verification</li>
                  <li>• Legal liability in case of fraudulent listings or transactions</li>
                  <li>• Users lose confidence in the platform's security and trustworthiness</li>
                </ul>
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
            <p className="text-xl text-white max-w-3xl mx-auto">
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
                  <p className="text-white">Verified once by trusted authorities (government, notary, bank)</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">User Control</h3>
                  <p className="text-white">Users own their credentials—share only proofs, not documents</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Instant Verification</h3>
                  <p className="text-white">Agencies verify instantly—no PII stored, no paperwork</p>
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
                <p className="text-center text-white">Secure, private, and user-controlled</p>
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

      {/* Why It's Important Section */}
      <AnimatedSection className="py-20 px-4 bg-gradient-to-r from-purple-900/10 to-cyan-900/10">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-center mb-16 text-white"
          >
            Why It's Important to Solve
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Trust is Foundation</h3>
                  <p className="text-white">Trust is the foundation of real estate — without it, transactions fall apart, especially in digital-first or cross-border scenarios.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Fraud is Rising</h3>
                  <p className="text-white">Real estate fraud is on the rise globally — with billions lost annually due to fake identities or forged documents.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Regulatory Alignment</h3>
                  <p className="text-white">Governments and fintech regulators are pushing for digital KYC and document digitization — you're aligning with the future of regulation.</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-8 backdrop-blur-sm border border-cyan-500/20"
            >
              <h3 className="text-2xl font-bold mb-6 text-purple-400">Our Solution Can:</h3>
              <ul className="space-y-4 text-white">
                <li className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                  <span><strong>Speed up transactions</strong> dramatically</span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                  <span><strong>Reduce fraud</strong> dramatically</span>
                </li>
                <li className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                  <span><strong>Build trust</strong> between all parties</span>
                </li>
                <li className="flex items-start gap-3">
                  <Globe className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                  <span><strong>Open access</strong> to verified, secure real estate deals for a broader market</span>
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
            className="text-xl text-white mb-12 max-w-2xl mx-auto"
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
          <p className="text-white mb-4">© 2024 Privana. All rights reserved.</p>
          <p className="text-purple-300 text-sm">
            Decentralized Digital Identity for Real Estate      
          </p>
        </div>
      </footer>
    </div>
  );
}
