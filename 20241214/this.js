/**
 * thisの挙動を確認するためのコードです
 * ブラウザのコンソールででA,Bをそれぞれ実行しthisの値を確認してください
**/

/** A **/
function test() {
	console.log(this);
}
let obj1 = {};
obj1.test = test;

obj1.test();

/** B **/
function test() {
	console.log(this);
}
test();