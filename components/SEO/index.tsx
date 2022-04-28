import Head from 'next/head';
import { FC } from 'react';

interface SEOProps {
  title: string;
  description: string;
  url: string;
  content: 'article' | 'website' | 'blog';
  image: string;
}
const SEO: FC<SEOProps> = ({
  title = '', description = '', url = '', content = 'website', image = '',
}) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={url} />
    <meta property="og:type" content={content} />
    <link rel="icon" href="/public/favicon.ico" />
    <meta property="og:image" content={image} />
  </Head>
);

export default SEO;
