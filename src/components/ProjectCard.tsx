import { Project } from "@/lib/projects";
import {
  Box,
  Button,
  Card,
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
  return <>
    <Card sx={{
      display: 'flex',
    }}>
      <CardMedia>
        {
          project.icon
            ? <Image
              src={project.icon}
              alt=''
              width={150}
              height={150}
            />
            : <PaletteIcon />
        }
      </CardMedia>
      <Box>
        <CardContent>
          <Typography variant="h3">{project.name}</Typography>
          <Typography>{project.description}</Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            component={Link}
            href={`/projects/${project.id}`}
          >
            View project
          </Button>
        </CardActions>
      </Box>
    </Card>
  </>;
};

export default ProjectCard;
