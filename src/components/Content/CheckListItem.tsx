import { Checkbox, IconButton, ListItem, TextField } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";


const CheckListItem = ({checkListItem} :any) => {
  return (
    <ListItem>
      <Checkbox checked = {checkListItem.isChecked} />
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

export default CheckListItem;
