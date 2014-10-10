//
// Created by Nicolas Tichy on 2/17/14.
// Copyright (c) 2014 Cassida Custom Solutions. All rights reserved.
//

#import <Foundation/Foundation.h>


@interface Security : NSObject
{
    SecKeyRef publicKey;
    SecKeyRef privateKey;

}

+(Security *)sharedInstance;
-(NSString *)getRSAPublicKeyAsBase64;
-(NSString *)signWithPrivateKey:(NSString* )string;


@end