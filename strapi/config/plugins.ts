export default () => ({
  'users-permissions': {
    config: {
      jwt: {
        expiresIn: '7d',
      },
      rest: {
        defaultLimit: 100,
        maxLimit: 250,
      },
    },
  },
  seo: {
    enabled: true,
    config: {
      contentTypes: {
        'api::blog-post.blog-post': {
          field: 'seo',
          references: {
            title: 'title',
            description: 'content',
            image: 'image',
            keywords: 'tags',
          },
        },
      },
    },
  },
  'strapi-algolia': {
    enabled: true,
    config: {
      applicationId: process.env.ALGOLIA_APP_ID,
      apiKey: process.env.ALGOLIA_API_KEY,
      debug: true,
      prefix: 'dev_',
      contentTypes: [
        {
          name: 'Blog Post',
          uid: 'api::blog-post.blog-post',
          index: 'blog_posts',
          fields: ['title', 'content', 'slug', 'tags'],
          transform: (data) => {
            return {
              ...data,
              objectID: data.id,
              tags: data.tags?.map(tag => tag.name) || [],
            };
          },
        },
      ],
    },
  },
});
