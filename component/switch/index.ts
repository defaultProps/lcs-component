export interface LcsSwitch extends LCS.Component {
  tag: string
  size: LCS.Size
  'active-value': string
  'inactive-value': string
  disabled: string
}

const tag = 'lcs-element-switch' as const

const getNodeMethods = (cid: string): LCS.MethodInfo[] => ([
  {
    desc: 'switch change API',
    open: false,
    name: `switchChange_${cid}`
  },
  {
    desc: 'switch disabled API',
    open: false,
    name: `switchDisabled_${cid}`
  },
  {
    desc: 'switch v-if API',
    open: false,
    name: `switchIf_${cid}`
  },
  {
    desc: 'switch v-show API',
    open: false,
    name: `switchDisabled_${cid}`
  }
])

const initSwitchNodeInfo = (cid: string): LcsSwitch => {
  if (!cid) {
    throw new Error('init new switch node error!!')
  }

  return {
    _group: '表单组件',
    _title: '标题',
    tag,
    cid,
    childIds: [],
    size: 's',
    'active-value': `switchActiveValue_${cid}`,
    'inactive-value': `switchInActiveValue_${cid}`,
    disabled: `switchDisabled_${cid}`,
    evtList: getNodeMethods(cid)
  }
}

export default {
  tag,
  elementNode: (cid: string): LcsSwitch => initSwitchNodeInfo(cid),
  getNodeMethods,
  getSyncVariables: (cid: string): string[] => {
    return [`switchActiveValue_${cid}`, `switchInActiveValue_${cid}`, `switchDisabled_${cid}`]
  }
}
