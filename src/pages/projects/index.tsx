
import { getProjects, Project } from "@/lib/projects";
import Head from "next/head";
import Link from "next/link";

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
          <div key={project.id}>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <Link href={`/projects/${project.id}`}>View project</Link>
          </div>
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
