import { v4 } from 'uuid'
import lcsComponent from '../component'

export function cloneComponent (component: LCS.Component, domJSON: LCS.Component[]): LCS.Component | LCS.Component[] | null  {
  const resultNodes: LCS.Component[] = []

  function _clone (node: LCS.Component): void {
    node.childIds?.forEach(cid => {
      domJSON.forEach(comp => {
        if (comp.cid === cid) {
          const newCid = v4()
          const { elementNode } = lcsComponent[component.tag]
          const newNode = elementNode(newCid)

          resultNodes.push(newNode)
          _clone(newNode)
        }
      })
    })
  }

  _clone(component)

  return  resultNodes.length === 0 ? null : (resultNodes.length === 1 ? resultNodes[0] : resultNodes)
}

export function deleteComponent (component: LCS.Component, domJSON: LCS.Component[]): void {
  function _del ({ cid, childIds }: { cid: string, childIds?: string[] }): void {
    domJSON.forEach((comp, i) => {
      if (comp.cid === cid) {
        domJSON.splice(i, 1)
        childIds?.forEach(_id => {
          _del({ cid: _id })
        })
      }
    })
  }

  const { cid, childIds } = component

  _del({ cid, childIds })
}
