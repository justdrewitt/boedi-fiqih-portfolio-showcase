import React, { useEffect, useState } from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES, MARKS, Document, Node, Block, Inline, NodeData } from '@contentful/rich-text-types';

interface ContentfulRichTextProps {
  content: Document;
}

// Interface untuk data node Contentful yang lebih spesifik
interface ContentfulNodeData extends NodeData {
  target?: {
    fields?: {
      title?: string;
      description?: string;
      file?: {
        url: string;
        contentType: string;
      };
      code?: string;
      language?: string;
    };
  };
  uri?: string;
}

// Interface untuk node Contentful yang lebih spesifik
interface ContentfulTextNode extends Node {
  nodeType: 'text';
  value: string;
  content?: never;
  data: ContentfulNodeData;
}

interface ContentfulBlockNode extends Node {
  nodeType: string;
  content?: Array<ContentfulBlockNode | ContentfulTextNode>;
  data: ContentfulNodeData;
  value?: never;
}

// Type union untuk semua jenis node
type ContentfulNode = ContentfulTextNode | ContentfulBlockNode;

// Interface untuk node yang sedang diproses
interface ProcessingNode {
  nodeType: string;
  value?: string;
  content?: ProcessingNode[];
  data: ContentfulNodeData;
  marks?: Array<{type: string}>;
}

