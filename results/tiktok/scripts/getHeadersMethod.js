'use strict'

if(Java.available){
    Java.perform(function(){
        try {
            console.log("Grabbing params...")
            var target = Java.use("X.4aB")
            target.LIZ
            .overload('java.lang.String').implementation = function(a) {
                console.log(a)
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