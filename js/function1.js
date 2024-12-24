// 関数宣言
function greet(name) {
    return `Hello, ${name}!`;
}

// 関数式
const greet1 = function(name) {
    return `Hello, ${name}!`;
};

// アロー関数
const greet2 = (name) => {
    return `Hello, ${name}!`;
};

// オブジェクトのメソッド
const person = {
    name: 'Alice',
    greet: function() {
        return `Hello, ${this.name}!`;
    }
};


// クラスのインスタンスメソッド
// class Greeter {
//     constructor(name) {
//         this.name = name;
//     }

//     greet() {
//         return `Hello from Greeter, ${this.name}!`;
//     }
// }
// const greeterInstance = new Greeter('Bob');
// console.log(greeterInstance.greet());