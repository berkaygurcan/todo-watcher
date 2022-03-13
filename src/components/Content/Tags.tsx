import * as React from "react";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { Box, Typography } from "@mui/material";
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';

export default function Tags() {
  // Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
  const labels = [
    { id: 1, title: "High Priotiry   High Priority", color: "primary" },
    { id: 2, title: "Design", color: "secondary" },
    { id: 3, title: "App", color: "success" },
    { id: 4, title: "Feature", color: "error" },
  ];

  return (
    <Box sx={{mt:2,mb:2}}>
       <Typography variant="h6" component="div">
        <LabelOutlinedIcon /> Comments
      </Typography>
      <Stack spacing={3} sx={{ width: 500 }}>
        <Autocomplete
          multiple
          id="tags-standard"
          options={labels}
          getOptionLabel={(option) => option.title}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip
                label={option.title}
                color={
                  option.color == "primary"
                    ? "primary"
                    : option.color == "secondary"
                    ? "secondary"
                    : option.color == "success"
                    ? "success"
                    : "error"
                }
                {...getTagProps({ index })}
              />
            ))
          }
          renderInput={(params) => (
            <TextField
              {...params}
              variant="standard"
              label="Multiple values"
              placeholder="Labels"
            />
          )}
        />
      </Stack>
    </Box>
  );
}
