import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS, INLINES, Document } from '@contentful/rich-text-types';

// Komponen untuk styling
const Bold = ({ children }: { children: React.ReactNode }) => (
  <span className="font-bold">{children}</span>
);

const Italic = ({ children }: { children: React.ReactNode }) => (
  <span className="italic">{children}</span>
);

const Underline = ({ children }: { children: React.ReactNode }) => (
  <span className="underline">{children}</span>
);

// Komponen untuk inline code
const InlineCode = ({ children }: { children: React.ReactNode }) => (
  <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded font-mono text-sm">{children}</code>
);

// Komponen untuk paragraf normal
const Text = ({ children }: { children: React.ReactNode }) => (
  <p className="mb-4 leading-relaxed">{children}</p>
);

// Komponen untuk menampilkan blok kode seperti terminal
const CodeBlock = ({ children }: { children: React.ReactNode }) => {
  // Konversi children ke string jika bukan string
  const codeText = typeof children === 'string' 
    ? children 
    : String(children || '');
  
  // Deteksi bahasa dari baris pertama jika ada komentar yang menunjukkan bahasa
  let language = '';
  let codeContent = codeText;
  
  // Cek apakah baris pertama menunjukkan bahasa
  const firstLineMatch = codeText.match(/^\/\/ ([a-zA-Z]+)|^\/\* ([a-zA-Z]+)|^# ([a-zA-Z]+)|^<!-- ([a-zA-Z]+)/);
  if (firstLineMatch) {
    language = firstLineMatch[1] || firstLineMatch[2] || firstLineMatch[3] || firstLineMatch[4];
    // Hapus baris pertama jika itu adalah indikator bahasa
    codeContent = codeText.replace(/^\/\/ [a-zA-Z]+.*\n|^\/\* [a-zA-Z]+.*\n|^# [a-zA-Z]+.*\n|^<!-- [a-zA-Z]+.*\n/, '');
  }

  return (
    <div className="my-6 rounded-lg overflow-hidden">
      {language && (
        <div className="bg-gray-800 text-gray-200 px-4 py-2 text-sm font-mono border-b border-gray-700">
          {language}
        </div>
      )}
      <pre className="bg-gray-900 text-gray-100 p-4 overflow-x-auto font-mono text-sm leading-relaxed whitespace-pre">
        <code>{codeContent}</code>
      </pre>
    </div>
  );
};

// Fungsi untuk mendeteksi apakah teks berisi kode
const isCodeBlock = (text: string): boolean => {
  // Cek apakah teks berisi sintaks kode
  return (
    (text.includes('import ') || 
     text.includes('function ') || 
     text.includes('const ') || 
     text.includes('class ') ||
     text.includes('return (') ||
     text.includes('=>') ||
     (text.includes('{') && text.includes('}'))) &&
    text.split('\n').length > 2
  );
};

// Opsi untuk rendering rich text
const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
    [MARKS.ITALIC]: (text) => <Italic>{text}</Italic>,
    [MARKS.UNDERLINE]: (text) => <Underline>{text}</Underline>,
    [MARKS.CODE]: (text) => <InlineCode>{text}</InlineCode>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => {
      // Jika children adalah string dan berisi kode, render sebagai blok kode
      if (typeof children === 'string' && isCodeBlock(children)) {
        return <CodeBlock>{children}</CodeBlock>;
      }
      
      // Jika node memiliki anak dengan mark 'code', render sebagai blok kode
      if (node.content && 
          node.content.length === 1 && 
          node.content[0].marks && 
          node.content[0].marks.some(mark => mark.type === 'code') &&
          typeof node.content[0].value === 'string' &&
          node.content[0].value.includes('\n')) {
        return <CodeBlock>{node.content[0].value}</CodeBlock>;
      }
      
      // Jika paragraf berisi kode React, render sebagai blok kode
      if (typeof children === 'string' && 
          (children.includes('import React') || 
           children.includes('<div>') || 
           children.includes('</div>') ||
           children.includes('<Suspense'))) {
        return <CodeBlock>{children}</CodeBlock>;
      }
      
      // Jika paragraf berisi contoh kode lazy loading, render sebagai blok kode
      if (typeof children === 'string' && 
          children.includes('lazy') && 
          children.includes('Suspense')) {
        return <CodeBlock>{children}</CodeBlock>;
      }
      
      return <Text>{children}</Text>;
    },
    [BLOCKS.HEADING_1]: (node, children) => <h1 className="text-4xl font-bold mb-6 mt-8">{children}</h1>,
    [BLOCKS.HEADING_2]: (node, children) => <h2 className="text-3xl font-bold mb-4 mt-6">{children}</h2>,
    [BLOCKS.HEADING_3]: (node, children) => <h3 className="text-2xl font-bold mb-4 mt-5">{children}</h3>,
    [BLOCKS.HEADING_4]: (node, children) => <h4 className="text-xl font-bold mb-3 mt-4">{children}</h4>,
    [BLOCKS.HEADING_5]: (node, children) => <h5 className="text-lg font-bold mb-2 mt-3">{children}</h5>,
    [BLOCKS.HEADING_6]: (node, children) => <h6 className="text-base font-bold mb-2 mt-2">{children}</h6>,
    [BLOCKS.UL_LIST]: (node, children) => <ul className="list-disc pl-6 mb-6">{children}</ul>,
    [BLOCKS.OL_LIST]: (node, children) => <ol className="list-decimal pl-6 mb-6">{children}</ol>,
    [BLOCKS.LIST_ITEM]: (node, children) => <li className="mb-2">{children}</li>,
    [BLOCKS.QUOTE]: (node, children) => (
      <blockquote className="border-l-4 border-gray-300 dark:border-gray-700 pl-4 py-2 mb-6 italic">
        {children}
      </blockquote>
    ),
    [BLOCKS.HR]: () => <hr className="my-8 border-gray-300 dark:border-gray-700" />,
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      if (node.data?.target?.fields) {
        const { file, title, description } = node.data.target.fields;
        return (
          <div className="my-6">
            <img 
              src={file?.url} 
              alt={description || title || 'Embedded asset'} 
              className="max-w-full h-auto rounded-lg"
            />
            {title && <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{title}</p>}
          </div>
        );
      }
      return null;
    },
    [INLINES.HYPERLINK]: (node, children) => (
      <a 
        href={node.data.uri} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-blue-600 dark:text-blue-400 hover:underline"
      >
        {children}
      </a>
    ),
  },
};

interface ContentfulRichTextProps {
  content: Document;
}

export const ContentfulRichText: React.FC<ContentfulRichTextProps> = ({ content }) => {
  if (!content) {
    return <p>No content to display</p>;
  }
  
  try {
    // Cari paragraf yang berisi kode React
    const modifiedContent = {
      ...content,
      content: content.content.map(node => {
        if (node.nodeType === BLOCKS.PARAGRAPH && 
            node.content && 
            node.content.length === 1 && 
            node.content[0].nodeType === 'text') {
          
          const text = node.content[0].value;
          
          // Jika teks berisi kode React, tambahkan mark 'code'
          if (text && 
              (text.includes('import React') || 
               text.includes('function App') || 
               text.includes('const LazyComponent') ||
               text.includes('<Suspense') ||
               (text.includes('lazy') && text.includes('Suspense')))) {
            
            return {
              ...node,
              content: [
                {
                  ...node.content[0],
                  marks: [{ type: 'code' }]
                }
              ]
            };
          }
        }
        return node;
      })
    };
    
    return <>{documentToReactComponents(modifiedContent, options)}</>;
  } catch (error) {
    console.error('Error rendering rich text:', error);
    return <p>Error rendering content</p>;
  }
};
