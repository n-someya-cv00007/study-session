const nagi = {
    name: 'nagi',
    age: 26,
    gender: 'male',
    isMarried: false
} // リテラル構文

console.log(nagi.hasOwnProperty('name')); // なぜhasOwnProperty()にアクセス可能なのか
console.log(nagi instanceof Object);

const now = new Date(); // インスタンス化