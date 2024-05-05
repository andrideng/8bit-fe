'use client';

import {
  BASE_API_URL,
  COOKIES_ACCESS_TOKEN,
  COOKIES_REFRESH_TOKEN,
  EXTERNAL_LOGIN_PROVIDER_TYPE,
  GOOGLE_CLIENT_ID,
} from '@/lib/constants';
import { useGoogleLogin } from '@react-oauth/google';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

import { Button } from '../ui/button';
import { useUserState } from '@/state/user-state';

function _GoogleButton({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { setUser } = useUserState();

  const login = useGoogleLogin({
    onSuccess: async (codeResponse) => {
      const { access_token } = codeResponse;

      const res = await fetch(BASE_API_URL + '/api/auth/oauth/token', {
        method: 'POST',
        body: JSON.stringify({
          id_tokel: access_token,
          providerType: EXTERNAL_LOGIN_PROVIDER_TYPE.GOOGLE,
        }),
        // Set the content type to JSON
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const parsedRes = await res.json();
      const {
        data: { accessToken, refreshToken, user },
      } = parsedRes;

      setUser(user);

      Cookies.set(COOKIES_ACCESS_TOKEN, accessToken);
      Cookies.set(COOKIES_REFRESH_TOKEN, refreshToken);
      toast.success('Sign in Successful', {
        duration: 3000,
      });

      router.replace('/');
      router.refresh();
    },
    include_granted_scopes: true,
    flow: 'implicit',
  });

  const handleGoogleLogin = () => {
    login();
  };

  return (
    <Button variant="secondary" onClick={handleGoogleLogin}>
      {children}
    </Button>
  );
}
export default function GoogleButton({ children }: { children: React.ReactNode }) {
  if (!GOOGLE_CLIENT_ID) {
    return null;
  }

  return <_GoogleButton>{children}</_GoogleButton>;
}
