'use strict'

if(Java.available){
    Java.perform(function(){
        try {
            console.log("Grabbing params...")
            var target = Java.use("com.bytedance.retrofit2.RequestBuilder")
            target.LIZ
            .overload('java.lang.Class', 'java.lang.Object').implementation = function(a, b) {
                console.log("A " + a)
                console.log("--------------------")
                console.log("B " + b)
                console.log("--------------------")
            };

            var target_request = Java.use("com.bytedance.retrofit2.client.Request")

            target_request.setBodyEncryptEnabled.overload("boolean").implementation = function(a) {
                this.isBodyEncryptEnabled = false;
            };

            target_request.setQueryEncryptEnabled.overload("boolean").implementation = function(a) {
                this.isQueryEncryptEnabled = false;
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