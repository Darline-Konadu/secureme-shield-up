
import { Shield, Brain, Zap, Users, BarChart3, Lock } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Detection",
      description: "Advanced machine learning algorithms analyze patterns and detect anomalies in real-time."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Process millions of transactions per second with sub-millisecond response times."
    },
    {
      icon: Shield,
      title: "Multi-Layer Protection",
      description: "Comprehensive security with device fingerprinting, behavioral analysis, and risk scoring."
    },
    {
      icon: Users,
      title: "User-Friendly",
      description: "Seamless integration that doesn't disrupt your customer experience."
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Detailed insights and reporting to help you understand and prevent fraud."
    },
    {
      icon: Lock,
      title: "Enterprise Security",
      description: "Bank-grade encryption and compliance with industry standards."
    }
  ];

  return (
    <section id="features" className="py-24 bg-cyber-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyber-blue to-cyber-purple bg-clip-text text-transparent">
            Powerful Features
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Everything you need to protect your business from fraud and maintain customer trust.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="cyber-card p-8 hover:scale-105 transition-transform duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-r from-cyber-blue to-cyber-purple p-3 rounded-lg mr-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-slate-400 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
