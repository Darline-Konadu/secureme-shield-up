
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = {
    product: [
      { name: 'Features', href: '#features' },
      { name: 'Demo', href: '#demo' },
      { name: 'Pricing', href: '#' },
      { name: 'API Docs', href: '#' }
    ],
    company: [
      { name: 'About', href: '#about' },
      { name: 'Blog', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Contact', href: '#contact' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'Compliance', href: '#' }
    ]
  };

  return (
    <footer className="py-16 border-t border-slate-700/50 bg-cyber-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <div className="text-2xl font-bold bg-gradient-to-r from-cyber-blue to-cyber-purple bg-clip-text text-transparent">
                🛡️ SecureMe
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Advanced AI-powered fraud detection and identity verification platform protecting businesses worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-lg hover:bg-cyber-blue transition-colors duration-300">
                💼
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-lg hover:bg-cyber-blue transition-colors duration-300">
                🐦
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-lg hover:bg-cyber-blue transition-colors duration-300">
                📺
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-400 hover:text-cyber-blue transition-colors duration-200 text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-400 hover:text-cyber-blue transition-colors duration-200 text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-400 hover:text-cyber-blue transition-colors duration-200 text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-slate-700/50 pt-8 mb-8">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-white font-semibold mb-2">Stay Updated</h3>
            <p className="text-slate-400 text-sm mb-4">Get the latest news on fraud prevention and security insights</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-slate-800 border border-slate-600 rounded-lg text-white text-sm focus:outline-none focus:border-cyber-blue"
              />
              <button className="px-6 py-2 bg-gradient-to-r from-cyber-blue to-cyber-purple text-white text-sm font-medium rounded-lg hover:scale-105 transition-transform duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700/50 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-slate-400 text-sm mb-4 md:mb-0">
            © {currentYear} SecureMe. All rights reserved.
          </div>
          <div className="flex items-center space-x-6 text-slate-400 text-sm">
            <span className="flex items-center">
              <span className="text-cyber-green mr-1">🔒</span>
              SOC 2 Compliant
            </span>
            <span className="flex items-center">
              <span className="text-cyber-green mr-1">✓</span>
              GDPR Ready
            </span>
            <span className="flex items-center">
              <span className="text-cyber-green mr-1">🛡️</span>
              99.9% Uptime
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
