const CHANNELS = {
  caracol: { name: "Caracol", file: "caracol.png", url: "https://www.caracoltv.com/senal-vivo" },
  rcn: { name: "RCN", file: "rcn.png", url: "https://www.youtube.com/@canalrcn" },
  dsports: { name: "D Sports", file: "dsports.png", url: "https://www.directvgo.com/home/main" },
  win: { name: "WIN", file: "win.png", url: "https://winplay.co/co" },
  disney: { name: "Disney+", file: "disney-plus.png", url: "https://www.disneyplus.com/" },
};

const MATCH_END_MS = (2 * 60 + 10) * 60000;

const ENGLAND_FLAG = "\u{1F3F4}\u{E0067}\u{E0062}\u{E0065}\u{E006E}\u{E0067}\u{E007F}";
const SCOTLAND_FLAG = "\u{1F3F4}\u{E0067}\u{E0062}\u{E0073}\u{E0063}\u{E0074}\u{E007F}";

const MATCHES = [
  { date: "2026-06-11", time: "14:00", jornada: 1, grupo: "A", home: { name: "México", flag: "🇲🇽" }, away: { name: "Sudáfrica", flag: "🇿🇦" }, venue: "SoFi Stadium", city: "Inglewood", channels: ["dsports", "caracol", "rcn", "disney"] },
  { date: "2026-06-11", time: "21:00", jornada: 1, grupo: "A", home: { name: "Corea del Sur", flag: "🇰🇷" }, away: { name: "Rep. Checa", flag: "🇨🇿" }, venue: "MetLife Stadium", city: "East Rutherford", channels: ["dsports", "win"] },
  { date: "2026-06-12", time: "14:00", jornada: 1, grupo: "B", home: { name: "Canadá", flag: "🇨🇦" }, away: { name: "Bosnia", flag: "🇧🇦" }, venue: "BMO Field", city: "Toronto", channels: ["dsports", "win", "disney"] },
  { date: "2026-06-12", time: "20:00", jornada: 1, grupo: "D", home: { name: "Estados Unidos", flag: "🇺🇸" }, away: { name: "Paraguay", flag: "🇵🇾" }, venue: "AT&T Stadium", city: "Arlington", channels: ["dsports", "caracol", "rcn", "disney"] },
  { date: "2026-06-13", time: "14:00", jornada: 1, grupo: "B", home: { name: "Qatar", flag: "🇶🇦" }, away: { name: "Suiza", flag: "🇨🇭" }, venue: "Levi's Stadium", city: "Santa Clara", channels: ["dsports", "win"] },
  { date: "2026-06-13", time: "17:00", jornada: 1, grupo: "C", home: { name: "Brasil", flag: "🇧🇷" }, away: { name: "Marruecos", flag: "🇲🇦" }, venue: "MetLife Stadium", city: "East Rutherford", channels: ["dsports", "caracol", "rcn", "disney"] },
  { date: "2026-06-13", time: "20:00", jornada: 1, grupo: "C", home: { name: "Haití", flag: "🇭🇹" }, away: { name: "Escocia", flag: SCOTLAND_FLAG }, venue: "Gillette Stadium", city: "Foxborough", channels: ["dsports"] },
  { date: "2026-06-13", time: "23:00", jornada: 1, grupo: "D", home: { name: "Australia", flag: "🇦🇺" }, away: { name: "Turquía", flag: "🇹🇷" }, venue: "BC Place", city: "Vancouver", channels: ["dsports"] },
  { date: "2026-06-14", time: "12:00", jornada: 1, grupo: "E", home: { name: "Alemania", flag: "🇩🇪" }, away: { name: "Curazao", flag: "🇨🇼" }, venue: "MetLife Stadium", city: "East Rutherford", channels: ["dsports"] },
  { date: "2026-06-14", time: "15:00", jornada: 1, grupo: "F", home: { name: "Países Bajos", flag: "🇳🇱" }, away: { name: "Japón", flag: "🇯🇵" }, venue: "Rose Bowl", city: "Pasadena", channels: ["dsports", "caracol", "rcn", "disney"] },
  { date: "2026-06-14", time: "18:00", jornada: 1, grupo: "E", home: { name: "Costa de Marfil", flag: "🇨🇮" }, away: { name: "Ecuador", flag: "🇪🇨" }, venue: "Mercedes-Benz Stadium", city: "Atlanta", channels: ["dsports", "win", "disney"] },
  { date: "2026-06-14", time: "21:00", jornada: 1, grupo: "F", home: { name: "Suecia", flag: "🇸🇪" }, away: { name: "Túnez", flag: "🇹🇳" }, venue: "SoFi Stadium", city: "Inglewood", channels: ["dsports"] },
  { date: "2026-06-15", time: "11:00", jornada: 1, grupo: "H", home: { name: "España", flag: "🇪🇸" }, away: { name: "Cabo Verde", flag: "🇨🇻" }, venue: "SoFi Stadium", city: "Inglewood", channels: ["dsports", "caracol", "rcn", "disney"] },
  { date: "2026-06-15", time: "14:00", jornada: 1, grupo: "G", home: { name: "Bélgica", flag: "🇧🇪" }, away: { name: "Egipto", flag: "🇪🇬" }, venue: "Lumen Field", city: "Seattle", channels: ["dsports"] },
  { date: "2026-06-15", time: "17:00", jornada: 1, grupo: "H", home: { name: "Arabia Saudita", flag: "🇸🇦" }, away: { name: "Uruguay", flag: "🇺🇾" }, venue: "Hard Rock Stadium", city: "Miami Gardens", channels: ["dsports", "win", "disney"] },
  { date: "2026-06-15", time: "20:00", jornada: 1, grupo: "G", home: { name: "Irán", flag: "🇮🇷" }, away: { name: "Nueva Zelanda", flag: "🇳🇿" }, venue: "Arrowhead Stadium", city: "Kansas City", channels: ["dsports"] },
  { date: "2026-06-16", time: "14:00", jornada: 1, grupo: "I", home: { name: "Francia", flag: "🇫🇷" }, away: { name: "Senegal", flag: "🇸🇳" }, venue: "AT&T Stadium", city: "Arlington", channels: ["dsports"] },
  { date: "2026-06-16", time: "17:00", jornada: 1, grupo: "I", home: { name: "Irak", flag: "🇮🇶" }, away: { name: "Noruega", flag: "🇳🇴" }, venue: "Levi's Stadium", city: "Santa Clara", channels: ["dsports", "win"] },
  { date: "2026-06-16", time: "20:00", jornada: 1, grupo: "J", home: { name: "Argentina", flag: "🇦🇷" }, away: { name: "Argelia", flag: "🇩🇿" }, venue: "MetLife Stadium", city: "East Rutherford", channels: ["dsports", "caracol", "rcn", "disney"] },
  { date: "2026-06-16", time: "23:00", jornada: 1, grupo: "J", home: { name: "Austria", flag: "🇦🇹" }, away: { name: "Jordania", flag: "🇯🇴" }, venue: "Lumen Field", city: "Seattle", channels: ["dsports"] },
  { date: "2026-06-17", time: "12:00", jornada: 1, grupo: "K", home: { name: "Portugal", flag: "🇵🇹" }, away: { name: "RD Congo", flag: "🇨🇩" }, venue: "Arrowhead Stadium", city: "Kansas City", channels: ["dsports"] },
  { date: "2026-06-17", time: "15:00", jornada: 1, grupo: "L", home: { name: "Inglaterra", flag: ENGLAND_FLAG }, away: { name: "Croacia", flag: "🇭🇷" }, venue: "Rose Bowl", city: "Pasadena", channels: ["dsports", "win"] },
  { date: "2026-06-17", time: "18:00", jornada: 1, grupo: "L", home: { name: "Ghana", flag: "🇬🇭" }, away: { name: "Panamá", flag: "🇵🇦" }, venue: "SoFi Stadium", city: "Inglewood", channels: ["dsports"] },
  { date: "2026-06-17", time: "21:00", jornada: 1, grupo: "K", home: { name: "Uzbekistán", flag: "🇺🇿" }, away: { name: "Colombia", flag: "🇨🇴" }, venue: "Allegiant Stadium", city: "Las Vegas", channels: ["dsports", "caracol", "rcn", "disney"] },
  { date: "2026-06-18", time: "11:00", jornada: 2, grupo: "A", home: { name: "Sudáfrica", flag: "🇿🇦" }, away: { name: "Rep. Checa", flag: "🇨🇿" }, venue: "Gillette Stadium", city: "Foxborough", channels: ["dsports"] },
  { date: "2026-06-18", time: "14:00", jornada: 2, grupo: "B", home: { name: "Bosnia", flag: "🇧🇦" }, away: { name: "Suiza", flag: "🇨🇭" }, venue: "Hard Rock Stadium", city: "Miami Gardens", channels: ["dsports", "caracol", "rcn", "disney"] },
  { date: "2026-06-18", time: "17:00", jornada: 2, grupo: "B", home: { name: "Canadá", flag: "🇨🇦" }, away: { name: "Qatar", flag: "🇶🇦" }, venue: "BMO Field", city: "Toronto", channels: ["dsports"] },
  { date: "2026-06-18", time: "20:00", jornada: 2, grupo: "A", home: { name: "México", flag: "🇲🇽" }, away: { name: "Corea del Sur", flag: "🇰🇷" }, venue: "SoFi Stadium", city: "Inglewood", channels: ["dsports", "win"] },
  { date: "2026-06-19", time: "14:00", jornada: 2, grupo: "D", home: { name: "Estados Unidos", flag: "🇺🇸" }, away: { name: "Australia", flag: "🇦🇺" }, venue: "AT&T Stadium", city: "Arlington", channels: ["dsports"] },
  { date: "2026-06-19", time: "17:00", jornada: 2, grupo: "C", home: { name: "Escocia", flag: SCOTLAND_FLAG }, away: { name: "Marruecos", flag: "🇲🇦" }, venue: "Mercedes-Benz Stadium", city: "Atlanta", channels: ["dsports", "caracol", "rcn"] },
  { date: "2026-06-19", time: "19:30", jornada: 2, grupo: "C", home: { name: "Brasil", flag: "🇧🇷" }, away: { name: "Haití", flag: "🇭🇹" }, venue: "Levi's Stadium", city: "Santa Clara", channels: ["dsports"] },
  { date: "2026-06-19", time: "22:00", jornada: 2, grupo: "D", home: { name: "Turquía", flag: "🇹🇷" }, away: { name: "Paraguay", flag: "🇵🇾" }, venue: "Arrowhead Stadium", city: "Kansas City", channels: ["dsports", "win"] },
  { date: "2026-06-20", time: "12:00", jornada: 2, grupo: "F", home: { name: "Países Bajos", flag: "🇳🇱" }, away: { name: "Suecia", flag: "🇸🇪" }, venue: "Allegiant Stadium", city: "Las Vegas", channels: ["dsports", "win"] },
  { date: "2026-06-20", time: "15:00", jornada: 2, grupo: "E", home: { name: "Alemania", flag: "🇩🇪" }, away: { name: "Costa de Marfil", flag: "🇨🇮" }, venue: "Rose Bowl", city: "Pasadena", channels: ["dsports", "caracol", "rcn", "disney"] },
  { date: "2026-06-20", time: "19:00", jornada: 2, grupo: "E", home: { name: "Ecuador", flag: "🇪🇨" }, away: { name: "Curazao", flag: "🇨🇼" }, venue: "Lumen Field", city: "Seattle", channels: ["dsports", "win", "disney"] },
  { date: "2026-06-20", time: "23:00", jornada: 2, grupo: "F", home: { name: "Túnez", flag: "🇹🇳" }, away: { name: "Japón", flag: "🇯🇵" }, venue: "Gillette Stadium", city: "Foxborough", channels: ["dsports"] },
  { date: "2026-06-21", time: "11:00", jornada: 2, grupo: "H", home: { name: "España", flag: "🇪🇸" }, away: { name: "Arabia Saudita", flag: "🇸🇦" }, venue: "Hard Rock Stadium", city: "Miami Gardens", channels: ["dsports", "win", "disney"] },
  { date: "2026-06-21", time: "14:00", jornada: 2, grupo: "G", home: { name: "Bélgica", flag: "🇧🇪" }, away: { name: "Irán", flag: "🇮🇷" }, venue: "Mercedes-Benz Stadium", city: "Atlanta", channels: ["dsports", "caracol", "rcn", "disney"] },
  { date: "2026-06-21", time: "17:00", jornada: 2, grupo: "H", home: { name: "Uruguay", flag: "🇺🇾" }, away: { name: "Cabo Verde", flag: "🇨🇻" }, venue: "AT&T Stadium", city: "Arlington", channels: ["dsports"] },
  { date: "2026-06-21", time: "20:00", jornada: 2, grupo: "G", home: { name: "Nueva Zelanda", flag: "🇳🇿" }, away: { name: "Egipto", flag: "🇪🇬" }, venue: "Levi's Stadium", city: "Santa Clara", channels: ["dsports"] },
  { date: "2026-06-22", time: "12:00", jornada: 2, grupo: "J", home: { name: "Argentina", flag: "🇦🇷" }, away: { name: "Austria", flag: "🇦🇹" }, venue: "Rose Bowl", city: "Pasadena", channels: ["dsports", "caracol", "rcn", "disney"] },
  { date: "2026-06-22", time: "16:00", jornada: 2, grupo: "I", home: { name: "Francia", flag: "🇫🇷" }, away: { name: "Irak", flag: "🇮🇶" }, venue: "Allegiant Stadium", city: "Las Vegas", channels: ["dsports"] },
  { date: "2026-06-22", time: "19:00", jornada: 2, grupo: "I", home: { name: "Noruega", flag: "🇳🇴" }, away: { name: "Senegal", flag: "🇸🇳" }, venue: "Lumen Field", city: "Seattle", channels: ["dsports", "win"] },
  { date: "2026-06-22", time: "22:00", jornada: 2, grupo: "J", home: { name: "Jordania", flag: "🇯🇴" }, away: { name: "Argelia", flag: "🇩🇿" }, venue: "Arrowhead Stadium", city: "Kansas City", channels: ["dsports"] },
  { date: "2026-06-23", time: "12:00", jornada: 2, grupo: "K", home: { name: "Portugal", flag: "🇵🇹" }, away: { name: "Uzbekistán", flag: "🇺🇿" }, venue: "SoFi Stadium", city: "Inglewood", channels: ["dsports", "win"] },
  { date: "2026-06-23", time: "15:00", jornada: 2, grupo: "L", home: { name: "Inglaterra", flag: ENGLAND_FLAG }, away: { name: "Ghana", flag: "🇬🇭" }, venue: "Gillette Stadium", city: "Foxborough", channels: ["dsports"] },
  { date: "2026-06-23", time: "18:00", jornada: 2, grupo: "L", home: { name: "Panamá", flag: "🇵🇦" }, away: { name: "Croacia", flag: "🇭🇷" }, venue: "AT&T Stadium", city: "Arlington", channels: ["dsports"] },
  { date: "2026-06-23", time: "21:00", jornada: 2, grupo: "K", home: { name: "Colombia", flag: "🇨🇴" }, away: { name: "RD Congo", flag: "🇨🇩" }, venue: "Levi's Stadium", city: "Santa Clara", channels: ["dsports", "caracol", "rcn", "disney"] },
  { date: "2026-06-24", time: "14:00", jornada: 3, grupo: "B", home: { name: "Suiza", flag: "🇨🇭" }, away: { name: "Canadá", flag: "🇨🇦" }, venue: "MetLife Stadium", city: "East Rutherford", channels: ["dsports"] },
  { date: "2026-06-24", time: "14:00", jornada: 3, grupo: "B", home: { name: "Bosnia", flag: "🇧🇦" }, away: { name: "Qatar", flag: "🇶🇦" }, venue: "Hard Rock Stadium", city: "Miami Gardens", channels: ["dsports"] },
  { date: "2026-06-24", time: "17:00", jornada: 3, grupo: "C", home: { name: "Escocia", flag: SCOTLAND_FLAG }, away: { name: "Brasil", flag: "🇧🇷" }, venue: "Rose Bowl", city: "Pasadena", channels: ["dsports", "caracol", "rcn", "disney"] },
  { date: "2026-06-24", time: "17:00", jornada: 3, grupo: "C", home: { name: "Marruecos", flag: "🇲🇦" }, away: { name: "Haití", flag: "🇭🇹" }, venue: "Lumen Field", city: "Seattle", channels: ["dsports"] },
  { date: "2026-06-24", time: "20:00", jornada: 3, grupo: "A", home: { name: "Rep. Checa", flag: "🇨🇿" }, away: { name: "México", flag: "🇲🇽" }, venue: "Mercedes-Benz Stadium", city: "Atlanta", channels: ["dsports", "win"] },
  { date: "2026-06-24", time: "20:00", jornada: 3, grupo: "A", home: { name: "Sudáfrica", flag: "🇿🇦" }, away: { name: "Corea del Sur", flag: "🇰🇷" }, venue: "AT&T Stadium", city: "Arlington", channels: ["dsports"] },
  { date: "2026-06-25", time: "15:00", jornada: 3, grupo: "E", home: { name: "Ecuador", flag: "🇪🇨" }, away: { name: "Alemania", flag: "🇩🇪" }, venue: "SoFi Stadium", city: "Inglewood", channels: ["dsports", "caracol", "rcn", "disney"] },
  { date: "2026-06-25", time: "15:00", jornada: 3, grupo: "E", home: { name: "Curazao", flag: "🇨🇼" }, away: { name: "Costa de Marfil", flag: "🇨🇮" }, venue: "Allegiant Stadium", city: "Las Vegas", channels: ["dsports"] },
  { date: "2026-06-25", time: "18:00", jornada: 3, grupo: "F", home: { name: "Túnez", flag: "🇹🇳" }, away: { name: "Países Bajos", flag: "🇳🇱" }, venue: "Arrowhead Stadium", city: "Kansas City", channels: ["dsports", "win"] },
  { date: "2026-06-25", time: "18:00", jornada: 3, grupo: "F", home: { name: "Japón", flag: "🇯🇵" }, away: { name: "Suecia", flag: "🇸🇪" }, venue: "Rose Bowl", city: "Pasadena", channels: ["dsports"] },
  { date: "2026-06-25", time: "21:00", jornada: 3, grupo: "D", home: { name: "Turquía", flag: "🇹🇷" }, away: { name: "Estados Unidos", flag: "🇺🇸" }, venue: "Levi's Stadium", city: "Santa Clara", channels: ["dsports"] },
  { date: "2026-06-25", time: "21:00", jornada: 3, grupo: "D", home: { name: "Paraguay", flag: "🇵🇾" }, away: { name: "Australia", flag: "🇦🇺" }, venue: "Gillette Stadium", city: "Foxborough", channels: ["dsports"] },
  { date: "2026-06-26", time: "14:00", jornada: 3, grupo: "I", home: { name: "Noruega", flag: "🇳🇴" }, away: { name: "Francia", flag: "🇫🇷" }, venue: "MetLife Stadium", city: "East Rutherford", channels: ["dsports", "win"] },
  { date: "2026-06-26", time: "14:00", jornada: 3, grupo: "I", home: { name: "Senegal", flag: "🇸🇳" }, away: { name: "Irak", flag: "🇮🇶" }, venue: "AT&T Stadium", city: "Arlington", channels: ["dsports"] },
  { date: "2026-06-26", time: "19:00", jornada: 3, grupo: "H", home: { name: "Uruguay", flag: "🇺🇾" }, away: { name: "España", flag: "🇪🇸" }, venue: "Hard Rock Stadium", city: "Miami Gardens", channels: ["dsports", "caracol", "rcn", "disney"] },
  { date: "2026-06-26", time: "19:00", jornada: 3, grupo: "H", home: { name: "Cabo Verde", flag: "🇨🇻" }, away: { name: "Arabia Saudita", flag: "🇸🇦" }, venue: "Lumen Field", city: "Seattle", channels: ["dsports"] },
  { date: "2026-06-26", time: "22:00", jornada: 3, grupo: "G", home: { name: "Nueva Zelanda", flag: "🇳🇿" }, away: { name: "Bélgica", flag: "🇧🇪" }, venue: "Mercedes-Benz Stadium", city: "Atlanta", channels: ["dsports"] },
  { date: "2026-06-26", time: "22:00", jornada: 3, grupo: "G", home: { name: "Egipto", flag: "🇪🇬" }, away: { name: "Irán", flag: "🇮🇷" }, venue: "SoFi Stadium", city: "Inglewood", channels: ["dsports"] },
  { date: "2026-06-27", time: "16:00", jornada: 3, grupo: "L", home: { name: "Panamá", flag: "🇵🇦" }, away: { name: "Inglaterra", flag: ENGLAND_FLAG }, venue: "Rose Bowl", city: "Pasadena", channels: ["dsports"] },
  { date: "2026-06-27", time: "16:00", jornada: 3, grupo: "L", home: { name: "Croacia", flag: "🇭🇷" }, away: { name: "Ghana", flag: "🇬🇭" }, venue: "Arrowhead Stadium", city: "Kansas City", channels: ["dsports"] },
  { date: "2026-06-27", time: "18:30", jornada: 3, grupo: "K", home: { name: "Colombia", flag: "🇨🇴" }, away: { name: "Portugal", flag: "🇵🇹" }, venue: "Allegiant Stadium", city: "Las Vegas", channels: ["dsports", "caracol", "rcn", "disney"] },
  { date: "2026-06-27", time: "18:30", jornada: 3, grupo: "K", home: { name: "RD Congo", flag: "🇨🇩" }, away: { name: "Uzbekistán", flag: "🇺🇿" }, venue: "Lumen Field", city: "Seattle", channels: ["dsports"] },
  { date: "2026-06-27", time: "21:00", jornada: 3, grupo: "J", home: { name: "Jordania", flag: "🇯🇴" }, away: { name: "Argentina", flag: "🇦🇷" }, venue: "Gillette Stadium", city: "Foxborough", channels: ["dsports", "win", "disney"] },
  { date: "2026-06-27", time: "21:00", jornada: 3, grupo: "J", home: { name: "Argelia", flag: "🇩🇿" }, away: { name: "Austria", flag: "🇦🇹" }, venue: "MetLife Stadium", city: "East Rutherford", channels: ["dsports"] },
];

