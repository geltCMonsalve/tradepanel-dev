import { useState } from 'react';
import AppReactDatepicker from '@/utils/AppReactDatepicker';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';

import CustomTextField from '@mui/material/TextField';// @core/components/mui/text-field'

const SearchDate = () => {
  const [date, setDate] = useState<Date | null | undefined>(new Date());

  return (
    <Box
      mb={2}
      id='searchDate'

    >
      <FormControl sx={{ m: 1, minWidth: 250 }}>
        <Box
          display="flex"
        // flexWrap="nowrap"
        // p={1}
        // m={1}
        >
          <Box>
            <AppReactDatepicker
              selected={date}
              onChange={(date: Date) => setDate(date)}
              placeholderText='Click y selecciona Fecha de Inicio'
              customInput={<CustomTextField label='Fecha Inicio' fullWidth />}
            />

          </Box>
          <Box pl={2}>
            <AppReactDatepicker
              selected={date}
              onChange={(date: Date) => setDate(date)}
              placeholderText='Click y selecciona Fecha Fin'
              customInput={<CustomTextField label='Fecha Fin' fullWidth />}
            />
          </Box>
        </Box>
      </FormControl>
    </Box>
  );
};

export default SearchDate;
