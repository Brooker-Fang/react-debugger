/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

export type TypeOfMode = number;
// 模式
export const NoMode = /*            */ 0b000000;
// TODO: Remove BlockingMode and ConcurrentMode by reading from the root tag instead
export const BlockingMode = /*      */ 0b000001; // Blocking 模式，是Concurrent模式的由优雅降级
export const ConcurrentMode = /*    */ 0b000010; // Concurrent模式
export const ProfileMode = /*       */ 0b000100;
export const DebugTracingMode = /*  */ 0b001000;
export const StrictLegacyMode = /*  */ 0b010000;
export const StrictEffectsMode = /* */ 0b100000;
