/* eslint-disable react/prop-types */
/* eslint-disable react/no-unused-prop-types */
import { FooterComponent } from 'components/footer';
import { NextSEO } from 'components/SEO';
import { AuthorContent } from 'features/site/author-content';
import { AuthorHeader } from 'features/site/author-header';
import { LastPosts } from 'features/site/last-posts';
import type { GetStaticProps, NextPage } from 'next';
import { Layout } from 'layouts/content';
import apolloClient from 'utils/apollo-client';
import { LAST_ARTICLES_QUERY } from 'queries/articles/articles';
import { LastArticles } from 'queries/article/article';

interface HomeProps {
  lastArticles: LastArticles;
}

const Home: NextPage<HomeProps> = ({ lastArticles }) => (
  <div>
    <NextSEO
      title="@rwietter"
      content="website"
      url="https://dev.rwietter.xyz"
      description="Software developer, passionate about technology, design and software architectures"
      image="https://res.cloudinary.com/ddwnioveu/image/upload/v1651191166/profile/wallhaven-dpo7wm_1366x768_mdztjw.png"
    />
    <Layout>
      <AuthorHeader />
      <AuthorContent />
      <LastPosts lastArticles={lastArticles} />
      <FooterComponent />
    </Layout>
  </div>
);

interface GetStaticTypes {
  props: {
    lastArticles: LastArticles;
  }
}

export const getStaticProps: GetStaticProps = async (): Promise<GetStaticTypes> => {
  const data = await apolloClient.query({
    query: LAST_ARTICLES_QUERY,
  });
  return {
    props: {
      lastArticles: data.data.articles,
    },
  };
};

export default Home;
