
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';

const DemoSection = () => {
  const [demoStep, setDemoStep] = useState(0);
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    document: ''
  });
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleDemo = () => {
    if (demoStep === 0) {
      setIsAnalyzing(true);
      setTimeout(() => {
        setIsAnalyzing(false);
        setDemoStep(1);
      }, 3000);
    } else {
      setDemoStep(0);
    }
  };

  const riskIndicators = [
    { label: 'Device Trust Score', value: 94, color: 'text-cyber-green' },
    { label: 'Behavioral Analysis', value: 87, color: 'text-cyber-blue' },
    { label: 'Document Authenticity', value: 96, color: 'text-cyber-green' },
    { label: 'Biometric Match', value: 99, color: 'text-cyber-green' }
  ];

  return (
    <section id="demo" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              See SecureMe
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyber-blue to-cyber-purple bg-clip-text text-transparent">
              In Action
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Try our interactive demo to see how SecureMe detects fraud and verifies identity in real-time
          </p>
        </div>

        {/* Demo Interface */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Panel */}
            <div className="cyber-card p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="text-2xl mr-3">🔒</span>
                Identity Verification Demo
              </h3>
              
              {demoStep === 0 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      placeholder="user@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="bg-slate-800 border-slate-600 text-white"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="bg-slate-800 border-slate-600 text-white"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Document Upload (Simulated)
                    </label>
                    <div className="border-2 border-dashed border-slate-600 rounded-lg p-6 text-center">
                      <div className="text-4xl mb-2">📄</div>
                      <p className="text-slate-400 text-sm">Click to upload ID document</p>
                      <p className="text-xs text-slate-500 mt-1">Demo mode - no real upload required</p>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={handleDemo}
                    className="cyber-button w-full"
                    disabled={isAnalyzing}
                  >
                    {isAnalyzing ? 'Analyzing...' : 'Start Verification'}
                  </Button>
                </div>
              )}

              {demoStep === 1 && (
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-6xl mb-4">✅</div>
                    <h4 className="text-xl font-bold text-cyber-green mb-2">Verification Complete</h4>
                    <p className="text-slate-300">Identity successfully verified with high confidence</p>
                  </div>
                  
                  <Button 
                    onClick={handleDemo}
                    className="cyber-button w-full"
                  >
                    Try Again
                  </Button>
                </div>
              )}
            </div>

            {/* Analysis Panel */}
            <div className="cyber-card p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="text-2xl mr-3">📊</span>
                Real-Time Analysis
              </h3>
              
              {isAnalyzing && (
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="animate-spin w-16 h-16 border-4 border-cyber-blue border-t-transparent rounded-full mx-auto mb-4"></div>
                    <p className="text-slate-300">Processing verification...</p>
                  </div>
                  
                  <div className="space-y-3">
                    {['Document Analysis', 'Biometric Scan', 'Risk Assessment', 'Final Verification'].map((step, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-3 h-3 bg-cyber-blue rounded-full mr-3 animate-pulse"></div>
                        <span className="text-slate-300">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {demoStep === 1 && (
                <div className="space-y-6">
                  <div className="overall-score text-center mb-6">
                    <div className="text-4xl font-bold text-cyber-green mb-2">92%</div>
                    <p className="text-slate-300">Overall Trust Score</p>
                  </div>
                  
                  <div className="space-y-4">
                    {riskIndicators.map((indicator, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-slate-300 text-sm">{indicator.label}</span>
                        <div className="flex items-center">
                          <div className="w-24 h-2 bg-slate-700 rounded-full mr-3">
                            <div 
                              className={`h-full bg-gradient-to-r from-cyber-blue to-cyber-green rounded-full`}
                              style={{ width: `${indicator.value}%` }}
                            ></div>
                          </div>
                          <span className={`text-sm font-semibold ${indicator.color}`}>
                            {indicator.value}%
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 p-4 bg-cyber-green/20 border border-cyber-green/30 rounded-lg">
                    <p className="text-cyber-green text-sm font-medium">
                      ✓ Verification Approved - Low Risk Profile
                    </p>
                  </div>
                </div>
              )}
              
              {demoStep === 0 && !isAnalyzing && (
                <div className="space-y-6">
                  <div className="text-center text-slate-400">
                    <div className="text-4xl mb-4">⏳</div>
                    <p>Waiting for verification request...</p>
                  </div>
                  
                  <div className="space-y-3">
                    <p className="text-slate-300 text-sm font-medium">What we'll analyze:</p>
                    <ul className="space-y-2 text-slate-400 text-sm">
                      <li className="flex items-center"><span className="mr-2">•</span>Document authenticity</li>
                      <li className="flex items-center"><span className="mr-2">•</span>Biometric matching</li>
                      <li className="flex items-center"><span className="mr-2">•</span>Device fingerprinting</li>
                      <li className="flex items-center"><span className="mr-2">•</span>Behavioral patterns</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Demo Stats */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { label: 'Verifications/sec', value: '1,250', icon: '⚡' },
              { label: 'Accuracy Rate', value: '99.7%', icon: '🎯' },
              { label: 'False Positives', value: '<0.1%', icon: '✅' },
              { label: 'Response Time', value: '85ms', icon: '🚀' }
            ].map((stat, index) => (
              <Card key={index} className="cyber-card p-6 text-center">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-cyber-blue mb-1">{stat.value}</div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
