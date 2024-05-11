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
  console.log(user)
  const { data, isLoading, isFetched } = useQuery<UserResponse>({
    queryKey: ["user", user?.id],
    queryFn: async () => {
      const response = await axios.get<UserResponse>(`/user/profile`);
      return response.data;
    },
    enabled: !!user,
  });

  console.log(data)

  return {
    user: data?.data,
    isLoading,
    isFetched,
  };
}