function isEvenOrOdd(x,fn){
    //fn call
    fn();
    return x%2==0;
}
isEvenOrOdd(10,function process(){
    console.log("Processing");
    console.trace("Trace of the function");
});