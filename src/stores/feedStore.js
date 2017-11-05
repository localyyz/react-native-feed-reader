// feed store holds the state of feeds that's being
// tracked by the application

import { action, observable, extendObservable } from "mobx"

class FeedStore {
  @observable feeds = []

  // add a new feed
  @action addFeed(url = "") {}

  // remove a feed
  @action removeFeed(url = "") {}
}

export default FeedStore
