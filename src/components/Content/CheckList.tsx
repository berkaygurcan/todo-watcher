import React, { useState } from "react";
import {
  Box,
  IconButton,
  LinearProgress,
  List,
  ListItem,
  Menu,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import CheckListItemTask from "./CheckListItem";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditModeChecklistText from "./EditModeChecklistText";
import CheckListItem from "./CheckListItem";

const CheckList = ({ checklist }: any) => {
  const [progress, setProgress] = React.useState(100); //başta tamamen dolu olucak

  //for title editing widget
  const [isEditModeOpen, setisEditModeOpen] = useState(false);
  // menu section
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClickRemoveList = () => {
    //@todo - uygun isteği at geçiçi bir satır örnek altta mevcut
    // deleteList(list.id).then(() => dispatch(fetchBoardById(currentBoard.id))); //Silme işlemi başarılı tekrar fetch ediyoruz
    handleClose();
  };

  const handleClickRenameList = () => {
    setisEditModeOpen(true);
    handleClose();
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // end menu section

  return (
    <Box>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
      >
        {!isEditModeOpen ? (
          <Typography
            onClick={() => setisEditModeOpen(true)}
            variant="h6"
            gutterBottom
            component="div"
          >
            <CheckBoxOutlinedIcon /> Check List Item Title
          </Typography>
        ) : (
          <EditModeChecklistText setisEditModeOpen={setisEditModeOpen} />
        )}

        <IconButton
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <MoreVertIcon />
        </IconButton>
      </Stack>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {/*@todo - Bu fonksiyonların eventleri eklenecek  */}
        <MenuItem onClick={handleClickRemoveList}>Remove List</MenuItem>
        <MenuItem onClick={handleClickRenameList}>Rename List</MenuItem>
      </Menu>

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
       
      { checklist.items && checklist.items.map((checkListItem : any) => (
          <CheckListItem checkListItem = {checkListItem}/>
        ))}
    
        {/* Listenin her zaman en sonunda task ekleme özelliği olmalı ondan sabit tanımlanır */}
        <ListItem sx={{ ml: 2 }}>
          <TextField
            margin="dense"
            id="title"
            label="Add a task"
            type="text"
            fullWidth
            variant="outlined"
          />

          <IconButton edge="end" title="Delete" aria-label="delete">
            <AddCircleOutlineIcon color="primary" fontSize="large" />
          </IconButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default CheckList;
