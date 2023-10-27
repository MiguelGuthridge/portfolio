import { Project } from "@/lib/projects";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import Link from "next/link";

export type ProjectCardData = {
  project: Project
};

const ProjectCard: React.FC<ProjectCardData> = ({
  project
}: ProjectCardData) => {
  return <>
    <Card key={project.id}>
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
