import LcsSwitch from './switch'

interface LcsCompoentTarget {
  [k: string]: {
    tag: string
    elementNode: (cid: string) => LCS.Component
    syncVariableFunc:  (cid: string) => string[]
  }
}

const componentCommon: LcsCompoentTarget = {
  [LcsSwitch.tag]: LcsSwitch
}

export default componentCommon
