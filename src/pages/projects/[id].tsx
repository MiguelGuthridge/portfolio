import Head from "next/head";
import { Project, getProjectDetails, getProjects } from "@/lib/projects";

export default function ProjectPage(p: Project) {
  return (
    <>
      <Head>
        <title>{p.name} | Miguel Guthridge</title>
        <meta name="description" content="Miguel Guthridge's homepage" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>{p.name}</h1>
      <p>{p.description}</p>
      <ul>
        {
          p.site
            ? <li><a href={p.site} target="_blank">Visit this project</a></li>
            : <></>
        }
        {
          p.repo
            ? <li><a href={p.repo} target="_blank">View the code</a></li>
            : <></>
        }
      </ul>
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
