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
const EditCardItemModalToolbar = () => {
  //popper for checklist icon button
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const handleOnClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

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
          <ToolbarLabelsMenuPopover />
          
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
          <Button color="inherit">X</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default EditCardItemModalToolbar;
