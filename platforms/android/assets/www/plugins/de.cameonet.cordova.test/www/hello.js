cordova.define("de.cameonet.cordova.test.hello", function(require, exports, module) { var argscheck = require('cordova/argscheck'),
    channel = require('cordova/channel'),
    exec = require('cordova/exec'),
    cordova = require('cordova');
//
//channel.createSticky('onCordovaInfoReady');
//// Tell cordova channel to wait on the CordovaInfoReady event
//channel.waitForInitialization('onCordovaInfoReady');

function Hello() {

    this.foo = "moep";

    this.greet = function(win, fail) {
        exec(win, fail, "Hello", "greet", ["MOEPER!"]);
    }
}

module.exports = new Hello();







});
