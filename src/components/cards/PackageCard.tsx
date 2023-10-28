import { Button, Card, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import TerminalIcon from '@mui/icons-material/Terminal';
import LinkCard from "./LinkCard";

export interface PackageCardProps {
  url: string
  command: string
}

const PackageCard: FunctionComponent<PackageCardProps> = ({
  url,
  command,
}) => {
  return <LinkCard
    href={url}
    image={<TerminalIcon sx={{ width: '150px', height: '150px' }} />}
  >
    <Typography
      variant="h5"
      sx={{
        fontFamily: 'monospace'
      }}
    >
      {command}
    </Typography>
  </LinkCard>;
};

export default PackageCard;
