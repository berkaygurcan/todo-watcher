import React from "react";
import {
  Box,
  IconButton,
  LinearProgress,
  List,
  ListItem,
  TextField,
} from "@mui/material";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import CheckListItemTask from "./CheckListItemTask";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const CheckListItem = () => {
  const [progress, setProgress] = React.useState(30);

  return (
    <Box>
      <h5>
        <CheckBoxOutlinedIcon /> Check List Item Title
      </h5>
      <Box>
        {/* @todo - Parent box flexbox ile p ve liner yanyana yazıdırılıcak */}
        <p> 1 / 3 (hard coded) </p>
        <LinearProgress
          variant="determinate"
          color="secondary"
          value={progress}
        />
      </Box>

      {/* burada checklistıtemTasks diye yapılacak checklist işleri tutulan ana componente gidebiliriz */}
      {/* şimdilik direk map ile CheckBoxListTask itemlarımızı döneceğimizi varsayalım */}
      {/* burada map olacak  */}
      <br></br>
      <List>
        <CheckListItemTask />
        <CheckListItemTask />

        {/* Listenin her zaman en sonunda task ekleme özelliği olmalı ondan sabit tanımlanır */}
        <ListItem sx={{ml: 2}}>
          <TextField
            margin="dense"
            id="title"
            label="Add a task"
            type="text"
            fullWidth
            variant="outlined"
          />

          <IconButton  edge="end" title="Delete" aria-label="delete">
            <AddCircleOutlineIcon  color="primary" fontSize="large" />
          </IconButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default CheckListItem;
