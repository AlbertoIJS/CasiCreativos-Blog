/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Link } from 'gatsby';

import Layout from '@lekoarts/gatsby-theme-minimal-blog/src/components/layout';
import Title from '@lekoarts/gatsby-theme-minimal-blog/src/components/title';
import Listing from '@lekoarts/gatsby-theme-minimal-blog/src/components/listing';
import useMinimalBlogConfig from '@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config';
import replaceSlashes from '@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes';

type PostsProps = {
  posts: {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    description: string;
    timeToRead?: number;
    tags?: {
      name: string;
      slug: string;
    }[];
  }[];
};

const Homepage = ({ posts }: PostsProps) => {
  const { basePath, blogPath } = useMinimalBlogConfig();

  return (
    <Layout>
      <Title text="Últimos Artículos">
        <Link to={replaceSlashes(`/${basePath}/${blogPath}`)}>Ver todos</Link>
      </Title>
      <Listing posts={posts} showTags={false} />
    </Layout>
  );
};

export default Homepage;
