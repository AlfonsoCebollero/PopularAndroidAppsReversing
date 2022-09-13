'use strict'

function bin2String(array) {
    return String.fromCharCode.apply(String, array);
  }

if(Java.available){
    Java.perform(function(){
        try {
            console.log("Grabbing params...")
            var target = Java.use("com.ss.android.ugc.aweme.statistic.AppLogNetworkClient")
            target.LIZ
            .overload('java.lang.String', '[B', 'java.util.Map').implementation = function(a, b, c) {
                console.log("A " + a)
                console.log("--------------------")
                console.log("B " + bin2String(b))
                console.log("--------------------")                
                console.log("C " + c.keys())
                console.log("--------------------")

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