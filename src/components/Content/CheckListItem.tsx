import { Checkbox, IconButton, ListItem, TextField } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../Store/store";
import { deleteChecklistItem, fetchBoardById, updateChecklistItem } from "../../features/boardSlice";

const CheckListItem = ({ checkListItem }: any) => {
  const [checked, setChecked] = useState(checkListItem.isChecked);
  const [taskTitle, setTaskTitle] = useState(checkListItem.title); //input state
  const dispatch = useAppDispatch();
  const currentBoard = useAppSelector((state) => state.boards.currentBoard);

  const handleChangeTaskTitle = (e: any) => {
    console.log("target value = ",e.target.value)
    console.log("Currenttarget value = ",e.currentTarget.value)
    setTaskTitle(e.currentTarget.value);
    
    updateChecklistItem(checkListItem.id,e.currentTarget.value,!checked).then(() => dispatch(fetchBoardById(currentBoard.id)))
  };



  const handleChangeCheckbox = () => {
    setChecked(!checked);
    
    updateChecklistItem(checkListItem.id,taskTitle,!checked).then(() => dispatch(fetchBoardById(currentBoard.id)))
    
    
  };

  const handleDelete = () => {
    //@todo - silme isteği atıcak
    deleteChecklistItem(checkListItem.id).then(() => dispatch(fetchBoardById(currentBoard.id)))
    
  };

  return (
    <ListItem>
      <Checkbox checked={checked} onChange={handleChangeCheckbox} />
      {/* @todo checked olunca bir şekilde app barda bar progress ilerletilicek */}

      <TextField
        margin="dense"
        id="title"
        label="Add a task"
        onChange={handleChangeTaskTitle}
        type="text"
        fullWidth
        value={taskTitle}
        variant="outlined"
      />

      <IconButton
        onClick={handleDelete}
        edge="end"
        title="Delete"
        aria-label="delete"
      >
        <DeleteOutlineIcon />
      </IconButton>
    </ListItem>
  );
};

export default CheckListItem;
