import { Project } from "@/lib/projects";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export type ProjectCardData = {
  project: Project
};

const ProjectCard: React.FC<ProjectCardData> = ({
  project
}: ProjectCardData) => {
  return <>
    <Card>
      <CardMedia>
        {
          project.icon &&
          <Image
            src={require('./icon.png')}
            alt=''
          />
        }
      </CardMedia>
      <CardContent>
        <Typography variant="h3">{project.name}</Typography>
        <Typography>{project.description}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" component={Link} href={`/projects/${project.id}`}>
          View project
        </Button>
      </CardActions>
    </Card>
  </>;
};

export default ProjectCard;
