import axios from '@/lib/axios';
import { useUserState } from '@/state/user-state';
import { useQuery } from '@tanstack/react-query';

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar: string;
}

export interface UserResponse {
  data: User;
}

export default function useUser() {
  const { user } = useUserState();
  const { data, isLoading, isFetched } = useQuery<UserResponse>({
    queryKey: ["user", user?.id],
    queryFn: async () => {
      const response = await axios.get<UserResponse>(`/user/me`);
      return response.data;
    },
    enabled: !!user,
  });

  return {
    user: data?.data,
    isLoading,
    isFetched,
  };
}