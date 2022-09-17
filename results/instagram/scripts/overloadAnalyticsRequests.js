'use strict'

function bin2String(array) {
    return String.fromCharCode.apply(String, array);
  }

if(Java.available){
    Java.perform(function(){
        try {
            console.log("Grabbing params...")
            var target = Java.use("X.0xu")
            target.A01
            .overload('com.facebook.proxygen.HTTPRequestHandler', 'com.facebook.proxygen.JniHandler', 'com.facebook.proxygen.NativeReadBuffer', 'com.facebook.proxygen.TraceEventContext', 'X.157', 'java.lang.String').implementation = function(a, b, c, d, e, f) {
                if (f === "Analytics") {
                console.log("A " + a)
                console.log("-------------------")
                console.log("B " + b)
                console.log("-------------------")
                console.log("C " + c)
                console.log("-------------------")
                console.log("D" + d)
                console.log("-------------------")
                console.log("E " + e)
                console.log("-------------------")
                console.log("F" + f)
                console.log("-------------------")
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