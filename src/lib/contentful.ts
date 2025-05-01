import { createClient } from 'contentful';
import { AxiosError } from 'axios';

const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
  environment: 'master',
  host: 'cdn.contentful.com'
});

export const getContentfulClient = () => client;

export const getEntries = async (contentType: string) => {
  try {
    console.log('Attempting to connect to Contentful...');
    console.log('Space ID:', import.meta.env.VITE_CONTENTFUL_SPACE_ID);
    console.log('Access Token:', import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN?.substring(0, 10) + '...');
    console.log('Content Type:', contentType);
    
    const response = await client.getEntries({
      content_type: contentType,
      limit: 100,
      include: 10,
    });
    console.log('Successfully fetched entries:', response.items.length);
    console.log('First entry:', response.items[0]);
    return response.items;
  } catch (error) {
    console.error('Error fetching Contentful entries:', error);
    if (error instanceof AxiosError) {
      console.error('Axios Error:', {
        message: error.message,
        status: error.response?.status,
        data: error.response?.data,
        config: error.config
      });
    } else if (error instanceof Error) {
      console.error('Error details:', {
        message: error.message,
        stack: error.stack
      });
    }
    throw error;
  }
};

export const getEntryById = async (contentType: string, id: string) => {
  try {
    const response = await client.getEntry(id);
    return response;
  } catch (error) {
    console.error('Error fetching Contentful entry:', error);
    throw error;
  }
};
