'use strict'

function bin2String(array) {
    return String.fromCharCode.apply(String, array);
  }

if(Java.available){
    Java.perform(function(){
        try {
            console.log("Grabbing params...")
            var target = Java.use("X.1Wj")
            target.$init
            .overload('java.lang.String', 'java.util.List', 'int', 'int').implementation = function(a, b, c, d) {
                var iter = b.iterator();
                while(iter.hasNext()) {
                    console.log(iter.next());
                }
                console.log("A: " + a)
                console.log("-----------------------")
                console.log("-----------------------")
                console.log("C: " + c)
                console.log("-----------------------")
                console.log("D: " + d)
                
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