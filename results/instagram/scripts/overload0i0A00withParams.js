'use strict'

function bin2String(array) {
    return String.fromCharCode.apply(String, array);
  }

if(Java.available){
    Java.perform(function(){
        try {
            console.log("Grabbing params...")
            var target = Java.use("X.0i0")
            target.A00
            .overload('X.0i0').implementation = function(a, b) {
                console.log("A: " + a.value)
                console.log("-----------------------")
                console.log("A ao1: " + a.A01.value)
                console.log("-----------------------")
                console.log("A ao2: " + a.A02.value)
                console.log("-----------------------")
                console.log("A ao3: " + a.A03.value)
                console.log("-----------------------")
                console.log("A ao4: " + a.A04.value)
                console.log("-----------------------")
                console.log("A ao5: " + a.A05.value)
                
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