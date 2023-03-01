export interface User {
  id: number
  verified: boolean
  username: string
  twitterid: string
  facebookid: boolean
  facebooklink: boolean
  answers: number
  askboxtext: any
  avatar: string
  banner: string
  following: number
  follows_you: boolean
  is_followed_by_me: boolean
  is_following_me: boolean
  stickers: UserStickers
  created_at: number
  status_emoji: any
  last_online: any
  followstatus: boolean
  userData: UserData
  lang: string
  followers: number
  following_count: number
  followers_count: number
  posts: Post[]
}

export interface UserStickers {
  name: string
}

export interface UserData {
  id: number
  verified: boolean
  username: string
  twitterid: string
  facebookid: boolean
  facebooklink: boolean
  answers: number
  askboxtext: any
  avatar: string
  banner: string
  following: boolean
  follows_you: boolean
  is_followed_by_me: boolean
  is_following_me: boolean
  stickers: Sticker
  created_at: number
  status_emoji: any
  last_online: any
}

export interface Sticker {
  name: string
}

export interface Post {
  type: string
  post: Reply
}

export interface Reply {
  id: number
  likes: number
  timestamp: number
  seconds_elapsed: number
  comment: string
  reply: string
  media: any
  senderData: SenderData
  addresseeData: AddresseeData
}

export interface SenderData {
  id: boolean
  avatar: string
}

export interface AddresseeData {
  id: number
  verified: boolean
  username: string
  twitterid: string
  facebookid: boolean
  facebooklink: boolean
  answers: number
  askboxtext: any
  avatar: string
  banner: string
  following: boolean
  follows_you: boolean
  is_followed_by_me: boolean
  is_following_me: boolean
  stickers: StickersAddresseData
  created_at: number
  status_emoji: any
  last_online: any
}

export interface StickersAddresseData {
  name: string
}
