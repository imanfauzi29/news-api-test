/**
/**
 * @author Iman Fauzi
 * imanfauzi@gmail.com
 * 
 * Soal 4
 * Silahkan cari hasil dari pengurangan dari jumlah diagonal sebuah matrik NxN Contoh:
 * 
 * Matrix = [[1, 2, 0], [4, 5, 6], [7, 8, 9]]
 * diagonal pertama = 1 + 5 + 9 = 15 
 * diagonal kedua = 0 + 5 + 7 = 12 
 * maka hasilnya adalah 15 - 12 = 3
 * 
 */

const DiagonalMatrix = (matrix = []) => {
  // check matrix and return 0 if matrix is null
  if (!matrix || matrix.length === 0 || matrix.length !== matrix[0].length) {
    return 0;
  }

  let diagonal1 = 0;
  let diagonal2 = 0;

  // count top left to bottom right
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][i] !== undefined) diagonal1 += matrix[i][i];
  }

  // count top right to bottom left
  for (let i = 0; i < matrix.length; i++) {
    const topRightMatrix = matrix[i][matrix.length - 1 - i];
    if (topRightMatrix !== undefined) diagonal2 += topRightMatrix;
  }

  return diagonal1 - diagonal2;
};

const matrix = [
  [1, 2, 0],
  [4, 5, 6],
  [7, 8, 9],
];

const resultDiagonal = DiagonalMatrix(matrix);
console.log(resultDiagonal);
