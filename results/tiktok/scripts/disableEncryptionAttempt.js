'use strict'

if(Java.available){
    Java.perform(function(){
        try {
            console.log("Grabbing params...")
            var target = Java.use("com.bytedance.retrofit2.CallServerInterceptor")
            target.com_bytedance_retrofit2_CallServerInterceptor_com_ss_android_ugc_aweme_feed_lancet_NetworkUtilsLancet_createRawCall
            .overload('com.bytedance.retrofit2.CallServerInterceptor', 'com.bytedance.retrofit2.client.Request').implementation = function(a, b) {
                console.log(a)
                console.log(b)
                console.log(b.getBody())
                console.log(b.getRequestBody())
                console.log(b.getRequestPriorityLevel())
                console.log(b.getServiceType())
                console.log(b.getUrl())
                console.log(b.isBodyEncryptEnabled())
                console.log(b.isQueryEncryptEnabled())
                return []
            };

            var target_request = Java.use("com.bytedance.retrofit2.client.Request")

            target_request.setBodyEncryptEnabled.overload("boolean").implementation = function(a) {
                this.isBodyEncryptEnabled = false;
            };

            target_request.setQueryEncryptEnabled.overload("boolean").implementation = function(a) {
                this.isQueryEncryptEnabled = false;
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