const APP_CONFIG = window.APP_CONFIG || {};
const RESULTS_STORAGE_KEY = "wc2026-results-cache-v1";
const RESULTS_MIN_REFRESH_MS = 40000;
const KNOWN_RESULT_STATUSES = new Set(["SCHEDULED", "LIVE", "HALFTIME", "FINISHED", "UNKNOWN"]);
const DEBUG_RESULTS = typeof window !== "undefined"
  && (
    window.location.search.includes("debugResults=1")
    || window.localStorage?.getItem("debugResults") === "1"
    || window.__DEBUG_RESULTS__ === true
  );

const state = {
  resultsByMatchNumber: new Map(),
  resultsByPair: new Map(),
  lastResultsPayload: null,
  lastLiveResultsPayload: null,
  resultsRefreshMs: RESULTS_MIN_REFRESH_MS,
  resultsPollTimerId: null,
  clockIntervalId: null,
  liveRefreshIntervalId: null,
};

const TEAM_ALIAS_GROUPS = {
  MEX: ["México", "Mexico", "MEX"],
  RSA: ["Sudáfrica", "South Africa", "RSA"],
  KOR: ["Corea del Sur", "South Korea", "KOR"],
  CZE: ["Chequia", "Czechia", "Rep. Checa", "CZE"],
  CAN: ["Canadá", "Canada", "CAN"],
  BIH: ["Bosnia", "Bosnia y Herzegovina", "Bosnia and Herzegovina", "Bosnia-Herzegovina", "BIH"],
  USA: ["Estados Unidos", "United States", "USA"],
  PAR: ["Paraguay", "PAR"],
  QAT: ["Catar", "Qatar", "QAT"],
  SUI: ["Suiza", "Switzerland", "SUI"],
  BRA: ["Brasil", "Brazil", "BRA"],
  MAR: ["Marruecos", "Morocco", "MAR"],
  HAI: ["Haití", "Haiti", "HAI", "HTI"],
  SCO: ["Escocia", "Scotland", "SCO"],
  AUS: ["Australia", "AUS"],
  TUR: ["Turquía", "Turkey", "TUR"],
  GER: ["Alemania", "Germany", "GER"],
  CUW: ["Curazao", "Curacao", "Curaçao", "CUW"],
  NED: ["Países Bajos", "Netherlands", "NED"],
  JPN: ["Japón", "Japan", "JPN"],
  CIV: ["Costa de Marfil", "Ivory Coast", "CIV"],
  ECU: ["Ecuador", "ECU"],
  SWE: ["Suecia", "Sweden", "SWE"],
  TUN: ["Túnez", "Tunisia", "TUN"],
  ESP: ["España", "Spain", "ESP"],
  CPV: ["Cabo Verde", "Cape Verde", "Cape Verde Islands", "CPV"],
  BEL: ["Bélgica", "Belgium", "BEL"],
  EGY: ["Egipto", "Egypt", "EGY"],
  KSA: ["Arabia Saudita", "Saudi Arabia", "KSA"],
  URU: ["Uruguay", "URY", "URU"],
  IRN: ["Irán", "Iran", "IRI", "IRN"],
  NZL: ["Nueva Zelanda", "New Zealand", "NZL"],
  FRA: ["Francia", "France", "FRA"],
  SEN: ["Senegal", "SEN"],
  IRQ: ["Irak", "Iraq", "IRQ"],
  NOR: ["Noruega", "Norway", "NOR"],
  ARG: ["Argentina", "ARG"],
  DZA: ["Argelia", "Algeria", "DZA"],
  AUT: ["Austria", "AUT"],
  JOR: ["Jordania", "Jordan", "JOR"],
  POR: ["Portugal", "POR"],
  COD: ["RD Congo", "DR Congo", "Congo DR", "COD"],
  UZB: ["Uzbekistán", "Uzbekistan", "UZB"],
  COL: ["Colombia", "COL"],
  ENG: ["Inglaterra", "England", "ENG"],
  CRO: ["Croacia", "Croatia", "CRO"],
  GHA: ["Ghana", "GHA"],
  PAN: ["Panamá", "Panama", "PAN"],
};

