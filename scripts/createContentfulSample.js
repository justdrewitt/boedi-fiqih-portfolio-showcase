// Script untuk membuat sample blog post di Contentful
import contentfulManagement from 'contentful-management';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

// Setup path untuk .env.local
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const envPath = resolve(__dirname, '../.env.local');

// Load environment variables
dotenv.config({ path: envPath });

// Contentful Management API credentials
const CONTENTFUL_SPACE_ID = process.env.VITE_CONTENTFUL_SPACE_ID;
const CONTENTFUL_MANAGEMENT_TOKEN = process.env.CONTENTFUL_MANAGEMENT_TOKEN;

console.log('Space ID:', CONTENTFUL_SPACE_ID);
console.log('Management Token:', CONTENTFUL_MANAGEMENT_TOKEN ? 'Token is set' : 'Token is not set');

// Buat client untuk Contentful Management API
const client = contentfulManagement.createClient({
  accessToken: CONTENTFUL_MANAGEMENT_TOKEN
});

// Sample blog post content
const sampleBlogPosts = [
  {
    title: 'Advanced Web Development Techniques',
    slug: 'advanced-web-dev',
    image: {
      title: 'Advanced Web Development',
      description: 'Image for Advanced Web Development article',
      file: {
        url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80',
        fileName: 'advanced-web-dev.jpg',
        contentType: 'image/jpeg'
      }
    },
    publishDate: new Date().toISOString(),
    readingTime: 10,
    tags: ['Web Development', 'JavaScript', 'React', 'Performance'],
    content: {
      nodeType: 'document',
      data: {},
      content: [
        {
          nodeType: 'heading-2',
          data: {},
          content: [
            {
              nodeType: 'text',
              value: 'Advanced Web Development Techniques',
              marks: [],
              data: {}
            }
          ]
        },
        {
          nodeType: 'paragraph',
          data: {},
          content: [
            {
              nodeType: 'text',
              value: 'Modern web development requires a deep understanding of various technologies and best practices. In this article, we\'ll explore some advanced techniques that can help you build better web applications.',
              marks: [],
              data: {}
            }
          ]
        },
        {
          nodeType: 'heading-3',
          data: {},
          content: [
            {
              nodeType: 'text',
              value: 'Performance Optimization',
              marks: [],
              data: {}
            }
          ]
        },
        {
          nodeType: 'paragraph',
          data: {},
          content: [
            {
              nodeType: 'text',
              value: 'Performance is crucial for providing a good user experience. Here are some techniques to optimize your web application:',
              marks: [],
              data: {}
            }
          ]
        },
        {
          nodeType: 'unordered-list',
          data: {},
          content: [
            {
              nodeType: 'list-item',
              data: {},
              content: [
                {
                  nodeType: 'paragraph',
                  data: {},
                  content: [
                    {
                      nodeType: 'text',
                      value: 'Lazy loading of images and components',
                      marks: [{ type: 'bold' }],
                      data: {}
                    }
                  ]
                }
              ]
            },
            {
              nodeType: 'list-item',
              data: {},
              content: [
                {
                  nodeType: 'paragraph',
                  data: {},
                  content: [
                    {
                      nodeType: 'text',
                      value: 'Code splitting to reduce initial bundle size',
                      marks: [{ type: 'bold' }],
                      data: {}
                    }
                  ]
                }
              ]
            },
            {
              nodeType: 'list-item',
              data: {},
              content: [
                {
                  nodeType: 'paragraph',
                  data: {},
                  content: [
                    {
                      nodeType: 'text',
                      value: 'Optimizing assets with proper compression',
                      marks: [{ type: 'bold' }],
                      data: {}
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          nodeType: 'paragraph',
          data: {},
          content: [
            {
              nodeType: 'text',
              value: 'Here\'s an example of implementing lazy loading in React:',
              marks: [],
              data: {}
            },
            {
              nodeType: 'text',
              value: 'import React, { lazy, Suspense } from \'react\';\n\nconst LazyComponent = lazy(() => import(\'./LazyComponent\'));\n\nfunction App() {\n  return (\n    <div>\n      <Suspense fallback={<div>Loading...</div>}>\n        <LazyComponent />\n      </Suspense>\n    </div>\n  );\n}',
              marks: [],
              data: {}
            }
          ]
        },
        {
          nodeType: 'heading-3',
          data: {},
          content: [
            {
              nodeType: 'text',
              value: 'Modern JavaScript Features',
              marks: [],
              data: {}
            }
          ]
        },
        {
          nodeType: 'paragraph',
          data: {},
          content: [
            {
              nodeType: 'text',
              value: 'Leveraging modern JavaScript features can make your code more concise and readable. Some useful features include:',
              marks: [],
              data: {}
            }
          ]
        },
        {
          nodeType: 'unordered-list',
          data: {},
          content: [
            {
              nodeType: 'list-item',
              data: {},
              content: [
                {
                  nodeType: 'paragraph',
                  data: {},
                  content: [
                    {
                      nodeType: 'text',
                      value: 'Destructuring assignments',
                      marks: [],
                      data: {}
                    }
                  ]
                }
              ]
            },
            {
              nodeType: 'list-item',
              data: {},
              content: [
                {
                  nodeType: 'paragraph',
                  data: {},
                  content: [
                    {
                      nodeType: 'text',
                      value: 'Spread and rest operators',
                      marks: [],
                      data: {}
                    }
                  ]
                }
              ]
            },
            {
              nodeType: 'list-item',
              data: {},
              content: [
                {
                  nodeType: 'paragraph',
                  data: {},
                  content: [
                    {
                      nodeType: 'text',
                      value: 'Optional chaining and nullish coalescing',
                      marks: [],
                      data: {}
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    seoTitle: 'Advanced Web Development Techniques - Master Modern Web Development',
    seoDescription: 'Learn advanced web development techniques including performance optimization, modern JavaScript features, and best practices for building better web applications.',
    seoKeywords: ['Web Development', 'JavaScript', 'Performance Optimization', 'React', 'Modern Web']
  },
  {
    title: 'DevOps: Panduan Lengkap untuk Meningkatkan Efisiensi Pengembangan Perangkat Lunak',
    slug: 'devops-guide',
    image: {
      title: 'DevOps Guide',
      description: 'Image for DevOps article',
      file: {
        url: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80',
        fileName: 'devops-guide.jpg',
        contentType: 'image/jpeg'
      }
    },
    publishDate: new Date().toISOString(),
    readingTime: 15,
    tags: ['DevOps', 'CI/CD', 'Automation', 'Cloud'],
    content: {
      nodeType: 'document',
      data: {},
      content: [
        {
          nodeType: 'heading-2',
          data: {},
          content: [
            {
              nodeType: 'text',
              value: 'DevOps: Panduan Lengkap',
              marks: [],
              data: {}
            }
          ]
        },
        {
          nodeType: 'paragraph',
          data: {},
          content: [
            {
              nodeType: 'text',
              value: 'DevOps adalah pendekatan pengembangan perangkat lunak yang menggabungkan praktik pengembangan (Dev) dan operasi (Ops) untuk mempersingkat siklus hidup pengembangan dan menyediakan pengiriman berkelanjutan dengan kualitas perangkat lunak yang tinggi.',
              marks: [],
              data: {}
            }
          ]
        },
        {
          nodeType: 'heading-3',
          data: {},
          content: [
            {
              nodeType: 'text',
              value: 'Prinsip Utama DevOps',
              marks: [],
              data: {}
            }
          ]
        },
        {
          nodeType: 'unordered-list',
          data: {},
          content: [
            {
              nodeType: 'list-item',
              data: {},
              content: [
                {
                  nodeType: 'paragraph',
                  data: {},
                  content: [
                    {
                      nodeType: 'text',
                      value: 'Integrasi Berkelanjutan (CI)',
                      marks: [{ type: 'bold' }],
                      data: {}
                    }
                  ]
                }
              ]
            },
            {
              nodeType: 'list-item',
              data: {},
              content: [
                {
                  nodeType: 'paragraph',
                  data: {},
                  content: [
                    {
                      nodeType: 'text',
                      value: 'Pengiriman Berkelanjutan (CD)',
                      marks: [{ type: 'bold' }],
                      data: {}
                    }
                  ]
                }
              ]
            },
            {
              nodeType: 'list-item',
              data: {},
              content: [
                {
                  nodeType: 'paragraph',
                  data: {},
                  content: [
                    {
                      nodeType: 'text',
                      value: 'Infrastruktur sebagai Kode (IaC)',
                      marks: [{ type: 'bold' }],
                      data: {}
                    }
                  ]
                }
              ]
            },
            {
              nodeType: 'list-item',
              data: {},
              content: [
                {
                  nodeType: 'paragraph',
                  data: {},
                  content: [
                    {
                      nodeType: 'text',
                      value: 'Monitoring dan Logging',
                      marks: [{ type: 'bold' }],
                      data: {}
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          nodeType: 'paragraph',
          data: {},
          content: [
            {
              nodeType: 'text',
              value: 'Implementasi CI/CD pipeline adalah langkah penting dalam praktik DevOps. Berikut adalah contoh konfigurasi dasar untuk GitHub Actions:',
              marks: [],
              data: {}
            },
            {
              nodeType: 'text',
              value: 'name: CI/CD Pipeline\n\non:\n  push:\n    branches: [ main ]\n  pull_request:\n    branches: [ main ]\n\njobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n    - uses: actions/checkout@v2\n    - name: Set up Node.js\n      uses: actions/setup-node@v2\n      with:\n        node-version: \'14\'\n    - name: Install dependencies\n      run: npm ci\n    - name: Run tests\n      run: npm test\n    - name: Build\n      run: npm run build',
              marks: [],
              data: {}
            }
          ]
        },
        {
          nodeType: 'heading-3',
          data: {},
          content: [
            {
              nodeType: 'text',
              value: 'Manfaat DevOps',
              marks: [],
              data: {}
            }
          ]
        },
        {
          nodeType: 'paragraph',
          data: {},
          content: [
            {
              nodeType: 'text',
              value: 'Penerapan praktik DevOps dapat memberikan banyak manfaat bagi organisasi, termasuk:',
              marks: [],
              data: {}
            }
          ]
        },
        {
          nodeType: 'unordered-list',
          data: {},
          content: [
            {
              nodeType: 'list-item',
              data: {},
              content: [
                {
                  nodeType: 'paragraph',
                  data: {},
                  content: [
                    {
                      nodeType: 'text',
                      value: 'Pengiriman perangkat lunak yang lebih cepat',
                      marks: [],
                      data: {}
                    }
                  ]
                }
              ]
            },
            {
              nodeType: 'list-item',
              data: {},
              content: [
                {
                  nodeType: 'paragraph',
                  data: {},
                  content: [
                    {
                      nodeType: 'text',
                      value: 'Peningkatan kualitas dan keandalan',
                      marks: [],
                      data: {}
                    }
                  ]
                }
              ]
            },
            {
              nodeType: 'list-item',
              data: {},
              content: [
                {
                  nodeType: 'paragraph',
                  data: {},
                  content: [
                    {
                      nodeType: 'text',
                      value: 'Kolaborasi tim yang lebih baik',
                      marks: [],
                      data: {}
                    }
                  ]
                }
              ]
            },
            {
              nodeType: 'list-item',
              data: {},
              content: [
                {
                  nodeType: 'paragraph',
                  data: {},
                  content: [
                    {
                      nodeType: 'text',
                      value: 'Efisiensi operasional yang lebih tinggi',
                      marks: [],
                      data: {}
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    seoTitle: 'DevOps: Panduan Lengkap untuk Meningkatkan Efisiensi Pengembangan Perangkat Lunak',
    seoDescription: 'Pelajari praktik terbaik DevOps untuk meningkatkan efisiensi pengembangan perangkat lunak, termasuk CI/CD, Infrastructure as Code, dan monitoring.',
    seoKeywords: ['DevOps', 'CI/CD', 'Automation', 'Infrastructure as Code', 'Monitoring']
  }
];

// Fungsi untuk membuat asset di Contentful
async function createAsset(space, environment, assetData) {
  try {
    // Buat asset
    const asset = await environment.createAsset({
      fields: {
        title: {
          'en-US': assetData.title
        },
        description: {
          'en-US': assetData.description
        },
        file: {
          'en-US': {
            contentType: assetData.file.contentType,
            fileName: assetData.file.fileName,
            upload: assetData.file.url
          }
        }
      }
    });

    // Process dan publish asset
    const processedAsset = await asset.processForAllLocales();
    const publishedAsset = await processedAsset.publish();
    
    console.log(`Asset created and published: ${publishedAsset.fields.title['en-US']}`);
    return publishedAsset;
  } catch (error) {
    console.error('Error creating asset:', error);
    // Jika asset sudah ada, coba ambil yang sudah ada
    try {
      const assets = await environment.getAssets();
      const existingAsset = assets.items.find(a => 
        a.fields.title && 
        a.fields.title['en-US'] === assetData.title
      );
      
      if (existingAsset) {
        console.log(`Using existing asset: ${existingAsset.fields.title['en-US']}`);
        return existingAsset;
      }
    } catch (err) {
      console.error('Error finding existing asset:', err);
    }
    return null;
  }
}

// Fungsi untuk membuat blog post di Contentful
async function createBlogPost(space, environment, postData, asset) {
  try {
    // Get content type to check available fields
    const contentType = await environment.getContentType('blogPage');
    const availableFields = contentType.fields.map(field => field.id);
    
    console.log('Available fields in blogPage content type:', availableFields);
    
    // Cek apakah entry dengan slug yang sama sudah ada
    const entries = await environment.getEntries({
      content_type: 'blogPage',
      'fields.slug': postData.slug
    });

    // Prepare fields object with only fields that exist in the content type
    const entryFields = {};
    
    if (availableFields.includes('title')) {
      entryFields.title = { 'en-US': postData.title };
    }
    
    if (availableFields.includes('slug')) {
      entryFields.slug = { 'en-US': postData.slug };
    }
    
    if (availableFields.includes('image') && asset) {
      entryFields.image = {
        'en-US': {
          sys: {
            type: 'Link',
            linkType: 'Asset',
            id: asset.sys.id
          }
        }
      };
    }
    
    if (availableFields.includes('publishDate')) {
      entryFields.publishDate = { 'en-US': postData.publishDate };
    }
    
    if (availableFields.includes('readingTime')) {
      entryFields.readingTime = { 'en-US': postData.readingTime };
    }
    
    if (availableFields.includes('tags')) {
      // For Symbol type, we need to use a single string instead of an array
      // Check if the field is an array type or a Symbol type
      const tagsField = contentType.fields.find(field => field.id === 'tags');
      if (tagsField && tagsField.type === 'Array') {
        entryFields.tags = { 'en-US': postData.tags };
      } else {
        // If it's a Symbol type, join the array into a comma-separated string
        entryFields.tags = { 'en-US': postData.tags.join(', ') };
      }
    }
    
    if (availableFields.includes('content') || availableFields.includes('body')) {
      const contentFieldName = availableFields.includes('content') ? 'content' : 'body';
      entryFields[contentFieldName] = { 'en-US': postData.content };
    }
    
    if (availableFields.includes('seoTitle')) {
      entryFields.seoTitle = { 'en-US': postData.seoTitle };
    }
    
    if (availableFields.includes('seoDescription')) {
      entryFields.seoDescription = { 'en-US': postData.seoDescription };
    }
    
    if (availableFields.includes('seoKeywords')) {
      // For Symbol type, we need to use a single string instead of an array
      const seoKeywordsField = contentType.fields.find(field => field.id === 'seoKeywords');
      if (seoKeywordsField && seoKeywordsField.type === 'Array') {
        entryFields.seoKeywords = { 'en-US': postData.seoKeywords };
      } else {
        // If it's a Symbol type, join the array into a comma-separated string
        entryFields.seoKeywords = { 'en-US': postData.seoKeywords.join(', ') };
      }
    }

    let entry;
    
    if (entries.items.length > 0) {
      // Update entry yang sudah ada
      entry = entries.items[0];
      entry.fields = entryFields;
      
      entry = await entry.update();
      console.log(`Entry updated: ${entry.fields.title ? entry.fields.title['en-US'] : 'No title'}`);
    } else {
      // Buat entry baru
      entry = await environment.createEntry('blogPage', {
        fields: entryFields
      });
      
      console.log(`Entry created: ${entry.fields.title ? entry.fields.title['en-US'] : 'No title'}`);
    }
    
    // Publish entry
    const publishedEntry = await entry.publish();
    console.log(`Entry published: ${publishedEntry.fields.title ? publishedEntry.fields.title['en-US'] : 'No title'}`);
    
    return publishedEntry;
  } catch (error) {
    console.error('Error creating blog post:', error);
    return null;
  }
}

// Fungsi utama
async function main() {
  try {
    console.log('Starting to create sample blog posts in Contentful...');
    console.log(`Using Space ID: ${CONTENTFUL_SPACE_ID}`);
    
    // Get space
    const space = await client.getSpace(CONTENTFUL_SPACE_ID);
    
    // Get environment (default: 'master')
    const environment = await space.getEnvironment('master');
    
    // Loop through sample blog posts
    for (const postData of sampleBlogPosts) {
      console.log(`Processing blog post: ${postData.title}`);
      
      // Create asset for image
      const asset = await createAsset(space, environment, postData.image);
      
      if (asset) {
        // Create blog post
        await createBlogPost(space, environment, postData, asset);
      }
    }
    
    console.log('All sample blog posts created successfully!');
  } catch (error) {
    console.error('Error in main function:', error);
  }
}

// Run the script
main();
