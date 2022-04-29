/* eslint-disable react/require-default-props */
import Head from 'next/head';
import { FC } from 'react';

interface SEOProps {
  title: string;
  description: string;
  url: string;
  content: 'article' | 'website' | 'blog';
  image: string;
  author?: string;
}
const SEO: FC<SEOProps> = ({
  title = '', description = '', url = '', content = 'website', image = '', author = '@rwietter',
}) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta httpEquiv="content-language" content="pt-BR" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={url} />
    <meta property="og:type" content={content} />
    <link rel="icon" href="/favicon.ico" />
    <meta property="og:image" content={image} />
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:image:source" content={image} />
    <meta property="twitter:creator" content={author} />
    <meta property="twitter:title" content={title} />
    <meta property="twitter:description" content={description} />
  </Head>
);

export default SEO;
