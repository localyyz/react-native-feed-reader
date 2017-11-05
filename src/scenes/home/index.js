import React from "react"

import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

// Home shows collection of user's feeds
class Home extends React.Component {
  static navigationOptions = ({ navigationOptions }) => {
    return {
      ...navigationOptions,
      headerTitle: "Home",
      headerRight: (
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.rightNav}>
            <Text>Add Feed</Text>
          </View>
        </TouchableOpacity>
      )
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>This scene will display user added feeds</Text>
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
