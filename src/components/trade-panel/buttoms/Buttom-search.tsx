import React from 'react';

import type { Theme } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core';
import Button from '@mui/material/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }),
);

export default function ContainedButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained" color="success" href="/">Buscar</Button>
      <Button variant="outlined" color="primary">
        Cancelar
      </Button>
      {/* <Button variant="contained" color="secondary">
        Secondary
      </Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
      <Button variant="contained" color="primary" href="#contained-buttons">
        Link
      </Button> */}
    </div>
  );
}
