
import { Button } from '@/components/ui/button';
import { Shield, Lock, Eye } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="pt-20 pb-32 bg-hero-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <Shield className="w-24 h-24 text-cyber-blue animate-pulse-glow" />
              <div className="absolute inset-0 bg-cyber-blue/20 rounded-full animate-glow"></div>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyber-blue to-cyber-purple bg-clip-text text-transparent">
            Stop Fraud Before It Starts
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Advanced AI-powered fraud detection that protects your business and customers 
            with real-time threat analysis and prevention.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button className="cyber-button text-lg px-8 py-4">
              Start Free Trial
            </Button>
            <Button variant="outline" className="text-lg px-8 py-4 border-cyber-blue text-cyber-blue hover:bg-cyber-blue/10">
              Watch Demo
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="cyber-card p-6 text-center">
              <Lock className="w-12 h-12 text-cyber-blue mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">99.9% Accuracy</h3>
              <p className="text-slate-400">Industry-leading fraud detection with minimal false positives</p>
            </div>
            
            <div className="cyber-card p-6 text-center">
              <Eye className="w-12 h-12 text-cyber-green mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">Real-time Analysis</h3>
              <p className="text-slate-400">Instant threat detection and response in milliseconds</p>
            </div>
            
            <div className="cyber-card p-6 text-center">
              <Shield className="w-12 h-12 text-cyber-purple mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">AI-Powered</h3>
              <p className="text-slate-400">Machine learning algorithms that adapt to new threats</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
