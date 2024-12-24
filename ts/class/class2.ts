// value objectの例

class Person2 {
    private name: Name;
    private age: Age;
    private isDead: boolean;

    private constructor(name: Name, age: Age, isDead: boolean) {
        this.name = name;
        this.age = age;
        this.isDead = isDead;
    }

    // フロントから渡ってきたデータをもとにインスタンスオブジェクトを生成する想定
    static create(name: Name, age: Age) {
        const isDead = false // フロントから渡ってきたデータを元に判定する
        return new Person2(name, age, isDead);
    }

    // DBから取得してきたデータをもとにインスタンスオブジェクトを生成する想定
    static fromDB(data: {name: Name, age: Age, isDead: boolean}) {
        return new Person2(data.name, data.age, data.isDead);
    }

    greet(): string {
        return `Hello, ${this.name}! I'm ${this.age} years old. ${this.isDead ? 'I am dead' : 'I am alive'}`;
    }
}

class Age {
    private value: number;

    constructor(value: number) {
        if (value < 0) {
            throw new Error('Age must be a positive number.');
        }
        if (!Number.isInteger(value)) {
            throw new Error('Age must be an integer.');
        }
        this.value = value;
    }

    getValue(): number {
        return this.value;
    }

    // 例: 加齢などで新しい値を作成する場合
    increment(): Age {
        return new Age(this.value + 1);
    }

    // 同値性の確認
    equals(other: Age): boolean {
        return this.value === other.value;
    }
}

class Name {
    private value: string;

    constructor(value: string) {
        // 3文字以上10文字以下の名前かどうかをチェックする
        if (value.length < 3 || value.length > 10) {
            throw new Error('Name must be between 3 and 10 characters.');
        }
        this.value = value;
    }
}

const nameAlice = new Name('Alice'); // 名前のバリューオブジェクトを生成
const ageAlice = new Age(29);       // 年齢のバリューオブジェクトを生成

console.log('typeof nameAlice: ', typeof nameAlice);

const person = Person2.create(nameAlice, ageAlice); // Person2 を生成
console.log(person.greet());