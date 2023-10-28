import { Box, IconButton, Snackbar, Typography } from "@mui/material";
import React, { FunctionComponent, useState } from "react";
import TerminalIcon from '@mui/icons-material/Terminal';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CloseIcon from '@mui/icons-material/Close';
import LinkCard from "./LinkCard";

export interface PackageCardProps {
  url: string
  command: string
}

const PackageCard: FunctionComponent<PackageCardProps> = ({
  url,
  command,
}) => {

  const [copySnackbarOpen, setCopySnackbarOpen] = useState(false);

  const copyIndicator = <React.Fragment>
    <IconButton
      size="small"
      aria-label="close"
      color="inherit"
      onClick={() => setCopySnackbarOpen(false)}
    >
      <CloseIcon fontSize="small" />
    </IconButton>
  </React.Fragment>;

  return <>
    <LinkCard
      href={url}
      image={<TerminalIcon sx={{ width: '150px', height: '150px' }} />}
    >
      <Box sx={{ display: 'flex' }}>
        <IconButton
          onClick={async e => {
            e.preventDefault();
            e.stopPropagation();
            await navigator.clipboard.writeText(command);
            setCopySnackbarOpen(true);
          }}
        >
          <ContentCopyIcon />
        </IconButton>
        <Typography
          variant="h5"
          sx={{
            fontFamily: 'monospace'
          }}
        >
          {command}
        </Typography>
      </Box>
    </LinkCard>
    <Snackbar
      open={copySnackbarOpen}
      autoHideDuration={3000}
      onClose={() => setCopySnackbarOpen(false)}
      message="Copied to clipboard"
      action={copyIndicator}
    />
  </>;
};

export default PackageCard;
