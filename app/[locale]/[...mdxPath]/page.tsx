import { setRequestLocale } from "next-intl/server";
import { generateStaticParamsFor, importPage } from "nextra/pages";
import { useMDXComponents as getMDXComponents } from "@/mdx-components";

export async function generateStaticParams() {
  return await generateStaticParamsFor("mdxPath", "locale")();
}

export async function generateMetadata(props: {
  params: Promise<{ locale: string; mdxPath?: string[] }>;
}) {
  const params = await props.params;
  const { metadata } = await importPage(params.mdxPath ?? [], params.locale);

  const mdxPath = params.mdxPath ?? [];
  const projectSlug = mdxPath[0];

  const PROJECT_NAMES: Record<string, string> = {
    "nextjs-boilerplate": "Next.js Boilerplate",
    "ai-rules": "AI Rules",
    "input-mask": "Input Mask",
    "password-toggle": "Password Toggle",
    "modern-web-in-3-minutes": "Modern Web in 3 Minutes",
  };

  let projectName = "";
  if (projectSlug) {
    projectName =
      PROJECT_NAMES[projectSlug] ||
      projectSlug.charAt(0).toUpperCase() + projectSlug.slice(1);
  }

  if (metadata?.title && typeof metadata.title === "string") {
    const isIndexPage = mdxPath.length === 1;

    let absoluteTitle = `${metadata.title} | ViraStack`;
    if (projectName) {
      if (isIndexPage) {
        absoluteTitle = `${projectName} | ViraStack`;
      } else {
        absoluteTitle = `${metadata.title} | ViraStack ${projectName}`;
      }
    }

    return {
      ...metadata,
      title: {
        absolute: absoluteTitle,
      },
    };
  }

  return metadata;
}

const Wrapper = getMDXComponents().wrapper;

export default async function Page(props: {
  params: Promise<{ locale: string; mdxPath?: string[] }>;
  children?: React.ReactNode;
}) {
  const params = await props.params;
  const { locale } = params;
  setRequestLocale(locale);
  
  const {
    default: MDXContent,
    toc,
    metadata,
    sourceCode,
  } = await importPage(params.mdxPath ?? [], locale);

  return (
    <Wrapper toc={toc} metadata={metadata} sourceCode={sourceCode}>
      <MDXContent {...props} params={params} />
    </Wrapper>
  );
}
