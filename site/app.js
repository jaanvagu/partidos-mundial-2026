const CHANNELS = {
  caracol: { name: "Caracol", file: "caracol.png", url: "https://www.caracoltv.com/senal-vivo" },
  rcn: { name: "RCN", file: "rcn.png", url: "https://www.youtube.com/@canalrcn" },
  dsports: { name: "D Sports", file: "dsports.png", url: "https://www.directvgo.com/home/main" },
  win: { name: "WIN", file: "win.png", url: "https://winplay.co/co" },
  disney: { name: "Disney+", file: "disney-plus.png", url: "https://www.disneyplus.com/" },
};

const MATCH_END_MS = (2 * 60 + 10) * 60000;

const KNOCKOUT_BRACKET = {
  roundOf32: [
    { id: "M73", phase: "Dieciseisavos de final", home: "Sudáfrica", away: "Canadá", winner: "Canadá", score: "0-1", completed: true },
    { id: "M74", phase: "Dieciseisavos de final", home: "Alemania", away: "Paraguay", completed: false },
    { id: "M75", phase: "Dieciseisavos de final", home: "Países Bajos", away: "Marruecos", completed: false },
    { id: "M76", phase: "Dieciseisavos de final", home: "Brasil", away: "Japón", completed: false },
    { id: "M77", phase: "Dieciseisavos de final", home: "Francia", away: "Suecia", completed: false },
    { id: "M78", phase: "Dieciseisavos de final", home: "Costa de Marfil", away: "Noruega", completed: false },
    { id: "M79", phase: "Dieciseisavos de final", home: "México", away: "Ecuador", completed: false },
    { id: "M80", phase: "Dieciseisavos de final", home: "Inglaterra", away: "RD Congo", completed: false },
    { id: "M81", phase: "Dieciseisavos de final", home: "Estados Unidos", away: "Bosnia y Herzegovina", completed: false },
    { id: "M82", phase: "Dieciseisavos de final", home: "Bélgica", away: "Senegal", completed: false },
    { id: "M83", phase: "Dieciseisavos de final", home: "Portugal", away: "Croacia", completed: false },
    { id: "M84", phase: "Dieciseisavos de final", home: "España", away: "Austria", completed: false },
    { id: "M85", phase: "Dieciseisavos de final", home: "Suiza", away: "Argelia", completed: false },
    { id: "M86", phase: "Dieciseisavos de final", home: "Argentina", away: "Cabo Verde", completed: false },
    { id: "M87", phase: "Dieciseisavos de final", home: "Colombia", away: "Ghana", completed: false },
    { id: "M88", phase: "Dieciseisavos de final", home: "Australia", away: "Egipto", completed: false },
  ],
  roundOf16: [
    { id: "M89", phase: "Octavos de final", sources: ["M74", "M77"], date: "2026-07-04", time: "4:00 p. m.", venue: "Lincoln Financial Field, Philadelphia" },
    { id: "M90", phase: "Octavos de final", sources: ["M73", "M75"], date: "2026-07-04", time: "12:00 p. m.", venue: "NRG Stadium, Houston" },
    { id: "M91", phase: "Octavos de final", sources: ["M76", "M78"], date: "2026-07-05", time: "3:00 p. m.", venue: "MetLife Stadium, East Rutherford" },
    { id: "M92", phase: "Octavos de final", sources: ["M79", "M80"], date: "2026-07-05", time: "7:00 p. m.", venue: "Estadio Azteca, Ciudad de México" },
    { id: "M93", phase: "Octavos de final", sources: ["M83", "M84"], date: "2026-07-06", time: "2:00 p. m.", venue: "AT&T Stadium, Arlington" },
    { id: "M94", phase: "Octavos de final", sources: ["M81", "M82"], date: "2026-07-06", time: "7:00 p. m.", venue: "Lumen Field, Seattle" },
    { id: "M95", phase: "Octavos de final", sources: ["M86", "M88"], date: "2026-07-07", time: "11:00 a. m.", venue: "Mercedes-Benz Stadium, Atlanta" },
    { id: "M96", phase: "Octavos de final", sources: ["M85", "M87"], date: "2026-07-07", time: "3:00 p. m.", venue: "BC Place, Vancouver" },
  ],
};

const KNOWN_KNOCKOUT_PHASES = new Set(["Dieciseisavos de final", "Octavos de final", "Cuartos de final", "Semifinal", "Final"]);

const ENGLAND_FLAG = "\u{1F3F4}\u{E0067}\u{E0062}\u{E0065}\u{E006E}\u{E0067}\u{E007F}";
const SCOTLAND_FLAG = "\u{1F3F4}\u{E0067}\u{E0062}\u{E0073}\u{E0063}\u{E0074}\u{E007F}";

