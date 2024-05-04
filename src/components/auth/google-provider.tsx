'use client';

import { GOOGLE_CLIENT_ID } from '@/lib/constants';
import { GoogleOAuthProvider } from '@react-oauth/google';

export default function GoogleProvider({ children }: { children: React.ReactNode }) {
  if (!GOOGLE_CLIENT_ID) {
    return <>{children}</>;
  }

  return <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>{children}</GoogleOAuthProvider>;
}
