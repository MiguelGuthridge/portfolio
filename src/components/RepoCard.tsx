import { Button, Card, Typography } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import { FunctionComponent } from "react";

export interface RepoCardProps {
  repo: string
}

function getRepoName(url: string): string {
  if (url.startsWith("https://github.com/")) {
    return url.replace('https://github.com/', '');
  } else if (url.startsWith("https://")) {
    return url.replace('https://', '');
  } else {
    return url;
  }
}

const RepoCard: FunctionComponent<RepoCardProps> = ({ repo }) => {
  return <Card>
    <GitHubIcon />
    <Typography>{getRepoName(repo)}</Typography>
    <Button href={repo} target="_blank">
      View repository
    </Button>
  </Card>;
};

export default RepoCard;
