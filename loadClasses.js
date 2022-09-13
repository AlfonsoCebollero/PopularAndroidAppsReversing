'use strict'

if(Java.available){
    Java.perform(function(){
        try {
            let classes = []
            console.log("Enumerating loaded classes...")
            Java.enumerateLoadedClasses({
                onMatch: function(className){
                    if ((className.includes("bytedance") || className.includes("tiktok")) && !classes.includes(className)){
                        classes.push(className)
                    }
                },
                onComplete: function(){
                    classes.forEach(element => {
                        console.log(element)
                    });
                    console.log("[+] All classes have been enumerated.")
                }
            });
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