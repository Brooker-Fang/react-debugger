import { Placement, PerformedWork, Update, PlacementAndUpdate, Deletion, DidCapture, Passive, PassiveMask, PassiveStatic, ChildDeletion, ContentReset, Callback, Ref, Snapshot, HostEffectMask, Incomplete, ShouldCapture, DidPropagateContext, NeedsPropagation, MountPassiveDev, MountLayoutDev } from '../react-reconciler/src/ReactFiberFlags'

export const FlagsMapArr = [Placement, PerformedWork, Update, PlacementAndUpdate, Deletion, DidCapture, Passive, PassiveMask, PassiveStatic, ChildDeletion, ContentReset, Callback, Ref, Snapshot, HostEffectMask, Incomplete, ShouldCapture, DidPropagateContext, NeedsPropagation ]
export const FlagsMap = {
  [Placement]: 'Placement',
  [PerformedWork]: 'PerformedWork',
  [Update]: 'Update',
  [PlacementAndUpdate]: 'PlacementAndUpdate',
  [Deletion]: 'Deletion',
  [DidCapture]: 'DidCapture',
  [Passive]: 'Passive',
  [PassiveMask]: 'PassiveMask', 
  [PassiveStatic]: 'PassiveStatic',
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
    return args.reduce((prev, val) => `${prev} ${val} |`, flags)
  }
  return flags
}

export const removeFlags = (flags: string, remove_flags: string) => {
  return flags.replace(`${remove_flags} |`, '')
}

export const andFlags = (flags: string, ...args: string[]) => {
  if (args?.length) {
    return args.reduce((prev, val) => flags.includes(val) ? prev : addFlags(prev, val), flags)
  }
  return flags
}

export default addFlags 
