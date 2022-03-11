import { Checkbox, IconButton, ListItem, TextField } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Box } from "@mui/system";
import React from "react";

const CheckListItemTask = () => {
  return (
    <ListItem>
      <Checkbox defaultChecked />
      {/* @todo checked olunca bir şekilde app barda bar progress ilerletilicek */}

      <TextField
        margin="dense"
        id="title"
        label="Add a task"
        type="text"
        fullWidth
        variant="outlined"
      />

      <IconButton edge="end" title="Delete" aria-label="delete">
        <DeleteOutlineIcon />
      </IconButton>
    </ListItem>
  );
};

export default CheckListItemTask;
