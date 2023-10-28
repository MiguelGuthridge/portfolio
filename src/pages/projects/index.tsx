
import ProjectCard from "@/components/ProjectCard";
import { getProjects, Project } from "@/lib/projects";
import { Grid, Box, Typography } from "@mui/material";
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
        <Box
          sx={{
            margin: '10px',
            padding: '10px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography variant='h1'>My projects</Typography>
          <Grid container spacing={2} justifyContent='center'>
            {props.projects.map((project) => (
              <Grid item key={project.id}>
                <ProjectCard project={project} />
              </Grid>
            ))
            }
          </Grid>
        </Box>
      </main>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { projects: await getProjects() },
  };
}
