let promise = new Promise((resolve, reject) => {
    let arr = [1, 2, 3, 4, 5];
    resolve({ name: "tej" } + {age:29});
    // resolve("tej");
    reject("data not found");
    //   reject("reject");
    // console.log('res')
  });
  
  promise
    .then((res) => {
      console.log("res :", res);
    //   res + "okay";
    })
    // .then((res) => {
    //   console.log("res2", res);
    // })
    .catch((err) => {
      console.log("err", err);
    });
  