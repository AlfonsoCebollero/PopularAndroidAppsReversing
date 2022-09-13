'use strict'

if(Java.available){
    Java.perform(function(){
        try {
        console.log("\n[+] Hello World!")
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