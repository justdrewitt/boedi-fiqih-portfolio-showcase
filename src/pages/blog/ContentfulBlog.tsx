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

  console.log('Received slug:', slug);

  React.useEffect(() => {
    console.log('Fetching blog post with slug:', slug);
    
    const fetchPost = async () => {
      try {
        console.log('Attempting to fetch from Contentful...');
        const entry = await getEntryById('blogPage', slug);
        console.log('Successfully fetched entry:', {
          title: entry.fields.title,
          slug: entry.fields.slug
        });
        setPost(entry);
      } catch (error) {
        console.error('Error fetching blog post:', error);
        if (error instanceof Error) {
          console.error('Error details:', {
            message: error.message,
            stack: error.stack
          });
        }
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
  
  // Ensure SEO keywords is always an array
  const seoKeywords = Array.isArray(fields.seoKeywords) 
    ? fields.seoKeywords 
    : fields.seoKeywords 
      ? [fields.seoKeywords] 
      : ['React', 'JavaScript', 'Web Development'];

  return (
    <Layout location={location}>
      <Seo
        title={fields.seoTitle || fields.title || 'Blog Post'}
        description={fields.seoDescription || 'Blog post from Boedi Fiqih'}
        keywords={seoKeywords}
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
