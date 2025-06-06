
import { Button } from '@/components/ui/button';
import { Play, CheckCircle, XCircle, AlertTriangle } from 'lucide-react';

const DemoSection = () => {
  const transactions = [
    {
      id: "TX001",
      amount: "$2,450.00",
      location: "New York, NY",
      status: "approved",
      risk: "low",
      time: "2 mins ago"
    },
    {
      id: "TX002", 
      amount: "$15,000.00",
      location: "Lagos, Nigeria",
      status: "blocked",
      risk: "high",
      time: "5 mins ago"
    },
    {
      id: "TX003",
      amount: "$89.99",
      location: "London, UK", 
      status: "review",
      risk: "medium",
      time: "8 mins ago"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved':
        return <CheckCircle className="w-5 h-5 text-cyber-green" />;
      case 'blocked':
        return <XCircle className="w-5 h-5 text-cyber-red" />;
      case 'review':
        return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
      default:
        return null;
    }
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'low':
        return 'text-cyber-green';
      case 'medium':
        return 'text-yellow-500';
      case 'high':
        return 'text-cyber-red';
      default:
        return 'text-slate-400';
    }
  };

  return (
    <section id="demo" className="py-24 bg-cyber-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyber-blue to-cyber-purple bg-clip-text text-transparent">
            See It In Action
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Watch how SecureMe detects and prevents fraud in real-time with our live demo dashboard.
          </p>
          <Button className="cyber-button text-lg px-8 py-4">
            <Play className="w-5 h-5 mr-2" />
            Watch Live Demo
          </Button>
        </div>

        <div className="cyber-card p-8 max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-semibold text-white">Real-Time Transaction Monitor</h3>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-cyber-green rounded-full animate-pulse mr-2"></div>
              <span className="text-cyber-green text-sm">Live</span>
            </div>
          </div>

          <div className="space-y-4">
            {transactions.map((tx) => (
              <div key={tx.id} className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    {getStatusIcon(tx.status)}
                    <div>
                      <div className="text-white font-medium">{tx.id}</div>
                      <div className="text-slate-400 text-sm">{tx.location}</div>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-white font-semibold">{tx.amount}</div>
                    <div className={`text-sm ${getRiskColor(tx.risk)}`}>
                      {tx.risk.toUpperCase()} RISK
                    </div>
                  </div>
                  
                  <div className="text-slate-400 text-sm">
                    {tx.time}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyber-green mb-2">99.2%</div>
              <div className="text-slate-400">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyber-blue mb-2">47ms</div>
              <div className="text-slate-400">Avg Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyber-purple mb-2">1,247</div>
              <div className="text-slate-400">Threats Blocked Today</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
