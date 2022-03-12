import { ComponentType } from 'react'

const withDefaults = <P, DP>(component: ComponentType<P>, defaultProps: DP) => {
  type Props = Partial<DP> & Omit<P, keyof DP>
  component.defaultProps = defaultProps
  return component as ComponentType<Props>
}

export default withDefaults
