import { Placement, PerformedWork, Update, PlacementAndUpdate, Deletion, DidCapture, Passive, PassiveMask, PassiveStatic, ChildDeletion, ContentReset, Callback, Ref, Snapshot, HostEffectMask, Incomplete, ShouldCapture, DidPropagateContext, NeedsPropagation, MountPassiveDev, MountLayoutDev, BeforeMutationMask,LifecycleEffectMask, MutationMask, LayoutMask, StaticMask } from '../react-reconciler/src/ReactFiberFlags'
import {enableCreateEventHandleAPI} from 'shared/ReactFeatureFlags';
import type {Fiber, FiberRoot} from '../react-reconciler/src/ReactInternalTypes';
import { HostRoot } from '../react-reconciler/src/ReactWorkTags';

export const FlagsMapArr = [Placement, PerformedWork, Update, PlacementAndUpdate, Deletion, DidCapture, Passive, PassiveMask, PassiveStatic, ChildDeletion, ContentReset, Callback, Ref, Snapshot, HostEffectMask, Incomplete, ShouldCapture, DidPropagateContext, NeedsPropagation ]
export const FlagsMap = {
  [Placement]: 'Placement',
  [PerformedWork]: 'PerformedWork',
  [Update]: 'Update',
  [PlacementAndUpdate]: 'PlacementAndUpdate',
  [Deletion]: 'Deletion',
  [DidCapture]: 'DidCapture',
  [Passive]: 'Passive',
  [PassiveMask]: 'Passive | ChildDeletion', 
  [PassiveStatic]: 'PassiveStatic',
  [StaticMask]: 'PassiveStatic',
  [ChildDeletion]: 'ChildDeletion',
  [ContentReset]: 'ContentReset',
  [Callback]: 'Callback',
  [Ref]: 'Ref',
  [Snapshot]: 'Snapshot',
  [HostEffectMask]: 'HostEffectMask',
  [Incomplete]: 'Incomplete',
  [ShouldCapture]: 'ShouldCapture',
  [DidPropagateContext]: 'DidPropagateContext',
  [NeedsPropagation]: 'NeedsPropagation',
  [MountPassiveDev | Passive | PassiveStatic]: 'MountPassiveDev | Passive | PassiveStatic',
  [Passive | PassiveStatic]: 'Passive | PassiveStatic',
  [MountLayoutDev | Update] : 'MountLayoutDev | Update',
  [MountLayoutDev | Update]: 'MountLayoutDev | Update',
  [BeforeMutationMask]: `Update | Snapshot | Snapshot ${(enableCreateEventHandleAPI ? '| ChildDeletion | Visibility': '')}`,
  [LifecycleEffectMask]: 'Passive | Update | Callback | Ref | Snapshot',
  [MutationMask]: 'Placement | Update | ChildDeletion | ContentReset | Ref | Hydrating | Visibility',
  [LayoutMask]: 'Update | Callback | Ref',
}

export const traceFlags = (fiber: Fiber | FiberRoot, new_flags?: string) => {
  if (fiber.tag === HostRoot) {
    
  }
}

const formatArg = (...args:string) => {
  return args.map(val => val.endsWith('|') ? val.slice(0, val.length - 2) : val)
}
export const addFlagsToString = (fiber: Fiber | FiberRoot, flags: string, ...args: number[]) => {
  if (args?.length) {
    const new_val = args.reduce((prev, val) => `${prev} ${FlagsMap[val]} |`, flags).trim()
    traceFlags(fiber, new_val)
    return new_val
  }
  return flags
}

const addFlags = (fiber: Fiber | FiberRoot, flags: string, ...args: string[]) => {
  traceFlags(fiber, args && args[0])
  if (args?.length && args.every(val => !!val)) {
    const formatVal = formatArg(...args).reduce((prev, val) => !!val ? `${prev} ${val} |` : prev, flags).trim()
    traceFlags(fiber, formatVal)
    return formatVal
  }
  return flags
}

export const addSubtreeFlags = (fiber: Fiber | FiberRoot, flags: string, ...args: string[]) => {
  
  if (args?.length && args.every(val => !!val)) {
    const formatVal = formatArg(...args).reduce((prev, val) => !!val ? `${prev} ${val} |` : prev, flags)
    // console.info('addSubtreeFlags==', formatVal)
    return formatVal.trim()
  }
  return flags
}

export const removeFlags = (fiber: Fiber | FiberRoot, flags: string, remove_flags: string) => {
  traceFlags(fiber, flags.replace(`${remove_flags} |`, ''))
  return flags.replace(`${remove_flags} |`, '')
}

export const andFlags = (fiber: Fiber | FiberRoot, flags: string, ...args: string[]) => {
  if (!flags) {
    return flags
  }
  if (args?.length) {
    const formatVal =formatArg(...args).reduce((prev, val) => flags.includes(val) ? prev : addFlags(prev, val), flags).trim()
    traceFlags(fiber, formatVal)
    return formatVal
  }
  return flags
}

export const andSubtreeFlags = (fiber: Fiber | FiberRoot, flags: string, ...args: string[]) => {
  if (args?.length) {
    return formatArg(...args).reduce((prev, val) => flags.includes(val) ? prev : addFlags(prev, val), flags).trim()
  }
  return flags
}
export default addFlags 
