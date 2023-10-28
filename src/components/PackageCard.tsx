import { Button, Card, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import TerminalIcon from '@mui/icons-material/Terminal';

export interface PackageCardProps {
  url: string
  command: string
}

const PackageCard: FunctionComponent<PackageCardProps> = ({
  url,
  command,
}) => {
  return <Card>
    <TerminalIcon />
    <Typography>{command}</Typography>
    <Button href={url} target="_blank">
      View package
    </Button>
  </Card>;
};

export default PackageCard;
