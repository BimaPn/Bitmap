const notificationDummy ={
  id: `${Date.now()}-${Math.floor(Math.random())}`,
  unread: false,
  createdAt: "2d"
}
const notificationDummyUnread ={
  id: `${Date.now()}-${Math.floor(Math.random())}`,
  unread: true,
  createdAt: "2d"
}

export const notificationDummies = [
  notificationDummyUnread,
  notificationDummyUnread,
  notificationDummy,
  notificationDummy,
  notificationDummy,
  notificationDummy,
]
