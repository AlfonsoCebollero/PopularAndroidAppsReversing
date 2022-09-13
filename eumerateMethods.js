'use strict'

if(Java.available){
    Java.perform(function(){
        try {
            console.log("Enumerating methods...")
            const groups = Java.enumerateMethods('*retrofit*Request*!*Body*')
            console.log(JSON.stringify(groups, null, 2));
            return
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
