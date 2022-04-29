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
  lastFm: any;
}

const Home: NextPage<HomeProps> = ({ lastArticles, lastFm }) => (
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
      <AuthorContent lastFm={lastFm} />
      <LastPosts lastArticles={lastArticles} />
      <FooterComponent />
    </Layout>
  </div>
);

const USERNAME = process.env.LASTFM_USERNAME!;
const API_KEY = process.env.LASTFM_API_KEY!;
const API_LAST_FM = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${USERNAME}&api_key=${API_KEY}&format=json&limit=1`;
const fetcher = () => fetch(API_LAST_FM).then((res) => res.json());

export const getStaticProps: GetStaticProps = async () => {
  const data = await apolloClient.query({
    query: LAST_ARTICLES_QUERY,
  });

  const lastFm = await fetcher();

  return {
    props: {
      lastArticles: data.data.articles,
      lastFm,
    },
    revalidate: 300,
  };
};

export default Home;
