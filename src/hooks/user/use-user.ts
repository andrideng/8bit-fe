import axios from '@/lib/axios';
import { useUserState } from '@/state/user-state';
import { useQuery } from '@tanstack/react-query';

export interface UserResponse {
  card: User;
}
export interface User {
  full_name: string;
  card: Card;
}

export interface Card {
  color: string;
  avatar: string;
}

export interface UserResponse {
  data: User;
}

export default function useUser() {
  const { user } = useUserState();
  const { data, isLoading, isFetched, refetch } = useQuery<UserResponse>({
    queryKey: ['user', user?.id],
    queryFn: async () => {
      const response = await axios.get<UserResponse>(`/user/profile`);
      return response.data;
    },
    enabled: !!user,
  });

  return {
    user: data?.card,
    isLoading,
    isFetched,
    refetch
  };
}
