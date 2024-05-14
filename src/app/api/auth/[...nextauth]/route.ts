import {
  BASE_API_URL,
  COOKIES_ACCESS_TOKEN,
  EXTERNAL_LOGIN_PROVIDER_TYPE,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
} from '@/lib/constants';
import NextAuth, { Account, Profile, User } from 'next-auth';
import { AdapterUser } from 'next-auth/adapters';
import { JWT } from 'next-auth/jwt';
import GoogleProvider from 'next-auth/providers/google';
import { UserAuthData, useUserState } from '@/state/user-state';
import { cookies } from 'next/headers';
import { ExtendedProfile } from '@/lib/interfaces';

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID as string,
      clientSecret: GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async jwt(params: {
      token: JWT;
      user: User | AdapterUser;
      account: Account | null;
      profile?: Profile;
      trigger?: 'signIn' | 'signUp' | 'update';
      isNewUser?: boolean;
      session?: any;
    }): Promise<JWT> {
      try {
        if (params.account?.provider === 'google' && params.profile) {
          const { id_token } = params.account;
          const res = await fetch(BASE_API_URL + '/auth/oauth/token', {
            method: 'POST',
            body: JSON.stringify({
              id_token: id_token,
              provider: EXTERNAL_LOGIN_PROVIDER_TYPE.GOOGLE,
            }),
            // Set the content type to JSON
            headers: {
              'Content-Type': 'application/json',
            },
          });

          if (!res.ok) {
            throw new Error('Failed to fetch token from backend');
          }

          const parsedRes = await res.json();
          const { token } = parsedRes;

          if (!token) {
            throw new Error('Access token, refresh token, or user data missing from response');
          }

          // Set cookies
          const cookieStore = cookies();
          cookieStore.set(COOKIES_ACCESS_TOKEN, token);

          // Update user state
          const user = params.profile as ExtendedProfile;
          return {
            ...params.token,
            accessToken: token,
            user: {
              id: user.sub as string,
              name: user.name as string,
              given_name: user.given_name as string,
              family_name: user.family_name as string,
              email: user.email as string,
              image: user.image as string,
            },
          };
        } else {
          // Return the token without processing
          return params.token;
        }
      } catch (error) {
        console.error('Error during JWT processing:', error);
        // If an error occurs, return the token without processing
        return params.token;
      }
    },
  },
});

export { handler as GET, handler as POST };
