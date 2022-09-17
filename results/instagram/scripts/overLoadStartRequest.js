'use strict'

function bin2String(array) {
    return String.fromCharCode.apply(String, array);
  }

if(Java.available){
    Java.perform(function(){
        try {
            console.log("Grabbing params...")
            var target = Java.use("X.0zl")
            target.startRequest
            .overload('X.157', 'X.159', 'X.15J').implementation = function(a, b, c) {
                console.log("A " + a)
                console.log("-------------------")
                console.log("B ", + b)
                console.log("-------------------")
                console.log("C " + c.A01)
                console.log("-------------------")
            };
            

            console.log("Done")
        }
        catch(error){
            console.log("[-] An exception occured")
            console.log(String(error.stack))
        }
    });
}
else {
    console.log("[-] Java is not available")
}