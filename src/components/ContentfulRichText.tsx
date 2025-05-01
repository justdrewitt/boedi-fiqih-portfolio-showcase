import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS, Document } from '@contentful/rich-text-types';

const Bold = ({ children }: { children: React.ReactNode }) => (
  <span className="font-bold">{children}</span>
);

const Text = ({ children }: { children: React.ReactNode }) => (
  <p className="mb-4 leading-relaxed">{children}</p>
);

const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    [BLOCKS.HEADING_1]: (node, children) => <h1 className="text-3xl font-bold mb-4">{children}</h1>,
    [BLOCKS.HEADING_2]: (node, children) => <h2 className="text-2xl font-bold mb-4">{children}</h2>,
    [BLOCKS.HEADING_3]: (node, children) => <h3 className="text-xl font-bold mb-4">{children}</h3>,
  },
};

interface ContentfulRichTextProps {
  content: Document;
}

export const ContentfulRichText: React.FC<ContentfulRichTextProps> = ({ content }) => {
  return documentToReactComponents(content, options);
};
