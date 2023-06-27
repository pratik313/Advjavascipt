

let oldarr = [0,0,0,0,0,0,1,1,2,2,3,4,5,5,6,6,6,7,8,9,2,3];

let newarr =[];

for (let i=0; i < oldarr.length; i++){


    if(i===0 || oldarr[i] !==oldarr [i-1]) {
        newarr.push(oldarr[i]);

    }

console.log('newarr',newarr);
}
