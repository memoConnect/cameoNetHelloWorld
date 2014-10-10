#import "HWPHello.h"

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
    //NSUInteger* keySizeParam = [[command arguments] objectAtIndex:0];

	SInt32 iKeySize = 1024;
	CFNumberRef keySize = CFNumberCreate(kCFAllocatorDefault, kCFNumberSInt32Type, &iKeySize);
	const void* values[] = { kSecAttrKeyTypeRSA, keySize };
	const void* keys[] = { kSecAttrKeyType, kSecAttrKeySizeInBits };
	CFDictionaryRef parameters = CFDictionaryCreate(kCFAllocatorDefault, keys, values, 2, NULL, NULL);

	SecKeyRef publicKey, privateKey;
    
    NSString* wums;
	OSStatus ret = SecKeyGeneratePair(parameters, &publicKey, &privateKey);
    
    if ( ret == errSecSuccess ) {
        wums = ((SecKeychainItemRef) publicKey) ;
	    NSLog(@"Key success!");
        NSLog(wums);
    }
	else
	    NSLog(@"Key Failure! %li", ret);

	CDVPluginResult* result = [CDVPluginResult
                               resultWithStatus:CDVCommandStatus_OK
                               messageAsString: wums];

    [self success:result callbackId:callbackId];
}

@end