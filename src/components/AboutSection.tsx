
const AboutSection = () => {
  const milestones = [
    {
      year: "2023",
      title: "The Problem",
      description: "Witnessed growing fraud rates affecting businesses worldwide. Traditional security measures were falling behind sophisticated attacks."
    },
    {
      year: "2024", 
      title: "The Solution",
      description: "Started building SecureMe using cutting-edge AI and machine learning to create the next generation of fraud prevention."
    },
    {
      year: "2025",
      title: "The Impact", 
      description: "Launching beta with enterprise-grade security that's accessible to businesses of all sizes."
    }
  ];

  const values = [
    {
      icon: "🛡️",
      title: "Trust First",
      description: "Building technology that puts security and privacy at the foundation of every digital interaction."
    },
    {
      icon: "🚀",
      title: "Innovation",
      description: "Pushing the boundaries of what's possible with AI-powered fraud detection and identity verification."
    },
    {
      icon: "🤝",
      title: "Accessibility",
      description: "Making enterprise-grade security available to businesses of all sizes, not just Fortune 500 companies."
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              About
            </span>
            <span className="bg-gradient-to-r from-cyber-blue to-cyber-purple bg-clip-text text-transparent ml-4">
              SecureMe
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Building the future of digital trust through innovative fraud prevention technology
          </p>
        </div>

        {/* Mission Statement */}
        <div className="cyber-card p-12 mb-16 text-center">
          <h3 className="text-3xl font-bold text-white mb-6">Our Mission</h3>
          <p className="text-xl text-slate-300 leading-relaxed max-w-4xl mx-auto">
            In a world where digital fraud costs businesses billions annually, we're building the intelligent defense system that protects what matters most. SecureMe combines cutting-edge AI, real-time analysis, and intuitive design to make advanced security accessible to everyone.
          </p>
        </div>

        {/* Story Timeline */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-white">Our Journey</h3>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/4 text-center md:text-right">
                  <div className="text-4xl font-bold text-cyber-blue mb-2">{milestone.year}</div>
                </div>
                <div className="md:w-1/12 flex justify-center">
                  <div className="w-4 h-4 bg-cyber-blue rounded-full"></div>
                </div>
                <div className="md:w-2/3">
                  <div className="cyber-card p-6">
                    <h4 className="text-xl font-bold text-white mb-3">{milestone.title}</h4>
                    <p className="text-slate-300">{milestone.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-white">What Drives Us</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="cyber-card p-8 text-center">
                <div className="text-5xl mb-6">{value.icon}</div>
                <h4 className="text-xl font-bold text-white mb-4">{value.title}</h4>
                <p className="text-slate-300 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Founder's Note */}
        <div className="cyber-card p-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-2/3">
                <blockquote className="text-xl text-slate-300 italic leading-relaxed mb-6">
                  "Every day, businesses lose money and customers lose trust due to fraud. We started SecureMe because we believe technology should make the digital world safer, not more vulnerable. Our goal isn't just to detect fraud—it's to prevent it entirely."
                </blockquote>
                <div className="text-white">
                  <div className="font-bold text-lg">— The SecureMe Team</div>
                  <div className="text-slate-400">Founders & Security Engineers</div>
                </div>
              </div>
              <div className="md:w-1/3">
                <div className="w-64 h-64 bg-gradient-to-br from-cyber-blue to-cyber-purple rounded-full flex items-center justify-center text-6xl">
                  🛡️
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: "500K+", label: "Verifications Processed" },
            { number: "99.7%", label: "Accuracy Rate" },
            { number: "<100ms", label: "Average Response Time" },
            { number: "24/7", label: "Monitoring & Support" }
          ].map((stat, index) => (
            <div key={index}>
              <div className="text-4xl font-bold text-cyber-blue mb-2">{stat.number}</div>
              <div className="text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
