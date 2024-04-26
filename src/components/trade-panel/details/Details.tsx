import React from 'react';
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }),
);

export default function Details() {
  const classes = useStyles();

  return (

    <TextField
      disabled
      id="filled-disabled"
      label="Disabled"
      defaultValue="Hello World"
      variant="filled"
    />
  );
}
