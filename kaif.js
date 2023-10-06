function sayHello(name){
    const defaultname = "anonymous";
    console.log(`hello, this is ${name || defaultname}
    and i amesome!`);\
    function saysomething(){
        console.log(`${name || defaultname} is a human being!`);
}
saysomething();
}
sayHello();