const teamAliasMap = new Map();
Object.entries(TEAM_ALIAS_GROUPS).forEach(([canonicalId, aliases]) => {
  aliases.forEach((alias) => teamAliasMap.set(normalizeText(alias), canonicalId));
});

MATCHES.forEach((match, index) => {
  match.matchNumber = index + 1;
  match.homeCanonicalId = resolveCanonicalTeamId(match.home.name);
  match.awayCanonicalId = resolveCanonicalTeamId(match.away.name);
});

const elements = {
  heroDate: document.getElementById("heroDate"),
  heroCount: document.getElementById("heroCount"),
  clockTime: document.getElementById("clockTime"),
  dayNav: document.getElementById("dayNav"),
  btnPrev: document.getElementById("btnPrev"),
  btnNext: document.getElementById("btnNext"),
  btnToday: document.getElementById("btnToday"),
  mainContent: document.getElementById("mainContent"),
};

function normalizeText(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9]+/g, " ")
    .trim()
    .toLowerCase();
}

function resolveCanonicalTeamId(value) {
  if (!value) return null;
  return teamAliasMap.get(normalizeText(value)) || null;
}

function buildPairKey(homeCanonicalId, awayCanonicalId) {
  if (!homeCanonicalId || !awayCanonicalId) return null;
  return `${homeCanonicalId}__${awayCanonicalId}`;
}

