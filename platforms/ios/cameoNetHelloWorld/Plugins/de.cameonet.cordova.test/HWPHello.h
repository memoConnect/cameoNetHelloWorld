#import <Cordova/CDVPlugin.h>
#import <Security/Security.h>

@interface HWPHello : CDVPlugin
{
	SecKeyRef publicKey;
	SecKeyRef privateKey;
	NSData *publicTag;
	NSData *privateTag;
}

- (void) greet:(CDVInvokedUrlCommand*)command;
- (void) generateKeyPair:(CDVInvokedUrlCommand*)command;

@end