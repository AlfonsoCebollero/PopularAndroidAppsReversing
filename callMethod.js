'use strict'

if(Java.available){
    Java.perform(function(){
        try {
            console.log("Executing method...")
            var target = Java.use("com.bytedance.retrofit2.client.Request")
            var instance = target.Request.$new()
            console.log(instance.getBody());
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