function getResultTeamCanonicalId(result, side) {
  return resolveCanonicalTeamId(result[`${side}_code`])
    || resolveCanonicalTeamId(result[`${side}_name`]);
}

function getPairKeyFromResult(result) {
  return buildPairKey(getResultTeamCanonicalId(result, "home"), getResultTeamCanonicalId(result, "away"));
}

function isNumericScore(result) {
  return Number.isFinite(result?.score_home) && Number.isFinite(result?.score_away);
}

function normalizeResultStatus(status) {
  const normalized = String(status || "UNKNOWN").toUpperCase();
  return KNOWN_RESULT_STATUSES.has(normalized) ? normalized : "UNKNOWN";
}

function isResultCompatibleWithMatch(result, match) {
  const homeCanonicalId = getResultTeamCanonicalId(result, "home");
  const awayCanonicalId = getResultTeamCanonicalId(result, "away");

  const directMatch = (
    (!homeCanonicalId || !match.homeCanonicalId || homeCanonicalId === match.homeCanonicalId)
    && (!awayCanonicalId || !match.awayCanonicalId || awayCanonicalId === match.awayCanonicalId)
  );
  const reversedMatch = (
    (!homeCanonicalId || !match.awayCanonicalId || homeCanonicalId === match.awayCanonicalId)
    && (!awayCanonicalId || !match.homeCanonicalId || awayCanonicalId === match.homeCanonicalId)
  );

  if (!directMatch && !reversedMatch) return false;

  return Boolean((homeCanonicalId && awayCanonicalId) || Number.isInteger(result.match_number));
}

function getResultOrientation(result, match) {
  const homeCanonicalId = getResultTeamCanonicalId(result, "home");
  const awayCanonicalId = getResultTeamCanonicalId(result, "away");

  if (
    homeCanonicalId
    && awayCanonicalId
    && match.homeCanonicalId
    && match.awayCanonicalId
  ) {
    if (homeCanonicalId === match.homeCanonicalId && awayCanonicalId === match.awayCanonicalId) {
      return "direct";
    }

    if (homeCanonicalId === match.awayCanonicalId && awayCanonicalId === match.homeCanonicalId) {
      return "reversed";
    }
  }

  return "direct";
}

