import Head from "next/head";
import { Project, getProjectDetails, getProjects } from "@/lib/projects";
import Link from "next/link";
import Markdown from "@/components/Markdown";
import { Typography } from "@mui/material";
import RepoCard from "@/components/cards/RepoCard";
import PackageCard from "@/components/cards/PackageCard";
import DocsCard from "@/components/cards/DocsCard";
import SiteCard from "@/components/cards/SiteCard";

export default function ProjectPage(p: Project) {
  return (
    <>
      <Head>
        <title>{`${p.name} | Miguel Guthridge`}</title>
        <meta name="description" content="Miguel Guthridge's homepage" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href="/projects">Back</Link>
      <Typography variant="h1">{p.name}</Typography>
      <Markdown>
        {p.fullDescription}
      </Markdown>
      {
        p.site
          && <SiteCard url={p.site} />
      }
      {
        p.docs
          && <DocsCard url={p.docs} />
      }
      {
        p.repo
          && <RepoCard repo={p.repo} />
      }
      {
        p.package
          && <PackageCard {...p.package} />
      }
    </>
  );
}

export async function getStaticProps(
  { params }: { params: { id: string } }
) {
  return {
    props: await getProjectDetails(params.id),
  };
}

export async function getStaticPaths() {
  const projects = await getProjects();
  const paths = projects.map(project => {
    return { params: { id: project.id } };
  });

  return {
    paths,
    fallback: false
  };
}
