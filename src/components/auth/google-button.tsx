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
import { jwtDecode } from 'jwt-decode';
import { Button } from '../ui/button';
import { useUserState } from '@/state/user-state';
import { signIn, useSession } from 'next-auth/react';
import { useCallback, useEffect } from 'react';
import { ExtendedProfile } from '@/lib/interfaces';

function _GoogleButton({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { setUser } = useUserState();

  const auth = useCallback(
    async (jwt: string) => {
      const res = await fetch(BASE_API_URL + '/auth/oauth/token', {
        method: 'POST',
        body: JSON.stringify({
          id_token: jwt,
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
    },
    [setUser]
  );

  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      const user = session.user as ExtendedProfile;
      if (!user) return;
      setUser({
        id: user.sub as string,
        email: user.email as string,
        first_name: user.name as string,
        last_name: user.name as string,
      });
    }
  }, [session, setUser]);

  const googleLogin = useGoogleLogin({
    onSuccess: async (codeResponse) => {
      console.log('codeResponse', codeResponse);
      const { access_token } = codeResponse;
      const decoded = jwtDecode(access_token);

      console.log('decoded', decoded);

      await auth(access_token);

      router.replace('/');
      router.refresh();
    },
    include_granted_scopes: true,
    flow: 'implicit',
  });

  const handleLogin = async () => {
    // googleLogin();
    try {
      await signIn('google', { callbackUrl: '/auth/login' });
    } catch (error) {
      // Handle error
      console.error('Google sign in error:', error);
    }
  };

  return (
    <Button variant="secondary" onClick={handleLogin}>
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
