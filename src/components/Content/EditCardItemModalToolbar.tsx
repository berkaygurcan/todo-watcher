import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import Popper from "@mui/material/Popper";
import { Button, ClickAwayListener, Popover, TextField } from "@mui/material";
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
            
            <Popover
              style={{ zIndex: 1400 }}
              id={id}
              open={open}
              onClose= {handleOnClose}
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
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
                  fullWidth
                  variant="outlined"
                />
                <Button variant="contained">Add</Button>
              </Box>
            </Popover>
          </Toolbar>
        </AppBar>
      </Box>

  );
};

export default EditCardItemModalToolbar;
