import React from "react"

import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { observer, inject } from "mobx-react"

// Home shows collection of user's feeds
@inject("feedStore")
@observer
class Home extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    return {
      ...navigationOptions,
      headerTitle: "Home",
      headerRight: (
        <TouchableOpacity onPress={() => navigation.navigate("Feed") }>
          <View style={styles.rightNav}>
            <Text>Add Feed</Text>
          </View>
        </TouchableOpacity>
      )
    }
  }

  render() {
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <Text>This scene will display user added feeds</Text>
        <TouchableOpacity onPress={ () => navigation.navigate("Feed") } >
          <View>
            <Text>Go to the feed</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },

  rightNav: {
    marginRight: 10
  }
})

export default Home
