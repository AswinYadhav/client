import * as React from 'react'

export type Props = {
  isDarkMode?: boolean
  onNavigationStateChange: (prev: any, next: any, action: any) => void
  updateNavigator: (route: Router) => void
}
declare class Router extends React.Component<Props> {}
export default Router
