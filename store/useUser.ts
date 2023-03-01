import { Post, User } from "@/types/User"
import { toast } from "react-toastify"
import { create, StoreApi, UseBoundStore } from "zustand"

type UserState = {
  user: User
  loading: boolean
  setUser: (user: User) => void
  setLoading: (loading: boolean) => void
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
  loading: false,
  setUser: (user: User) => set({ user }),
  setLoading: (loading: boolean) => set({ loading }),
  fetch: async (username: string) => {
    // if user change reset user state
    const user = get()?.user;
    if (user?.username !== username) {
      set({
        user: {} as User,
      });
    }

    try {
      set({ loading: true });
      const query = new URLSearchParams({
        username,
        [get().user?.posts?.length ? 'max_timestamp' : '']: get().user?.posts?.length ? minTimestamp(get().user) : '',
      });

      const response = await fetch(`${api}?${query}`, {
        headers,
      });


      if (!response.ok || response.status !== 200) {
        throw new Error();
      }

      const data = await response.json();

      if(data?.errorCode) {
        throw new Error(data.errorCode);
      }

      const filterRepeatedPosts = data?.posts?.filter(({ post }: Post) => {
        return !get()?.user?.posts?.some(({ post: userPost }: Post) => userPost.id === post.id);
      });

      if (filterRepeatedPosts?.length === 0) {
        throw new Error('there_are_no_more_posts');
      }

      set({
        user: {
          ...data,
          posts: [...(get()?.user?.posts || []), ...filterRepeatedPosts],
        }
      });
    } catch (err) {
      const error = err as Error;
      switch (error?.message) {
        case 'profile_does_not_exist':
          toast.error('User not found. Enter a valid username', {
            toastId: 'filter-repeated-posts',
            position: 'top-left',
          });
          break;
        case 'there_are_no_more_posts':
          toast.error('There are no more posts!', {
            toastId: 'there_are_no_more_posts',
            position: 'top-left',
          });
          break;
        default:
          toast.error('Something went wrong. Try again later', {
            toastId: 'something-went-wrong',
            position: 'top-left',
          });
      }
    } finally {
      set({ loading: false });
    }
  }
}))

export { useUser }