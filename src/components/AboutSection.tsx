
import { Users, Award, Globe, TrendingUp } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    {
      icon: Users,
      number: "10M+",
      label: "Protected Users",
      description: "Customers trust our platform daily"
    },
    {
      icon: Award,
      number: "99.9%",
      label: "Uptime",
      description: "Reliable protection when you need it"
    },
    {
      icon: Globe,
      number: "150+",
      label: "Countries",
      description: "Global fraud prevention coverage"
    },
    {
      icon: TrendingUp,
      number: "$2B+",
      label: "Fraud Prevented",
      description: "In fraudulent transactions blocked"
    }
  ];

  return (
    <section id="about" className="py-24 bg-cyber-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyber-blue to-cyber-purple bg-clip-text text-transparent">
              About SecureMe
            </h2>
            <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
              <p>
                Founded in 2020 by a team of cybersecurity experts and AI researchers, 
                SecureMe has rapidly become the leading fraud prevention platform trusted 
                by businesses worldwide.
              </p>
              <p>
                Our mission is simple: protect businesses and their customers from the 
                ever-evolving landscape of digital fraud. We combine cutting-edge artificial 
                intelligence with real-time threat intelligence to deliver unparalleled 
                protection.
              </p>
              <p>
                From startups to Fortune 500 companies, organizations choose SecureMe 
                for our proven track record, innovative technology, and commitment to 
                staying ahead of fraudsters.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="cyber-card p-6 text-center">
                  <div className="bg-gradient-to-r from-cyber-blue to-cyber-purple p-3 rounded-lg inline-flex mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-cyber-blue font-semibold mb-2">{stat.label}</div>
                  <div className="text-slate-400 text-sm">{stat.description}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
