import React from "react"

import { Provider } from "mobx-react"
import { StackNavigator } from "react-navigation"
import { Home, Feed } from "scenes"
import stores from "stores"

const HomeNavigator = StackNavigator(
  {
    Home: { screen: Home },
    Home2: { screen: Home },
  },
  { 
    headerMode: "none",
    navigationOptions: ({ navigation, navigationOptions }) => {
        return {
          ...navigationOptions,
        }
    }
  },
)

const AppNavigator = StackNavigator(
  {
    Home: { screen: HomeNavigator },
    Feed: { screen: Feed }
  },
  {
    initialRouteName: "Home"
  }
)

export default class App extends React.Component {
  render() {
    return (
      <Provider {...stores} suppressChangedStoreWarning>
        <AppNavigator />
      </Provider>
    )
  }
}
