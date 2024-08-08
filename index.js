const takimSkoru = () => Math.floor(Math.random() * 16) + 10;
const macSkoru = (takimSkoru, periyotSayisi = 4) => {
  let evSahibiToplamSkor = 0;
  let deplasmanToplamSkor = 0;

  for (let i = 0; i < periyotSayisi; i++) {
    evSahibiToplamSkor += takimSkoru();
    deplasmanToplamSkor += takimSkoru();
  }
  return {
    'evSahibiTakim ': evSahibiToplamSkor,
    'deplasmanTakimi ': deplasmanToplamSkor,
  };
};
console.log(macSkoru(takimSkoru));
