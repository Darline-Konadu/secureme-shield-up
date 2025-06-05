
const FeaturesSection = () => {
  const features = [
    {
      icon: "🔐",
      title: "Identity Verification",
      description: "Advanced biometric authentication with document scanning, facial recognition, and liveness detection.",
      stats: "99.7% accuracy",
      color: "from-cyber-blue to-cyber-purple"
    },
    {
      icon: "🚨",
      title: "Real-Time Fraud Detection",
      description: "AI-powered analysis of user behavior, device fingerprinting, and transaction patterns.",
      stats: "<100ms response",
      color: "from-cyber-purple to-cyber-red"
    },
    {
      icon: "📊",
      title: "Risk Dashboard",
      description: "Comprehensive analytics with customizable alerts, risk scores, and detailed reporting.",
      stats: "24/7 monitoring",
      color: "from-cyber-green to-cyber-blue"
    }
  ];

  const steps = [
    {
      step: "01",
      title: "Input",
      description: "User submits identity documents or transaction data",
      icon: "📝"
    },
    {
      step: "02", 
      title: "Analyze",
      description: "Our AI processes data through multiple verification layers",
      icon: "🧠"
    },
    {
      step: "03",
      title: "Act",
      description: "Instant risk assessment with smart recommendations",
      icon: "⚡"
    }
  ];

  return (
    <section id="features" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              How SecureMe
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyber-blue to-cyber-purple bg-clip-text text-transparent">
              Protects Your Business
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Advanced fraud prevention powered by cutting-edge AI and machine learning
          </p>
        </div>

        {/* Main Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="cyber-card p-8 hover:scale-105 transition-transform duration-300">
              <div className={`w-16 h-16 mb-6 bg-gradient-to-br ${feature.color} rounded-full flex items-center justify-center text-2xl`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-slate-300 mb-4 leading-relaxed">{feature.description}</p>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-cyber-blue/20 border border-cyber-blue/30">
                <span className="text-cyber-blue text-sm font-medium">{feature.stats}</span>
              </div>
            </div>
          ))}
        </div>

        {/* How It Works Process */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-white">
            Simple 3-Step Process
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-cyber-blue to-transparent transform -translate-y-1/2 z-0"></div>
                )}
                
                <div className="cyber-card p-8 text-center relative z-10">
                  <div className="text-6xl mb-4">{step.icon}</div>
                  <div className="text-cyber-blue text-4xl font-bold mb-2">{step.step}</div>
                  <h4 className="text-xl font-semibold text-white mb-3">{step.title}</h4>
                  <p className="text-slate-300">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Integration Preview */}
        <div className="cyber-card p-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">Easy API Integration</h3>
            <p className="text-slate-300">Get started with just a few lines of code</p>
          </div>
          
          <div className="bg-slate-900 rounded-lg p-6 max-w-2xl mx-auto border border-slate-700">
            <div className="flex items-center mb-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="ml-4 text-slate-400 text-sm">SecureMe API</span>
            </div>
            <pre className="text-cyber-blue text-sm overflow-x-auto">
              <code>{`// Initialize SecureMe
const secureme = new SecureMe('your-api-key');

// Verify identity
const result = await secureme.verify({
  document: uploadedFile,
  biometric: cameraCapture
});

// Check fraud risk
if (result.riskScore < 0.3) {
  approveTransaction();
}`}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
