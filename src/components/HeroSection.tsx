
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-hero-gradient"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyber-blue/10 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyber-purple/10 rounded-full blur-3xl animate-pulse-glow"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyber-blue/20 to-cyber-purple/20 border border-cyber-blue/30 mb-8">
            <span className="text-cyber-blue text-sm font-medium">🚀 Now in Beta</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              SecureMe:
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyber-blue to-cyber-purple bg-clip-text text-transparent cyber-text-glow">
              Stop Fraud Before It Starts
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Advanced AI-powered identity verification and real-time fraud detection that protects your business and builds customer trust.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="cyber-button text-lg px-8 py-4">
              🎯 Try Live Demo
            </Button>
            <Button size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:text-white hover:border-cyber-blue transition-all duration-300">
              📖 See How It Works
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-slate-400 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-cyber-green">✓</span>
              <span>99.9% Accuracy</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-cyber-green">✓</span>
              <span>Sub-second Response</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-cyber-green">✓</span>
              <span>Enterprise Grade</span>
            </div>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="relative mt-16">
          <div className="cyber-card p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Real-time Detection */}
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyber-blue to-cyber-purple rounded-full flex items-center justify-center text-2xl">
                  🔍
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Real-Time Detection</h3>
                <p className="text-slate-400 text-sm">Instant fraud analysis with ML algorithms</p>
              </div>

              {/* Identity Verification */}
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyber-green to-cyber-blue rounded-full flex items-center justify-center text-2xl">
                  🛡️
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Identity Verification</h3>
                <p className="text-slate-400 text-sm">Biometric and document authentication</p>
              </div>

              {/* Smart Alerts */}
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyber-purple to-cyber-red rounded-full flex items-center justify-center text-2xl">
                  ⚡
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Smart Alerts</h3>
                <p className="text-slate-400 text-sm">Intelligent risk scoring and notifications</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
