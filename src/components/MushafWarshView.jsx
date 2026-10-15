import React, { useState } from 'react';
import { warshSurahs } from '../data/warshData';
import { SubscriptionModal } from './SubscriptionModal';

export function MushafWarshView() {
  const [selectedSurah, setSelectedSurah] = useState(warshSurahs[0]);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSurahClick = (surah) => {
    if (surah.isPremium && !isSubscribed) {
      setIsModalOpen(true);
    } else {
      setSelectedSurah(surah);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
      {/* Surah List Sidebar */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-stone-200 md:col-span-1">
        <h2 className="font-bold text-stone-700 mb-4 pb-2 border-b border-stone-100">فهرس السور (ورش)</h2>
        <div className="space-y-2 max-h-[70vh] overflow-y-auto">
          {warshSurahs.map((surah) => (
            <div
              key={surah.number}
              onClick={() => handleSurahClick(surah)}
              className={`p-3 rounded-xl cursor-pointer flex justify-between items-center transition ${
                selectedSurah.number === surah.number 
                  ? 'bg-emeraldTheme-50 text-emeraldTheme-800 font-bold border border-emeraldTheme-600/30' 
                  : 'hover:bg-stone-50 text-stone-600'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-stone-100 text-xs flex items-center justify-center font-normal">
                  {surah.number}
                </span>
                <span>{surah.name}</span>
              </div>
              {surah.isPremium && !isSubscribed && (
                <span className="text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded-md font-semibold">PRO</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Main Reader View */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200 md:col-span-3 flex flex-col justify-between min-h-[75vh]">
        <div>
          <div className="text-center border-b border-stone-100 pb-4 mb-6">
            <h1 className="text-3xl font-amiri font-bold text-emeraldTheme-900 mb-1">سورة {selectedSurah.name}</h1>
            <p className="text-xs text-stone-400">رواية ورش عن نافع — {selectedSurah.revelationType} — عدد الآيات: {selectedSurah.ayahs}</p>
          </div>

          {/* Sample Quranic text box styled in traditional Mushaf layout look */}
          <div className="bg-[#fbfbfa] border border-stone-200 p-8 rounded-xl text-center shadow-inner my-6">
            <p className="font-amiri text-3xl leading-[2.6] text-stone-900 tracking-wide">
              {selectedSurah.number === 1 ? (
                <>
                  بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ (١) الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ (٢) الرَّحْمَٰنِ الرَّحِيمِ (٣) مَالِكِ يَوْمِ الدِّينِ (٤) إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ (٥) اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ (٦) صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ (٧)
                </>
              ) : (
                <>
                  [محتوى سورة {selectedSurah.name} برواية ورش متاح الآن للقراءة والتدبر. تم ضبط قواعد الرسم العثماني الخاصة برواية ورش عن نافع من طريق الأزرق أو الأصبهاني بحسب خيار الضبط لديك...]
                </>
              )}
            </p>
          </div>
        </div>

        <div className="flex justify-between items-center text-xs text-stone-400 border-t border-stone-100 pt-4">
          <span>الصفحة الحالية: 1</span>
          <span className="text-emeraldTheme-800 font-bold">المصحف الإلكتروني برواية ورش</span>
          <span>الجزء 1</span>
        </div>
      </div>

      <SubscriptionModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubscribe={() => setIsSubscribed(true)}
      />
    </div>
  );
}
