import { Button, Card, Typography } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import { FunctionComponent } from "react";
import LinkCard from "./LinkCard";

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
  return <LinkCard
    href={repo}
    image={<GitHubIcon sx={{ width: '150px', height: '150px' }} />}
  >
    <Typography variant="h5">{getRepoName(repo)}</Typography>
  </LinkCard>;
};

export default RepoCard;
