import React from "react"

import { StackNavigator } from "react-navigation"
import { Home, Feed } from "scenes"

const AppNavigator = StackNavigator(
  {
    Home: { screen: Home },
    Feed: { screen: Feed }
  },
  {
    initialRouteName: "Home"
  }
)

export default class App extends React.Component {
  render() {
    return <AppNavigator />
  }
}
