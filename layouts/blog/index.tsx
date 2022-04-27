import React, { ReactNode } from 'react';
import { Articles } from 'components/articles';
import Query from 'components/query';
import { ARTICLES_QUERY } from 'queries/articles/articles';
import FadeIn from 'react-fade-in';
import { MenuBar } from 'components/menu-bar';
import { Sidebar } from 'features/site/sidebar';
import { BlogContainerPosts, LayoutCSS } from './styles';

interface LayoutProps {
  children: ReactNode
}

const BlogLayout = ({ children }: LayoutProps) => (
  <BlogContainerPosts>
    <Sidebar />
    <LayoutCSS>
      <FadeIn>
        {children}
        <Query query={ARTICLES_QUERY}>
          {({ data: { articles } }: any) => <Articles articles={articles.data} />}
        </Query>
      </FadeIn>
    </LayoutCSS>
    <MenuBar />
  </BlogContainerPosts>
);

export { BlogLayout };
