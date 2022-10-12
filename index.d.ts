declare namespace LCS {
  interface InternetComp {
    _group: string
    _title: string
  }

  interface EvtInfo {
    name: string
    desc: string
  }

  type Size = 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl'

  export interface Component extends InternetComp {
    tag: string
    cid: string
    evtList: EvtInfo[]
    childIds?: string[]
  }

  export interface ComponentCore {
    elementNode: any
    syncVariable: (k: string) => string[]
  }
}
