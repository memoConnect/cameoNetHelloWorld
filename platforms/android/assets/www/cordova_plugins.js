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
        "file": "plugins/de.datawerk.cordova.plugin.cryptohelper/www/crypto-helper.js",
        "id": "de.datawerk.cordova.plugin.cryptohelper.CryptoHelper",
        "clobbers": [
            "CryptoHelper"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "de.cameonet.cordova.test": "0.1",
    "de.datawerk.cordova.plugin.cryptohelper": "1.0.0"
}
// BOTTOM OF METADATA
});