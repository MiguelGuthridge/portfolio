import { Card, CardActionArea, CardContent, CardMedia } from "@mui/material";
import Link from "next/link";
import { FunctionComponent, ReactNode } from "react";

export type LinkCardProps = {
  image: ReactNode
  children: ReactNode
} & ({
  /** Path for internal link */
  path: string
} | {
  /** Href for external link */
  href: string
});

const LinkCard: FunctionComponent<LinkCardProps> = ({
  image,
  children,
  ...options
}) => {

  let url, newTab;
  if ('path' in options) {
    url = options.path;
    newTab = false;
  } else {
    url = options.href;
    newTab = true;
  }

  return <Card sx={{
    maxWidth: '800px',
  }}>
    <CardActionArea
      sx={{
        display: 'flex',
        justifyContent: 'flex-start',
      }}
      href={url}
      target={newTab ? '_blank' : undefined}
      LinkComponent={newTab ? undefined : Link}
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
