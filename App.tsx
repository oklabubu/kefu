import React from 'react';
import { Background } from './components/Background';
import { ServiceCard } from './components/ServiceCard';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-slate-50 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
      {/* Decorative Background */}
      <Background />
      
      {/* Main Content */}
      <main className="relative z-10 w-full max-w-md mx-auto animate-fade-in-up">
        <ServiceCard />
        
        {/* Footer Info */}
        <footer className="mt-8 text-center">
          <p className="text-slate-400 text-xs tracking-wider font-light">
            © 2024 CUSTOMER SERVICE CENTER
          </p>
        </footer>
      </main>
    </div>
  );
};

export default App;