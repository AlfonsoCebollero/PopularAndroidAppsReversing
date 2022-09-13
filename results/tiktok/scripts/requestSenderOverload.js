'use strict'

if(Java.available){
    Java.perform(function(){
        try {
            console.log("Grabbing params...")
            var target = Java.use("com.bytedance.retrofit2.CallServerInterceptor")
            target.com_bytedance_retrofit2_CallServerInterceptor_com_ss_android_ugc_aweme_feed_lancet_NetworkUtilsLancet_executeCall
            .overload('com.bytedance.retrofit2.CallServerInterceptor', 'X.8az', 'X.8eL').implementation = function(a, b, c) {
                console.log(a)
                console.log(b)
                console.log(c)
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