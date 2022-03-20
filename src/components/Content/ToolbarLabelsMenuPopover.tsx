import {
  Checkbox,
  FormControlLabel,
  List,
  ListItem,
  Popover,
} from "@mui/material";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import { Box } from "@mui/system";
import React from "react";

const ToolbarLabelsMenuPopover = (props:any) => {
  //popper for checklist icon button
  

  const handleOnClose = () => {
    props.setAnchorEl(null);
  };


  const open = Boolean(props.anchorEl);
  const id = open ? "simple-popper" : undefined;
  

  //popper end
  return (
    <div>
      {/* popover labels  */}
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
          <List>
            <ListItem>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Label"
              ></FormControlLabel>
              <LabelOutlinedIcon />
            </ListItem>
          </List>
        </Box>
      </Popover>
    </div>
  );
};

export default ToolbarLabelsMenuPopover;
