'use client';

import { NextUIProvider } from '@nextui-org/system';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { useState } from 'react';
import { SessionProvider } from 'next-auth/react';

export function Providers(props: { children: React.ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 5 * 1000,
          },
        },
      })
  );

  return (
    <NextUIProvider>
      <QueryClientProvider client={queryClient}>
        <SessionProvider>{props.children}</SessionProvider>
        {/* {<ReactQueryDevtools initialIsOpen={false} />} */}
      </QueryClientProvider>
    </NextUIProvider>
  );
}
