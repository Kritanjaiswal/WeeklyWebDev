function test(){
    console.log(arguments);
    console.log(arguments[0]);
    console.log(arguments.length);
    let result=0;
    for(let i=0; i<arguments.length; i++){
        result+=arguments[i];
    }
    return result;
}
console.log(test(1,2,3,4,5,65));
console.log(test("Kritan",6,8,6));
console.log(test());