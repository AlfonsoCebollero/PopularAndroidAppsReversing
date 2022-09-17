'use strict'

function bin2String(array) {
    return String.fromCharCode.apply(String, array);
  }

if(Java.available){
    Java.perform(function(){
        try {
            console.log("Grabbing params...")
            var target = Java.use("X.16M")
            target.$init
            .overload('java.nio.ByteBuffer').implementation = function(a) {
                console.log("-------------------")
                console.log("A " + a)
                console.log("-------------------")
                console.log(a.asCharBuffer())
                console.log("-------------------")
                console.log(a.asCharBuffer().toString)
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