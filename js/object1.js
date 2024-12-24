const nagi = {
    name: 'nagi',
    age: 26,
    gender: 'male',
    isMarried: false
}
console.log('nagi', nagi);


const ogata = {
    name: 'ogata',
    age: 28,
    gender: 'male',
    isMarried: true,
    sayBotiboti: function() {
        console.log('botiboti')
    }
}
console.log('ogata', ogata.sayBotiboti());


// nagi.friends = [ogata];
// console.log('nagi', nagi);