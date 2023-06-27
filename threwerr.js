let pro = new Promise((resolve, reject) => {

    let person = [
        {
            name: "sam",
            age: 18
        },
        {
            name: "Mehul",
            age: 16
        },
        {
            name: "Jems",
            age: 16
        },
        {
            name: "Mohit",
            age: 18
        }
    ]
    let arr = [];
    person.map((e) => {
        if (e.age > 18) {
            arr.push(e.name + ":" + e.age);
            console.log(...arr)
            resolve(...arr);
        }
        else {
            reject("You are not Eligible")
        }
    })
})

pro.then((res) => {
    console.log(res);
}).catch((error) => {
    console.log(error);
})