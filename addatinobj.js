function fun1(data){
    data.age=32;
    console.log("age:"+data.age);

}
function fun2 (fname,lname){
    let prsn={
        fname:fname,
        lastname:lname,
    }
    console.log(prsn.fname+":"+prsn.lastname+".");
    fun1(prsn);
}
fun2("pratik","prtk");