// Sample dataset configured specifically for Warsh (Rewayat Warsh an Nafi') guidelines & metadata
export const warshSurahs = [
  { number: 1, name: "الفاتحة", englishName: "Al-Fatihah", ayahs: 7, revelationType: "Meccan", isPremium: false },
  { number: 2, name: "البقرة", englishName: "Al-Baqarah", ayahs: 286, revelationType: "Medinan", isPremium: true },
  { number: 3, name: "آل عمران", englishName: "Ali 'Imran", ayahs: 200, revelationType: "Medinan", isPremium: true },
  { number: 4, name: "النساء", englishName: "An-Nisa'", ayahs: 176, revelationType: "Medinan", isPremium: true },
];

export const warshReciters = [
  { id: 'yassin_al_jazairy', name: 'الشيخ ياسين الجزائري (ورش)', isFree: true },
  { id: 'omar_alqazabri', name: 'الشيخ عمر القزابري (ورش)', isFree: false },
  { id: 'ibrahim_aldosari', name: 'الشيخ إبراهيم الدوسري (ورش)', isFree: false }
];
