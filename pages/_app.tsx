import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/react-hooks';
import { useEffect, useState } from 'react';
import apolloClient from 'utils/apollo-client';
import { useThemeStore, ThemeStore } from 'store/switch-theme';
import { applyTheme } from 'utils/apply-theme';
import '../styles/syntax-nord.css';

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);
  const { theme } = useThemeStore() as ThemeStore;

  useEffect(() => {
    applyTheme(theme);
    setIsLoading(false);
  }, [theme]);

  return (
    <div>
      {!isLoading && (
        <ApolloProvider client={apolloClient as any}>
          <Component {...pageProps} />
        </ApolloProvider>
      )}
    </div>
  );
}

export default MyApp;
