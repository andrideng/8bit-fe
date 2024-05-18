import axios from '@/lib/axios';
import { useUserState } from '@/state/user-state';
import { useQuery } from '@tanstack/react-query';

export interface TransactionResponse {
  coin: number;
  point: number;
}

export default function useTransaction() {
  const { user } = useUserState();
  const { data, isLoading, isFetched } = useQuery<TransactionResponse>({
    queryKey: ['transaction', user?.id],
    queryFn: async () => {
      const response = await axios.get<TransactionResponse>(`/user/transactions`);
      return response.data;
    },
    enabled: !!user,
  });

  console.log(data);

  return {
    transaction: data,
    isLoading,
    isFetched,
  };
}
