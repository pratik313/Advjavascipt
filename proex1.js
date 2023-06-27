const prsn=[
    {
        name="prtk",
        age="10"
    },
    {
        name:"r1",
        age="100"
    },
     {
        name="drmn",
        age="40"
 },
    {
        name:"nhr",
        age="50"
    }
]
let p=[];
 const promise = new promise ((resolve,reject)=>{
    prsn.map((e)=>{
        if(e.age>20){
            p.push("{"+ e.name +" : "e.age +"}");}
        })
    })
 
