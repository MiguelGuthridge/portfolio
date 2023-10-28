import { Project } from "@/lib/projects";
import { Typography } from "@mui/material";
import Image from "next/image";
import PaletteIcon from '@mui/icons-material/Palette';
import LinkCard from "./LinkCard";

export type ProjectCardData = {
  project: Project
};

const ProjectCard: React.FC<ProjectCardData> = ({
  project
}: ProjectCardData) => {
  return <LinkCard
    path={`/projects/${project.id}`}
    image={
      project.icon
        ? <Image
          src={project.icon}
          alt=''
          width={150}
          height={150}
        />
        : <PaletteIcon sx={{
          width: '150px',
          height: '150px',
        }} />
    }
  >
    <Typography variant="h3">{project.name}</Typography>
    <Typography>{project.description}</Typography>
  </LinkCard>;
};

export default ProjectCard;
