// reduse using adition //

    let arr = [1,2,3,4,5,6]

    let total = arr.reduce((lastEle,ele)=>{
        console.log("LastElement is :",lastEle);
        console.log("Element is :", ele);

        return lastEle + ele;

    })

    console.log("reduce :",total);

    // distructureing //

    let find = ["prtk",20,"dubai"]


    let x = find[0];
    let y = find[1];
    let z = find[2];

    console.log(x);
console.log(y);
console.log(z);