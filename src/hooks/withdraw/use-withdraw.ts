import axios from '@/lib/axios';
import { useUserState } from '@/state/user-state';
import { useQuery } from '@tanstack/react-query';

export interface TransactionResponse {
  coin: number;
  point: number;
}

export default function useWithdraw() {
  const { user } = useUserState();
  const { data, isLoading, isFetched } = useQuery<TransactionResponse>({
    queryKey: ['withdraw', user?.email],
    queryFn: async () => {
      const response = await axios.get<TransactionResponse>(`/v1/wallet?identifier=${user?.email}`);
      return response.data;
    },
    enabled: !!user,
  });

  console.log(data);

  return {
    data: data,
    isLoading,
    isFetched,
  };
}