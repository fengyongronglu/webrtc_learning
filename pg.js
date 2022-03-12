async function test1() {
    console.log('start test1');
    console.log(await test2());
    console.log('end test1');
}
async function test2() {
    console.log('test2');
    k = await 'return test2 value';
    console.log(k);
    return k;
}
test1();
console.log('start async');
setTimeout(() => {
    console.log('setTimeout');
}, 0);
new Promise((resolve, reject) => {
    console.log('promise1');
    resolve();
}).then(() => {
    console.log('promise2');
});
console.log('end async');