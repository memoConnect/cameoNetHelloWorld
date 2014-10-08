cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/de.cameonet.cordova.test/www/hello.js",
        "id": "de.cameonet.cordova.test.hello",
        "clobbers": [
            "hello"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.device/www/device.js",
        "id": "org.apache.cordova.device.device",
        "clobbers": [
            "device"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "de.cameonet.cordova.test": "0.1",
    "org.apache.cordova.device": "0.2.12"
}
// BOTTOM OF METADATA
});