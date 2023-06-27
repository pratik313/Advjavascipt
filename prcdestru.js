let a, b, ret;
[a, b] = [10, 20];

console.log(a);
// Expected output: 10

console.log(b);
// Expected output: 20

[a, b, ...ret] = [10, 20, 30, 40, 50];

console.log(ret);
// Expected output: Array [30, 40, 50]