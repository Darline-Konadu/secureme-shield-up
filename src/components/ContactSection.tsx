
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({ name: '', email: '', company: '', message: '' });
    }, 1500);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Get In
            </span>
            <span className="bg-gradient-to-r from-cyber-blue to-cyber-purple bg-clip-text text-transparent ml-4">
              Touch
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Ready to secure your business? Let's discuss how SecureMe can protect your customers and boost your confidence.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="cyber-card p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="text-2xl mr-3">📬</span>
                Send us a message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Full Name *
                    </label>
                    <Input
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="bg-slate-800 border-slate-600 text-white"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="bg-slate-800 border-slate-600 text-white"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Company (Optional)
                  </label>
                  <Input
                    type="text"
                    placeholder="Your Company Name"
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    className="bg-slate-800 border-slate-600 text-white"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Message *
                  </label>
                  <Textarea
                    placeholder="Tell us about your security needs or ask any questions..."
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="bg-slate-800 border-slate-600 text-white min-h-32"
                    required
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="cyber-button w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>

            {/* Contact Info & CTA */}
            <div className="space-y-8">
              {/* Quick Contact */}
              <div className="cyber-card p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Quick Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <span className="text-2xl mr-4">📧</span>
                    <div>
                      <div className="text-white font-medium">Email</div>
                      <div className="text-cyber-blue">hello@secureme.ai</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-2xl mr-4">💬</span>
                    <div>
                      <div className="text-white font-medium">Support</div>
                      <div className="text-cyber-blue">support@secureme.ai</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-2xl mr-4">🏢</span>
                    <div>
                      <div className="text-white font-medium">Partnership</div>
                      <div className="text-cyber-blue">partners@secureme.ai</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Beta Signup */}
              <div className="cyber-card p-8 bg-gradient-to-br from-cyber-blue/10 to-cyber-purple/10 border border-cyber-blue/30">
                <h3 className="text-2xl font-bold text-white mb-4">Join the Beta</h3>
                <p className="text-slate-300 mb-6">
                  Get early access to SecureMe and help shape the future of fraud prevention. Limited spots available.
                </p>
                <div className="space-y-4">
                  <Input
                    type="email"
                    placeholder="Enter your email for beta access"
                    className="bg-slate-800 border-slate-600 text-white"
                  />
                  <Button className="cyber-button w-full">
                    Request Beta Access
                  </Button>
                </div>
                <div className="mt-4 flex items-center justify-center space-x-6 text-slate-400 text-sm">
                  <span className="flex items-center">
                    <span className="text-cyber-green mr-1">✓</span>
                    No credit card required
                  </span>
                  <span className="flex items-center">
                    <span className="text-cyber-green mr-1">✓</span>
                    Cancel anytime
                  </span>
                </div>
              </div>

              {/* Social Links */}
              <div className="cyber-card p-8">
                <h3 className="text-xl font-bold text-white mb-4">Follow Our Journey</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-xl hover:bg-cyber-blue transition-colors duration-300">
                    💼
                  </a>
                  <a href="#" className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-xl hover:bg-cyber-blue transition-colors duration-300">
                    🐦
                  </a>
                  <a href="#" className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-xl hover:bg-cyber-blue transition-colors duration-300">
                    📺
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Quick Links */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Common Questions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="cyber-card p-6">
              <h4 className="font-semibold text-white mb-2">How accurate is SecureMe?</h4>
              <p className="text-slate-400 text-sm">Our AI achieves 99.7% accuracy with less than 0.1% false positives.</p>
            </div>
            <div className="cyber-card p-6">
              <h4 className="font-semibold text-white mb-2">How fast is verification?</h4>
              <p className="text-slate-400 text-sm">Real-time analysis with average response times under 100ms.</p>
            </div>
            <div className="cyber-card p-6">
              <h4 className="font-semibold text-white mb-2">Is my data secure?</h4>
              <p className="text-slate-400 text-sm">Enterprise-grade encryption and compliance with global privacy standards.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
