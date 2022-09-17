'use strict'

function bin2String(array) {
    return String.fromCharCode.apply(String, array);
  }

if(Java.available){
    Java.perform(function(){
        try {
            console.log("Grabbing params...")
            var target = Java.use("X.159")
            target.$init
            .overload('X.1y9', 'X.0xN', 'X.335', 'java.lang.Integer', 'java.lang.Integer', 'java.lang.String', 'java.lang.String', 'java.lang.String', 'long', 'long')
            .implementation = function(a, b, c, d, e, f, g, h, i, j) {
                if (a != null) {
                    console.log("A.a01: " + a.A01.value)
                    console.log("A.imageUrl", a.A00.value)
                    console.log("A.A02", a.A02.value)
                }
                
                if (b != null) {
                    console.log("------------------------------")
                    console.log("Query type", b.A00.value)
                    console.log("------------------------------")
                }

                if (c != null) {
                    console.log("335.A00", c.A00)
                    console.log("------------------------------")
                    console.log("335.A01", c.A01)
                    console.log("------------------------------")
                }
                
                console.log(d)
                console.log("------------------------------")
                console.log(e)
                console.log("------------------------------")
                console.log(f)
                console.log("------------------------------")
                console.log(g)
                console.log("------------------------------")
                console.log(h)
                console.log("------------------------------")
                console.log(i)
                console.log("------------------------------")
                console.log(j)


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