import { Card, CardActionArea, CardContent, CardMedia } from "@mui/material";
import Link from "next/link";
import { FunctionComponent, ReactNode } from "react";

export interface LinkCardProps {
  url: string
  image: ReactNode
  children: ReactNode
}

const LinkCard: FunctionComponent<LinkCardProps> = ({
  url,
  image,
  children,
}) => {
  return <Card sx={{
    maxWidth: '800px',
  }}>
    <CardActionArea
      sx={{
        display: 'flex',
        justifyContent: 'flex-start',
      }}
      href={url}
      LinkComponent={Link}
    >
      <CardMedia sx={{
        width: '150px',
        height: '150px',
      }}>
        {
          image
        }
      </CardMedia>
      <CardContent>
        {children}
      </CardContent>
    </CardActionArea>
  </Card>;
};

export default LinkCard;
