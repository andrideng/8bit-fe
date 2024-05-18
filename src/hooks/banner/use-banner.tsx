import axios from '@/lib/axios';
import { useQuery } from '@tanstack/react-query';

export interface WalletResponse {
  coin: number;
  point: number;
}

export default function useBanner() {
  const { data, isLoading, isFetched } = useQuery<WalletResponse>({
    queryKey: ['banner'],
    queryFn: async () => {
      const response = await axios.get<WalletResponse>(`/banners`);
      return response.data;
    },
  });

  return {
    banner: data,
    isLoading,
    isFetched,
  };
}
