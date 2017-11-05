/*
 * @flow
 * @providesModule stores
 */

// stores hold states of the application.
// could be some local storage or some mobx store.
//
// mobx stores: https://mobx.js.org/best/store.html
// async storage: https://facebook.github.io/react-native/docs/asyncstorage.html

import FeedStore from "./feedStore"

export default {
  feedStore: new FeedStore()
}
