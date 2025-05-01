import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { getEntryById } from '@/lib/contentful';
import { ContentfulBlogPost } from '@/components/ContentfulBlogPost';
import Layout from '@/components/Layout';
import Seo from '@/components/Seo';

const ContentfulBlog: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const location = useLocation();

  React.useEffect(() => {
    const fetchPost = async () => {
      try {
        const entry = await getEntryById('blogPage', slug);
        setPost(entry);
      } catch (error) {
        console.error('Error fetching blog post:', error);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchPost();
    }
  }, [slug]);

  if (loading) {
    return <div className="container mx-auto px-4 py-12">Loading...</div>;
  }

  if (!post) {
    return <div className="container mx-auto px-4 py-12">Post not found</div>;
  }

  const { fields } = post;

  return (
    <Layout location={location}>
      <Seo
        title={fields.seoTitle}
        description={fields.seoDescription}
        keywords={fields.seoKeywords}
        url={`/blog/${slug}`}
      />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <ContentfulBlogPost post={post} />
        </div>
      </div>
    </Layout>
  );
};

export default ContentfulBlog;
