/**
 * @author Iman Fauzi
 * imanfauzi@gmail.com
 *
 * Soal 1
 * Terdapat string "NEGIE1", silahkan reverse alphabet nya dengan angka tetap diakhir kata Hasil = "EIGEN1"
 */

const reverseText = (text) => {
  const reString = /[^a-zA-Z]/g;
  const reNumber = /\D/g;

  const getNumber = text.replace(reNumber, "");
  const getString = text.replace(reString, "");

  // reverse only text
  const reverseText = [...getString].reverse().join("");

  return `${reverseText}${getNumber}`;
};

const str = "NEGIE1";

const reverese = reverseText(str);

console.log(reverese);