export const ContentfulRichText: React.FC<ContentfulRichTextProps> = ({ content }) => {
  const [processedContent, setProcessedContent] = useState<Document | null>(null);

  useEffect(() => {
    if (!content) return;

    // Fungsi untuk memproses konten dan mengubah blok kode
    const processContent = (document: Document): Document => {
      // Deep clone document untuk menghindari mutasi
      const processedDoc = JSON.parse(JSON.stringify(document)) as Document;
      
      // Fungsi rekursif untuk memproses node
      const processNode = (node: ProcessingNode): void => {
        // Jika ini adalah node teks
        if (node.nodeType === 'text' && node.value) {
          // Cek apakah ini adalah blok kode dengan format ```
          if (node.value.includes('```')) {
            // Tandai node ini sebagai kode
            node.marks = node.marks || [];
            node.marks.push({ type: 'code' });
          }
        }
        
        // Proses child nodes jika ada
        if (node.content && Array.isArray(node.content)) {
          node.content.forEach(processNode);
        }
      };
      
      // Proses semua node dalam dokumen
      if (processedDoc.content && Array.isArray(processedDoc.content)) {
        processedDoc.content.forEach(processNode);
      }
      
      return processedDoc;
    };
    
    // Proses konten
    const newContent = processContent(content);
    setProcessedContent(newContent);
  }, [content]);

  if (!processedContent) {
    return <div>No content to display</div>;
  }

  // Fungsi untuk mendeteksi bahasa dari kode
  const detectLanguage = (text: string): string => {
    // Cek apakah ada deklarasi bahasa di awal blok kode
    const codeBlockMatch = text.match(/```([a-zA-Z0-9]+)?\s*\n/);
    if (codeBlockMatch && codeBlockMatch[1]) {
      return codeBlockMatch[1];
    }
    
    if (text.includes('import React') || text.includes('useState') || text.includes('useEffect') || text.includes('jsx')) {
      return 'React';
    }
    if (text.includes('function') && text.includes('return') && text.includes('{')) {
      return 'JavaScript';
    }
    if (text.includes('<html>') || text.includes('<div>') || text.includes('<body>')) {
      return 'HTML';
    }
    if (text.includes('@media') || text.includes('margin:') || text.includes('padding:')) {
      return 'CSS';
    }
    if (text.includes('docker') || text.includes('npm') || text.includes('git ')) {
      return 'Terminal';
    }
    if (text.includes('on:') && text.includes('jobs:') && text.includes('steps:')) {
      return 'GitHub Actions';
    }
    return 'Code';
  };

  // Fungsi untuk membuat blok kode dengan styling terminal
  const renderCodeBlock = (code: string): React.ReactNode => {
    // Hapus backtick dan ekstrak bahasa jika ada
    let codeContent = code;
    let language = 'Code';
    
    // Cek apakah ini adalah blok kode markdown
    const codeBlockMatch = code.match(/```([a-zA-Z0-9]+)?\s*\n([\s\S]*?)```/);
    if (codeBlockMatch) {
      language = codeBlockMatch[1] || detectLanguage(codeBlockMatch[2]);
      codeContent = codeBlockMatch[2];
    } else {
      // Jika bukan blok kode markdown, coba deteksi bahasa
      language = detectLanguage(code);
      
      // Hapus backtick jika ada
      if (code.startsWith('```') && code.endsWith('```')) {
        codeContent = code.substring(3, code.length - 3).trim();
      } else {
        codeContent = code;
      }
    }
    
    return (
      <div className="my-6 rounded-lg overflow-hidden border border-gray-700 shadow-lg">
        {/* Terminal Header */}
        <div className="bg-gray-800 px-4 py-2 flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex space-x-2 mr-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-gray-200 text-sm font-medium">{language}</span>
          </div>
          <div className="text-gray-400 text-xs">
            {codeContent.split('\n').length} lines
          </div>
        </div>
        
        {/* Code Content */}
        <pre className="bg-gray-900 text-gray-100 p-4 overflow-x-auto font-mono text-sm leading-relaxed whitespace-pre m-0">
          <code>{codeContent}</code>
        </pre>
      </div>
    );
  };

  const options = {
    renderMark: {
      [MARKS.BOLD]: (text: React.ReactNode) => <strong className="font-bold">{text}</strong>,
      [MARKS.ITALIC]: (text: React.ReactNode) => <em className="italic">{text}</em>,
      [MARKS.UNDERLINE]: (text: React.ReactNode) => <u className="underline">{text}</u>,
      [MARKS.CODE]: (text: React.ReactNode) => {
        console.log('Rendering CODE mark:', text);
        
        // Jika ini adalah kode inline (pendek), gunakan styling inline
        if (typeof text === 'string') {
          // Cek apakah ini adalah blok kode markdown
          if (text.includes('```')) {
            return renderCodeBlock(text);
          }
          
          // Jika hanya satu baris, ini adalah kode inline
          if (text.split('\n').length <= 1) {
            return (
              <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 font-mono text-sm">
                {text}
              </code>
            );
          }
          
          // Jika multi-baris tapi bukan blok kode markdown, render sebagai blok kode biasa
          return renderCodeBlock(text);
        }
        
        return <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 font-mono text-sm">{text}</code>;
      },
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: ContentfulNode, children: React.ReactNode) => {
        console.log('Paragraph node:', node);
        
        // Coba deteksi jika ini adalah blok kode
        if (node.content && node.content.length === 1 && node.content[0].nodeType === 'text') {
          const textNode = node.content[0] as ContentfulTextNode;
          const content = textNode.value || '';
          
          // Jika konten berisi backtick, ini mungkin blok kode
          if (content.includes('```')) {
            return renderCodeBlock(content);
          }
          
          // Cek apakah ini adalah blok kode tanpa backtick
          if (content.trim().length > 0 && 
              (content.includes('function') || 
               content.includes('const ') || 
               content.includes('import ') || 
               content.includes('class ') ||
               content.includes('on:') ||
               content.includes('jobs:') ||
               content.includes('steps:')) &&
              content.split('\n').length > 2) {
            return renderCodeBlock(content);
          }
        }
        
        // Jika children adalah string dan berisi backtick, ini mungkin blok kode
        const childrenStr = String(children);
        if (childrenStr.includes('```')) {
          return renderCodeBlock(childrenStr);
        }
        
        // Cek apakah children berisi kode tanpa backtick
        if (typeof children === 'string' && 
            children.trim().length > 0 && 
            (children.includes('function') || 
             children.includes('const ') || 
             children.includes('import ') || 
             children.includes('class ') ||
             children.includes('on:') ||
             children.includes('jobs:') ||
             children.includes('steps:')) &&
            children.split('\n').length > 2) {
          return renderCodeBlock(children);
        }
        
        return <p className="mb-6">{children}</p>;
      },
      [BLOCKS.HEADING_1]: (_node: ContentfulNode, children: React.ReactNode) => (
        <h1 className="text-4xl font-bold mt-12 mb-6">{children}</h1>
      ),
      [BLOCKS.HEADING_2]: (_node: ContentfulNode, children: React.ReactNode) => (
        <h2 className="text-3xl font-bold mt-10 mb-4">{children}</h2>
      ),
      [BLOCKS.HEADING_3]: (_node: ContentfulNode, children: React.ReactNode) => (
        <h3 className="text-2xl font-semibold mt-8 mb-3">{children}</h3>
      ),
      [BLOCKS.HEADING_4]: (_node: ContentfulNode, children: React.ReactNode) => (
        <h4 className="text-xl font-semibold mt-6 mb-2">{children}</h4>
      ),
      [BLOCKS.HEADING_5]: (_node: ContentfulNode, children: React.ReactNode) => (
        <h5 className="text-lg font-semibold mt-4 mb-2">{children}</h5>
      ),
      [BLOCKS.HEADING_6]: (_node: ContentfulNode, children: React.ReactNode) => (
        <h6 className="text-base font-semibold mt-4 mb-2">{children}</h6>
      ),
      [BLOCKS.UL_LIST]: (_node: ContentfulNode, children: React.ReactNode) => (
        <ul className="list-disc pl-8 mb-6 space-y-2">{children}</ul>
      ),
      [BLOCKS.OL_LIST]: (_node: ContentfulNode, children: React.ReactNode) => (
        <ol className="list-decimal pl-8 mb-6 space-y-2">{children}</ol>
      ),
      [BLOCKS.LIST_ITEM]: (_node: ContentfulNode, children: React.ReactNode) => (
        <li>{children}</li>
      ),
      [BLOCKS.QUOTE]: (_node: ContentfulNode, children: React.ReactNode) => (
        <blockquote className="border-l-4 border-blue-500 pl-4 py-2 my-6 italic text-gray-700 dark:text-gray-300">
          {children}
        </blockquote>
      ),
      [BLOCKS.HR]: () => <hr className="my-8 border-gray-300 dark:border-gray-700" />,
      [BLOCKS.EMBEDDED_ASSET]: (node: ContentfulNode) => {
        try {
          const { title, description, file } = node.data?.target?.fields || {};
          if (!file) return <p>Asset not available</p>;
          
          const { url, contentType } = file;
          
          if (contentType?.includes('image')) {
            return (
              <figure className="my-8">
                <img 
                  src={`https:${url}`} 
                  alt={description || title || 'Embedded image'} 
                  className="rounded-lg shadow-md mx-auto"
                />
                {title && <figcaption className="text-center text-sm text-gray-600 dark:text-gray-400 mt-2">{title}</figcaption>}
              </figure>
            );
          }
          
          return <p>Embedded asset: {title || 'Untitled'}</p>;
        } catch (error) {
          console.error('Error rendering embedded asset:', error);
          return <p>Error rendering asset</p>;
        }
      },
      [INLINES.HYPERLINK]: (node: ContentfulNode, children: React.ReactNode) => (
        <a 
          href={node.data?.uri || '#'} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          {children}
        </a>
      ),
      [BLOCKS.EMBEDDED_ENTRY]: (node: ContentfulNode) => {
        try {
          const { fields } = node.data?.target || {};
          
          if (!fields) return <p>Entry not available</p>;
          
          if (fields.code) {
            const language = fields.language || 'Code';
            return renderCodeBlock(fields.code);
          }
          
          return <p>Embedded entry: {fields.title || 'Untitled'}</p>;
        } catch (error) {
          console.error('Error rendering embedded entry:', error);
          return <p>Error rendering entry</p>;
        }
      },
    },
  };

  return <div>{documentToReactComponents(processedContent, options)}</div>;
};