function getOrientedScore(result, match) {
  if (!isNumericScore(result)) return null;
  const orientation = getResultOrientation(result, match);
  return orientation === "reversed"
    ? { home: result.score_away, away: result.score_home, orientation }
    : { home: result.score_home, away: result.score_away, orientation };
}

function getAppConfig() {
  return {
    apiBaseUrl: String(APP_CONFIG.API_BASE_URL || "").trim(),
  };
}

function getBogotaDate() {
  return new Date(new Date().toLocaleString("en-US", { timeZone: "America/Bogota" }));
}

function getBogotaDateStr() {
  const d = getBogotaDate();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function matchDatetimeBogota(match) {
  const [h, min] = match.time.split(":").map(Number);
  const [y, mo, d] = match.date.split("-").map(Number);
  return new Date(Date.UTC(y, mo - 1, d, h + 5, min));
}

function formatTime12(time24) {
  let [h, m] = time24.split(":").map(Number);
  const ampm = h >= 12 ? "p. m." : "a. m.";
  h = h % 12 || 12;
  return `${h}:${String(m).padStart(2, "0")} ${ampm}`;
}

function formatCountdown(ms) {
  if (ms <= 0) return null;
  const totalMin = Math.floor(ms / 60000);
  const h = Math.floor(totalMin / 60);
  const m = totalMin % 60;
  return h > 0 ? `Arranca en ${h}h ${m}m` : `Arranca en ${m}m`;
}

function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function getUniqueDates() {
  return [...new Set(MATCHES.map((match) => match.date))].sort();
}

function createElement(tag, options = {}) {
  const node = document.createElement(tag);
  if (options.className) node.className = options.className;
  if (options.text) node.textContent = options.text;
  if (options.html) node.innerHTML = options.html;
  if (options.attrs) {
    Object.entries(options.attrs).forEach(([key, value]) => node.setAttribute(key, value));
  }
  return node;
}

function createBadge(text, className) {
  return createElement("span", { className: `badge ${className}`, text });
}

function createChannelBadge(key) {
  const channel = CHANNELS[key];
  if (!channel) return null;

  const link = createElement("a", {
    className: "ch-badge",
    attrs: {
      href: channel.url,
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": `Ver ${channel.name}`,
      title: `Ver en ${channel.name}`,
    },
  });

  const img = createElement("img", {
    attrs: {
      src: `assets/logos/${channel.file}`,
      alt: channel.name,
      loading: "lazy",
    },
  });

  const fallback = createElement("span", { className: "ch-fallback", text: channel.name });
  img.addEventListener("error", () => {
    img.style.display = "none";
    fallback.style.display = "inline";
  });

  link.append(img, fallback);
  return link;
}

function safeReadCachedResults() {
  try {
    const raw = localStorage.getItem(RESULTS_STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function safeWriteCachedResults(payload) {
  try {
    localStorage.setItem(RESULTS_STORAGE_KEY, JSON.stringify(payload));
  } catch {
    // Ignore storage failures silently.
  }
}

function debugLog(label, payload) {
  if (!DEBUG_RESULTS) return;
  if (payload === undefined) {
    console.log(`[results-debug] ${label}`);
    return;
  }
  console.log(`[results-debug] ${label}`, payload);
}

function clearResultMaps() {
  state.resultsByMatchNumber.clear();
  state.resultsByPair.clear();
}

function applyResultsCollection(results, { clear = false } = {}) {
  if (!Array.isArray(results)) return 0;
  if (clear) clearResultMaps();

  let inserted = 0;
  results.forEach((result) => {
    const normalizedStatus = normalizeResultStatus(result?.status);
    const hasTeamMetadata = Boolean(
      result?.home_name || result?.away_name || result?.home_code || result?.away_code
    );
    const hasMatchNumber = Number.isInteger(result?.match_number);

    if (!hasMatchNumber && !hasTeamMetadata) return;
    if (normalizedStatus === "UNKNOWN" && !hasMatchNumber && !hasTeamMetadata) return;

    const safeResult = {
      ...result,
      status: normalizedStatus,
    };

    if (hasMatchNumber) {
      state.resultsByMatchNumber.set(result.match_number, safeResult);
      inserted += 1;
    }

    const pairKey = getPairKeyFromResult(safeResult);
    if (pairKey) {
      state.resultsByPair.set(pairKey, safeResult);
    }
  });
  return inserted;
}

function ingestResultsPayload(payload, livePayload = null) {
  if (!payload || !Array.isArray(payload.results)) return false;

  const baseCount = applyResultsCollection(payload.results, { clear: true });
  const liveCount = applyResultsCollection(livePayload?.results || [], { clear: false });

  state.lastResultsPayload = payload;
  state.lastLiveResultsPayload = livePayload || null;

  const refreshIntervalSeconds = Math.max(
    payload.meta?.refresh_interval_seconds || 0,
    livePayload?.meta?.refresh_interval_seconds || 0
  );

  if (refreshIntervalSeconds >= 40) {
    state.resultsRefreshMs = refreshIntervalSeconds * 1000;
  } else {
    state.resultsRefreshMs = RESULTS_MIN_REFRESH_MS;
  }

  debugLog("Payload ingerido", {
    totalResults: payload.results.length,
    totalLiveResults: Array.isArray(livePayload?.results) ? livePayload.results.length : 0,
    insertedBase: baseCount,
    insertedLive: liveCount,
    byMatchNumber: state.resultsByMatchNumber.size,
    byPair: state.resultsByPair.size,
    refreshMs: state.resultsRefreshMs,
  });

  return true;
}

function resolveResultForMatch(match) {
  const byMatchNumber = state.resultsByMatchNumber.get(match.matchNumber);
  if (byMatchNumber && isResultCompatibleWithMatch(byMatchNumber, match)) {
    debugLog(`Match #${match.matchNumber} resuelto por match_number`, {
      match: `${match.home.name} vs ${match.away.name}`,
      result: byMatchNumber,
    });
    return byMatchNumber;
  }

  const byPair = state.resultsByPair.get(buildPairKey(match.homeCanonicalId, match.awayCanonicalId))
    || state.resultsByPair.get(buildPairKey(match.awayCanonicalId, match.homeCanonicalId));
  if (byPair && isResultCompatibleWithMatch(byPair, match)) {
    debugLog(`Match #${match.matchNumber} resuelto por alias`, {
      match: `${match.home.name} vs ${match.away.name}`,
      result: byPair,
    });
    return byPair;
  }

  debugLog(`Match #${match.matchNumber} sin resultado confiable`, `${match.home.name} vs ${match.away.name}`);
  return null;
}

function getFallbackTemporalState(match, nowUTC) {
  const diffMs = matchDatetimeBogota(match) - nowUTC;
  return {
    diffMs,
    isLive: diffMs <= 0 && diffMs > -MATCH_END_MS,
    isFinished: diffMs <= -MATCH_END_MS,
  };
}

function minuteLabelFromElapsedMinutes(rawMinutes) {
  if (!Number.isFinite(rawMinutes)) return null;
  const minutes = Math.max(0, Math.floor(rawMinutes));
  return `${Math.max(1, minutes)}'`;
}

function sanitizeDisplayClock(value) {
  const text = String(value || "").trim();
  return text || null;
}

function getCalculatedMinuteLabel(match, nowUTC) {
  const kickoff = matchDatetimeBogota(match);
  const elapsedMinutes = (nowUTC - kickoff) / 60000;
  return minuteLabelFromElapsedMinutes(elapsedMinutes);
}

function getResultMinuteLabel(match, result, nowUTC) {
  if (!result) return null;
  const status = normalizeResultStatus(result.status);
  const displayClock = sanitizeDisplayClock(result.display_clock);

  if (status === "FINISHED" || status === "SCHEDULED") return null;
  if (status === "HALFTIME") return "Medio tiempo";
  if (displayClock) return displayClock;

  if (Number.isFinite(result.elapsed) && result.estimated_elapsed === false) {
    return minuteLabelFromElapsedMinutes(result.elapsed);
  }

  if (Number.isFinite(result.elapsed)) {
    return minuteLabelFromElapsedMinutes(result.elapsed);
  }

  const calculated = getCalculatedMinuteLabel(match, nowUTC);
  if (calculated) return calculated;

  return null;
}

function getMatchPresentation(match, nowUTC) {
  const fallback = getFallbackTemporalState(match, nowUTC);
  const result = resolveResultForMatch(match);
  const orientedScore = result ? getOrientedScore(result, match) : null;
  const backendPhase = result ? normalizeResultStatus(result.status) : "UNKNOWN";
  const hasBackendPhase = backendPhase !== "UNKNOWN";
  let phase = backendPhase;

  // Only fall back to the local time-window heuristic when the backend
  // does not provide a usable state for this match.
  if (!hasBackendPhase) {
    if (fallback.isFinished) phase = "FINISHED";
    else if (fallback.isLive) phase = "LIVE";
    else phase = "SCHEDULED";
  }

  const hasScore = Boolean(orientedScore) && phase !== "SCHEDULED";

  const minuteLabel = getResultMinuteLabel(match, result, nowUTC);
  const isLive = phase === "LIVE" || phase === "HALFTIME";
  const isFinished = phase === "FINISHED";
  const centerPrimary = hasScore ? `${orientedScore.home} - ${orientedScore.away}` : formatTime12(match.time);
  const centerSecondary = hasScore
    ? (phase === "HALFTIME" ? "Medio tiempo" : phase === "FINISHED" ? "Final" : minuteLabel || "En vivo")
    : "vs";

  return {
    result,
    orientedScore,
    phase,
    hasScore,
    isLive,
    isFinished,
    minuteLabel,
    centerPrimary,
    centerSecondary,
    countdownText: formatCountdown(matchDatetimeBogota(match) - nowUTC),
  };
}

function buildStatusBadge(presentation) {
  if (presentation.isLive) return createBadge("● En vivo", "badge-live");
  if (presentation.isFinished) return createBadge("✓ Finalizado", "badge-done");
  return createBadge("Próximo", "badge-next");
}

function buildInfoItem(icon, text) {
  const item = createElement("div", { className: "fc-info-item" });
  item.append(createElement("span", { text: icon }), createElement("span", { text }));
  return item;
}

function buildChannels(channels, className) {
  const wrap = createElement("div", { className });
  channels.forEach((channelKey) => {
    const badge = createChannelBadge(channelKey);
    if (badge) wrap.append(badge);
  });
  return wrap;
}

function buildFeaturedMatchBlock(match, nowUTC) {
  const presentation = getMatchPresentation(match, nowUTC);
  const block = createElement("article", { className: "fc-block" });
  const teams = createElement("div", { className: "fc-teams" });

  const home = createElement("div", { className: "fc-team" });
  home.append(
    createElement("div", { className: "fc-flag", text: match.home.flag }),
    createElement("div", { className: "fc-team-name", text: match.home.name })
  );

  const vs = createElement("div", { className: "fc-vs" });
  vs.append(
    createElement("div", { className: "fc-vs-text", text: presentation.centerSecondary }),
    createElement("div", { className: `fc-time${presentation.hasScore ? " fc-score" : ""}`, text: presentation.centerPrimary })
  );

  const away = createElement("div", { className: "fc-team" });
  away.append(
    createElement("div", { className: "fc-flag", text: match.away.flag }),
    createElement("div", { className: "fc-team-name", text: match.away.name })
  );

  teams.append(home, vs, away);

  const info = createElement("div", { className: "fc-info" });
  const left = createElement("div", { className: "fc-info-left" });
  left.append(
    buildInfoItem("🏟️", match.venue),
    buildInfoItem("📍", match.city),
    createElement("div", { className: "fc-info-item", text: `Grupo ${match.grupo} · Jornada ${match.jornada}` })
  );
  info.append(left);

  if (match.channels.length) {
    const channelWrap = createElement("div", { className: "fc-channels" });
    channelWrap.append(createElement("span", { className: "fc-channels-label", text: "Ver en" }));
    match.channels.forEach((channelKey) => {
      const badge = createChannelBadge(channelKey);
      if (badge) channelWrap.append(badge);
    });
    info.append(channelWrap);
  }

  block.append(teams, info);
  return block;
}

function buildMatchCard(match, nowUTC) {
  const presentation = getMatchPresentation(match, nowUTC);
  const card = createElement("article", { className: "match-card" });

  if (presentation.isFinished) card.classList.add("is-done");

  const top = createElement("div", { className: "mc-top" });
  const meta = createElement("div", { className: "mc-meta" });
  meta.append(
    createElement("span", { className: "mc-time-badge", text: formatTime12(match.time) }),
    createBadge(`Grupo ${match.grupo}`, "badge-group"),
    createBadge(`Jornada ${match.jornada}`, "badge-jornada")
  );
  top.append(meta, buildStatusBadge(presentation));

  const teams = createElement("div", { className: "mc-teams" });
  const home = createElement("div", { className: "mc-team left" });
  home.append(createElement("span", { className: "mc-flag", text: match.home.flag }), createElement("span", { className: "mc-name", text: match.home.name }));

  const center = createElement("div", { className: "mc-center" });
  center.classList.add(presentation.hasScore ? "is-score" : "is-schedule");
  if (presentation.isFinished) center.classList.add("is-final");
  if (presentation.isLive) center.classList.add("is-live");
  center.append(
    createElement("div", { className: "mc-center-sub", text: presentation.centerSecondary }),
    createElement("div", { className: `mc-center-main${presentation.hasScore ? " mc-score" : ""}`, text: presentation.centerPrimary })
  );

  const away = createElement("div", { className: "mc-team right" });
  away.append(createElement("span", { className: "mc-flag", text: match.away.flag }), createElement("span", { className: "mc-name", text: match.away.name }));

  teams.append(home, center, away);

  const bottom = createElement("div", { className: "mc-bottom" });
  bottom.append(createElement("div", { className: "mc-venue", text: `🏟️ ${match.venue} · 📍 ${match.city}` }));
  if (match.channels.length) bottom.append(buildChannels(match.channels, "mc-channels"));

  card.append(top, teams, bottom);
  return card;
}

function buildFeaturedSection(dayMatches, nowUTC) {
  if (!dayMatches.length) return null;

  let featuredIdx = -1;
  let bestLiveElapsed = Infinity;
  let bestUpcomingDiff = Infinity;

  dayMatches.forEach((match, index) => {
    const presentation = getMatchPresentation(match, nowUTC);
    const diffMs = matchDatetimeBogota(match) - nowUTC;

    if (presentation.isLive) {
      const elapsed = Math.abs(diffMs);
      if (elapsed < bestLiveElapsed) {
        bestLiveElapsed = elapsed;
        featuredIdx = index;
      }
      return;
    }

    if (featuredIdx === -1 && !presentation.isFinished && diffMs > 0 && diffMs < bestUpcomingDiff) {
      bestUpcomingDiff = diffMs;
      featuredIdx = index;
    }
  });

  if (featuredIdx === -1) featuredIdx = dayMatches.length - 1;

  const featuredMatch = dayMatches[featuredIdx];
  const featuredPresentation = getMatchPresentation(featuredMatch, nowUTC);
  const featuredGroup = dayMatches.filter((match) => match.time === featuredMatch.time);
  const featuredIndices = new Set(dayMatches.map((match, index) => (match.time === featuredMatch.time ? index : -1)).filter((index) => index >= 0));
  const isSimultaneous = featuredGroup.length > 1;
  const remainingUpcoming = dayMatches.some((match) => !getMatchPresentation(match, nowUTC).isFinished && matchDatetimeBogota(match) - nowUTC > 0);
  const allFinished = dayMatches.every((match) => getMatchPresentation(match, nowUTC).isFinished);

  let featuredHeading = "Próximo partido";
  let statusText = featuredPresentation.countdownText;

  if (featuredPresentation.isLive) {
    featuredHeading = isSimultaneous ? `Partidos en vivo · ${formatTime12(featuredMatch.time)}` : "Partido en vivo";
    statusText = featuredPresentation.minuteLabel || "En juego";
  } else if (allFinished) {
    featuredHeading = isSimultaneous ? `Últimos partidos del día · ${formatTime12(featuredMatch.time)}` : "Último partido del día";
    statusText = "No quedan partidos por jugar hoy";
  } else if (!remainingUpcoming && featuredPresentation.isFinished) {
    featuredHeading = isSimultaneous ? `Últimos partidos del día · ${formatTime12(featuredMatch.time)}` : "Último partido del día";
    statusText = "No quedan partidos por jugar hoy";
  } else if (isSimultaneous) {
    featuredHeading = `Próximos partidos de hoy · ${formatTime12(featuredMatch.time)}`;
  } else {
    featuredHeading = "Próximo partido de hoy";
  }

  const wrap = createElement("section", { className: "featured-wrap", attrs: { "aria-labelledby": "featuredHeading" } });
  wrap.append(createElement("h2", { className: "section-label", text: featuredHeading, attrs: { id: "featuredHeading" } }));

  const card = createElement("div", { className: "featured-card" });
  const top = createElement("div", { className: "fc-top" });
  const badges = createElement("div", { className: "fc-badges" });
  badges.append(buildStatusBadge(featuredPresentation));

  if (isSimultaneous) {
    badges.append(createBadge("⚡ Simultánea", "badge-jornada"));
  } else {
    badges.append(createBadge(`Grupo ${featuredMatch.grupo}`, "badge-group"), createBadge(`Jornada ${featuredMatch.jornada}`, "badge-jornada"));
  }

  top.append(badges);
  if (statusText) top.append(createElement("div", { className: "fc-countdown", text: `⏱ ${statusText}` }));
  card.append(top);

  const blockList = createElement("div", { className: "fc-block-list" });
  featuredGroup.forEach((match) => blockList.append(buildFeaturedMatchBlock(match, nowUTC)));
  card.append(blockList);
  wrap.append(card);

  return { node: wrap, featuredIndices };
}

function buildRestSection(restMatches, nowUTC) {
  if (!restMatches.length) return null;

  const section = createElement("section", { attrs: { "aria-labelledby": "restHeading" } });
  section.append(createElement("h2", { className: "section-label", text: "Resto del día", attrs: { id: "restHeading" } }));

  const list = createElement("div", { className: "matches-list" });
  let i = 0;
  while (i < restMatches.length) {
    const current = restMatches[i];
    let j = i + 1;
    while (j < restMatches.length && restMatches[j].time === current.time) j += 1;
    const group = restMatches.slice(i, j);

    if (group.length > 1) {
      const simulGroup = createElement("section", { className: "simul-group" });
      simulGroup.append(createElement("h3", { className: "simul-label", text: `Partidos en simultánea · ${formatTime12(current.time)}` }));
      group.forEach((match) => simulGroup.append(buildMatchCard(match, nowUTC)));
      list.append(simulGroup);
    } else {
      list.append(buildMatchCard(current, nowUTC));
    }
    i = j;
  }

  section.append(list);
  return section;
}

function buildFinishedSection(finishedMatches, nowUTC) {
  if (!finishedMatches.length) return null;

  const section = createElement("section", { attrs: { "aria-labelledby": "finishedHeading" } });
  section.append(createElement("h2", { className: "section-label", text: "Finalizados", attrs: { id: "finishedHeading" } }));

  const list = createElement("div", { className: "matches-list" });
  finishedMatches.forEach((match) => list.append(buildMatchCard(match, nowUTC)));
  section.append(list);
  return section;
}

const allDates = getUniqueDates();
let currentDateStr = getBogotaDateStr();
if (currentDateStr < allDates[0]) currentDateStr = allDates[0];
if (currentDateStr > allDates[allDates.length - 1]) currentDateStr = allDates[allDates.length - 1];

function renderDayNav({ scrollActive = true } = {}) {
  elements.dayNav.replaceChildren();
  const todayStr = getBogotaDateStr();

  allDates.forEach((date, index) => {
    const dateObj = new Date(`${date}T00:00:00`);
    const button = createElement("button", {
      className: "day-chip",
      attrs: {
        type: "button",
        role: "tab",
        "aria-selected": String(date === currentDateStr),
        "aria-label": capitalize(dateObj.toLocaleDateString("es-CO", { weekday: "long", day: "numeric", month: "long" })),
        tabindex: date === currentDateStr ? "0" : "-1",
        "data-date": date,
      },
    });

    button.append(
      createElement("span", { className: "dc-day", text: capitalize(dateObj.toLocaleDateString("es-CO", { weekday: "short" }).replace(".", "")) }),
      createElement("span", { className: "dc-num", text: String(dateObj.getDate()) }),
      createElement("span", { className: "dc-mes", text: dateObj.toLocaleDateString("es-CO", { month: "short" }).replace(".", "") })
    );

    if (date === todayStr) {
      button.append(createElement("span", { className: "dc-today", text: "Hoy" }));
    }

    button.addEventListener("click", () => goToDate(date));
    button.addEventListener("keydown", (event) => {
      if (event.key === "ArrowRight" && index < allDates.length - 1) {
        event.preventDefault();
        goToDate(allDates[index + 1]);
      }
      if (event.key === "ArrowLeft" && index > 0) {
        event.preventDefault();
        goToDate(allDates[index - 1]);
      }
      if (event.key === "Home") {
        event.preventDefault();
        goToDate(allDates[0]);
      }
      if (event.key === "End") {
        event.preventDefault();
        goToDate(allDates[allDates.length - 1]);
      }
    });

    elements.dayNav.append(button);
  });

  const activeChip = elements.dayNav.querySelector('[aria-selected="true"]');
  if (scrollActive && activeChip) {
    activeChip.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }
}

function render({ animate = true, scrollActiveDay = true } = {}) {
  const nowUTC = new Date();
  const dayMatches = MATCHES.filter((match) => match.date === currentDateStr);
  const activeMatches = dayMatches.filter((match) => !getMatchPresentation(match, nowUTC).isFinished);
  const finishedMatches = dayMatches.filter((match) => getMatchPresentation(match, nowUTC).isFinished);
  const [y, mo, d] = currentDateStr.split("-").map(Number);
  const currentDate = new Date(y, mo - 1, d);

  elements.heroDate.textContent = capitalize(currentDate.toLocaleDateString("es-CO", { weekday: "long", day: "numeric", month: "long" }));
  elements.heroCount.replaceChildren(
    createElement("strong", { text: String(dayMatches.length) }),
    document.createTextNode(` partido${dayMatches.length !== 1 ? "s" : ""} este día`)
  );

  const currentIndex = allDates.indexOf(currentDateStr);
  elements.btnPrev.disabled = currentIndex <= 0;
  elements.btnNext.disabled = currentIndex >= allDates.length - 1;

  renderDayNav({ scrollActive: scrollActiveDay });

  const content = createElement("div", { className: `content-stack${animate ? " fade-in" : ""}` });
  if (DEBUG_RESULTS) {
    console.groupCollapsed(`[results-debug] Render ${currentDateStr}`);
    dayMatches.forEach((match) => {
      const presentation = getMatchPresentation(match, nowUTC);
      console.log(`#${match.matchNumber}`, `${match.home.name} vs ${match.away.name}`, {
        phase: presentation.phase,
        hasScore: presentation.hasScore,
        centerPrimary: presentation.centerPrimary,
        centerSecondary: presentation.centerSecondary,
        result: presentation.result,
      });
    });
    console.groupEnd();
  }
  if (!dayMatches.length) {
    const empty = createElement("section", { className: "empty-state" });
    empty.append(
      createElement("div", { className: "icon", text: "📅" }),
      createElement("h2", { text: "Sin partidos este día" }),
      createElement("p", { text: "Navega a otro día para ver el calendario." })
    );
    content.append(empty);
  } else {
    if (activeMatches.length > 0) {
      const featured = buildFeaturedSection(activeMatches, nowUTC);
      if (featured) {
        content.append(featured.node);
        const restMatches = activeMatches.filter((_, index) => !featured.featuredIndices.has(index));
        const restSection = buildRestSection(restMatches, nowUTC);
        if (restSection) content.append(restSection);
      }
    }

    const finishedSection = buildFinishedSection(finishedMatches, nowUTC);
    if (finishedSection) content.append(finishedSection);
  }

  elements.mainContent.replaceChildren(content);
}

function updateClock() {
  const now = getBogotaDate();
  elements.clockTime.textContent = formatTime12(`${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`);
}

function goToDate(date) {
  currentDateStr = date;
  render({ animate: true, scrollActiveDay: true });
}

function navigate(direction) {
  const index = allDates.indexOf(currentDateStr);
  const nextIndex = index + direction;
  if (nextIndex >= 0 && nextIndex < allDates.length) {
    currentDateStr = allDates[nextIndex];
    render({ animate: true, scrollActiveDay: true });
  }
}

function goToToday() {
  const today = getBogotaDateStr();
  if (today < allDates[0]) currentDateStr = allDates[0];
  else if (today > allDates[allDates.length - 1]) currentDateStr = allDates[allDates.length - 1];
  else currentDateStr = today;
  render({ animate: true, scrollActiveDay: true });
}

function refreshLiveView() {
  const today = getBogotaDateStr();
  const clampedToday = today < allDates[0]
    ? allDates[0]
    : today > allDates[allDates.length - 1]
      ? allDates[allDates.length - 1]
      : today;

  if (currentDateStr === today || currentDateStr === clampedToday) {
    currentDateStr = clampedToday;
  }

  render({ animate: false, scrollActiveDay: false });
}

function scheduleResultsRefresh(ms = state.resultsRefreshMs) {
  if (state.resultsPollTimerId) {
    clearTimeout(state.resultsPollTimerId);
  }

  state.resultsPollTimerId = window.setTimeout(() => {
    fetchResultsSilently();
  }, Math.max(RESULTS_MIN_REFRESH_MS, ms));
}

function persistRenderedResults(payload, livePayload = null) {
  safeWriteCachedResults({
    meta: payload?.meta || null,
    live_meta: livePayload?.meta || null,
    results: Array.from(state.resultsByMatchNumber.values()),
  });
  render({ animate: false, scrollActiveDay: false });
}

async function fetchResultsSilently() {
  const config = getAppConfig();
  if (!config.apiBaseUrl) {
    debugLog("No hay API_BASE_URL configurado");
    scheduleResultsRefresh();
    return;
  }

  try {
    const baseUrl = config.apiBaseUrl.replace(/\/$/, "");
    debugLog("Fetch /api/results + /api/results/live", { apiBaseUrl: baseUrl });
    const [resultsResponse, liveResponse] = await Promise.allSettled([
      fetch(`${baseUrl}/api/results`, { cache: "no-store" }),
      fetch(`${baseUrl}/api/results/live`, { cache: "no-store" }),
    ]);

    if (resultsResponse.status !== "fulfilled") {
      debugLog("Fetch /api/results lanzó excepción");
      scheduleResultsRefresh();
      return;
    }

    const response = resultsResponse.value;
    if (!response.ok) {
      debugLog("Fetch /api/results falló", { status: response.status, statusText: response.statusText });
      scheduleResultsRefresh();
      return;
    }

    const payload = await response.json();
    debugLog("Fetch /api/results exitoso", {
      status: response.status,
      refresh_interval_seconds: payload?.meta?.refresh_interval_seconds,
      totalResults: Array.isArray(payload?.results) ? payload.results.length : 0,
    });

    if (ingestResultsPayload(payload, null)) {
      persistRenderedResults(payload, null);
    }

    let livePayload = null;
    if (liveResponse.status === "fulfilled") {
      if (liveResponse.value.ok) {
        livePayload = await liveResponse.value.json();
      } else {
        debugLog("Fetch /api/results/live falló", {
          status: liveResponse.value.status,
          statusText: liveResponse.value.statusText,
        });
      }
    } else {
      debugLog("Fetch /api/results/live lanzó excepción");
    }

    debugLog("Fetch exitoso", {
      status: response.status,
      refresh_interval_seconds: payload?.meta?.refresh_interval_seconds,
      totalResults: Array.isArray(payload?.results) ? payload.results.length : 0,
      totalLiveResults: Array.isArray(livePayload?.results) ? livePayload.results.length : 0,
    });

    if (livePayload && ingestResultsPayload(payload, livePayload)) {
      persistRenderedResults(payload, livePayload);
    }
  } catch {
    debugLog("Excepción al consultar resultados");
    // Keep the last valid cached results silently.
  } finally {
    scheduleResultsRefresh();
  }
}

function hydrateResultsFromCache() {
  const cachedPayload = safeReadCachedResults();
  if (cachedPayload) {
    debugLog("Resultados cargados desde localStorage", {
      totalResults: Array.isArray(cachedPayload.results) ? cachedPayload.results.length : 0,
    });
    ingestResultsPayload(cachedPayload);
  } else {
    debugLog("No había caché local de resultados");
  }
}

function startClockLoop() {
  if (state.clockIntervalId) clearInterval(state.clockIntervalId);
  updateClock();
  state.clockIntervalId = window.setInterval(updateClock, 30000);
}

function startLiveRefreshLoop() {
  if (state.liveRefreshIntervalId) clearInterval(state.liveRefreshIntervalId);
  state.liveRefreshIntervalId = window.setInterval(refreshLiveView, 60000);
}

function startResultsPolling() {
  if (state.resultsPollTimerId) clearTimeout(state.resultsPollTimerId);
  fetchResultsSilently();
}

elements.btnPrev.addEventListener("click", () => navigate(-1));
elements.btnNext.addEventListener("click", () => navigate(1));
elements.btnToday.addEventListener("click", goToToday);

hydrateResultsFromCache();
startClockLoop();
render({ animate: false, scrollActiveDay: false });
startLiveRefreshLoop();
startResultsPolling();
