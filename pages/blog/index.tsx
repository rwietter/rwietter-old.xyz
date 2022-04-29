import React from 'react';
import { BlogLayout } from 'layouts/blog';
import SEO from 'components/SEO';
import Navbar from 'components/blog-navbar';

const Blog: React.FC = () => (
  <div>
    <SEO
      title="@rwietter"
      content="blog"
      url="https://dev.rwietter.xyz/blog"
      description="Blog about software development, design and software architecture"
      image="https://res.cloudinary.com/ddwnioveu/image/upload/v1651191166/profile/wallhaven-dpo7wm_1366x768_mdztjw.png"
    />
    <BlogLayout>
      <Navbar />
    </BlogLayout>
  </div>
);

export default Blog;
