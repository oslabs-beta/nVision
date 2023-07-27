import type { Component } from 'solid-js';
import clipboard from '../assets/clipboard.svg';

interface CodeBlockProps {
  commands: string[];
}

const CodeBlock: Component<CodeBlockProps> = ({ commands }: CodeBlockProps) => {
  const copy = () => {
    navigator.clipboard.writeText(commands.join('\n'));
  };

  return (
    <div class='mockup-code text-left'>
      <button onClick={copy} class='h-7 w-7 absolute top-0 right-0 m-4'>
        <img src={clipboard} class='h-7 w-7' />
      </button>
      {commands.map((command) => {
        return (
          <pre data-prefix='$'>
            <code>{command}</code>
          </pre>
        );
      })}
    </div>
  );
};

export default CodeBlock;