const MATCHES = [
  { date: "2026-06-11", time: "14:00", jornada: 1, grupo: "A", home: { name: "México", flag: "🇲🇽" }, away: { name: "Sudáfrica", flag: "🇿🇦" }, venue: "Mexico City Stadium, Estadio Azteca 🇲🇽", city: "Ciudad de México", channels: ["dsports", "caracol", "rcn", "disney"] },
  { date: "2026-06-11", time: "21:00", jornada: 1, grupo: "A", home: { name: "Corea del Sur", flag: "🇰🇷" }, away: { name: "Rep. Checa", flag: "🇨🇿" }, venue: "Estadio Guadalajara, Estadio Akron 🇲🇽", city: "Guadalajara", channels: ["dsports", "win"] },
  { date: "2026-06-12", time: "14:00", jornada: 1, grupo: "B", home: { name: "Canadá", flag: "🇨🇦" }, away: { name: "Bosnia", flag: "🇧🇦" }, venue: "Toronto Stadium, BMO Field 🇨🇦", city: "Toronto", channels: ["dsports", "win", "disney"] },
  { date: "2026-06-12", time: "20:00", jornada: 1, grupo: "D", home: { name: "Estados Unidos", flag: "🇺🇸" }, away: { name: "Paraguay", flag: "🇵🇾" }, venue: "Los Angeles Stadium, SoFi Stadium 🇺🇸", city: "Inglewood / Los Ángeles", channels: ["dsports", "caracol", "rcn", "disney"] },
  { date: "2026-06-13", time: "14:00", jornada: 1, grupo: "B", home: { name: "Qatar", flag: "🇶🇦" }, away: { name: "Suiza", flag: "🇨🇭" }, venue: "San Francisco Bay Area Stadium, Levi's Stadium 🇺🇸", city: "Santa Clara / San Francisco Bay Area", channels: ["dsports", "win"] },
  { date: "2026-06-13", time: "17:00", jornada: 1, grupo: "C", home: { name: "Brasil", flag: "🇧🇷" }, away: { name: "Marruecos", flag: "🇲🇦" }, venue: "New York New Jersey Stadium, MetLife Stadium 🇺🇸", city: "East Rutherford / Nueva York-Nueva Jersey", channels: ["dsports", "caracol", "rcn", "disney"] },
  { date: "2026-06-13", time: "20:00", jornada: 1, grupo: "C", home: { name: "Haití", flag: "🇭🇹" }, away: { name: "Escocia", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿" }, venue: "Boston Stadium, Gillette Stadium 🇺🇸", city: "Foxborough / Boston", channels: ["dsports"] },
  { date: "2026-06-13", time: "23:00", jornada: 1, grupo: "D", home: { name: "Australia", flag: "🇦🇺" }, away: { name: "Turquía", flag: "🇹🇷" }, venue: "BC Place Vancouver, BC Place 🇨🇦", city: "Vancouver", channels: ["dsports"] },
  { date: "2026-06-14", time: "12:00", jornada: 1, grupo: "E", home: { name: "Alemania", flag: "🇩🇪" }, away: { name: "Curazao", flag: "🇨🇼" }, venue: "Houston Stadium, NRG Stadium 🇺🇸", city: "Houston", channels: ["dsports"] },
  { date: "2026-06-14", time: "15:00", jornada: 1, grupo: "F", home: { name: "Países Bajos", flag: "🇳🇱" }, away: { name: "Japón", flag: "🇯🇵" }, venue: "Dallas Stadium, AT&T Stadium 🇺🇸", city: "Arlington / Dallas", channels: ["dsports", "caracol", "rcn", "disney"] },
  { date: "2026-06-14", time: "18:00", jornada: 1, grupo: "E", home: { name: "Costa de Marfil", flag: "🇨🇮" }, away: { name: "Ecuador", flag: "🇪🇨" }, venue: "Philadelphia Stadium, Lincoln Financial Field 🇺🇸", city: "Philadelphia", channels: ["dsports", "win", "disney"] },
  { date: "2026-06-14", time: "21:00", jornada: 1, grupo: "F", home: { name: "Suecia", flag: "🇸🇪" }, away: { name: "Túnez", flag: "🇹🇳" }, venue: "Estadio Monterrey, Estadio BBVA 🇲🇽", city: "Monterrey", channels: ["dsports"] },
  { date: "2026-06-15", time: "11:00", jornada: 1, grupo: "H", home: { name: "España", flag: "🇪🇸" }, away: { name: "Cabo Verde", flag: "🇨🇻" }, venue: "Atlanta Stadium, Mercedes-Benz Stadium 🇺🇸", city: "Atlanta", channels: ["dsports", "caracol", "rcn", "disney"] },
  { date: "2026-06-15", time: "14:00", jornada: 1, grupo: "G", home: { name: "Bélgica", flag: "🇧🇪" }, away: { name: "Egipto", flag: "🇪🇬" }, venue: "Seattle Stadium, Lumen Field 🇺🇸", city: "Seattle", channels: ["dsports"] },
  { date: "2026-06-15", time: "17:00", jornada: 1, grupo: "H", home: { name: "Arabia Saudita", flag: "🇸🇦" }, away: { name: "Uruguay", flag: "🇺🇾" }, venue: "Miami Stadium, Hard Rock Stadium 🇺🇸", city: "Miami Gardens / Miami", channels: ["dsports", "win", "disney"] },
  { date: "2026-06-15", time: "20:00", jornada: 1, grupo: "G", home: { name: "Irán", flag: "🇮🇷" }, away: { name: "Nueva Zelanda", flag: "🇳🇿" }, venue: "Los Angeles Stadium, SoFi Stadium 🇺🇸", city: "Inglewood / Los Ángeles", channels: ["dsports"] },
  { date: "2026-06-16", time: "14:00", jornada: 1, grupo: "I", home: { name: "Francia", flag: "🇫🇷" }, away: { name: "Senegal", flag: "🇸🇳" }, venue: "New York New Jersey Stadium, MetLife Stadium 🇺🇸", city: "East Rutherford / Nueva York-Nueva Jersey", channels: ["dsports"] },
  { date: "2026-06-16", time: "17:00", jornada: 1, grupo: "I", home: { name: "Irak", flag: "🇮🇶" }, away: { name: "Noruega", flag: "🇳🇴" }, venue: "Boston Stadium, Gillette Stadium 🇺🇸", city: "Foxborough / Boston", channels: ["dsports", "win"] },
  { date: "2026-06-16", time: "20:00", jornada: 1, grupo: "J", home: { name: "Argentina", flag: "🇦🇷" }, away: { name: "Argelia", flag: "🇩🇿" }, venue: "Kansas City Stadium, GEHA Field at Arrowhead Stadium 🇺🇸", city: "Kansas City", channels: ["dsports", "caracol", "rcn", "disney"] },
  { date: "2026-06-16", time: "23:00", jornada: 1, grupo: "J", home: { name: "Austria", flag: "🇦🇹" }, away: { name: "Jordania", flag: "🇯🇴" }, venue: "San Francisco Bay Area Stadium, Levi's Stadium 🇺🇸", city: "Santa Clara / San Francisco Bay Area", channels: ["dsports"] },
  { date: "2026-06-17", time: "12:00", jornada: 1, grupo: "K", home: { name: "Portugal", flag: "🇵🇹" }, away: { name: "RD Congo", flag: "🇨🇩" }, venue: "Houston Stadium, NRG Stadium 🇺🇸", city: "Houston", channels: ["dsports"] },
  { date: "2026-06-17", time: "15:00", jornada: 1, grupo: "L", home: { name: "Inglaterra", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" }, away: { name: "Croacia", flag: "🇭🇷" }, venue: "Dallas Stadium, AT&T Stadium 🇺🇸", city: "Arlington / Dallas", channels: ["dsports", "win"] },
  { date: "2026-06-17", time: "18:00", jornada: 1, grupo: "L", home: { name: "Ghana", flag: "🇬🇭" }, away: { name: "Panamá", flag: "🇵🇦" }, venue: "Toronto Stadium, BMO Field 🇨🇦", city: "Toronto", channels: ["dsports"] },
  { date: "2026-06-17", time: "21:00", jornada: 1, grupo: "K", home: { name: "Uzbekistán", flag: "🇺🇿" }, away: { name: "Colombia", flag: "🇨🇴" }, venue: "Mexico City Stadium, Estadio Azteca 🇲🇽", city: "Ciudad de México", channels: ["dsports", "caracol", "rcn", "disney"] },
  { date: "2026-06-18", time: "11:00", jornada: 2, grupo: "A", home: { name: "Sudáfrica", flag: "🇿🇦" }, away: { name: "Rep. Checa", flag: "🇨🇿" }, venue: "Atlanta Stadium, Mercedes-Benz Stadium 🇺🇸", city: "Atlanta", channels: ["dsports"] },
  { date: "2026-06-18", time: "14:00", jornada: 2, grupo: "B", home: { name: "Bosnia", flag: "🇧🇦" }, away: { name: "Suiza", flag: "🇨🇭" }, venue: "Los Angeles Stadium, SoFi Stadium 🇺🇸", city: "Inglewood / Los Ángeles", channels: ["dsports", "caracol", "rcn", "disney"] },
  { date: "2026-06-18", time: "17:00", jornada: 2, grupo: "B", home: { name: "Canadá", flag: "🇨🇦" }, away: { name: "Qatar", flag: "🇶🇦" }, venue: "BC Place Vancouver, BC Place 🇨🇦", city: "Vancouver", channels: ["dsports"] },
  { date: "2026-06-18", time: "20:00", jornada: 2, grupo: "A", home: { name: "México", flag: "🇲🇽" }, away: { name: "Corea del Sur", flag: "🇰🇷" }, venue: "Estadio Guadalajara, Estadio Akron 🇲🇽", city: "Guadalajara", channels: ["dsports", "win"] },
  { date: "2026-06-19", time: "14:00", jornada: 2, grupo: "D", home: { name: "Estados Unidos", flag: "🇺🇸" }, away: { name: "Australia", flag: "🇦🇺" }, venue: "Seattle Stadium, Lumen Field 🇺🇸", city: "Seattle", channels: ["dsports"] },
  { date: "2026-06-19", time: "17:00", jornada: 2, grupo: "C", home: { name: "Escocia", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿" }, away: { name: "Marruecos", flag: "🇲🇦" }, venue: "Boston Stadium, Gillette Stadium 🇺🇸", city: "Foxborough / Boston", channels: ["dsports", "caracol", "rcn"] },
  { date: "2026-06-19", time: "19:30", jornada: 2, grupo: "C", home: { name: "Brasil", flag: "🇧🇷" }, away: { name: "Haití", flag: "🇭🇹" }, venue: "Philadelphia Stadium, Lincoln Financial Field 🇺🇸", city: "Philadelphia", channels: ["dsports"] },
  { date: "2026-06-19", time: "22:00", jornada: 2, grupo: "D", home: { name: "Turquía", flag: "🇹🇷" }, away: { name: "Paraguay", flag: "🇵🇾" }, venue: "San Francisco Bay Area Stadium, Levi's Stadium 🇺🇸", city: "Santa Clara / San Francisco Bay Area", channels: ["dsports", "win"] },
  { date: "2026-06-20", time: "12:00", jornada: 2, grupo: "F", home: { name: "Países Bajos", flag: "🇳🇱" }, away: { name: "Suecia", flag: "🇸🇪" }, venue: "Houston Stadium, NRG Stadium 🇺🇸", city: "Houston", channels: ["dsports", "win"] },
  { date: "2026-06-20", time: "15:00", jornada: 2, grupo: "E", home: { name: "Alemania", flag: "🇩🇪" }, away: { name: "Costa de Marfil", flag: "🇨🇮" }, venue: "Toronto Stadium, BMO Field 🇨🇦", city: "Toronto", channels: ["dsports", "caracol", "rcn", "disney"] },
  { date: "2026-06-20", time: "19:00", jornada: 2, grupo: "E", home: { name: "Ecuador", flag: "🇪🇨" }, away: { name: "Curazao", flag: "🇨🇼" }, venue: "Kansas City Stadium, GEHA Field at Arrowhead Stadium 🇺🇸", city: "Kansas City", channels: ["dsports", "win", "disney"] },
  { date: "2026-06-20", time: "23:00", jornada: 2, grupo: "F", home: { name: "Túnez", flag: "🇹🇳" }, away: { name: "Japón", flag: "🇯🇵" }, venue: "Estadio Monterrey, Estadio BBVA 🇲🇽", city: "Monterrey", channels: ["dsports"] },
  { date: "2026-06-21", time: "11:00", jornada: 2, grupo: "H", home: { name: "España", flag: "🇪🇸" }, away: { name: "Arabia Saudita", flag: "🇸🇦" }, venue: "Atlanta Stadium, Mercedes-Benz Stadium 🇺🇸", city: "Atlanta", channels: ["dsports", "win", "disney"] },
  { date: "2026-06-21", time: "14:00", jornada: 2, grupo: "G", home: { name: "Bélgica", flag: "🇧🇪" }, away: { name: "Irán", flag: "🇮🇷" }, venue: "Los Angeles Stadium, SoFi Stadium 🇺🇸", city: "Inglewood / Los Ángeles", channels: ["dsports", "caracol", "rcn", "disney"] },
  { date: "2026-06-21", time: "17:00", jornada: 2, grupo: "H", home: { name: "Uruguay", flag: "🇺🇾" }, away: { name: "Cabo Verde", flag: "🇨🇻" }, venue: "Miami Stadium, Hard Rock Stadium 🇺🇸", city: "Miami Gardens / Miami", channels: ["dsports"] },
  { date: "2026-06-21", time: "20:00", jornada: 2, grupo: "G", home: { name: "Nueva Zelanda", flag: "🇳🇿" }, away: { name: "Egipto", flag: "🇪🇬" }, venue: "BC Place Vancouver, BC Place 🇨🇦", city: "Vancouver", channels: ["dsports"] },
  { date: "2026-06-22", time: "12:00", jornada: 2, grupo: "J", home: { name: "Argentina", flag: "🇦🇷" }, away: { name: "Austria", flag: "🇦🇹" }, venue: "Dallas Stadium, AT&T Stadium 🇺🇸", city: "Arlington / Dallas", channels: ["dsports", "caracol", "rcn", "disney"] },
  { date: "2026-06-22", time: "16:00", jornada: 2, grupo: "I", home: { name: "Francia", flag: "🇫🇷" }, away: { name: "Irak", flag: "🇮🇶" }, venue: "Philadelphia Stadium, Lincoln Financial Field 🇺🇸", city: "Philadelphia", channels: ["dsports"] },
  { date: "2026-06-22", time: "19:00", jornada: 2, grupo: "I", home: { name: "Noruega", flag: "🇳🇴" }, away: { name: "Senegal", flag: "🇸🇳" }, venue: "New York New Jersey Stadium, MetLife Stadium 🇺🇸", city: "East Rutherford / Nueva York-Nueva Jersey", channels: ["dsports", "win"] },
  { date: "2026-06-22", time: "22:00", jornada: 2, grupo: "J", home: { name: "Jordania", flag: "🇯🇴" }, away: { name: "Argelia", flag: "🇩🇿" }, venue: "San Francisco Bay Area Stadium, Levi's Stadium 🇺🇸", city: "Santa Clara / San Francisco Bay Area", channels: ["dsports"] },
  { date: "2026-06-23", time: "12:00", jornada: 2, grupo: "K", home: { name: "Portugal", flag: "🇵🇹" }, away: { name: "Uzbekistán", flag: "🇺🇿" }, venue: "Houston Stadium, NRG Stadium 🇺🇸", city: "Houston", channels: ["dsports", "win"] },
  { date: "2026-06-23", time: "15:00", jornada: 2, grupo: "L", home: { name: "Inglaterra", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" }, away: { name: "Ghana", flag: "🇬🇭" }, venue: "Boston Stadium, Gillette Stadium 🇺🇸", city: "Foxborough / Boston", channels: ["dsports"] },
  { date: "2026-06-23", time: "18:00", jornada: 2, grupo: "L", home: { name: "Panamá", flag: "🇵🇦" }, away: { name: "Croacia", flag: "🇭🇷" }, venue: "Toronto Stadium, BMO Field 🇨🇦", city: "Toronto", channels: ["dsports"] },
  { date: "2026-06-23", time: "21:00", jornada: 2, grupo: "K", home: { name: "Colombia", flag: "🇨🇴" }, away: { name: "RD Congo", flag: "🇨🇩" }, venue: "Guadalajara Stadium, Estadio Akron 🇲🇽", city: "Guadalajara", channels: ["dsports", "caracol", "rcn", "disney"] },
  { date: "2026-06-24", time: "14:00", jornada: 3, grupo: "B", home: { name: "Suiza", flag: "🇨🇭" }, away: { name: "Canadá", flag: "🇨🇦" }, venue: "BC Place Vancouver, BC Place 🇨🇦", city: "Vancouver", channels: ["dsports"] },
  { date: "2026-06-24", time: "14:00", jornada: 3, grupo: "B", home: { name: "Bosnia", flag: "🇧🇦" }, away: { name: "Qatar", flag: "🇶🇦" }, venue: "Seattle Stadium, Lumen Field 🇺🇸", city: "Seattle", channels: ["dsports"] },
  { date: "2026-06-24", time: "17:00", jornada: 3, grupo: "C", home: { name: "Escocia", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿" }, away: { name: "Brasil", flag: "🇧🇷" }, venue: "Miami Stadium, Hard Rock Stadium 🇺🇸", city: "Miami Gardens / Miami", channels: ["dsports", "caracol", "rcn", "disney"] },
  { date: "2026-06-24", time: "17:00", jornada: 3, grupo: "C", home: { name: "Marruecos", flag: "🇲🇦" }, away: { name: "Haití", flag: "🇭🇹" }, venue: "Atlanta Stadium, Mercedes-Benz Stadium 🇺🇸", city: "Atlanta", channels: ["dsports"] },
  { date: "2026-06-24", time: "20:00", jornada: 3, grupo: "A", home: { name: "Rep. Checa", flag: "🇨🇿" }, away: { name: "México", flag: "🇲🇽" }, venue: "Mexico City Stadium, Estadio Azteca 🇲🇽", city: "Ciudad de México", channels: ["dsports", "win"] },
  { date: "2026-06-24", time: "20:00", jornada: 3, grupo: "A", home: { name: "Sudáfrica", flag: "🇿🇦" }, away: { name: "Corea del Sur", flag: "🇰🇷" }, venue: "Estadio Monterrey, Estadio BBVA 🇲🇽", city: "Monterrey", channels: ["dsports"] },
  { date: "2026-06-25", time: "15:00", jornada: 3, grupo: "E", home: { name: "Ecuador", flag: "🇪🇨" }, away: { name: "Alemania", flag: "🇩🇪" }, venue: "New York New Jersey Stadium, MetLife Stadium 🇺🇸", city: "East Rutherford / Nueva York-Nueva Jersey", channels: ["dsports", "caracol", "rcn", "disney"] },
  { date: "2026-06-25", time: "15:00", jornada: 3, grupo: "E", home: { name: "Curazao", flag: "🇨🇼" }, away: { name: "Costa de Marfil", flag: "🇨🇮" }, venue: "Philadelphia Stadium, Lincoln Financial Field 🇺🇸", city: "Philadelphia", channels: ["dsports"] },
  { date: "2026-06-25", time: "18:00", jornada: 3, grupo: "F", home: { name: "Túnez", flag: "🇹🇳" }, away: { name: "Países Bajos", flag: "🇳🇱" }, venue: "Kansas City Stadium, GEHA Field at Arrowhead Stadium 🇺🇸", city: "Kansas City", channels: ["dsports", "win"] },
  { date: "2026-06-25", time: "18:00", jornada: 3, grupo: "F", home: { name: "Japón", flag: "🇯🇵" }, away: { name: "Suecia", flag: "🇸🇪" }, venue: "Dallas Stadium, AT&T Stadium 🇺🇸", city: "Arlington / Dallas", channels: ["dsports"] },
  { date: "2026-06-25", time: "21:00", jornada: 3, grupo: "D", home: { name: "Turquía", flag: "🇹🇷" }, away: { name: "Estados Unidos", flag: "🇺🇸" }, venue: "Los Angeles Stadium, SoFi Stadium 🇺🇸", city: "Inglewood / Los Ángeles", channels: ["dsports"] },
  { date: "2026-06-25", time: "21:00", jornada: 3, grupo: "D", home: { name: "Paraguay", flag: "🇵🇾" }, away: { name: "Australia", flag: "🇦🇺" }, venue: "San Francisco Bay Area Stadium, Levi's Stadium 🇺🇸", city: "Santa Clara / San Francisco Bay Area", channels: ["dsports"] },
  { date: "2026-06-26", time: "14:00", jornada: 3, grupo: "I", home: { name: "Noruega", flag: "🇳🇴" }, away: { name: "Francia", flag: "🇫🇷" }, venue: "Boston Stadium, Gillette Stadium 🇺🇸", city: "Foxborough / Boston", channels: ["dsports", "win"] },
  { date: "2026-06-26", time: "14:00", jornada: 3, grupo: "I", home: { name: "Senegal", flag: "🇸🇳" }, away: { name: "Irak", flag: "🇮🇶" }, venue: "Toronto Stadium, BMO Field 🇨🇦", city: "Toronto", channels: ["dsports"] },
  { date: "2026-06-26", time: "19:00", jornada: 3, grupo: "H", home: { name: "Uruguay", flag: "🇺🇾" }, away: { name: "España", flag: "🇪🇸" }, venue: "Guadalajara Stadium, Estadio Akron 🇲🇽", city: "Guadalajara", channels: ["dsports", "caracol", "rcn", "disney"] },
  { date: "2026-06-26", time: "19:00", jornada: 3, grupo: "H", home: { name: "Cabo Verde", flag: "🇨🇻" }, away: { name: "Arabia Saudita", flag: "🇸🇦" }, venue: "Houston Stadium, NRG Stadium 🇺🇸", city: "Houston", channels: ["dsports"] },
  { date: "2026-06-26", time: "22:00", jornada: 3, grupo: "G", home: { name: "Nueva Zelanda", flag: "🇳🇿" }, away: { name: "Bélgica", flag: "🇧🇪" }, venue: "BC Place Vancouver, BC Place 🇨🇦", city: "Vancouver", channels: ["dsports"] },
  { date: "2026-06-26", time: "22:00", jornada: 3, grupo: "G", home: { name: "Egipto", flag: "🇪🇬" }, away: { name: "Irán", flag: "🇮🇷" }, venue: "Seattle Stadium, Lumen Field 🇺🇸", city: "Seattle", channels: ["dsports"] },
  { date: "2026-06-27", time: "16:00", jornada: 3, grupo: "L", home: { name: "Panamá", flag: "🇵🇦" }, away: { name: "Inglaterra", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" }, venue: "New York New Jersey Stadium, MetLife Stadium 🇺🇸", city: "East Rutherford / Nueva York-Nueva Jersey", channels: ["dsports"] },
  { date: "2026-06-27", time: "16:00", jornada: 3, grupo: "L", home: { name: "Croacia", flag: "🇭🇷" }, away: { name: "Ghana", flag: "🇬🇭" }, venue: "Philadelphia Stadium, Lincoln Financial Field 🇺🇸", city: "Philadelphia", channels: ["dsports"] },
  { date: "2026-06-27", time: "18:30", jornada: 3, grupo: "K", home: { name: "Colombia", flag: "🇨🇴" }, away: { name: "Portugal", flag: "🇵🇹" }, venue: "Miami Stadium, Hard Rock Stadium 🇺🇸", city: "Miami Gardens / Miami", channels: ["dsports", "caracol", "rcn", "disney"] },
  { date: "2026-06-27", time: "18:30", jornada: 3, grupo: "K", home: { name: "RD Congo", flag: "🇨🇩" }, away: { name: "Uzbekistán", flag: "🇺🇿" }, venue: "Atlanta Stadium, Mercedes-Benz Stadium 🇺🇸", city: "Atlanta", channels: ["dsports"] },
  { date: "2026-06-27", time: "21:00", jornada: 3, grupo: "J", home: { name: "Jordania", flag: "🇯🇴" }, away: { name: "Argentina", flag: "🇦🇷" }, venue: "Dallas Stadium, AT&T Stadium 🇺🇸", city: "Arlington / Dallas", channels: ["dsports", "win", "disney"] },
  { date: "2026-06-27", time: "21:00", jornada: 3, grupo: "J", home: { name: "Argelia", flag: "🇩🇿" }, away: { name: "Austria", flag: "🇦🇹" }, venue: "Kansas City Stadium, GEHA Field at Arrowhead Stadium 🇺🇸", city: "Kansas City", channels: ["dsports"] },
  { date: "2026-06-28", time: "14:00", phase: "Dieciseisavos", round: "Dieciseisavos", home: { name: "Sudáfrica", flag: "🇿🇦" }, away: { name: "Canadá", flag: "🇨🇦" }, venue: "Los Angeles Stadium, SoFi Stadium 🇺🇸", city: "Inglewood / Los Ángeles", channels: ["dsports"] },
  { date: "2026-06-29", time: "12:00", phase: "Dieciseisavos", round: "Dieciseisavos", home: { name: "Brasil", flag: "🇧🇷" }, away: { name: "Japón", flag: "🇯🇵" }, venue: "Boston Stadium, Gillette Stadium 🇺🇸", city: "Foxborough / Boston", channels: ["dsports", "caracol", "rcn"] },
  { date: "2026-06-29", time: "15:30", phase: "Dieciseisavos", round: "Dieciseisavos", home: { name: "Alemania", flag: "🇩🇪" }, away: { name: "Paraguay", flag: "🇵🇾" }, venue: "Estadio Monterrey, Estadio BBVA 🇲🇽", city: "Monterrey", channels: ["dsports", "caracol", "rcn"] },
  { date: "2026-06-29", time: "20:00", phase: "Dieciseisavos", round: "Dieciseisavos", home: { name: "Países Bajos", flag: "🇳🇱" }, away: { name: "Marruecos", flag: "🇲🇦" }, venue: "Houston Stadium, NRG Stadium 🇺🇸", city: "Houston", channels: ["dsports"] },
  { date: "2026-06-30", time: "12:00", phase: "Dieciseisavos", round: "Dieciseisavos", home: { name: "Costa de Marfil", flag: "🇨🇮" }, away: { name: "Noruega", flag: "🇳🇴" }, venue: "New York New Jersey Stadium, MetLife Stadium 🇺🇸", city: "East Rutherford / Nueva York-Nueva Jersey", channels: ["dsports"] },
  { date: "2026-06-30", time: "16:00", phase: "Dieciseisavos", round: "Dieciseisavos", home: { name: "Francia", flag: "🇫🇷" }, away: { name: "Suecia", flag: "🇸🇪" }, venue: "Dallas Stadium, AT&T Stadium 🇺🇸", city: "Arlington / Dallas", channels: ["dsports", "caracol", "rcn"] },
  { date: "2026-06-30", time: "20:00", phase: "Dieciseisavos", round: "Dieciseisavos", home: { name: "México", flag: "🇲🇽" }, away: { name: "Ecuador", flag: "🇪🇨" }, venue: "Mexico City Stadium, Estadio Azteca 🇲🇽", city: "Ciudad de México", channels: ["dsports"] },
  { date: "2026-07-01", time: "11:00", phase: "Dieciseisavos", round: "Dieciseisavos", home: { name: "Inglaterra", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" }, away: { name: "RD Congo", flag: "🇨🇩" }, venue: "Atlanta Stadium, Mercedes-Benz Stadium 🇺🇸", city: "Atlanta", channels: ["dsports"] },
  { date: "2026-07-01", time: "15:00", phase: "Dieciseisavos", round: "Dieciseisavos", home: { name: "Bélgica", flag: "🇧🇪" }, away: { name: "Senegal", flag: "🇸🇳" }, venue: "San Francisco Bay Area Stadium, Levi's Stadium 🇺🇸", city: "Santa Clara / San Francisco Bay Area", channels: ["dsports"] },
  { date: "2026-07-01", time: "19:00", phase: "Dieciseisavos", round: "Dieciseisavos", home: { name: "Estados Unidos", flag: "🇺🇸" }, away: { name: "Bosnia y Herzegovina", flag: "🇧🇦" }, venue: "Seattle Stadium, Lumen Field 🇺🇸", city: "Seattle", channels: ["dsports"] },
  { date: "2026-07-02", time: "14:00", phase: "Dieciseisavos", round: "Dieciseisavos", home: { name: "España", flag: "🇪🇸" }, away: { name: "Austria", flag: "🇦🇹" }, venue: "Toronto Stadium, BMO Field 🇨🇦", city: "Toronto", channels: ["dsports"] },
  { date: "2026-07-02", time: "18:00", phase: "Dieciseisavos", round: "Dieciseisavos", home: { name: "Portugal", flag: "🇵🇹" }, away: { name: "Croacia", flag: "🇭🇷" }, venue: "Los Angeles Stadium, SoFi Stadium 🇺🇸", city: "Inglewood / Los Ángeles", channels: ["dsports"] },
  { date: "2026-07-02", time: "22:00", phase: "Dieciseisavos", round: "Dieciseisavos", home: { name: "Suiza", flag: "🇨🇭" }, away: { name: "Argelia", flag: "🇩🇿" }, venue: "BC Place Vancouver, BC Place 🇨🇦", city: "Vancouver", channels: ["dsports"] },
  { date: "2026-07-03", time: "13:00", phase: "Dieciseisavos", round: "Dieciseisavos", home: { name: "Australia", flag: "🇦🇺" }, away: { name: "Egipto", flag: "🇪🇬" }, venue: "Miami Stadium, Hard Rock Stadium 🇺🇸", city: "Miami Gardens / Miami", channels: ["dsports"] },
  { date: "2026-07-03", time: "17:00", phase: "Dieciseisavos", round: "Dieciseisavos", home: { name: "Argentina", flag: "🇦🇷" }, away: { name: "Cabo Verde", flag: "🇨🇻" }, venue: "Kansas City Stadium, GEHA Field at Arrowhead Stadium 🇺🇸", city: "Kansas City", channels: ["dsports"] },
  { date: "2026-07-03", time: "20:30", phase: "Dieciseisavos", round: "Dieciseisavos", home: { name: "Colombia", flag: "🇨🇴" }, away: { name: "Ghana", flag: "🇬🇭" }, venue: "Dallas Stadium, AT&T Stadium 🇺🇸", city: "Arlington / Dallas", channels: ["dsports", "caracol", "rcn"] },
  { date: "2026-07-04", time: "4:00 p. m.", stageLabel: "Octavos de final", id: "M89", homeSource: "M74", awaySource: "M77", home: { name: "Ganador M74", flag: "🏆" }, away: { name: "Ganador M77", flag: "🏆" }, venue: "Lincoln Financial Field, Philadelphia", city: "Philadelphia", channels: ["dsports"] },
  { date: "2026-07-04", time: "12:00 p. m.", stageLabel: "Octavos de final", id: "M90", homeSource: "M73", awaySource: "M75", home: { name: "Ganador M73", flag: "🏆" }, away: { name: "Ganador M75", flag: "🏆" }, venue: "NRG Stadium, Houston", city: "Houston", channels: ["dsports"] },
  { date: "2026-07-05", time: "3:00 p. m.", stageLabel: "Octavos de final", id: "M91", homeSource: "M76", awaySource: "M78", home: { name: "Ganador M76", flag: "🏆" }, away: { name: "Ganador M78", flag: "🏆" }, venue: "MetLife Stadium, East Rutherford", city: "East Rutherford", channels: ["dsports"] },
  { date: "2026-07-05", time: "7:00 p. m.", stageLabel: "Octavos de final", id: "M92", homeSource: "M79", awaySource: "M80", home: { name: "Ganador M79", flag: "🏆" }, away: { name: "Ganador M80", flag: "🏆" }, venue: "Estadio Azteca, Ciudad de México", city: "Ciudad de México", channels: ["dsports"] },
  { date: "2026-07-06", time: "2:00 p. m.", stageLabel: "Octavos de final", id: "M93", homeSource: "M83", awaySource: "M84", home: { name: "Ganador M83", flag: "🏆" }, away: { name: "Ganador M84", flag: "🏆" }, venue: "AT&T Stadium, Arlington", city: "Arlington", channels: ["dsports"] },
  { date: "2026-07-06", time: "7:00 p. m.", stageLabel: "Octavos de final", id: "M94", homeSource: "M81", awaySource: "M82", home: { name: "Ganador M81", flag: "🏆" }, away: { name: "Ganador M82", flag: "🏆" }, venue: "Lumen Field, Seattle", city: "Seattle", channels: ["dsports"] },
  { date: "2026-07-07", time: "11:00 a. m.", stageLabel: "Octavos de final", id: "M95", homeSource: "M86", awaySource: "M88", home: { name: "Ganador M86", flag: "🏆" }, away: { name: "Ganador M88", flag: "🏆" }, venue: "Mercedes-Benz Stadium, Atlanta", city: "Atlanta", channels: ["dsports"] },
  { date: "2026-07-07", time: "3:00 p. m.", stageLabel: "Octavos de final", id: "M96", homeSource: "M85", awaySource: "M87", home: { name: "Ganador M85", flag: "🏆" }, away: { name: "Ganador M87", flag: "🏆" }, venue: "BC Place, Vancouver", city: "Vancouver", channels: ["dsports"] },
  { date: "2026-07-09", time: "3:00 p. m.", stageLabel: "Cuartos de final", id: "M97", homeSource: "M89", awaySource: "M90", home: { name: "Ganador M89", flag: "🏆" }, away: { name: "Ganador M90", flag: "🏆" }, venue: "Boston Stadium, Gillette Stadium", city: "Boston", channels: ["dsports"] },
  { date: "2026-07-10", time: "2:00 p. m.", stageLabel: "Cuartos de final", id: "M98", homeSource: "M93", awaySource: "M94", home: { name: "Ganador M93", flag: "🏆" }, away: { name: "Ganador M94", flag: "🏆" }, venue: "Los Angeles Stadium, SoFi Stadium", city: "Los Ángeles", channels: ["dsports"] },
  { date: "2026-07-11", time: "4:00 p. m.", stageLabel: "Cuartos de final", id: "M99", homeSource: "M91", awaySource: "M92", home: { name: "Ganador M91", flag: "🏆" }, away: { name: "Ganador M92", flag: "🏆" }, venue: "Miami Stadium, Hard Rock Stadium", city: "Miami", channels: ["dsports"] },
  { date: "2026-07-11", time: "8:00 p. m.", stageLabel: "Cuartos de final", id: "M100", homeSource: "M95", awaySource: "M96", home: { name: "Ganador M95", flag: "🏆" }, away: { name: "Ganador M96", flag: "🏆" }, venue: "Kansas City Stadium, GEHA Field at Arrowhead Stadium", city: "Kansas City", channels: ["dsports"] },
  { date: "2026-07-14", time: "2:00 p. m.", stageLabel: "Semifinal", id: "M101", homeSource: "M97", awaySource: "M98", home: { name: "Ganador M97", flag: "🏆" }, away: { name: "Ganador M98", flag: "🏆" }, venue: "Dallas Stadium, AT&T Stadium", city: "Dallas", channels: ["dsports"] },
  { date: "2026-07-15", time: "2:00 p. m.", stageLabel: "Semifinal", id: "M102", homeSource: "M99", awaySource: "M100", home: { name: "Ganador M99", flag: "🏆" }, away: { name: "Ganador M100", flag: "🏆" }, venue: "Atlanta Stadium, Mercedes-Benz Stadium", city: "Atlanta", channels: ["dsports"] },
  { date: "2026-07-18", time: "4:00 p. m.", stageLabel: "Tercer puesto", id: "M103", homeSource: "M101", awaySource: "M102", home: { name: "Perdedor M101", flag: "🏆" }, away: { name: "Perdedor M102", flag: "🏆" }, sourceType: "losers", venue: "Miami Stadium, Hard Rock Stadium", city: "Miami", channels: ["dsports"] },
  { date: "2026-07-19", time: "2:00 p. m.", stageLabel: "Final", id: "M104", homeSource: "M101", awaySource: "M102", home: { name: "Ganador M101", flag: "🏆" }, away: { name: "Ganador M102", flag: "🏆" }, venue: "New York New Jersey Stadium, MetLife Stadium", city: "Nueva York/Nueva Jersey", channels: ["dsports"] },
];

const APP_CONFIG = window.APP_CONFIG || {};
const RESULTS_STORAGE_KEY = "wc2026-results-cache-v1";
const RESULTS_MIN_REFRESH_MS = 40000;
const RESULTS_CACHE_MAX_AGE_MS = 2 * 60 * 1000;
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
  isResultsLoading: false,
  currentView: "programacion",
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

const knockoutSourceById = new Map([
  ...KNOCKOUT_BRACKET.roundOf32,
].map((match) => [match.id, match]));
const knockoutScheduleById = new Map(
  MATCHES.filter((match) => match.id && match.stageLabel && KNOWN_KNOCKOUT_PHASES.has(match.stageLabel))
    .map((match) => [match.id, match])
);

const elements = {
  heroDate: document.getElementById("heroDate"),
  heroCount: document.getElementById("heroCount"),
  clockTime: document.getElementById("clockTime"),
  dayNav: document.getElementById("dayNav"),
  btnPrev: document.getElementById("btnPrev"),
  btnNext: document.getElementById("btnNext"),
  btnToday: document.getElementById("btnToday"),
  btnScheduleView: document.getElementById("btnScheduleView"),
  btnKnockoutView: document.getElementById("btnKnockoutView"),
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

function matchHasConfirmedTime(match) {
  return Boolean(match?.time) && match?.timeConfirmed !== false;
}

function parseMatchTime(timeValue) {
  const text = String(timeValue || "").trim();
  if (!text) return null;

  const ampmMatch = text.match(/^(\d{1,2}):(\d{2})\s*(a\.?\s*m\.?|p\.?\s*m\.?)$/i);
  if (ampmMatch) {
    let hour = Number(ampmMatch[1]);
    const minute = Number(ampmMatch[2]);
    const isPm = /p/i.test(ampmMatch[3]);
    if (hour === 12) hour = isPm ? 12 : 0;
    else if (isPm) hour += 12;
    return { hour, minute };
  }

  const hhmm = text.match(/^(\d{1,2}):(\d{2})$/);
  if (hhmm) {
    return { hour: Number(hhmm[1]), minute: Number(hhmm[2]) };
  }

  return null;
}

function matchDatetimeBogota(match) {
  if (!matchHasConfirmedTime(match)) return null;
  const parsed = parseMatchTime(match.time);
  if (!parsed) return null;
  const [y, mo, d] = match.date.split("-").map(Number);
  return new Date(Date.UTC(y, mo - 1, d, parsed.hour + 5, parsed.minute));
}

function formatTime12(time24) {
  if (!time24) return "Por confirmar";
  const text = String(time24).trim();
  if (/[ap]\.?\s*m\.?/i.test(text)) return text.replace(/\s+/g, " ");
  const parsed = parseMatchTime(text);
  if (!parsed) return text;
  let h = parsed.hour;
  const m = parsed.minute;
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

function appendMatchMetaBadges(container, match) {
  const phaseLabel = getStageLabel(match);
  if (phaseLabel) {
    container.append(createBadge(phaseLabel, "badge-jornada"));
    return;
  }

  if (match.grupo) {
    container.append(createBadge(`Grupo ${match.grupo}`, "badge-group"));
  }

  if (match.jornada) {
    container.append(createBadge(`Jornada ${match.jornada}`, "badge-jornada"));
  }
}

function getMatchMetaText(match) {
  const phaseLabel = getStageLabel(match);
  if (phaseLabel) return null;
  const parts = [];
  if (match.grupo) parts.push(`Grupo ${match.grupo}`);
  if (match.jornada) parts.push(`Jornada ${match.jornada}`);
  return parts.join(" · ");
}

function getStageLabel(match) {
  if (!match) return null;
  if (match.stageLabel) return match.stageLabel;
  if (match.phase && KNOWN_KNOCKOUT_PHASES.has(match.phase)) return match.phase;
  if (match.round && KNOWN_KNOCKOUT_PHASES.has(match.round)) return match.round;
  if (match.phase === "Dieciseisavos" || match.round === "Dieciseisavos") return "Dieciseisavos de final";
  return null;
}

function getVenueCountryFlag(match) {
  const venueText = `${match?.venue || ""} ${match?.city || ""}`.toLowerCase();
  const rules = [
    { pattern: /mexico|monterrey|ciudad de méxico|guadalajara/, flag: "🇲🇽" },
    { pattern: /canada|toronto|vancouver/, flag: "🇨🇦" },
    { pattern: /boston|philadelphia|easton|east rutherford|new york|new jersey|metlife|houston|arlington|seattle|atlanta|miami|dallas|kansas city|santa clara|los angeles|inglewood|foxborough|guadalajara|san francisco bay area|boston stadium|new york new jersey stadium/, flag: "🇺🇸" },
    { pattern: /bélgica|belgium/, flag: "🇧🇪" },
    { pattern: /francia|france/, flag: "🇫🇷" },
  ];

  for (const rule of rules) {
    if (rule.pattern.test(venueText)) return rule.flag;
  }
  return "⚪";
}

function stripVenueFlag(value) {
  return String(value || "")
    .replace(/\s*[\u{1F1E6}-\u{1F1FF}]{2}\s*$/u, "")
    .trim();
}

function getVenueDisplayText(match) {
  const venue = stripVenueFlag(match?.venue || "");
  if (!venue) return "";
  const flag = getVenueCountryFlag(match);
  return flag && flag !== "⚪" ? `${venue} ${flag}` : venue;
}

function shareKickoffSlot(matchA, matchB) {
  return matchHasConfirmedTime(matchA)
    && matchHasConfirmedTime(matchB)
    && matchA.time === matchB.time;
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

function getMatchByTeams(homeName, awayName) {
  const homeId = resolveCanonicalTeamId(homeName);
  const awayId = resolveCanonicalTeamId(awayName);
  if (!homeId || !awayId) return null;

  return MATCHES.find((match) => {
    const direct = match.homeCanonicalId === homeId && match.awayCanonicalId === awayId;
    const reversed = match.homeCanonicalId === awayId && match.awayCanonicalId === homeId;
    return direct || reversed;
  }) || null;
}

function getTeamFlagByName(teamName) {
  const match = MATCHES.find((item) => item.home.name === teamName || item.away.name === teamName);
  if (match?.home.name === teamName) return match.home.flag;
  if (match?.away.name === teamName) return match.away.flag;
  return "⚪";
}

function getResolvedWinnerName(sourceMatch, nowUTC) {
  if (!sourceMatch) return null;
  const presentation = getMatchPresentation(sourceMatch, nowUTC);
  if (!presentation.isFinished || !presentation.hasScore || !presentation.orientedScore) return null;
  if (presentation.orientedScore.home > presentation.orientedScore.away) return sourceMatch.home.name;
  if (presentation.orientedScore.away > presentation.orientedScore.home) return sourceMatch.away.name;
  return null;
}

function getResolvedLoserName(sourceMatch, nowUTC) {
  if (!sourceMatch) return null;
  const presentation = getMatchPresentation(sourceMatch, nowUTC);
  if (!presentation.isFinished || !presentation.hasScore || !presentation.orientedScore) return null;
  if (presentation.orientedScore.home < presentation.orientedScore.away) return sourceMatch.home.name;
  if (presentation.orientedScore.away < presentation.orientedScore.home) return sourceMatch.away.name;
  return null;
}

function getResolvedWinnerFlag(sourceMatch, nowUTC) {
  const winner = getResolvedWinnerName(sourceMatch, nowUTC);
  return winner ? getTeamFlagByName(winner) : "⚪";
}

function getResolvedLoserFlag(sourceMatch, nowUTC) {
  const loser = getResolvedLoserName(sourceMatch, nowUTC);
  return loser ? getTeamFlagByName(loser) : "⚪";
}

function getKnockoutScheduleMatch(sourceId) {
  return knockoutScheduleById.get(sourceId) || null;
}

function resolveProgramParticipantLabel(sourceId, nowUTC) {
  if (!sourceId) return "Pendiente";

  const source = knockoutScheduleById.get(sourceId);
  if (source) {
    const winner = getResolvedWinnerName(source, nowUTC);
    if (winner) return winner;
    const loser = getResolvedLoserName(source, nowUTC);
    if (loser && source.sourceType === "losers") return loser;

    if (source.stageLabel === "Dieciseisavos de final") {
      const home = source.homeSource ? resolveProgramParticipantLabel(source.homeSource, nowUTC) : source.home.name;
      const away = source.awaySource ? resolveProgramParticipantLabel(source.awaySource, nowUTC) : source.away.name;
      return `${home} vs ${away}`;
    }

    return "Por definir";
  }

  const baseSource = knockoutSourceById.get(sourceId);
  if (baseSource) {
    const fixture = getMatchByTeams(baseSource.home, baseSource.away);
    const winner = getResolvedWinnerName(fixture, nowUTC);
    if (winner) return winner;
    return `${baseSource.home} / ${baseSource.away}`;
  }

  return "Por definir";
}

function resolveProgramLoserLabel(sourceId, nowUTC) {
  if (!sourceId) return "Pendiente";

  const source = knockoutScheduleById.get(sourceId);
  if (source) {
    const loser = getResolvedLoserName(source, nowUTC);
    if (loser) return loser;

    if (source.stageLabel === "Dieciseisavos de final") {
      const home = source.homeSource ? resolveProgramLoserLabel(source.homeSource, nowUTC) : source.home.name;
      const away = source.awaySource ? resolveProgramLoserLabel(source.awaySource, nowUTC) : source.away.name;
      return `${home} vs ${away}`;
    }

    return "Por definir";
  }

  const baseSource = knockoutSourceById.get(sourceId);
  if (baseSource) {
    const fixture = getMatchByTeams(baseSource.home, baseSource.away);
    const loser = getResolvedLoserName(fixture, nowUTC);
    if (loser) return loser;
    return `Perdedor ${sourceId}`;
  }

  return "Por definir";
}

function getKnockoutSideVisual(sourceId, nowUTC) {
  if (!sourceId) {
    return { text: "Por definir", flags: ["⚪"] };
  }

  const scheduled = knockoutScheduleById.get(sourceId);
  if (scheduled) {
    const winner = getResolvedWinnerName(scheduled, nowUTC);
    if (winner) {
      return { text: winner, flags: [getTeamFlagByName(winner)] };
    }

    const loser = getResolvedLoserName(scheduled, nowUTC);
    if (loser && scheduled.sourceType === "losers") {
      return { text: loser, flags: [getTeamFlagByName(loser)] };
    }

    if (scheduled.stageLabel === "Final") {
      return { text: "Por definir", flags: ["🏳️"] };
    }

    return { text: "Por definir", flags: ["⚪"] };
  }

  const baseSource = knockoutSourceById.get(sourceId);
  if (baseSource) {
    const fixture = getMatchByTeams(baseSource.home, baseSource.away);
    const winner = getResolvedWinnerName(fixture, nowUTC);
    if (winner) {
      return { text: winner, flags: [getTeamFlagByName(winner)] };
    }

    return {
      text: `${baseSource.home} / ${baseSource.away}`,
      flags: [getTeamFlagByName(baseSource.home), getTeamFlagByName(baseSource.away)],
    };
  }

  return { text: "Por definir", flags: ["⚪"] };
}

function getKnockoutProgramLabel(match, nowUTC) {
  if (!match?.homeSource || !match?.awaySource) {
    return {
      home: match?.home?.name || "",
      away: match?.away?.name || "",
    };
  }

  if (match.sourceType === "losers") {
    return {
      home: resolveProgramLoserLabel(match.homeSource, nowUTC),
      away: resolveProgramLoserLabel(match.awaySource, nowUTC),
    };
  }

  return {
    home: resolveProgramParticipantLabel(match.homeSource, nowUTC),
    away: resolveProgramParticipantLabel(match.awaySource, nowUTC),
  };
}

function getKnockoutProgramVisual(match, nowUTC) {
  if (!match?.homeSource || !match?.awaySource) {
    return {
      home: { text: match?.home?.name || "", flags: [match?.home?.flag || "⚪"] },
      away: { text: match?.away?.name || "", flags: [match?.away?.flag || "⚪"] },
    };
  }

  if (match.sourceType === "losers") {
    return {
      home: getKnockoutSideVisual(match.homeSource, nowUTC),
      away: getKnockoutSideVisual(match.awaySource, nowUTC),
    };
  }

  return {
    home: getKnockoutSideVisual(match.homeSource, nowUTC),
    away: getKnockoutSideVisual(match.awaySource, nowUTC),
  };
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

function getPayloadTimestamp(payload) {
  const stamp = payload?.live_meta?.cache_updated_at
    || payload?.live_meta?.generated_at
    || payload?.meta?.cache_updated_at
    || payload?.meta?.generated_at
    || null;
  const ts = stamp ? Date.parse(stamp) : NaN;
  return Number.isFinite(ts) ? ts : null;
}

function isCachedPayloadFresh(payload) {
  if (!payload || !Array.isArray(payload.results) || payload.results.length === 0) return false;
  const timestamp = getPayloadTimestamp(payload);
  if (!timestamp) return false;
  return (Date.now() - timestamp) <= RESULTS_CACHE_MAX_AGE_MS;
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
  const kickoff = matchDatetimeBogota(match);
  if (!kickoff) {
    return {
      diffMs: Infinity,
      isLive: false,
      isFinished: false,
    };
  }
  const diffMs = kickoff - nowUTC;
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
  if (!kickoff) return null;
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
  const kickoff = matchDatetimeBogota(match);
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
    countdownText: kickoff ? formatCountdown(kickoff - nowUTC) : null,
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

function buildFlagStack(flags, className = "") {
  const cleanFlags = Array.isArray(flags) ? flags.filter(Boolean) : [];
  if (!cleanFlags.length) cleanFlags.push("⚪");
  const wrap = createElement("span", { className: `flag-stack${className ? ` ${className}` : ""}` });
  cleanFlags.forEach((flag) => {
    wrap.append(createElement("span", { className: "flag-stack-item", text: flag }));
  });
  return wrap;
}

function buildFeaturedMatchBlock(match, nowUTC) {
  const presentation = getMatchPresentation(match, nowUTC);
  const knockoutVisual = getKnockoutProgramVisual(match, nowUTC);
  const isKnockoutProgram = Boolean(match.homeSource && match.awaySource);
  const block = createElement("article", { className: "fc-block" });
  const teams = createElement("div", { className: "fc-teams" });

  const home = createElement("div", { className: "fc-team" });
  home.append(
    isKnockoutProgram ? buildFlagStack(knockoutVisual.home.flags, "fc-flag-stack") : createElement("div", { className: "fc-flag", text: match.home.flag }),
    createElement("div", { className: "fc-team-name", text: isKnockoutProgram ? knockoutVisual.home.text : match.home.name })
  );

  const vs = createElement("div", { className: "fc-vs" });
  vs.append(
    createElement("div", { className: "fc-vs-text", text: presentation.centerSecondary }),
    createElement("div", { className: `fc-time${presentation.hasScore ? " fc-score" : ""}`, text: presentation.centerPrimary })
  );

  const away = createElement("div", { className: "fc-team" });
  away.append(
    isKnockoutProgram ? buildFlagStack(knockoutVisual.away.flags, "fc-flag-stack") : createElement("div", { className: "fc-flag", text: match.away.flag }),
    createElement("div", { className: "fc-team-name", text: isKnockoutProgram ? knockoutVisual.away.text : match.away.name })
  );

  teams.append(home, vs, away);

  const info = createElement("div", { className: "fc-info" });
  const left = createElement("div", { className: "fc-info-left" });
  const metaText = getMatchMetaText(match);
  left.append(
    buildInfoItem("🏟️", getVenueDisplayText(match)),
    ...(metaText ? [createElement("div", { className: "fc-info-item", text: metaText })] : [])
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
  const knockoutVisual = getKnockoutProgramVisual(match, nowUTC);
  const isKnockoutProgram = Boolean(match.homeSource && match.awaySource);
  const card = createElement("article", { className: "match-card" });

  if (presentation.isFinished) card.classList.add("is-done");

  const top = createElement("div", { className: "mc-top" });
  const meta = createElement("div", { className: "mc-meta" });
  meta.append(createElement("span", { className: "mc-time-badge", text: formatTime12(match.time) }));
  appendMatchMetaBadges(meta, match);
  top.append(meta, buildStatusBadge(presentation));

  const teams = createElement("div", { className: "mc-teams" });
  const home = createElement("div", { className: "mc-team left" });
  home.append(isKnockoutProgram ? buildFlagStack(knockoutVisual.home.flags, "mc-flag-stack") : createElement("span", { className: "mc-flag", text: match.home.flag }), createElement("span", { className: "mc-name", text: isKnockoutProgram ? knockoutVisual.home.text : match.home.name }));

  const center = createElement("div", { className: "mc-center" });
  center.classList.add(presentation.hasScore ? "is-score" : "is-schedule");
  if (presentation.isFinished) center.classList.add("is-final");
  if (presentation.isLive) center.classList.add("is-live");
  center.append(
    createElement("div", { className: "mc-center-sub", text: presentation.centerSecondary }),
    createElement("div", { className: `mc-center-main${presentation.hasScore ? " mc-score" : ""}`, text: presentation.centerPrimary })
  );

  const away = createElement("div", { className: "mc-team right" });
  away.append(isKnockoutProgram ? buildFlagStack(knockoutVisual.away.flags, "mc-flag-stack") : createElement("span", { className: "mc-flag", text: match.away.flag }), createElement("span", { className: "mc-name", text: isKnockoutProgram ? knockoutVisual.away.text : match.away.name }));

  teams.append(home, center, away);

  const bottom = createElement("div", { className: "mc-bottom" });
  const venueRow = createElement("div", { className: "mc-venue" });
  venueRow.append(
    createElement("span", { text: "🏟️" }),
    createElement("span", { className: "mc-venue-text", text: stripVenueFlag(match.venue) }),
    createElement("span", { className: "mc-venue-flag", text: getVenueCountryFlag(match) })
  );
  bottom.append(venueRow);
  if (match.channels.length) bottom.append(buildChannels(match.channels, "mc-channels"));

  card.append(top, teams, bottom);
  return card;
}

function buildFeaturedSection(dayMatches, nowUTC) {
  if (!dayMatches.length) return null;

  let featuredIdx = -1;
  let bestLiveElapsed = Infinity;
  let bestUpcomingDiff = Infinity;
  const orderedMatches = [...dayMatches].sort((a, b) => {
    const aKickoff = matchDatetimeBogota(a)?.getTime() ?? Number.POSITIVE_INFINITY;
    const bKickoff = matchDatetimeBogota(b)?.getTime() ?? Number.POSITIVE_INFINITY;
    if (aKickoff !== bKickoff) return aKickoff - bKickoff;
    return (a.matchNumber || 0) - (b.matchNumber || 0);
  });

  orderedMatches.forEach((match, index) => {
    const presentation = getMatchPresentation(match, nowUTC);
    const kickoff = matchDatetimeBogota(match);
    const diffMs = kickoff ? kickoff - nowUTC : Infinity;

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

  if (featuredIdx === -1) {
    featuredIdx = orderedMatches.every((match) => getMatchPresentation(match, nowUTC).isFinished)
      ? 0
      : 0;
  }

  const featuredMatch = orderedMatches[featuredIdx];
  const featuredPresentation = getMatchPresentation(featuredMatch, nowUTC);
  const featuredGroup = orderedMatches.filter((match) => shareKickoffSlot(match, featuredMatch) || match === featuredMatch);
  const featuredIndices = new Set(orderedMatches.map((match, index) => (shareKickoffSlot(match, featuredMatch) || match === featuredMatch ? index : -1)).filter((index) => index >= 0));
  const isSimultaneous = featuredGroup.length > 1;
  const remainingUpcoming = orderedMatches.some((match) => {
    const kickoff = matchDatetimeBogota(match);
    return !getMatchPresentation(match, nowUTC).isFinished && (!kickoff || kickoff - nowUTC > 0);
  });
  const allFinished = orderedMatches.every((match) => getMatchPresentation(match, nowUTC).isFinished);

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
  } else if (isSimultaneous && matchHasConfirmedTime(featuredMatch)) {
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
    appendMatchMetaBadges(badges, featuredMatch);
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

  const orderedRestMatches = [...restMatches].sort((a, b) => {
    const aKickoff = matchDatetimeBogota(a)?.getTime() ?? Number.POSITIVE_INFINITY;
    const bKickoff = matchDatetimeBogota(b)?.getTime() ?? Number.POSITIVE_INFINITY;
    if (aKickoff !== bKickoff) return aKickoff - bKickoff;
    return (a.matchNumber || 0) - (b.matchNumber || 0);
  });

  const section = createElement("section", { attrs: { "aria-labelledby": "restHeading" } });
  section.append(createElement("h2", { className: "section-label", text: "Resto del día", attrs: { id: "restHeading" } }));

  const list = createElement("div", { className: "matches-list" });
  let i = 0;
  while (i < orderedRestMatches.length) {
    const current = orderedRestMatches[i];
    let j = i + 1;
    while (j < orderedRestMatches.length && shareKickoffSlot(orderedRestMatches[j], current)) j += 1;
    const group = orderedRestMatches.slice(i, j);

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

function getBracketResolution(sourceId, nowUTC) {
  const source = knockoutSourceById.get(sourceId);
  if (!source) {
    return { text: "Pendiente", completed: false, winner: null };
  }

  const fixture = getMatchByTeams(source.home, source.away);
  const presentation = fixture ? getMatchPresentation(fixture, nowUTC) : null;
  const winner = presentation?.isFinished && presentation?.hasScore && presentation?.orientedScore
    ? (presentation.orientedScore.home > presentation.orientedScore.away ? source.home : presentation.orientedScore.away > presentation.orientedScore.home ? source.away : null)
    : null;

  return {
    text: winner || `${source.home} / ${source.away}`,
    completed: Boolean(winner),
    winner,
    fixture,
    homeFlag: fixture?.home.flag || getTeamFlagByName(source.home),
    awayFlag: fixture?.away.flag || getTeamFlagByName(source.away),
  };
}

function bracketLabelForSource(sourceId, nowUTC) {
  const source = knockoutSourceById.get(sourceId);
  if (!source) {
    return { text: "Pendiente", winner: null, complete: false, flag: "🏳️" };
  }

  const fixture = getMatchByTeams(source.home, source.away);
  const presentation = fixture ? getMatchPresentation(fixture, nowUTC) : null;
  const hasWinner = Boolean(presentation?.isFinished && presentation?.hasScore && presentation?.orientedScore);
  let winner = null;
  if (hasWinner) {
    winner = presentation.orientedScore.home > presentation.orientedScore.away ? source.home : source.away;
  }

  return {
    text: winner || `${source.home} / ${source.away}`,
    winner,
    complete: hasWinner,
    flag: winner ? getTeamFlagByName(winner) : "🏳️",
  };
}

function buildBracketTeamNode(label, { highlighted = false, eliminated = false } = {}) {
  const node = createElement("div", {
    className: `bracket-team-node${highlighted ? " is-winner" : ""}${eliminated ? " is-loser" : ""}`,
  });
  node.append(
    createElement("span", { className: "bracket-team-flag", text: label.flag }),
    createElement("span", { className: "bracket-team-name", text: label.text })
  );
  return node;
}

function buildKnockoutSection(nowUTC) {
  const section = createElement("section", {
    className: "bracket-section",
    attrs: { "aria-labelledby": "knockoutHeading" },
  });

  const title = createElement("header", { className: "bracket-header" });
  title.append(
    createElement("h2", { className: "section-label", attrs: { id: "knockoutHeading" }, text: "Llaves" }),
    createElement("p", { className: "bracket-subtitle", text: "Cuadro compacto de eliminación" })
  );

  const scroll = createElement("div", { className: "bracket-scroll" });
  const frame = createElement("div", { className: "bracket-frame-svg" });
  frame.innerHTML = `
    <svg class="bracket-svg" viewBox="0 0 1280 760" role="img" aria-label="Cuadro de eliminación">
      <defs>
        <filter id="bracketGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="blur"></feGaussianBlur>
          <feMerge>
            <feMergeNode in="blur"></feMergeNode>
            <feMergeNode in="SourceGraphic"></feMergeNode>
          </feMerge>
        </filter>
      </defs>

      <text class="round-title" x="96" y="34" text-anchor="middle">16VOS</text>
      <text class="round-title" x="276" y="34" text-anchor="middle">OCTAVOS</text>
      <text class="round-title" x="442" y="34" text-anchor="middle">CUARTOS</text>
      <text class="round-title" x="640" y="34" text-anchor="middle">FINAL</text>
      <text class="round-title" x="838" y="34" text-anchor="middle">CUARTOS</text>
      <text class="round-title" x="1004" y="34" text-anchor="middle">OCTAVOS</text>
      <text class="round-title" x="1184" y="34" text-anchor="middle">16VOS</text>

      <path class="line" d="M170 101 H214 V142 H246"></path>
      <path class="line" d="M170 183 H214 V142"></path>
      <path class="line" d="M170 265 H214 V306 H246"></path>
      <path class="line" d="M170 347 H214 V306"></path>
      <path class="line" d="M170 429 H214 V470 H246"></path>
      <path class="line" d="M170 511 H214 V470"></path>
      <path class="line" d="M170 593 H214 V634 H246"></path>
      <path class="line" d="M170 675 H214 V634"></path>
      <path class="line" d="M356 142 H398 V224 H412"></path>
      <path class="line" d="M356 306 H398 V224"></path>
      <path class="line" d="M356 470 H398 V552 H412"></path>
      <path class="line" d="M356 634 H398 V552"></path>
      <path class="line" d="M510 224 H538 V388 H562"></path>
      <path class="line" d="M510 552 H538 V388"></path>
      <path class="line" d="M640 388 H640 V454"></path>

      <path class="line" d="M1110 101 H1066 V142 H1034"></path>
      <path class="line" d="M1110 183 H1066 V142"></path>
      <path class="line" d="M1110 265 H1066 V306 H1034"></path>
      <path class="line" d="M1110 347 H1066 V306"></path>
      <path class="line" d="M1110 429 H1066 V470 H1034"></path>
      <path class="line" d="M1110 511 H1066 V470"></path>
      <path class="line" d="M1110 593 H1066 V634 H1034"></path>
      <path class="line" d="M1110 675 H1066 V634"></path>
      <path class="line" d="M924 142 H882 V224 H868"></path>
      <path class="line" d="M924 306 H882 V224"></path>
      <path class="line" d="M924 470 H882 V552 H868"></path>
      <path class="line" d="M924 634 H882 V552"></path>
      <path class="line" d="M770 224 H742 V388 H718"></path>
      <path class="line" d="M770 552 H742 V388"></path>
      <path class="line" d="M640 388 H640 V454"></path>

      <rect class="final-card" x="555" y="454" width="170" height="160" rx="24"></rect>
      <text class="final-text" x="640" y="500" text-anchor="middle">FINAL</text>
      <text class="final-date" x="640" y="526" text-anchor="middle">19 JUL · 2:00 P. M.</text>
      <rect class="champ" x="582" y="550" width="116" height="36" rx="14"></rect>
      <text class="pending" x="640" y="574" text-anchor="middle">PENDIENTE</text>

      <g transform="translate(26 62)">
        <rect class="box" width="144" height="78" rx="18"></rect>
        <text class="matchid" x="14" y="19">M74</text>
        <text class="flag" x="15" y="45">🇩🇪</text><text class="team small" x="44" y="45">ALEMANIA</text>
        <text class="flag" x="15" y="67">🇵🇾</text><text class="team small" x="44" y="67">PARAGUAY</text>
      </g>
      <g transform="translate(26 144)">
        <rect class="box" width="144" height="78" rx="18"></rect>
        <text class="matchid" x="14" y="19">M77</text>
        <text class="flag" x="15" y="45">🇫🇷</text><text class="team small" x="44" y="45">FRANCIA</text>
        <text class="flag" x="15" y="67">🇸🇪</text><text class="team small" x="44" y="67">SUECIA</text>
      </g>
      <g transform="translate(26 226)">
        <rect class="box-hot" width="144" height="78" rx="18"></rect>
        <text class="matchid" x="14" y="19">M73 · FINAL</text>
        <text class="score" x="125" y="42">0</text>
        <text class="flag" x="15" y="45">🇿🇦</text><text class="team small loser" x="44" y="45">SUDÁFRICA</text>
        <text class="score" x="125" y="66">1</text>
        <text class="flag" x="15" y="67">🇨🇦</text><text class="team small" x="44" y="67">CANADÁ</text>
      </g>
      <g transform="translate(26 308)">
        <rect class="box" width="144" height="78" rx="18"></rect>
        <text class="matchid" x="14" y="19">M75</text>
        <text class="flag" x="15" y="45">🇳🇱</text><text class="team small" x="44" y="45">PAÍSES BAJOS</text>
        <text class="flag" x="15" y="67">🇲🇦</text><text class="team small" x="44" y="67">MARRUECOS</text>
      </g>
      <g transform="translate(26 390)">
        <rect class="box" width="144" height="78" rx="18"></rect>
        <text class="matchid" x="14" y="19">M76</text>
        <text class="flag" x="15" y="45">🇧🇷</text><text class="team small" x="44" y="45">BRASIL</text>
        <text class="flag" x="15" y="67">🇯🇵</text><text class="team small" x="44" y="67">JAPÓN</text>
      </g>
      <g transform="translate(26 472)">
        <rect class="box" width="144" height="78" rx="18"></rect>
        <text class="matchid" x="14" y="19">M78</text>
        <text class="flag" x="15" y="45">🇨🇮</text><text class="team small" x="44" y="45">C. MARFIL</text>
        <text class="flag" x="15" y="67">🇳🇴</text><text class="team small" x="44" y="67">NORUEGA</text>
      </g>
      <g transform="translate(26 554)">
        <rect class="box" width="144" height="78" rx="18"></rect>
        <text class="matchid" x="14" y="19">M79</text>
        <text class="flag" x="15" y="45">🇲🇽</text><text class="team small" x="44" y="45">MÉXICO</text>
        <text class="flag" x="15" y="67">🇪🇨</text><text class="team small" x="44" y="67">ECUADOR</text>
      </g>
      <g transform="translate(26 636)">
        <rect class="box" width="144" height="78" rx="18"></rect>
        <text class="matchid" x="14" y="19">M80</text>
        <text class="flag" x="15" y="45">🏴</text><text class="team small" x="44" y="45">INGLATERRA</text>
        <text class="flag" x="15" y="67">🇨🇩</text><text class="team small" x="44" y="67">RD CONGO</text>
      </g>
      <g transform="translate(1110 62)">
        <rect class="box" width="144" height="78" rx="18"></rect>
        <text class="matchid" x="14" y="19">M83</text>
        <text class="flag" x="15" y="45">🇵🇹</text><text class="team small" x="44" y="45">PORTUGAL</text>
        <text class="flag" x="15" y="67">🇭🇷</text><text class="team small" x="44" y="67">CROACIA</text>
      </g>
      <g transform="translate(1110 144)">
        <rect class="box" width="144" height="78" rx="18"></rect>
        <text class="matchid" x="14" y="19">M84</text>
        <text class="flag" x="15" y="45">🇪🇸</text><text class="team small" x="44" y="45">ESPAÑA</text>
        <text class="flag" x="15" y="67">🇦🇹</text><text class="team small" x="44" y="67">AUSTRIA</text>
      </g>
      <g transform="translate(1110 226)">
        <rect class="box" width="144" height="78" rx="18"></rect>
        <text class="matchid" x="14" y="19">M81</text>
        <text class="flag" x="15" y="45">🇺🇸</text><text class="team small" x="44" y="45">EE. UU.</text>
        <text class="flag" x="15" y="67">🇧🇦</text><text class="team small" x="44" y="67">BOSNIA</text>
      </g>
      <g transform="translate(1110 308)">
        <rect class="box" width="144" height="78" rx="18"></rect>
        <text class="matchid" x="14" y="19">M82</text>
        <text class="flag" x="15" y="45">🇧🇪</text><text class="team small" x="44" y="45">BÉLGICA</text>
        <text class="flag" x="15" y="67">🇸🇳</text><text class="team small" x="44" y="67">SENEGAL</text>
      </g>
      <g transform="translate(1110 390)">
        <rect class="box" width="144" height="78" rx="18"></rect>
        <text class="matchid" x="14" y="19">M86</text>
        <text class="flag" x="15" y="45">🇦🇷</text><text class="team small" x="44" y="45">ARGENTINA</text>
        <text class="flag" x="15" y="67">🇨🇻</text><text class="team small" x="44" y="67">CABO VERDE</text>
      </g>
      <g transform="translate(1110 472)">
        <rect class="box" width="144" height="78" rx="18"></rect>
        <text class="matchid" x="14" y="19">M88</text>
        <text class="flag" x="15" y="45">🇦🇺</text><text class="team small" x="44" y="45">AUSTRALIA</text>
        <text class="flag" x="15" y="67">🇪🇬</text><text class="team small" x="44" y="67">EGIPTO</text>
      </g>
      <g transform="translate(1110 554)">
        <rect class="box" width="144" height="78" rx="18"></rect>
        <text class="matchid" x="14" y="19">M85</text>
        <text class="flag" x="15" y="45">🇨🇭</text><text class="team small" x="44" y="45">SUIZA</text>
        <text class="flag" x="15" y="67">🇩🇿</text><text class="team small" x="44" y="67">ARGELIA</text>
      </g>
      <g transform="translate(1110 636)">
        <rect class="box" width="144" height="78" rx="18"></rect>
        <text class="matchid" x="14" y="19">M87</text>
        <text class="flag" x="15" y="45">🇨🇴</text><text class="team small" x="44" y="45">COLOMBIA</text>
        <text class="flag" x="15" y="67">🇬🇭</text><text class="team small" x="44" y="67">GHANA</text>
      </g>

      <g transform="translate(246 105)">
        <rect class="box-pending" width="110" height="74" rx="16"></rect>
        <text class="matchid" x="16" y="22">M89</text>
        <text class="pending" x="55" y="48" text-anchor="middle">Pendiente</text>
      </g>
      <g transform="translate(246 269)">
        <rect class="box-hot" width="110" height="74" rx="16"></rect>
        <text class="matchid" x="16" y="22">M90</text>
        <text class="flag" x="18" y="53">🇨🇦</text>
        <text class="team small" x="48" y="53">CANADÁ</text>
      </g>
      <g transform="translate(246 433)">
        <rect class="box-pending" width="110" height="74" rx="16"></rect>
        <text class="matchid" x="16" y="22">M91</text>
        <text class="pending" x="55" y="48" text-anchor="middle">Pendiente</text>
      </g>
      <g transform="translate(246 597)">
        <rect class="box-pending" width="110" height="74" rx="16"></rect>
        <text class="matchid" x="16" y="22">M92</text>
        <text class="pending" x="55" y="48" text-anchor="middle">Pendiente</text>
      </g>
      <g transform="translate(412 187)">
        <rect class="box-pending" width="98" height="74" rx="16"></rect>
        <text class="matchid" x="16" y="22">M97</text>
        <text class="pending" x="49" y="48" text-anchor="middle">Pend.</text>
      </g>
      <g transform="translate(412 515)">
        <rect class="box-pending" width="98" height="74" rx="16"></rect>
        <text class="matchid" x="16" y="22">M99</text>
        <text class="pending" x="49" y="48" text-anchor="middle">Pend.</text>
      </g>
      <g transform="translate(562 351)">
        <rect class="box-pending" width="78" height="74" rx="16"></rect>
        <text class="matchid" x="12" y="22">M101</text>
        <text class="pending" x="39" y="48" text-anchor="middle">Pend.</text>
      </g>

      <g transform="translate(924 105)">
        <rect class="box-pending" width="110" height="74" rx="16"></rect>
        <text class="matchid" x="16" y="22">M93</text>
        <text class="pending" x="55" y="48" text-anchor="middle">Pendiente</text>
      </g>
      <g transform="translate(924 269)">
        <rect class="box-pending" width="110" height="74" rx="16"></rect>
        <text class="matchid" x="16" y="22">M94</text>
        <text class="pending" x="55" y="48" text-anchor="middle">Pendiente</text>
      </g>
      <g transform="translate(924 433)">
        <rect class="box-pending" width="110" height="74" rx="16"></rect>
        <text class="matchid" x="16" y="22">M95</text>
        <text class="pending" x="55" y="48" text-anchor="middle">Pendiente</text>
      </g>
      <g transform="translate(924 597)">
        <rect class="box-pending" width="110" height="74" rx="16"></rect>
        <text class="matchid" x="16" y="22">M96</text>
        <text class="pending" x="55" y="48" text-anchor="middle">Pendiente</text>
      </g>
      <g transform="translate(770 187)">
        <rect class="box-pending" width="98" height="74" rx="16"></rect>
        <text class="matchid" x="16" y="22">M98</text>
        <text class="pending" x="49" y="48" text-anchor="middle">Pend.</text>
      </g>
      <g transform="translate(770 515)">
        <rect class="box-pending" width="98" height="74" rx="16"></rect>
        <text class="matchid" x="16" y="22">M100</text>
        <text class="pending" x="49" y="48" text-anchor="middle">Pend.</text>
      </g>
      <g transform="translate(640 351)">
        <rect class="box-pending" width="78" height="74" rx="16"></rect>
        <text class="matchid" x="12" y="22">M102</text>
        <text class="pending" x="39" y="48" text-anchor="middle">Pend.</text>
      </g>
    </svg>
  `;

  scroll.append(frame);
  section.append(title, scroll, createElement("div", {
    className: "legend",
    html: '<span><span class="dot green"></span>Ganador confirmado avanza</span><span><span class="dot gray"></span>Espacio pendiente</span><span><span class="dot yellow"></span>Marcador confirmado</span>'
  }));
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
  const dayMatches = MATCHES
    .filter((match) => match.date === currentDateStr)
    .sort((a, b) => {
      const aKickoff = matchDatetimeBogota(a)?.getTime() ?? Number.POSITIVE_INFINITY;
      const bKickoff = matchDatetimeBogota(b)?.getTime() ?? Number.POSITIVE_INFINITY;
      if (aKickoff !== bKickoff) return aKickoff - bKickoff;
      return (a.matchNumber || 0) - (b.matchNumber || 0);
    });
  const activeMatches = dayMatches.filter((match) => !getMatchPresentation(match, nowUTC).isFinished);
  const finishedMatches = dayMatches.filter((match) => getMatchPresentation(match, nowUTC).isFinished);
  const [y, mo, d] = currentDateStr.split("-").map(Number);
  const currentDate = new Date(y, mo - 1, d);

  elements.heroDate.textContent = capitalize(currentDate.toLocaleDateString("es-CO", { weekday: "long", day: "numeric", month: "long" }));
  elements.heroCount.replaceChildren(
    createElement("strong", { text: String(dayMatches.length) }),
    document.createTextNode(` partido${dayMatches.length !== 1 ? "s" : ""} este día`)
  );
  if (state.isResultsLoading) {
    elements.heroCount.append(document.createTextNode(" · actualizando resultados..."));
  }

  const currentIndex = allDates.indexOf(currentDateStr);
  elements.btnPrev.disabled = currentIndex <= 0;
  elements.btnNext.disabled = currentIndex >= allDates.length - 1;
  if (elements.btnScheduleView && elements.btnKnockoutView) {
    elements.btnScheduleView.classList.toggle("is-active", state.currentView === "programacion");
    elements.btnKnockoutView.classList.toggle("is-active", state.currentView === "llaves");
  }

  renderDayNav({ scrollActive: scrollActiveDay });

  const content = createElement("div", { className: `content-stack${animate ? " fade-in" : ""}` });
  if (state.currentView === "llaves") {
    content.append(buildKnockoutSection(nowUTC));
    elements.mainContent.replaceChildren(content);
    return;
  }
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

  state.isResultsLoading = true;
  render({ animate: false, scrollActiveDay: false });

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
    state.isResultsLoading = false;
    render({ animate: false, scrollActiveDay: false });
    scheduleResultsRefresh();
  }
}

function hydrateResultsFromCache() {
  const cachedPayload = safeReadCachedResults();
  if (cachedPayload && isCachedPayloadFresh(cachedPayload)) {
    debugLog("Resultados cargados desde localStorage", {
      totalResults: Array.isArray(cachedPayload.results) ? cachedPayload.results.length : 0,
      cacheAgeMs: Date.now() - getPayloadTimestamp(cachedPayload),
    });
    ingestResultsPayload(cachedPayload);
  } else if (cachedPayload) {
    debugLog("Caché local ignorado por antigüedad", {
      totalResults: Array.isArray(cachedPayload.results) ? cachedPayload.results.length : 0,
      cacheAgeMs: getPayloadTimestamp(cachedPayload) ? Date.now() - getPayloadTimestamp(cachedPayload) : null,
    });
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
elements.btnScheduleView?.addEventListener("click", () => {
  state.currentView = "programacion";
  render({ animate: true, scrollActiveDay: false });
});
elements.btnKnockoutView?.addEventListener("click", () => {
  state.currentView = "llaves";
  render({ animate: true, scrollActiveDay: false });
});

hydrateResultsFromCache();
startClockLoop();
render({ animate: false, scrollActiveDay: false });
startLiveRefreshLoop();
startResultsPolling();
