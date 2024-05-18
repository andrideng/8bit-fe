import axios from '@/lib/axios';
import { useUserState } from '@/state/user-state';
import { useQuery } from '@tanstack/react-query';

export interface WalletResponse {
  coin: number;
  point: number;
}

export default function useWallet() {
  const { user } = useUserState();
  const { data, isLoading, isFetched } = useQuery<WalletResponse>({
    queryKey: ['wallet', user?.id],
    queryFn: async () => {
      const response = await axios.get<WalletResponse>(`/user/wallet`);
      return response.data;
    },
    enabled: !!user,
  });

  return {
    wallet: data,
    isLoading,
    isFetched,
  };
}
