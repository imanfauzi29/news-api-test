/**
 * @author Iman Fauzi
 * imanfauzi@gmail.com
 *
 * Soal 2
 * Diberikan contoh sebuah kalimat, silahkan cari kata terpanjang dari kalimat tersebut,
 * jika ada kata dengan panjang yang sama silahkan ambil salah satu
 */

const findLongestSentence = (text = "") => {
  const splitSpace = text.split(" ");

  // get length every character
  const sentences = splitSpace.reduce((prev, curr) => {
    prev[curr] = curr.length;

    return prev;
  }, {});

  // getting max number in sentences
  const getMaxNumber = Math.max(...Object.values(sentences));

  // filter longest sentences
  const filterSentences = Object.entries(sentences).filter(
    ([, value]) => value === getMaxNumber
  )[0];

  const joinString = filterSentences.join(": ");

  return `${joinString} character`;
};

const sentence = "Saya sangat senang mengerjakan soal algoritma";

const findLongest = findLongestSentence(sentence);

console.log(findLongest);
