import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/react-hooks';
import { useEffect, useState } from 'react';
import apolloClient from 'utils/apollo-client';
import { useThemeStore, ThemeStore } from 'store/switch-theme';
import { applyTheme } from 'utils/apply-theme';
import '../styles/dracula-prism.css';
import Prism from 'prismjs';

require('prismjs/components/prism-typescript');
require('prismjs/components/prism-javascript');
require('prismjs/components/prism-jsx');
require('prismjs/components/prism-tsx');
require('prismjs/components/prism-css');
require('prismjs/components/prism-rust');
require('prismjs/components/prism-bash');
require('prismjs/components/prism-json');

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);
  const { theme } = useThemeStore() as ThemeStore;

  useEffect(() => {
    applyTheme(theme);
    setIsLoading(false);
  }, [theme]);

  useEffect(() => {
    Prism.highlightAll();
  });

  useEffect(() => {
    Prism.highlightAll();
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
