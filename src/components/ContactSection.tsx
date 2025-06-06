
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-cyber-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyber-blue to-cyber-purple bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Ready to protect your business from fraud? Contact our team of experts 
            to learn how SecureMe can help safeguard your operations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="cyber-card p-8">
            <h3 className="text-2xl font-semibold text-white mb-6">Send us a message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  placeholder="First Name"
                  className="bg-slate-800 border-slate-700 text-white placeholder-slate-400"
                />
                <Input
                  placeholder="Last Name"
                  className="bg-slate-800 border-slate-700 text-white placeholder-slate-400"
                />
              </div>
              <Input
                type="email"
                placeholder="Email Address"
                className="bg-slate-800 border-slate-700 text-white placeholder-slate-400"
              />
              <Input
                placeholder="Company"
                className="bg-slate-800 border-slate-700 text-white placeholder-slate-400"
              />
              <Textarea
                placeholder="Tell us about your fraud prevention needs..."
                rows={5}
                className="bg-slate-800 border-slate-700 text-white placeholder-slate-400"
              />
              <Button className="cyber-button w-full">
                Send Message
              </Button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-gradient-to-r from-cyber-blue to-cyber-purple p-3 rounded-lg mr-4">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-medium">Email</div>
                    <div className="text-slate-400">contact@secureme.com</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-gradient-to-r from-cyber-blue to-cyber-purple p-3 rounded-lg mr-4">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-medium">Phone</div>
                    <div className="text-slate-400">+1 (555) 123-4567</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-gradient-to-r from-cyber-blue to-cyber-purple p-3 rounded-lg mr-4">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-medium">Address</div>
                    <div className="text-slate-400">
                      123 Security Blvd<br />
                      San Francisco, CA 94102
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="cyber-card p-6">
              <h4 className="text-xl font-semibold text-white mb-4">Enterprise Solutions</h4>
              <p className="text-slate-400 mb-4">
                Need a custom solution for your enterprise? Our team can help design 
                a fraud prevention system tailored to your specific requirements.
              </p>
              <Button variant="outline" className="border-cyber-blue text-cyber-blue hover:bg-cyber-blue/10">
                Schedule Enterprise Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
