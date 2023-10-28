import { Typography } from "@mui/material";
import DescriptionIcon from '@mui/icons-material/Description';
import { FunctionComponent } from "react";
import LinkCard from "./LinkCard";

export interface DocsCardProps {
  url: string
}

const DocsCard: FunctionComponent<DocsCardProps> = ({ url }) => {
  return <LinkCard
    href={url}
    image={<DescriptionIcon sx={{ width: '150px', height: '150px' }} />}
  >
    <Typography variant="h5">View the docs</Typography>
  </LinkCard>;
};

export default DocsCard;
