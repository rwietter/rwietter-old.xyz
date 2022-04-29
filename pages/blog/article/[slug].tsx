/* eslint-disable react/prop-types */
/* eslint-disable no-tabs */
import { useRouter } from 'next/router';
import { gql } from '@apollo/react-hooks';
// import ARTICLE_QUERY from 'queries/article/article';
import { useThemeStore } from 'store/switch-theme';
import markdownLight from 'styles/github-markdown-css-light.module.css';
import markdownDark from 'styles/github-markdown-css-dark.module.css';
import { Layout } from 'layouts/content';
import Link from 'next/link';
import { AiOutlineArrowLeft, AiOutlineCalendar } from 'react-icons/ai';
import useReadingTime from 'reading-time';
import { RiTimer2Line } from 'react-icons/ri';
import Prism from 'prismjs';
import { useEffect } from 'react';
import { ArticleFooter } from 'components/article-footer';
import SEO from 'components/SEO';
import * as CSS from 'styles/blog/article/styled';
import apolloClient from 'utils/apollo-client';

require('prismjs/components/prism-typescript');
require('prismjs/components/prism-javascript');
require('prismjs/components/prism-jsx');
require('prismjs/components/prism-tsx');
require('prismjs/components/prism-css');
require('prismjs/components/prism-rust');
require('prismjs/components/prism-bash');
require('prismjs/components/prism-json');

const ArticleItem = ({ data }: any) => {
  const { theme } = useThemeStore() as any;

  useEffect(() => {
    Prism.highlightAll();
  });

  useEffect(() => {
    Prism.highlightAll();
  }, [theme]);

  const router = useRouter() as unknown as {
		query: { slug: string[] | string };
		asPath: string;
	};

  // const { data, loading, error } = useQuery(ARTICLE_QUERY, {
  //   variables: { slug: router.query.slug },
  // });

  if (!data) return <div>Loading...</div>;

  const [articles] = data.articles.data;

  const { text: readTime } = useReadingTime(articles.attributes.content);
  const publishedAt = new Date(
    articles.attributes.publishedAt,
  ).toLocaleDateString('pt-BR');

  return (
    <Layout>
      <SEO
        title={articles.attributes.title}
        description={articles.attributes.description}
        image={articles.attributes.image.data.attributes.url}
        url={`https://dev.rwietter.xyz${router.asPath}`}
        content="article"
      />
      <CSS.ArticleContainer>
        <CSS.ArticleMarkdownContainer>
          <CSS.ArticleHeader>
            <Link href="/blog">
              <CSS.BackToOverview>
                <AiOutlineArrowLeft size={19} />
                <p>Back to overview</p>
              </CSS.BackToOverview>
            </Link>
            <CSS.DateTimeRead>
              <AiOutlineCalendar size={17} />
              {publishedAt}
							&nbsp;|&nbsp;
              <RiTimer2Line size={17} />
              {readTime}
            </CSS.DateTimeRead>
            <CSS.ArticleTitle>{articles.attributes.title}</CSS.ArticleTitle>
            <CSS.ArticleDescription>
              {articles.attributes.description}
            </CSS.ArticleDescription>
          </CSS.ArticleHeader>
          <CSS.ArticleImage
            src={articles.attributes.image.data.attributes.url}
            layout="responsive"
            width={100}
            height={50}
            alt={`Image of the article ${articles.attributes.title}`}
            loading="lazy"
          />

          <CSS.ArticleMarkdown
            className={
							theme === 'light' ? markdownDark['markdown-body'] : markdownLight['markdown-body']
						}
          >
            {articles.attributes.content}
          </CSS.ArticleMarkdown>
        </CSS.ArticleMarkdownContainer>
        {/* <div>
          <p style={{ color: '#FFF' }}>{articles.attributes.author.data.attributes.name}</p>
          <p style={{ color: '#FFF' }}>{articles.attributes.category.data.attributes.name}</p>
        </div> */}
        <ArticleFooter
          author={articles.attributes.author.data.attributes.name}
          name={articles.attributes.title}
          category={articles.attributes.category.data.attributes.name}
        />
      </CSS.ArticleContainer>
    </Layout>
  );
};

export const getServerSideProps = async (props: any) => {
  const { data } = await apolloClient.query({
    query: gql`
  		query Article($slug: String!) {
  			articles(filters: { slug: { eq: $slug } }) {
  				data {
  					attributes {
  						slug
  						title
  						content
  						description
  						author {
  							data {
  								attributes {
  									name
  								}
  							}
  						}
  						publishedAt
  						category {
  							data {
  								attributes {
  									slug
  									name
  								}
  							}
  						}
  						image {
  							data {
  								attributes {
  									url
  								}
  							}
  						}
  					}
  				}
  			}
  		}
  	`,
    variables: { slug: props.query.slug },
  });
  return {
    props: {
      data,
    },
  };
};

export default ArticleItem;
