// post model object represents a single post in a feed
import { observable, extendObservable } from "mobx"

class Post {
  // some internal id field
  @observable id
  // title of the post
  @observable title
  // author name
  @observable author
  // short description/content if available
  @observable blurb
  // url link if available
  @observable webUrl

  // time posted
  @observable postedAt

  // if the post is read or not
  @observable isRead = false

  constructor(props) {
    extendObservable(this, props)
  }
}
export default Post
