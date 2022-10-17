declare namespace LCS {

  export interface LcsCompoentTarget {
    [K: string]: {
      tag:  string
      elementNode: (cid: string) => LCS.Component
      getNodeMethods: (cid: string) => LCS.MethodInfo[]
      getSyncVariables:  (cid: string) => string[]
    }
  }

  export interface MethodInfo {
    name: string
    desc: string
    open: boolean
  }

  interface InternetComp {
    _group: string
    _title: string
  }

  type Size = 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl'

  export interface Component extends InternetComp {
    tag: string
    cid: string
    evtList: MethodInfo[]
    childIds?: string[]
  }

  export interface ComponentCore {
    elementNode: any
    syncVariable: (k: string) => string[]
  }
}
