var Student = [
    {
        name: "akash",
        age: 28
    },
    {
        name: "patal",
        age: 30
    },
    {
        name: "pruthvi",
        age: 10
    },
    
]

const fun = () => {
    let count = 0;
    Student.forEach((e) => {
        if (e.age > 18) {
            // throw new Error("You Are Not Eligible....")
            count++;
        } else {
            console.log("Please Sign Up and Apply...")
        }
    })
    console.log("Total : " + count)
}
fun();