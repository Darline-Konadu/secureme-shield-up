
const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cyber-darker">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-cyber-blue mb-4">404</h1>
        <p className="text-xl text-slate-300 mb-8">Page not found</p>
        <a 
          href="/" 
          className="cyber-button inline-block"
        >
          Go Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
