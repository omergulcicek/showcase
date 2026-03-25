import { generateStaticParamsFor, importPage } from "nextra/pages";
import { useMDXComponents as getMDXComponents } from "@/mdx-components";

export const generateStaticParams = generateStaticParamsFor("mdxPath");

export async function generateMetadata(props: {
  params: Promise<{ mdxPath?: string[] }>;
}) {
  const params = await props.params;
  const { metadata } = await importPage(params.mdxPath ?? []);

  // Proje adını bul (örn: mdxPath = ['mask', 'getting-started'] ise projectSlug = 'mask')
  const mdxPath = params.mdxPath ?? [];
  const projectSlug = mdxPath[0];
  
  const PROJECT_NAMES: Record<string, string> = {
    mask: "Mask",
    password: "Password",
    "nextjs-boilerplate": "Next.js Boilerplate",
    "ai-rules": "AI Rules",
    "input-mask": "Input Mask",
    "modern-web-in-3-minutes": "Modern Web in 3 Minutes",
  };

  let projectName = "";
  if (projectSlug) {
    projectName = PROJECT_NAMES[projectSlug] || projectSlug.charAt(0).toUpperCase() + projectSlug.slice(1);
  }

  // Eğer metadata.title varsa ve bir string ise (örn: "Getting Started")
  // Bunu "{Sayfa Adı} | ViraStack {Proje Adı}" formatına dönüştür
  if (metadata?.title && typeof metadata.title === 'string') {
    return {
      ...metadata,
      title: {
        absolute: projectName ? `${metadata.title} | ViraStack ${projectName}` : `${metadata.title} | ViraStack`,
      },
    };
  }

  return metadata;
}

const Wrapper = getMDXComponents().wrapper;

export default async function Page(props: {
  params: Promise<{ mdxPath?: string[] }>;
  children?: React.ReactNode;
}) {
  const params = await props.params;
  const {
    default: MDXContent,
    toc,
    metadata,
    sourceCode,
  } = await importPage(params.mdxPath ?? []);

  return (
    <Wrapper toc={toc} metadata={metadata} sourceCode={sourceCode}>
      <MDXContent {...props} params={params} />
    </Wrapper>
  );
}
