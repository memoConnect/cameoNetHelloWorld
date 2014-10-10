#import "HWPHello.h"
#import "SecurityTools.h"

@implementation HWPHello

const size_t BUFFER_SIZE = 64;
const size_t CIPHER_BUFFER_SIZE = 1024;
const uint32_t PADDING = kSecPaddingNone;

- (void)greet:(CDVInvokedUrlCommand*)command
{

    NSString* callbackId = [command callbackId];
    NSString* name = [[command arguments] objectAtIndex:0];
    NSString* msg = [NSString stringWithFormat: @"Hello, %@", name];

    CDVPluginResult* result = [CDVPluginResult
                               resultWithStatus:CDVCommandStatus_OK
                               messageAsString:msg];

    [self success:result callbackId:callbackId];
}

- (void)generateKeyPair:(CDVInvokedUrlCommand*)command
{
    NSString* callbackId = [command callbackId];
    //NSUInteger* keySizeParam = [[command arguments] objectAtIndex:
    
    NSString *publicKey = [[SecurityTools sharedInstance] getRSAPublicKeyAsBase64];
    NSString *privateKey = [[SecurityTools sharedInstance] getRSAPrivateKeyAsBase64];
    
    NSLog(publicKey);
    NSLog(privateKey);
    
    CDVPluginResult* result = [CDVPluginResult
                               resultWithStatus:CDVCommandStatus_OK
                               messageAsString: privateKey];


    [self success:result callbackId:callbackId];
}

@end