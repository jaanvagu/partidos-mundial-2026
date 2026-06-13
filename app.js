const CHANNELS = {
  caracol: { name: "Caracol", file: "caracol.png", url: "https://www.caracoltv.com/senal-vivo" },
  rcn: { name: "RCN", file: "rcn.png", url: "https://www.youtube.com/@canalrcn" },
  dsports: { name: "D Sports", file: "dsports.png", url: "https://www.directvgo.com/home/main" },
  win: { name: "WIN", file: "win.png", url: "https://winplay.co/co" },
  disney: { name: "Disney+", file: "disney-plus.png", url: "https://www.disneyplus.com/" },
};

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

function formatElapsed(ms) {
  const totalMin = Math.max(1, Math.floor(Math.abs(ms) / 60000));
  const h = Math.floor(totalMin / 60);
  const m = totalMin % 60;
  return h > 0 ? `En juego desde hace ${h}h ${m}m` : `En juego desde hace ${m}m`;
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

function buildFeaturedMatchBlock(match) {
  const block = createElement("article", { className: "fc-block" });
  const teams = createElement("div", { className: "fc-teams" });

  const home = createElement("div", { className: "fc-team" });
  home.append(
    createElement("div", { className: "fc-flag", text: match.home.flag }),
    createElement("div", { className: "fc-team-name", text: match.home.name })
  );

  const vs = createElement("div", { className: "fc-vs" });
  vs.append(
    createElement("div", { className: "fc-vs-text", text: "vs" }),
    createElement("div", { className: "fc-time", text: formatTime12(match.time) })
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
  const card = createElement("article", { className: "match-card" });
  const diff = matchDatetimeBogota(match) - nowUTC;
  const isLive = diff <= 0 && diff > -6300000;
  const isDone = diff <= -6300000;

  if (isDone) card.classList.add("is-done");

  const top = createElement("div", { className: "mc-top" });
  const meta = createElement("div", { className: "mc-meta" });
  meta.append(
    createElement("span", { className: "mc-time-badge", text: formatTime12(match.time) }),
    createBadge(`Grupo ${match.grupo}`, "badge-group"),
    createBadge(`Jornada ${match.jornada}`, "badge-jornada")
  );
  top.append(meta);

  if (isLive) top.append(createBadge("● En vivo", "badge-live"));
  if (isDone) top.append(createBadge("✓ Finalizado", "badge-done"));

  const teams = createElement("div", { className: "mc-teams" });
  const home = createElement("div", { className: "mc-team left" });
  home.append(createElement("span", { className: "mc-flag", text: match.home.flag }), createElement("span", { className: "mc-name", text: match.home.name }));
  const away = createElement("div", { className: "mc-team right" });
  away.append(createElement("span", { className: "mc-flag", text: match.away.flag }), createElement("span", { className: "mc-name", text: match.away.name }));

  teams.append(home, createElement("div", { className: "mc-vs", text: "vs" }), away);

  const bottom = createElement("div", { className: "mc-bottom" });
  bottom.append(createElement("div", { className: "mc-venue", text: `🏟️ ${match.venue} · 📍 ${match.city}` }));
  if (match.channels.length) bottom.append(buildChannels(match.channels, "mc-channels"));

  card.append(top, teams, bottom);
  return card;
}

function buildFeaturedSection(dayMatches, nowUTC) {
  if (!dayMatches.length) return null;

  let featuredIdx = -1;
  let minDiff = Infinity;

  dayMatches.forEach((match, index) => {
    const diff = matchDatetimeBogota(match) - nowUTC;
    if (diff > 0 && diff < minDiff) {
      minDiff = diff;
      featuredIdx = index;
    }
  });

  if (featuredIdx === -1) featuredIdx = dayMatches.length - 1;

  const featuredMatch = dayMatches[featuredIdx];
  const featuredTime = matchDatetimeBogota(featuredMatch);
  const diffMs = featuredTime - nowUTC;
  const countdown = formatCountdown(diffMs);
  const isLive = diffMs <= 0 && diffMs > -6300000;
  const isDone = diffMs <= -6300000;
  const hasUpcomingMatches = dayMatches.some((match) => matchDatetimeBogota(match) - nowUTC > 0);
  const allMatchesDone = dayMatches.every((match) => matchDatetimeBogota(match) - nowUTC <= -6300000);
  const featuredGroup = dayMatches.filter((match) => match.time === featuredMatch.time);
  const featuredIndices = new Set(dayMatches.map((match, index) => (match.time === featuredMatch.time ? index : -1)).filter((index) => index >= 0));
  const isSimultaneous = featuredGroup.length > 1;

  let featuredHeading = "Próximo partido";
  let statusBadge = createBadge("Próximo", "badge-next");
  let statusText = countdown;

  if (isLive) {
    featuredHeading = isSimultaneous ? `Partidos en vivo · ${formatTime12(featuredMatch.time)}` : "Partido en vivo";
    statusBadge = createBadge("● En vivo", "badge-live");
    statusText = formatElapsed(diffMs);
  } else if (allMatchesDone) {
    featuredHeading = isSimultaneous ? `Últimos partidos del día · ${formatTime12(featuredMatch.time)}` : "Último partido del día";
    statusBadge = createBadge("Jornada finalizada", "badge-done");
    statusText = "No quedan partidos por jugar hoy";
  } else if (!hasUpcomingMatches && isDone) {
    featuredHeading = isSimultaneous ? `Últimos partidos del día · ${formatTime12(featuredMatch.time)}` : "Último partido del día";
    statusBadge = createBadge("Último del día", "badge-done");
    statusText = "No quedan partidos por jugar hoy";
  } else if (isSimultaneous) {
    featuredHeading = `Próximos partidos de hoy · ${formatTime12(featuredMatch.time)}`;
  } else {
    featuredHeading = "Próximo partido de hoy";
  }

  const wrap = createElement("section", { className: "featured-wrap", attrs: { "aria-labelledby": "featuredHeading" } });
  wrap.append(
    createElement("h2", {
      className: "section-label",
      text: featuredHeading,
      attrs: { id: "featuredHeading" },
    })
  );

  const card = createElement("div", { className: "featured-card" });
  const top = createElement("div", { className: "fc-top" });
  const badges = createElement("div", { className: "fc-badges" });
  badges.append(statusBadge);

  if (isSimultaneous) {
    badges.append(createBadge("⚡ Simultánea", "badge-jornada"));
  } else {
    badges.append(createBadge(`Grupo ${featuredMatch.grupo}`, "badge-group"), createBadge(`Jornada ${featuredMatch.jornada}`, "badge-jornada"));
  }

  top.append(badges);
  if (statusText) top.append(createElement("div", { className: "fc-countdown", text: `⏱ ${statusText}` }));
  card.append(top);

  const blockList = createElement("div", { className: "fc-block-list" });
  featuredGroup.forEach((match) => blockList.append(buildFeaturedMatchBlock(match)));
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

function render({ animate = true, scrollActiveDay = true } = {}) {
  const nowUTC = new Date();
  const dayMatches = MATCHES.filter((match) => match.date === currentDateStr);
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
  if (!dayMatches.length) {
    const empty = createElement("section", { className: "empty-state" });
    empty.append(
      createElement("div", { className: "icon", text: "📅" }),
      createElement("h2", { text: "Sin partidos este día" }),
      createElement("p", { text: "Navega a otro día para ver el calendario." })
    );
    content.append(empty);
  } else {
    const featured = buildFeaturedSection(dayMatches, nowUTC);
    if (featured) {
      content.append(featured.node);
      const restMatches = dayMatches.filter((_, index) => !featured.featuredIndices.has(index));
      const restSection = buildRestSection(restMatches, nowUTC);
      if (restSection) content.append(restSection);
    }
  }

  elements.mainContent.replaceChildren(content);
}

function updateClock() {
  const now = getBogotaDate();
  elements.clockTime.textContent = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
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

  // If the user is viewing "today", keep the page current across minute/day changes
  if (currentDateStr === today || currentDateStr === clampedToday) {
    currentDateStr = clampedToday;
  }

  render({ animate: false, scrollActiveDay: false });
}

elements.btnPrev.addEventListener("click", () => navigate(-1));
elements.btnNext.addEventListener("click", () => navigate(1));
elements.btnToday.addEventListener("click", goToToday);

updateClock();
render({ animate: false, scrollActiveDay: false });
setInterval(updateClock, 30000);
setInterval(refreshLiveView, 60000);
