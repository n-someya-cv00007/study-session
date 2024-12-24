const arry = ['apple', 'banana', 'kiwi'];
// console.log(arry);

arry.push('cherry');
console.log('arry', arry);

// 関数の返り値を確認する　https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/push
const a = arry.push('cherry');
console.log('a', a);
console.log('typeof a :', typeof a);