import { useState } from "react";

import { Box } from "@mui/material";

import CustomTextField from "@/@core/components/mui/TextField";
import AppReactDatepicker from "@/utils/AppReactDatepicker";

export function DateFilters() {
  const today = new Date();
  const [date, setDate] = useState<Date | null | undefined>(today);

  // console.log(today);

  return (
    <Box display={'flex'}>
      <Box ml={10} >
        <AppReactDatepicker
          dateFormat="dd/MM/yyyy"
          selected={date}
          onChange={(date: Date) => setDate(date)}
          placeholderText='Click y selecciona Fecha de Inicio'
          customInput={<CustomTextField label='Fecha Inicio' fullWidth />}
        />
      </Box>
      <Box ml={5} >

        <AppReactDatepicker
          dateFormat="dd/MM/yyyy"
          selected={date}
          onChange={(date: Date) => setDate(date)}
          placeholderText='Click y selecciona Fecha Fin'
          customInput={<CustomTextField label='Fecha Fin' fullWidth />}
        />
      </Box>
    </Box>
  );
}
