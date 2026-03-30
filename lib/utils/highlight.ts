import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";

export async function highlightCode(code: string, theme: any) {
  const file = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypePrettyCode, {
      theme,
      keepBackground: true,
    })
    .use(rehypeStringify)
    .process(`\`\`\`tsx\n${code}\n\`\`\``);

  return String(file);
}
