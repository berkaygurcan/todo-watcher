import { Button, Popover, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { createChecklist, fetchBoardById } from "../../features/boardSlice";
import { useAppDispatch, useAppSelector } from "../../Store/store";

const ToolbarChecklistPopover = (props: any) => {
  //popper for checklist icon button
  const [addCheckListTitle,setCheckListTitle] = useState("")
  const dispatch = useAppDispatch();
  const currentBoard = useAppSelector((state) => state.boards.currentBoard); 

  const handleOnClose = () => {
    props.setAnchorEl(null);
  };
  
  const handleAddChecklist = () => {
    console.log("checklist ekleme işlemi yapılacak ve boş gönderilme durumunu da kontrol etmek lazım ileride")
    addCheckListTitle && createChecklist(addCheckListTitle ,props.currentCard.id).then(() => dispatch(fetchBoardById(currentBoard.id))) 
    setCheckListTitle("")
    handleOnClose()
  }
  const open = Boolean(props.anchorEl); //anchor varsa aç
  const id = open ? "simple-popper" : undefined; //anlamadım

  //popper end

  return (
    <Popover
      style={{ zIndex: 1400 }}
      id={id}
      open={open}
      onClose={handleOnClose}
      anchorEl={props.anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
    >
      <Box
        sx={{
          border: 1,
          p: 1,
          bgcolor: "background.paper",
          width: 200,
        }}
      >
        <TextField
          sx={{ mb: 2 }}
          size="small"
          id="checklist-title"
          label="Checklist Title*"
          type="text"
          onChange={(e:any) => setCheckListTitle(e.target.value)}
          fullWidth
          variant="outlined"
        />
        <Button variant="contained" onClick={handleAddChecklist}>Add</Button>
      </Box>
    </Popover>
  );
};

export default ToolbarChecklistPopover;
