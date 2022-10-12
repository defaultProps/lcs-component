export interface LcsSwitch extends LCS.Component {
  tag: string
  size: LCS.Size
  'active-value': string
  'inactive-value': string
  disabled: string
}

function syncVariableFunc (cid: string): string[] {
  return [`switchActiveValue_${cid}`, `switchInActiveValue_${cid}`, `switchDisabled_${cid}`]
}

const tag = 'lcs-element-switch' as const

function elementSwitch (cid: string): LcsSwitch {
  if (!cid) {
    throw new Error('new switch node error!!')
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
    evtList: [
      {
        name: `switchChange_${cid}`,
        desc: 'switch开启或关闭后触发'
      }
    ]
  }
}

export default {
  tag,
  elementNode: elementSwitch,
  syncVariableFunc
}
