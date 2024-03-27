import logo from './logo.svg';
import React, {useState} from "react";
import ReactMarkdown from "react-markdown";
import MarkdownEditor from './MarkdownEditor';
import './App.css';

function App() {
  const [markdown, setMarkdown] = useState("# Markdown Previewer")
  return (
      <div>
          <h1>Markdown Editor</h1>
          <MarkdownEditor />
      </div>

  );
}
export default App;
