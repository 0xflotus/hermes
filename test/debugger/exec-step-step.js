// Copyright (c) Facebook, Inc. and its affiliates.
//
// This source code is licensed under the MIT license found in the LICENSE
// file in the root directory of this source tree.
//
// RUN: %hdb %s < %s.debug | %FileCheck --match-full-lines %s
// REQUIRES: debugger

var x = 1;
debugger;
print(x);

// CHECK: Break on 'debugger' statement in global: {{.*}}:10:1
// CHECK-NEXT: 3
// CHECK-NEXT: Stepped to global: {{.*}}:11:1

