//
//  CatchCrash.h
//  RCTTest
//
//  Created by 童万华 on 2017/11/2.
//  Copyright © 2017年 童万华. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface CatchCrash : NSObject
void uncaughtExceptionHandler(NSException *exception);
@end
