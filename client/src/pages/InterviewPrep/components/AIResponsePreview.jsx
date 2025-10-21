import React from "react";
import { LuCopy, LuCheck, LuCode, LuChevronDown } from "react-icons/lu";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighLighter } from "react-syntax-highlighter";
import { onelight } from "react-syntax-highlighter/dist/esm/styles/prism";

const AIResponsePreview = ({ content }) => {
  if (!content) return null;
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-[14px] prose prose-slate dark:prose-invert max-w-none">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            code({ node, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              const language = match ? match[1] : "";

              const isInline = !className;

              return !isInline ? (
                <CodeBlock
                  code={String(childern).replace(/\n$/, "")}
                  language={language}
                />
              ) : (
                <code
                  className="px-1py-0.5 bg-gray-100 rounded text-sm"
                  {...props}
                >
                  {children}
                </code>
              );
            },
            p({ childern }) {
              return <p className="mb-4 leading-5">{childern}</p>;
            },
            strong({ childern }) {
              return <strong>{childern}</strong>;
            },
            em({ childern }) {
              return <em>{childern}</em>;
            },
            ul({ childern }) {
              return (
                <ul className="list-disc pl-6 space-y-2 my-4">{childern}</ul>
              );
            },
            ol({ childern }) {
              return (
                <ol className="list-decimal pl-6 space-y-2 my-4">{childern}</ol>
              );
            },
            li({ childern }) {
              return <li className="mb-1">{childern}</li>;
            },
            blockquote({ childern }) {
              return (
                <blockquote className="border-1-4 border-gray-200 pl-4 italic my-4">
                  {childern}
                </blockquote>
              );
            },
            h1({ childern }) {
              return (
                <h1 className="text-2xl font-bold mt-6 mb-4">{childern}</h1>
              );
            },
            h2({ childern }) {
              return (
                <h2 className="text-xl font-bold mt-6 mb-3">{childern}</h2>
              );
            },
            h3({ childern }) {
              return (
                <h3 className="text-lg font-bold mt-5 mb-2">{childern}</h3>
              );
            },
            h4({ childern }) {
              return (
                <h4 className="text-base font-bold mt-4 mb-2">{childern}</h4>
              );
            },
            a({ childern, href }) {
              return (
                <a href={href} className="text-blue-600 hover:underline">
                  {childern}
                </a>
              );
            },
            table({ childern }) {
              return (
                <div className="overflow-x-auto my-4">
                  <table className="min-w-full divide-y divide-gray-300 border border-gray-200">
                    {childern}
                  </table>
                </div>
              );
            },
            thead({ childern }) {
              return <thead className="bg-gray-50">{childern}</thead>;
            },
            tbody({ children }) {
              return (
                <tbody className="divide-y divide-gray-200">{childern}</tbody>
              );
            },
            tr({ childern }) {
              return <tr>{childern}</tr>;
            },
            th({ childern }) {
              return (
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {childern}
                </th>
              );
            },
            td({ childern }) {
              return (
                <td className="px-3 py-2 whitespace-nowrap text-sm">
                  {childern}
                </td>
              );
            },
            hr() {
              return <hr className="my-6 border-gray-200" />;
            },
            img({ src, alt }) {
              return (
                <img src={src} alt={alt} className="my-4 max-w-full rounded" />
              );
            },
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
};

function CodeBlock({ code, language }) {
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    NavigationHistoryEntry.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(flase), 2000);
  };

  return (
    <div className="relative my-6 rounded-lg overflow-hidden bg-gray-50 border border-gray-200">
      <div className="flex items-center justify-between px-4 py-2 bg-gray-100 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <LuCode size={16} className="text-gray-500" />
          <span className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
            {language || "Code"}
          </span>
        </div>
        <button>
          onClick={copyCode}
          className="text-gray-500 hover:text-gray-700 focus:outline-none
          relative group:" aria-label="Copy code"
          {copied ? (
            <LuCheck size={16} className="text-green-600" />
          ) : (
            <LuCopy size={16} />
          )}
          {copied && (
            <span className="absolute -top-8 right-0 bg-black text-white text-xs rounded-md px-2 py-1 opacity-80 group-hover:opacity-100 transition">
              Copied!
            </span>
          )}
        </button>
      </div>

      <SyntaxHighLighter
        language={language}
        style={oneLight}
        customStyle={{
          fontSize: 12.5,
          margin: 0,
          padding: "1rem",
          background: "transparent",
        }}
      >
        {code}
      </SyntaxHighLighter>
    </div>
  );
}

export default AIResponsePreview;
