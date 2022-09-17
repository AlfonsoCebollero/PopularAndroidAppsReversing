'use strict'

function bin2String(array) {
    return String.fromCharCode.apply(String, array);
  }

if(Java.available){
    Java.perform(function(){
        try {
            console.log("Grabbing params...")
            var target = Java.use("com.facebook.proxygen.JniHandler")
            target.sendRequestWithBodyAndEOMNative
            .overload('org.apache.http.client.methods.HttpUriRequest', '[B', 'int', 'int').implementation = function(a, b, c, d) {
                console.log("A " + a.toString())
                console.log("-------------------")
                console.log("B " + bin2String(b))
                console.log("-------------------")
                console.log("C " + c)
                console.log("-------------------")
                console.log("D" + d)
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