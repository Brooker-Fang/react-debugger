import { Placement, PerformedWork, Update, PlacementAndUpdate, Deletion, DidCapture, Passive, PassiveMask, PassiveStatic, ChildDeletion, ContentReset, Callback, Ref, Snapshot, HostEffectMask, Incomplete, ShouldCapture, DidPropagateContext, NeedsPropagation, MountPassiveDev, MountLayoutDev, BeforeMutationMask,LifecycleEffectMask, MutationMask, LayoutMask, StaticMask } from '../react-reconciler/src/ReactFiberFlags'
import {enableCreateEventHandleAPI} from 'shared/ReactFeatureFlags';

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
export const addFlagsToString = (flags: string, ...args: number[]) => {
  if (args?.length) {
    return args.reduce((prev, val) => `${prev} ${FlagsMap[val]} |`, flags)
  }
  return flags
}

const addFlags = (flags: string, ...args: string[]) => {
  console.info('adding flags', flags)
  // debugger
  if (args?.length) {
    return args.reduce((prev, val) => `${prev} ${val} |`, flags).trim()
  }
  return flags
}

export const addSubtreeFlags = (flags: string, ...args: string[]) => {
  
  if (args?.length && args.every(val => !!val)) {
    const formatVal = args.map(val => val.endsWith('|') ? val.slice(0, val.length - 2) : val).reduce((prev, val) => !!val ? `${prev} ${val} |` : prev, flags)
    // console.info('addSubtreeFlags==', formatVal)
    return formatVal.trim()
  }
  return flags
}

export const removeFlags = (flags: string, remove_flags: string) => {
  return flags.replace(`${remove_flags} |`, '')
}

export const andFlags = (flags: string, ...args: string[]) => {
  if (args?.length) {
    return args.reduce((prev, val) => flags.includes(val) ? prev : addFlags(prev, val), flags).trim()
  }
  return flags
}

export const andSubtreeFlags = (flags: string, ...args: string[]) => {
  if (args?.length) {
    return args.reduce((prev, val) => flags.includes(val) ? prev : addFlags(prev, val), flags).trim()
  }
  return flags
}
export default addFlags 
