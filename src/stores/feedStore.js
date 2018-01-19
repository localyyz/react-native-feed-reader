// feed store holds the state of feeds that's being
// tracked by the application

import { action, observable, extendObservable } from "mobx"

class FeedStore {
  // feeds the user has added
  @observable feeds = []

  // add a new feed
  @action addFeed(feed = {}) {}

  // remove a feed
  @action removeFeed(name = "") {}
}

export default FeedStore
