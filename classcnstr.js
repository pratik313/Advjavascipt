class User {
    constructor(name, age, addr) {
        this.name = name;
        this.age = age;
        this.addr = addr; // Fixed the assignment of addr
    }

    print(str) {
        console.log(`${str}`, this.name);
    }

    printAge(ag) {
        console.log(`${ag}`, this.age);
    }

    printAddr(add) {
        console.log(`${add}`, this.addr);
    }
}

let surat = 'surat';
let ank= 'ank';
let dubai= 'dubai';


let prtk = new User("prtk", 24, ank);
let pnkj = new User("pnkj", 20, surat);
let aryn = new User("aryn", 20, surat);
let abrr = new User("abrr", 25, dubai);

prtk.print("my name is:");
prtk.printAge("my age is:");
prtk.printAddr("My address is:");

pnkj.print("my name is:");
pnkj.printAge("my age is:");
pnkj.printAddr("My address is:");

aryn.print("my name is:");
aryn.printAge("my age is:");
aryn.printAddr("My address is:");

abrr.print("my name is:");
abrr.printAge("my age is:");
abrr.printAddr("My address is:");