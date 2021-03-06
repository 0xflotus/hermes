# Copyright (c) Facebook, Inc. and its affiliates.
#
# This source code is licensed under the MIT license found in the LICENSE
# file in the root directory of this source tree.

set(SupportSources
  Algorithms.cpp
  AllocatorTest.cpp
  CheckedMalloc.cpp
  ConsumableRangeTest.cpp
  ConversionsTest.cpp
  CtorConfigTest.cpp
  HashStringTest.cpp
  JSONEmitterTest.cpp
  LEB128Test.cpp
  OptValueTest.cpp
  PageAccessTrackerTest.cpp
  PlatformLoggingTest.cpp
  RegexTest.cpp
  SNPrintfBufTest.cpp
  SourceErrorManagerTest.cpp
  StatsAccumulatorTest.cpp
  StringKindTest.cpp
  StringSetVectorTest.cpp
  UnicodeTest.cpp
  )

add_hermes_unittest(HermesSupportTests
  ${SupportSources}
  )

target_link_libraries(HermesSupportTests
 hermesPlatform
 hermesSupport
 dtoa
 )
