import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";

import {
  Button,
  Checkbox,
  ClickAwayListener,
  FormControlLabel,
  List,
  ListItem,
  Popover,
  TextField,
  Typography,
} from "@mui/material";
import ToolbarChecklistPopover from "./ToolbarChecklistPopover";
import ToolbarLabelsMenuPopover from "./ToolbarLabelsMenuPopover";
import { useAppDispatch } from "../../Store/store";
import { hideEditCardItemModal } from "../../features/modalSlice";
const EditCardItemModalToolbar = () => {
  const dispatch = useAppDispatch()
  //popper for checklist icon button
  const [anchorElLabel, setAnchorElLabel] = React.useState<null | HTMLElement>(null);
  const [anchorElCheckList, setAnchorElChecklist] = React.useState<null | HTMLElement>(null);
  
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    //koşula göre popoverların anchor statelerini setlicez
    if(event.currentTarget.id === "label-icon-button")
    setAnchorElLabel(anchorElLabel ? null : event.currentTarget);
    else if (event.currentTarget.id === "checklist-icon-button")
    setAnchorElChecklist(anchorElCheckList ? null : event.currentTarget);
  };


  //popper end

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleClick}
            id = "label-icon-button"
          >
            <LabelOutlinedIcon />
          </IconButton>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleClick}
            id = "checklist-icon-button"
          >
            <CheckBoxOutlinedIcon />
          </IconButton>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MoreHorizOutlinedIcon />
          </IconButton>
          {/*@todo - çarpı butonu eklenip en sağa atılacak en sağa atmayı flexde bulamadım */}
          {/* popper z index vermemizin sebebi modal z indeksi 1300 civarı onun üstünde gözükmesini istediğimiz için */}
          {/* popover checkbox  */}
         <ToolbarChecklistPopover />

          {/* popover labels  */}
          <ToolbarLabelsMenuPopover anchorEl = {anchorElLabel} handleClick = {handleClick}/>
          
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
          <Button color="inherit" onClick={() => dispatch(hideEditCardItemModal())}>X</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default EditCardItemModalToolbar;
