import React from "react"

import { StyleSheet, Text, View } from "react-native"

// Feed shows posts from individual feeds
// ordered by newest to oldest
class Feed extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This scene will display contents of a feed</Text>
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
  }
})

export default Feed
