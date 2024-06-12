import axios from '@/lib/axios';
import { useUserState } from '@/state/user-state';
import { useQuery } from '@tanstack/react-query';

export interface MerchandiseItem {
  id: number
  image: string
  name: string
  description: string
  is_active: boolean
  points: number
  created_at: string
  updated_at: string
  is_wishlist: boolean
}

export type MerchandiseResponse = MerchandiseItem[];

export default function useMerchandise() {
  const { user } = useUserState();
  const { data, isLoading, isFetched } = useQuery<MerchandiseResponse>({
    queryKey: ['merchandise', user?.id],
    queryFn: async () => {
      const response = await axios.get<MerchandiseResponse>(`/merchandise`);
      return response.data;
    },
    enabled: !!user,
  });

  return {
    data: data,
    isLoading,
    isFetched,
  };
}
