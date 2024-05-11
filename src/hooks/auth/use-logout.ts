import { COOKIES_ACCESS_TOKEN, COOKIES_REFRESH_TOKEN } from "@/lib/constants";
import Cookies from "js-cookie";
import { useCallback } from "react";
import { toast } from "sonner";

export default function useSignOut() {
  return useCallback(async () => {
    Cookies.remove(COOKIES_ACCESS_TOKEN);
    Cookies.remove(COOKIES_REFRESH_TOKEN);
    window.location.reload();
    toast.info("You have signed Out.", {
      duration: 3000,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
