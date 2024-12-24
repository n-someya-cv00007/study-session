class Person {

    constructor(name, age) {
        // バリデーション
        // if(!name) {
        //     throw new Error('name is required');
        // }
        // if(!age) {
        //     throw new Error('age is required');
        // }
        // if(age < 0) {
        //     throw new Error('age must be positive');
        // }

        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello, ${this.name}!`;
    }

    static sayBotiboti() {
        console.log('botiboti');
    }
}

const nagi = new Person('nagi', -2);
console.log(nagi);
console.log(nagi.greet());

// Person.sayBotiboti();