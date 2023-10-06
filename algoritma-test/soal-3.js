/**
/**
 * @author Iman Fauzi
 * imanfauzi@gmail.com
 * 
 * Soal 3
 * Terdapat dua buah array yaitu array INPUT dan array QUERY, 
 * silahkan tentukan berapa kali kata dalam QUERY terdapat pada array INPUT
 */

const findRepeatedWordInArray = (input = [], query = []) => {
  // get length same query in input
  const getLength = query.map((q) => input.filter((i) => i === q).length);

  const output = getLength.map((out, i) => {
    let text = "";

    if (out === 0) text = `kata '${query[i]}' tidak ada pada INPUT`;
    if (out > 0) text = `kata '${query[i]}' terdapat ${out} pada INPUT`;

    if (i === 0) return `karena ${text}`;
    if (i === query.length) return `dan ${text}`;

    return text;
  });

  return output.join(", ");
};

const INPUT = ["xc", "dz", "bbb", "dz"];
const QUERY = ["bbb", "ac", "dz"];

const repeatedWord = findRepeatedWordInArray(INPUT, QUERY);

console.log(repeatedWord);
