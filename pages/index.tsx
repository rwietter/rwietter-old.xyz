import { FooterComponent } from 'components/footer';
import { NextSEO } from 'components/SEO';
import { AuthorContent } from 'features/site/author-content';
import { AuthorHeader } from 'features/site/author-header';
import { LastPosts } from 'features/site/last-posts';
import type { NextPage } from 'next';
import { Layout } from 'layouts/content';

const Home: NextPage = () => (
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
      <LastPosts />
      <FooterComponent />
    </Layout>
  </div>
);

export default Home;
