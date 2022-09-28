export const colorPlanet = ['bg-orange-200', 'bg-purple-200', 'bg-yellow-200', 'bg-rose-200', 'bg-blue-200', 'bg-green-200', 'bg-violet-200', 'bg-amber-200', 'bg-lime-200', 'bg-sky-200', 'bg-red-200', 'bg-teal-200', 'bg-fuchsia-200'];



export function getDMS(de) {
  let deg = fix30(de);
  let d = Math.floor(deg);
  let minfloat = (deg - d) * 60;
  let m = Math.floor(minfloat);
  let secfloat = (minfloat - m) * 60;
  let s = Math.round(secfloat);
  if (s === 60) {
    m++;
    s = 0;
  }
  if (m === 60) {
    d++;
    m = 0;
  }
  return (d + "°" + m + "′");
}

function fix30(d) {
  let num = d;
  while (num > 30) {
    num -= 30;
  }
  return num;
}