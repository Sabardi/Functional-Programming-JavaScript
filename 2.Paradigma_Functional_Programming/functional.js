const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const newNamesWithExcMark = [];

for(let i = 0; i < names.length; i++) {
  newNamesWithExcMark.push(`${names[i]}!`);
}

console.log(newNamesWithExcMark);

// gaya deklaratif
const nama = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const newNamesWithExcMarks = names.map((name) => `${name}!`);

console.log(newNamesWithExcMarks);
 //hasil nya sama
//  kode kedua  tentu ini jauh lebih mudah dibaca dan ringkas



