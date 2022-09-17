'use strict'

if(Java.available){
    Java.perform(function(){
        try {
            let classes = []
            console.log("Enumerating loaded classes...")
            Java.enumerateLoadedClasses({
                onMatch: function(className){
                    if ((!className.includes("instagram") && !className.includes("facebook")) && !classes.includes(className) && className.includes("X.")){
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