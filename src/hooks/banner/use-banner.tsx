import axios from '@/lib/axios';
import { useQuery } from '@tanstack/react-query';


export interface BannerResponse {
  data: Banner[];
}

export interface Banner {
  id: number
  image: string
  on_click_url: any
  description: string
  is_active: boolean
  active_from: string
  active_to: string
  last_updated_by: number
  created_at: string
  updated_at: string
}


export default function useBanner() {
  const { data, isLoading, isFetched } = useQuery<Banner[]>({
    queryKey: ['banner'],
    queryFn: async () => {
      const response = await axios.get<Banner[]>(`/banner`);
      return response.data;
    },
  });

  return {
    banners: data,
    isLoading,
    isFetched,
  };
}
