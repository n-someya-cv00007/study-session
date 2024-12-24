// privateとpublic、staticメソッドの使い方について説明する

class Person {
    private name: string;
    private age: number;
    private isDead: boolean;

    private constructor(name: string, age: number, isDead: boolean) {
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
    static create(name: string, age: number) {
        const isDead = false // フロントから渡ってきたデータを元に判定する
        return new Person(name, age, isDead);
    }

    // DBから取得してきたデータをもとにインスタンスオブジェクトを生成する想定
    static fromDB(data: {name: string, age: number, isDead: boolean}) {
        return new Person(data.name, data.age, data.isDead);
    }

    greet(): string {
        return `Hello, ${this.name}! I'm ${this.age} years old. ${this.isDead ? 'I am dead' : 'I am alive'}`;
    }
}

// クラスの外からnew演算子を使ってインスタンス化しようとするとコンパイルエラーになる
// const nagi = new Person('nagi', 26, false);

const Alice = Person.create('Alice', 29); // 静的メソッド
console.log(Alice.greet());