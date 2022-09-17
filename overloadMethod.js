'use strict'

function bin2String(array) {
    return String.fromCharCode.apply(String, array);
  }

if(Java.available){
    Java.perform(function(){
        try {
            console.log("Grabbing params...")
            var target = Java.use("X.0cg")
            target.A00
            .overload('X.0cg', 'java.lang.Object', 'java.lang.String').implementation = function(a, b, c) {
                if (String(a).includes("logging")) {
                    console.log("-------------------")
                    console.log("A" + a)
                    console.log("-------------------")
                    console.log(b)
                    console.log("-------------------")
                    console.log(c)
                    console.log("-------------------")
                } else {
                    return 500
                }
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