import * as React from "react";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { Box, ListItem, Typography } from "@mui/material";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import { useAppDispatch, useAppSelector } from "../../Store/store";
import { purple } from "@mui/material/colors";

export default function Tags() {
  const serviceLabels = useAppSelector((state) => state.boards.serviceLabels); //board üzerinde bütün bilgiler mevcut(lists,cards vb.)
  const dispatch = useAppDispatch();

  const labels = [
    { id: 1, title: "High Priotiry   High Priority", color: "primary" },
    { id: 2, title: "Design", color: "secondary" },
    { id: 3, title: "App", color: "success" },
    { id: 4, title: "Feature", color: "error" },
  ];

  const handleAutoComplateChange = (e: any, value: any) => {
 
  };
 

  return (
    <Box sx={{ mt: 2, mb: 2 }}>
      <Typography variant="h6" component="div">
        <LabelOutlinedIcon /> Labels
      </Typography>
      <Stack spacing={3} sx={{ width: 500 }}>
        <Autocomplete
          multiple
          id="tags-standard"
          options={serviceLabels}
          getOptionLabel={(option) => option.title}
          onChange={handleAutoComplateChange}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip
                style={{ backgroundColor: option.color }}
                label={option.title}
                color={"error"}
                {...getTagProps({ index })}
                
              />
            ))
          }
          renderInput={(params) => (
            <TextField
              {...params}
              variant="standard"
              label="Labels"
              placeholder="Select Multiple Labels"
            />
          )}
        />
      </Stack>
    </Box>
  );
}
