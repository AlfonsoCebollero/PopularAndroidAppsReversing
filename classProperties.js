'use strict'

if(Java.available){
    Java.perform(function(){
        try {
            var target = Java.use("zhiliaoapp")
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