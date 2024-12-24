// Q1.引数で渡した数字を3倍にして返す関数を作ってください。
const three = function(number){
    return number * 3;
}

const a = three(4)
console.log(a)

// Q2.Im nagi. Im 24 years old.などのように名前と年齢を引数で渡して文字列を返す関数を作ってください。
const someya = function(name,year){
    return `I'm ${name}. I'm ${year} old.`
}

const b = someya('nagi',24)
console.log(b)