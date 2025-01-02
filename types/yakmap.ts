import type { Node } from 'vis-network'
export interface ProjectNode extends Partial<Node> {
  name: string
  display?: string
  link: string
  color?: string
  dashed?: boolean
  faded?: boolean
  from?: string[]
  deps?: string[]
  animateStop?: boolean
}