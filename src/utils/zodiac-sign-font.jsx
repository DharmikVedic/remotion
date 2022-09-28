const zodiacSigns = {
  sun: "A",
  moon: "B",
  mercury: "C",
  venus: "D",
  mars: "E",
  jupiter: "F",
  saturn: "G",
  uranus: "H",
  neptune: "I",
  pluto: "J",
  node: "L",
  northnode: "L",
  southnode: "M",
  eris: "N",
  earth: "O",
  ascendant: "P",
  midheaven: "Q",
  retrograde: "R",
  partoffortune: "S",
  chiron: "U",
  ceres: "V",
  pallas: "W",
  juno: "X",
  vesta: "Y",
  aries: "a",
  taurus: "b",
  gemini: "c",
  cancer: "d",
  leo: "e",
  virgo: "f",
  libra: "g",
  scorpio: "h",
  sagittarius: "i",
  capricorn: "j",
  aquarius: "k",
  pisces: "l",
  conjunction: "m",
  opposition: "n",
  trine: "p",
  sextile: "q",
  semisextile: "r",
  quincunx: "s",
  semisqaure: "t",
  square: "o",
  sesquisquare: "u"
}


export function Sign({ name, color, size }) {
  const c = color || "text-zinc-800"
  return (
    <span className={`${c} ${size ? size : "text-[55px]"} font-medium font-zodiac`}>
      {name ? zodiacSigns[name.split(" ").join("").toLowerCase()] : ""}
    </span>
  )
}