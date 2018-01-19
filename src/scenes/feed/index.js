import React from "react"
import { StyleSheet, Text, View } from "react-native"

import { observer, inject } from "mobx-react"

// Feed shows posts from individual feeds
// ordered by newest to oldest
//
// inject the "feedStore" here, it will show up in props
// on the component. you can invoke "actions" on the store
// via:
// this.props.feedStore.addFeed(...)
@inject("feedStore")
@observer
class Feed extends React.Component {
  render() {
    // TODO: textInput -> add a new feed
    // TODO: some kind of Touchable* (button) to add the feed
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>Render a form here to save some feed to list on home screen</Text>
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
