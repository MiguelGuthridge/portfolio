import { Card, Typography } from "@mui/material";
import { FunctionComponent } from "react";

export interface LangCardProps {
  lang: string
}

const LangCard: FunctionComponent<LangCardProps> = ({ lang }) => {
  return <Card>
    <Typography>{lang}</Typography>
  </Card>;
};

export default LangCard;
