import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const labels = [ //labels olucak
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
];

function getStyles(label:any, personlabel:any, theme:any) {
  return {
    fontWeight:
      personlabel.indexOf(label) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelectChip() {
  const theme = useTheme();
  const [personlabel, setPersonlabel] = React.useState([]);

  const handleChange = (event:any) => {
    const {
      target: { value },
    } = event;
    setPersonlabel(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-chip-label">Chip</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={personlabel}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Label" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip variant="outlined" key={value} label={value} onDelete={handleDelete} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {labels.map((label) => (
            <MenuItem
              key={label}
              value={label}
              style={getStyles(label, personlabel, theme)}
            >
              {label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
