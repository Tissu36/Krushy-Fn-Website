// Locally generated SVG fallback artwork ensures season cards never depend solely on
// externally hosted key art, which may be unavailable or block image hotlinking.
const artPalettes = [
  ['#071b36','#1e77b8','#8ce7ff'],['#24143e','#8b4fd6','#f3a8ff'],['#3b1a20','#e15a44','#ffd07a'],
  ['#102b25','#2c9a70','#b8f4b5'],['#17223c','#5d79d9','#d2e1ff'],['#35254c','#c05b9a','#ffc2dc'],
  ['#292b32','#8c99a8','#f3f6fb'],['#302514','#b58a39','#ffe4a1'],['#102b3a','#28a9c5','#b0f4ff'],
  ['#301c17','#bd6d43','#ffd2a2'],['#142d32','#3b9c9a','#c1fff0']
];
function createSeasonArtwork(chapter, season, theme, index) {
  const [base, accent, light] = artPalettes[index % artPalettes.length];
  const escape = (value) => String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const label = escape(`CHAPTER ${chapter} · ${season}`);
  const description = escape(theme).slice(0, 70);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 540">
    <defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${base}"/><stop offset="1" stop-color="#070b14"/></linearGradient></defs>
    <rect width="960" height="540" fill="url(#bg)"/>
    <circle cx="720" cy="205" r="165" fill="${accent}" opacity=".25"/>
    <circle cx="720" cy="205" r="110" fill="none" stroke="${light}" opacity=".5" stroke-width="2"/>
    <path d="M0 390 190 270 345 360 520 235 725 350 960 255V540H0Z" fill="${accent}" opacity=".34"/>
    <path d="M0 460 225 340 400 425 615 310 790 410 960 350V540H0Z" fill="${light}" opacity=".18"/>
    <text x="48" y="75" fill="${light}" font-family="Arial,sans-serif" font-size="17" font-weight="700" letter-spacing="4">KRUSHYFN / SEASON ARCHIVE</text>
    <text x="48" y="448" fill="#fff" font-family="Arial,sans-serif" font-size="37" font-weight="700">${label}</text>
    <text x="50" y="483" fill="#dcecff" font-family="Arial,sans-serif" font-size="18">${description}</text>
  </svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}
