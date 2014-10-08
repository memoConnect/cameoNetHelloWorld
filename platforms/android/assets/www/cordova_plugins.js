cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/de.cameonet.cordova.test/www/hello.js",
        "id": "de.cameonet.cordova.test.hello",
        "clobbers": [
            "hello"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "de.cameonet.cordova.test": "0.1"
}
// BOTTOM OF METADATA
});