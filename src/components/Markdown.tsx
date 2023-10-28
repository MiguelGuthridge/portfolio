import ReactMarkdown, { Options } from "react-markdown";

/**
 * Render links such that they open in new tabs
 */
function LinkRenderer(props: any) {
  return (
    <a href={props.href} target="_blank" rel="noreferrer">
      {props.children}
    </a>
  );
}

/**
 * A wrapper around react-markdown to open links in new tabs, since they
 * removed is an option for no apparent reason?
 */
const Markdown = (props: Options) => {
  return (
    <ReactMarkdown components={{ a: LinkRenderer }} {...props}>
      {props.children}
    </ReactMarkdown>
  );
};

export default Markdown;
