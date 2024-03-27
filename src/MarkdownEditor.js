import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownEditor = () => {
    const [markdownContent, setMarkdownContent] = useState('');

    const handleButtonClick = (markdownSyntax) => {
        setMarkdownContent(markdownContent + markdownSyntax);
    };

    return (
        <div>
            <div className="toolbar">
                <button onClick={() => handleButtonClick('# ')}>Heading</button>
                <button onClick={() => handleButtonClick('****')}>Bold</button>
                <button onClick={() => handleButtonClick('*')}>Italic</button>
                <button onClick={() => handleButtonClick('[Link Text](url)')}>Link</button>
                <button onClick={() => handleButtonClick('![Alt Text](url)')}>Image</button>
                <button onClick={() => handleButtonClick('```\nCode\n```')}>Code Block</button>
                <button onClick={() => handleButtonClick('> ')}>Embed</button>
            </div>
            <textarea className='input'
                value={markdownContent}
                onChange={(e) => setMarkdownContent(e.target.value)}
                placeholder="Enter Markdown content here..."
            />
            <div className="output">
                <ReactMarkdown>{markdownContent}</ReactMarkdown>
            </div>
        </div>
    );
};

export default MarkdownEditor;
