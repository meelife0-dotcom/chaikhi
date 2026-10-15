import React from 'react';

export function Navbar({ isSubscribed, onOpenSubscription }) {
  return (
    <header className="bg-emeraldTheme-900 text-white shadow-md sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <span className="text-2xl font-amiri font-bold">📖 القرآن الكريم (ورش)</span>
        </div>
        
        <div className="flex items-center gap-3">
          {isSubscribed ? (
            <span className="bg-amber-400 text-stone-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
              ✨ مشترك مميز (PRO)
            </span>
          ) : (
            <button
              onClick={onOpenSubscription}
              className="bg-amber-500 hover:bg-amber-600 text-stone-900 text-xs font-bold px-4 py-2 rounded-xl shadow transition"
            >
              ترقية الحساب 🚀
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
