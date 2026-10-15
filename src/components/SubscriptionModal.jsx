import React from 'react';

export function SubscriptionModal({ isOpen, onClose, onSubscribe }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-stone-100 text-center relative">
        <button 
          onClick={onClose}
          className="absolute top-4 left-4 text-stone-400 hover:text-stone-700 text-xl font-bold"
        >
          ✕
        </button>
        
        <div className="w-16 h-16 bg-emeraldTheme-50 text-emeraldTheme-700 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
          ⭐
        </div>
        
        <h3 className="text-2xl font-bold text-stone-900 mb-2">الترقية إلى الباقة المميزة</h3>
        <p className="text-stone-600 text-sm mb-6">
          استمتع بالوصول الكامل لجميع السور الكملة برواية ورش، اختيار القراء المفضلين، والتفسير المتقدم بدون إعلانات.
        </p>

        <div className="space-y-3 mb-6 text-right">
          <div className="flex items-center gap-3 bg-stone-50 p-3 rounded-xl border border-stone-200">
            <span className="text-emeraldTheme-600 font-bold">✓</span>
            <span className="text-sm font-medium">فتح المصحف كاملاً برواية ورش عن نافع</span>
          </div>
          <div className="flex items-center gap-3 bg-stone-50 p-3 rounded-xl border border-stone-200">
            <span className="text-emeraldTheme-600 font-bold">✓</span>
            <span className="text-sm font-medium">الاستماع لجميع القراء بجودة عالية وبدون إنترنت</span>
          </div>
        </div>

        <button
          onClick={() => {
            onSubscribe();
            onClose();
          }}
          className="w-full py-3 bg-emeraldTheme-700 hover:bg-emeraldTheme-800 text-white font-bold rounded-xl shadow-lg transition duration-200"
        >
          اشتراك الآن (دعم التطوير المستمر)
        </button>
      </div>
    </div>
  );
}
