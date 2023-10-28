import { Project } from "@/lib/projects";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import PaletteIcon from '@mui/icons-material/Palette';

export type ProjectCardData = {
  project: Project
};

const ProjectCard: React.FC<ProjectCardData> = ({
  project
}: ProjectCardData) => {
  return <Card sx={{
    maxWidth: '800px',
  }}>
    <CardActionArea sx={{
      display: 'flex',
      justifyContent: 'flex-start',
    }}>
      <CardMedia sx={{
        width: '150px',
        height: '150px',
      }}>
        {
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
      </CardMedia>
      <CardContent>
        <Typography variant="h3">{project.name}</Typography>
        <Typography>{project.description}</Typography>
      </CardContent>
    </CardActionArea>
  </Card>;
};

export default ProjectCard;