const records = [["c1s1",1,"1","October 25, 2017","1.8","The beginning of Battle Royale"],["c1s2",1,"2","December 14, 2017","2.00","Medieval world and the first Battle Pass"],["c1s3",1,"3","February 22, 2018","3.00","Meteor sightings and space exploration"],["c1s4",1,"4","May 1, 2018","4.00","Superhero showdown"],["c1s5",1,"5","July 12, 2018","5.00","Worlds collide"],["c1s6",1,"6","September 27, 2018","6.00","Darkness rises"],["c1s7",1,"7","December 6, 2018","7.00","Winter arrives"],["c1s8",1,"8","February 28, 2019","8.00","Treasure and volcanoes"],["c1s9",1,"9","May 9, 2019","9.00","The future is yours"],["c1sx",1,"X","August 1, 2019","10.00","The End of the original island"],["c2s1",2,"1","October 15, 2019","11.00","A new world"],["c2s2",2,"2","February 20, 2020","12.00","Top Secret"],["c2s3",2,"3","June 17, 2020","13.00","Splashdown"],["c2s4",2,"4","August 27, 2020","14.00","Nexus War"],["c2s5",2,"5","December 2, 2020","15.00","Zero Point"],["c2s6",2,"6","March 16, 2021","16.00","Primal"],["c2s7",2,"7","June 8, 2021","17.00","Invasion"],["c2s8",2,"8","September 13, 2021","18.00","Cubed"],["c3s1",3,"1","December 5, 2021","19.00","Flipped"],["c3s2",3,"2","March 20, 2022","20.00","Resistance"],["c3s3",3,"3","June 5, 2022","21.00","Vibin'"],["c3s4",3,"4","September 18, 2022","22.00","Paradise"],["c4s1",4,"1","December 4, 2022","23.00","A New Beginning"],["c4s2",4,"2","March 10, 2023","24.00","MEGA"],["c4s3",4,"3","June 9, 2023","25.00","WILDS"],["c4s4",4,"4","August 25, 2023","26.00","Last Resort"],["c4og",4,"OG","November 3, 2023","27.00","Fortnite OG"],["c5s1",5,"1","December 3, 2023","28.00","Underground"],["c5s2",5,"2","March 8, 2024","29.00","Myths & Mortals"],["c5s3",5,"3","May 24, 2024","30.00","Wrecked"],["c5s4",5,"4","August 16, 2024","31.00","Absolute Doom"],["c2remix",2,"REMIX","November 2, 2024","32.00","Remix: The Finale"],["c6s1",6,"1","December 1, 2024","33.00","鬼 HUNTERS"],["c6s2",6,"2","February 21, 2025","34.00","Lawless"],["c6mini1",6,"MINI 1","May 2, 2025","35.00","Galactic Battle"],["c6s3",6,"3","June 7, 2025","36.00","SUPER"],["c6s4",6,"4","August 7, 2025","37.00","Shock 'N Awesome"],["c6mini2",6,"MINI 2","November 1, 2025","38.00","The Simpsons"],["c7s1",7,"1","November 29, 2025","39.00","Pacific Break"],["c7s2",7,"2","March 19, 2026","40.00","Showdown"],["c7s3",7,"3","June 6, 2026","41.00","Runners"],["c7s4",7,"4","August 20, 2026","42.00","Override"],["c7mini1",7,"MINI 1","November 1, 2026","43.00","Treasure Hunters"]];
const realSeasonArt = {
  c1s1: "https://fortnite.fandom.com/wiki/Special:Redirect/file/Season_1_-_Keyart_-_Fortnite.jpg",
  c1s2: "https://fortnite.fandom.com/wiki/Special:Redirect/file/Season_2_-_Battle_Pass_-_Fortnite.jpg",
  c1s3: "https://fortnite.fandom.com/wiki/Special:Redirect/file/Season_3_-_Key_Art_-_Fortnite.jpg",
  c1s4: "https://fortnite.fandom.com/wiki/Special:Redirect/file/Season_4_-_Battle_Pass_-_Fortnite.jpg",
  c1s5: "https://fortnite.fandom.com/wiki/Special:Redirect/file/Season_5_-_Battle_Pass_-_Fortnite.jpg",
  c1s6: "https://fortnite.fandom.com/wiki/Special:Redirect/file/Season_6_-_Battle_Pass_-_Fortnite.jpg",
  c1s7: "https://fortnite.fandom.com/wiki/Special:Redirect/file/Season_7_-_Key_Art_-_Fortnite.jpg",
  c1s8: "https://fortnite.fandom.com/wiki/Special:Redirect/file/Season_8_(Textless)_-_Key_Art_-_Fortnite_OG.jpg",
  c1s9: "https://fortnite.fandom.com/wiki/Special:Redirect/file/Season_9_-_Battle_Pass_-_Fortnite.jpg",
  c1sx: "https://fortnite.fandom.com/wiki/Special:Redirect/file/Key_Art_-_Battle_Pass_Season_10_-_Fortnite.jpg",
  c2s1: "https://fortnite.fandom.com/wiki/Special:Redirect/file/Chapter_2_Season_1_-_Keyart_-_Fortnite.jpg",
  c2s2: "https://fortnite.fandom.com/wiki/Special:Redirect/file/Chapter_2_Season_2_-_Keyart_-_Fortnite.jpg",
  c2s3: "https://fortnite.fandom.com/wiki/Special:Redirect/file/Chapter_2_Season_3_-_Key_Art_-_Fortnite.jpeg",
  c2s4: "https://fortnite.fandom.com/wiki/Special:Redirect/file/Chapter_2_Season_4_-_Key_Art_-_Fortnite.png",
  c2s5: "https://fortnite.fandom.com/wiki/Special:Redirect/file/Chapter_2_Season_5_-_Key_Art_-_Fortnite.jpeg",
  c2s6: "https://fortnite.fandom.com/wiki/Special:Redirect/file/Chapter_2_Season_6_-_Key_Art_-_Fortnite.png",
  c2s7: "https://fortnite.fandom.com/wiki/Special:Redirect/file/Chapter_2_Season_7_-_Key_Art_-_Fortnite.jpeg",
  c2s8: "https://fortnite.fandom.com/wiki/Special:Redirect/file/Chapter_2_Season_8_-_Keyart_-_Fortnite.jpg",
  c3s1: "https://fortnite.fandom.com/wiki/Special:Redirect/file/Chapter_3_Season_1_-_Keyart_-_Fortnite.jpg",
  c3s2: "https://fortnite.fandom.com/wiki/Special:Redirect/file/Chapter_3_Season_2_-_Keyart_-_Fortnite.jpg",
  c3s3: "https://fortnite.fandom.com/wiki/Special:Redirect/file/Chapter_3_Season_3_-_Keyart_-_Fortnite.jpg",
  c3s4: "https://fortnite.fandom.com/wiki/Special:Redirect/file/Chapter_3_Season_4_-_Keyart_-_Fortnite.jpg",
  c4s1: "https://fortnite.fandom.com/wiki/Special:Redirect/file/Chapter_4_Season_1_-_Keyart_-_Fortnite.jpg",
  c4s2: "https://fortnite.fandom.com/wiki/Special:Redirect/file/Chapter_4_Season_2_-_Keyart_-_Fortnite.jpg",
  c4s3: "https://fortnite.fandom.com/wiki/Special:Redirect/file/Chapter_4_Season_3_-_Keyart_-_Fortnite.jpg",
  c4s4: "https://fortnite.fandom.com/wiki/Special:Redirect/file/Chapter_4_Season_4_-_Keyart_-_Fortnite.jpg",
  c4og: "https://fortnite.fandom.com/wiki/Special:Redirect/file/Chapter_4_Season_OG_-_Keyart_-_Fortnite.png",
  c5s1: "https://fortnite.fandom.com/wiki/Special:Redirect/file/Chapter_5_Season_1_-_Keyart_-_Fortnite.jpg",
  c5s2: "https://fortnite.fandom.com/wiki/Special:Redirect/file/Chapter_5_Season_2_-_Keyart_-_Fortnite.png",
  c5s3: "https://fortnite.fandom.com/wiki/Special:Redirect/file/Chapter_5_Season_3_-_Keyart_-_Fortnite.jpg",
  c5s4: "https://fortnite.fandom.com/wiki/Special:Redirect/file/Chapter_5_Season_4_-_Keyart_-_Fortnite.jpg",
  c2remix: "https://fortnite.fandom.com/wiki/Special:Redirect/file/Chapter_2_Remix_-_Promo_-_Fortnite.jpg",
  c6s1: "https://fortnite.fandom.com/wiki/Special:Redirect/file/Chapter_6_Season_1_(Keyart_2)_-_Keyart_-_Fortnite.jpg",
  c6s2: "https://fortnite.fandom.com/wiki/Special:Redirect/file/Chapter_6_Season_2_-_Keyart_-_Fortnite.jpg",
  c6mini1: "https://fortnite.fandom.com/wiki/Special:Redirect/file/Galactic_Battle_-_Keyart_-_Fortnite.jpg",
  c6s3: "https://fortnite.fandom.com/wiki/Special:Redirect/file/Super_-_Keyart_-_Fortnite.jpg",
  c6s4: "https://fortnite.fandom.com/wiki/Special:Redirect/file/Chapter_6_Season_4_-_Keyart_-_Fortnite.png",
  c6mini2: "https://fortnite.fandom.com/wiki/Special:Redirect/file/Chapter_6_Mini_Season_2_-_Keyart_-_Fortnite.png",
  c7s1: "https://fortnite.fandom.com/wiki/Special:Redirect/file/Chapter_7_Season_1_(Textless)_-_Promo_-_Fortnite.jpeg",
  c7s2: "https://fortnite.fandom.com/wiki/Special:Redirect/file/Chapter_7_Season_2_-_Keyart_-_Fortnite.png",
  c7s3: "https://fortnite.fandom.com/wiki/Special:Redirect/file/Chapter_7_Season_3_-_Keyart_-_Fortnite.jpg",
  c7s4: "https://fortnite.fandom.com/wiki/Special:Redirect/file/Chapter_7_Season_4_-_Keyart_-_Fortnite.jpg",
  c7mini1: "https://fortnite.fandom.com/wiki/Special:Redirect/file/Treasure_Hunters_-_Keyart_-_Fortnite.jpg",
};
const seasons = records.map(([id, chapterNumber, seasonNumber, releaseFull, version, theme], index) => {
  const chapter = `CHAPTER ${chapterNumber}`;
  const season = seasonNumber === 'OG' ? 'OG' : seasonNumber.startsWith('MINI') ? seasonNumber.replace('MINI','MINI SEASON') : seasonNumber === 'REMIX' ? 'REMIX' : `SEASON ${seasonNumber}`;
  const title = `Chapter ${chapterNumber} · ${season}`;
  const fallbackImage = createSeasonArtwork(chapterNumber, season, theme, index);
  const image = realSeasonArt[id] || fallbackImage;
  const date = new Date(releaseFull + ' 00:00:00');
  const release = date.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }).toUpperCase();
  return { id, version, chapter, season, title, release, releaseFull, image, fallbackImage, size: 'Not verified', sizeFloat: 0, speed: '—', color: '#75cfff', desc: theme, theme, longDescription: `${theme}. This season entry is part of the KRUSHYFN historical archive. Map, modes, loot pool, events and platform compatibility are tracked separately and are marked pending until verified.`, nativeW: 1920, nativeH: 1080, artworkStatus: 'official-season-key-art', packageStatus: 'unavailable' };
});
export default seasons;
