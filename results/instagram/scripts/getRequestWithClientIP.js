'use strict'

function bin2String(array) {
    return String.fromCharCode.apply(String, array);
  }

if(Java.available){
    Java.perform(function(){
        try {
            console.log("Grabbing params...")
            var target = Java.use("X.16Y")
            target.A00
            .overload('java.util.Map', '[Lorg.apache.http.Header;').implementation = function(a, b) {
                var keys = a.keySet();
                var iterator = keys.iterator();
                while (iterator.hasNext()) {
                    var k = iterator.next();
                    console.log(k + " : " + a.get(k));
                }
                console.log("-------------------")
                console.log("-------------------")
                b.forEach(element => {
                    console.log("Name:")
                    console.log(element.getName())
                    console.log("Value:")
                    console.log(element.getValue())
                });
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