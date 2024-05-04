import React, { useEffect } from 'react';

// import type { Theme } from '@material-ui/core';

// import { makeStyles, createStyles } from '@material-ui/core';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';

import Details from '../details/Details';

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       '& > *': {
//         margin: theme.spacing(1),
//       },
//     },
//   }),
// );

export function ContainedButtons() {
  // const classes = useStyles();

  useEffect(() => {
    <>{
      <Details />
    }
    </>
  }, [])


  const handleClick = () => {
    console.log('aki');

    // useEffect();

  }

  return (
    <Box
      mt={5}
      ml={5}
      mb={5}
      display={'flex'}>
      <Box>
        <Button variant="contained" color="success" onClick={handleClick}>Buscar</Button>
      </Box>
      <Box ml={5}>
        <Button variant="outlined" color="primary">
          Cancelar
        </Button>
      </Box>
      {/* <Button variant="contained" color="secondary">
        Secondary
      </Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
      <Button variant="contained" color="primary" href="#contained-buttons">
        Link
      </Button> */}
    </Box>
  );
}
