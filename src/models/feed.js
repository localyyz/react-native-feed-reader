// feed model object represents a rss feed
import { action, observable, extendObservable } from "mobx"

class Feed {
  // some internal id field
  @observable id
  // name of the feed
  @observable name
  // description of the feed
  @observable description
  // the feed url
  @observable webUrl

  // timestamp of the last time
  // this feed was viewed
  @observable lastViewedAt
  // timestamp of the last time
  // this feed as updated
  @observable lastUpdatedAt

  // count of number of items
  // unread in this feed
  @observable unreadCount

  // parsed list of posts
  @observable posts = []

  constructor(props) {
    extendObservable(this, props)
  }

  // parseFeedUrl takes a given feed url and
  // returns related metadata
  //
  // use some external lib?
  // https://github.com/danmactough/node-feedparser
  @action parseFeedUrl(url = "") {}
}
export default Feed
