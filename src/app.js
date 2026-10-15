import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Navbar } from './components/Navbar';
import { MushafWarshView } from './components/MushafWarshView';
import { SubscriptionModal } from './components/SubscriptionModal';

function App() {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar 
        isSubscribed={isSubscribed} 
        onOpenSubscription={() => setIsModalOpen(true)} 
      />
      
      <main className="flex-grow">
        <MushafWarshView />
      </main>

      <footer className="bg-white border-t border-stone-200 text-center py-4 text-xs text-stone-500 mt-8">
        جميع الحقوق محفوظة © 2026 — تطبيق القرآن الكريم برواية ورش
      </footer>

      <SubscriptionModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubscribe={() => setIsSubscribed(true)}
      />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
