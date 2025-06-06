
import { Shield, Twitter, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-cyber-dark border-t border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Shield className="w-8 h-8 text-cyber-blue mr-2" />
              <span className="text-2xl font-bold bg-gradient-to-r from-cyber-blue to-cyber-purple bg-clip-text text-transparent">
                SecureMe
              </span>
            </div>
            <p className="text-slate-400 mb-6 max-w-md">
              Advanced AI-powered fraud detection that protects your business and customers 
              with real-time threat analysis and prevention.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-cyber-blue transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-cyber-blue transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-cyber-blue transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-slate-400 hover:text-cyber-blue transition-colors">Features</a></li>
              <li><a href="#demo" className="text-slate-400 hover:text-cyber-blue transition-colors">Demo</a></li>
              <li><a href="#" className="text-slate-400 hover:text-cyber-blue transition-colors">Pricing</a></li>
              <li><a href="#" className="text-slate-400 hover:text-cyber-blue transition-colors">API Docs</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-slate-400 hover:text-cyber-blue transition-colors">About</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-cyber-blue transition-colors">Contact</a></li>
              <li><a href="#" className="text-slate-400 hover:text-cyber-blue transition-colors">Privacy</a></li>
              <li><a href="#" className="text-slate-400 hover:text-cyber-blue transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700/50 mt-12 pt-8 text-center">
          <p className="text-slate-400">
            © 2024 SecureMe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
