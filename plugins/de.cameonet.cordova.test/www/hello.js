var argscheck = require('cordova/argscheck'),
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
	
	this.generateKeyPair = function(win, fail, keySize) {
		exec(win, fail, "Hello", "generateKeyPair", [keySize]);
	}
}

module.exports = new Hello();






