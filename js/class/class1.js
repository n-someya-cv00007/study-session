class Person {
    constructor(name, age, isDead) {
        if(!name) {
            throw new Error('name is required');
        }
        if(!age) {
            throw new Error('age is required');
        }
        if(age < 0) {
            throw new Error('age must be positive');
        }

        this.name = name;
        this.age = age;
        this.isDead = isDead;
    }

    // フロントから渡ってきたデータをもとにインスタンスオブジェクトを生成する想定
    static create(name, age) {
        const isDead = false // フロントから渡ってきたデータを元に判定する
        return new Person(name, age, isDead);
    }

    // DBから取得してきたデータをもとにインスタンスオブジェクトを生成する想定
    static fromDB(data) {
        return new Person(data.name, data.age, data.isDead);
    }

    greet() {
        return `Hello, ${this.name}!`;
    }
}

// const nagi = new Person('nagi', 26, false);
// console.log(nagi);
// console.log(nagi.greet());

const Alice = Person.create('Alice', 29); // 静的メソッド
c
console.log(Alice);