import { Post, User } from "@/types/User"
import { create, StoreApi, UseBoundStore } from "zustand"

type UserState = {
  user: User
  fetch: (api: string) => Promise<void>
}

const headers = {
  'Content-Type': 'application/json',
  'Access-Control-Request-Method': 'GET',
  'Access-Control-Request-Headers': 'origin, x-requested-with',
}

const api = `https://curiouscat.live/api/v2.1/profile` // https://curiouscat.live/api/v2.1/profile?username=zanfranceschi

const minTimestamp = (user: User) => {
  const [minTimestampPost] = user?.posts?.sort((a, b) => a.post.timestamp - b.post.timestamp);
  const minTimestamp = minTimestampPost.post.timestamp.toString();
  return minTimestamp;
}

const useUser: UseBoundStore<StoreApi<UserState>> = create((set, get) => ({
  user: {} as User,
  fetch: async (username: string) => {
    try {
      const query = new URLSearchParams({
        username,
        [get().user?.posts?.length ? 'max_timestamp' : '']: get().user?.posts?.length ? minTimestamp(get().user) : '',
      });

      const response = await fetch(`${api}?${query}`, {
        headers,
      });

      if (!response.ok || response.status !== 200) {
        throw new Error('Error fetching user');
      }

      const data = await response.json();

      const filterRepeatPosts = data?.posts?.filter(({ post }: Post) => {
        return !get()?.user?.posts?.some(({ post: userPost }: Post) => userPost.id === post.id);
      });

      set({
        user: {
          ...data,
          posts: [...(get()?.user?.posts || []), ...filterRepeatPosts],
        }
      });
    } catch (error) {
      console.error(error);
    }
  }
}))

export { useUser }