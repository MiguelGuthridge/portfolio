
import ProjectCard from "@/components/ProjectCard";
import { getProjects, Project } from "@/lib/projects";
import Head from "next/head";

export default function Projects(props: { projects: Project[] }) {
  return (
    <>
      <Head>
        <title>Projects | Miguel Guthridge</title>
        <meta name="description" content="Miguel Guthridge's homepage" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>My projects</h1>
        {props.projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))
        }
      </main>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { projects: await getProjects() },
  };
}
