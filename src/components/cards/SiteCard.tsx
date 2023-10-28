import { Typography } from "@mui/material";
import LanguageIcon from '@mui/icons-material/Language';
import { FunctionComponent } from "react";
import LinkCard from "./LinkCard";

export interface SiteCardProps {
  url: string
}

const SiteCard: FunctionComponent<SiteCardProps> = ({ url }) => {
  return <LinkCard
    href={url}
    image={<LanguageIcon sx={{ width: '150px', height: '150px' }} />}
  >
    <Typography variant="h5">Visit the website</Typography>
  </LinkCard>;
};

export default SiteCard;
