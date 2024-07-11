// 1. ixtiyoriy array yarating va undagi bir martadan ko'p takrorlangan item larni boshqa array ko'chiradigan function yarating
// function getDuplicates(arr) {
//     let counts = {};
//     let duplicates = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (counts[arr[i]]) {
//             counts[arr[i]] += 1;
//         } else {
//             counts[arr[i]] = 1;
//         }
//     }

//     for (let item in counts) {
//         if (counts[item] > 1) {
//             duplicates.push(parseInt(item));
//         }
//     }

//     return duplicates;
// }

// let arr = [1, 2, 3, 4, 5, 2, 3, 6, 7, 8, 9, 1, 10];
// let duplicates = getDuplicates(arr);
// console.log("Takrorlangan elementlar:", duplicates);

// 2. Array elementlari kvadratlaridan hosil bo’lgan array hosil qiling. Input: [1, 2, 3, 4, 5] Output: [1, 4, 9, 16, 25]

// function getSquares(arr) {
//     return arr.map(function(item) {
//         return item * item;
//     });
// }

// let arr = [1, 2, 3, 4, 5];
// let squares = getSquares(arr);
// console.log("Elementlar kvadratlari:", squares);

// 3.Arraydagi musbat sonlar yig’indisini hisoblang. (filter va reduce). Input: [ 1, -4, 12, 0, -3, 29, -150] Output: 42

// function sumPositiveNumbers(arr) {
//   return arr
//     .filter(function (item) {
//       return item > 0;
//     })
//     .reduce(function (sum, item) {
//       return sum + item;
//     }, 0);
// }

// let arr = [1, -4, 12, 0, -3, 29, -150];
// let sum = sumPositiveNumbers(arr);
// console.log("Musbat sonlar yig'indisi:", sum);

// 4. Stringdagi so’zlarning bosh harflarini oling. (split, map, join). Input: 'George Raymond Richard Martin'. Output: 'GRRM'

// function getInitials(str) {
//     return str
//         .split(' ')
//         .map(function(word) {
//             return word.charAt(0);
//         })
//         .join('');
// }

// let str = 'George Raymond Richard Martin';
// let initials = getInitials(str);
// console.log("Bosh harflar:", initials);

// 5. Berilgan stringni faqatgina harflardan iborat ekanligiga tekshiring

// function isAlphabetic(str) {
//     return [A-Za-z]+$test(str);
// }
// let str1 = 'HelloWorld';
// let str2 = 'Hello World!';
// let str3 = '123ABC';
// let str4 = 'OnlyLetters';

// console.log(isAlphabetic(str1));
// console.log(isAlphabetic(str2));
// console.log(isAlphabetic(str3));
// console.log(isAlphabetic(str4));

// 6. String berilgan. Stringdagi so'zlar uzunligidan iborat bo'lgan array qaytaring. (split, map) Input: "Hello world" Output: [3, 9, 12]

// function getWordLengths(str) {
//     return str
//         .split(' ')
//         .map(function(word) {
//             return word.length;
//         });
// }

// let str = 'Hello world welcome';
// let wordLengths = getWordLengths(str);
// console.log("So'zlar uzunliklari:", wordLengths);

// 7. Stringni bo'sh joy bor yoki yo'qligini tekshiring. Input: "salom dunyo" Output: true

// function hasSpace(str) {
//     return str.includes(' ');
// }

// let str1 = 'salom dunyo';
// let str2 = 'salomdunyo';

// console.log(hasSpace(str1));
// console.log(hasSpace(str2));

// 8. Objectning kalit va qiymatlarining string ko'rinishidagi yig'indisidan iborat array qaytaring Input: {a: 2, b: 5, c: 7}. Output: ['a2', 'b5', 'c7']
