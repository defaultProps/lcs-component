export interface LcsInputSingle extends LCS.Component {
  tag: string
  size?: LCS.Size
  disabled?: string
  clearable?: boolean
  suffixIcon?: string
  prefixIcon?: string
  prependSlot?: LCS.Component
  suffixSlot?: LCS.Component
}

const tag = 'lcs-element-single-input' as const

const getNodeMethods = (cid: string): LCS.MethodInfo[] => ([
  {
    desc: '单行基础输入框 change 方法',
    open: false,
    name: `inputSingle_${cid}`
  },
  {
    desc: '单行基础输入框 disabled 方法',
    open: false,
    name: `inputSingleDisabled_${cid}`
  },
  {
    desc: '单行基础输入框 v-if 方法',
    open: false,
    name: `inputSingleVIf_${cid}`
  },
  {
    desc: '单行基础输入框 v-show 方法',
    open: false,
    name: `inputSingleVShow_${cid}`
  }
])

const initSwitchNodeInfo = (cid: string): LcsInputSingle => {
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
    disabled: `switchDisabled_${cid}`,
    evtList: getNodeMethods(cid)
  }
}

export default {
  tag,
  elementNode: initSwitchNodeInfo,
  getNodeMethods,
  getSyncVariables: (cid: string): string[] => {
    return [`inputSingleModel_${cid}`, `inputSinglePlaceholder_${cid}`, `switchDisabled_${cid}`]
  }
}
