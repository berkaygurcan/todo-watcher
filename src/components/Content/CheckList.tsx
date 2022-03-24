import React, { useEffect, useState } from "react";
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
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditModeChecklistText from "./EditModeChecklistText";
import CheckListItem from "./CheckListItem";
import {
  createChecklistItem,
  deleteChecklist,
  fetchBoardById,
  updateChecklist,
} from "../../features/boardSlice";
import { useAppDispatch, useAppSelector } from "../../Store/store";

const CheckList = ({ checklist }: any) => {
  let complatedTaskCount = checklist.items.filter(
    (item: any) => item.isChecked === true
  ).length;
  //calculated progressbar
  const [progress, setProgress] = useState<number>(0); //başta tamamen dolu olucak
  const [title, setTitle] = useState(""); //addinput field
  //for title editing widget
  const [isEditModeOpen, setisEditModeOpen] = useState(false);
  const dispatch = useAppDispatch();
  const currentBoard = useAppSelector((state) => state.boards.currentBoard);
  // menu section
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClickRemoveList = () => {
    //@todo - uygun isteği at geçiçi bir satır örnek altta mevcut
    deleteChecklist(checklist.id).then(() =>
      dispatch(fetchBoardById(currentBoard.id))
    );
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

  const handleCreateCheckListItem = () => {
    
    setTitle("");
    createChecklistItem(title, false, checklist.id).then(() =>
      dispatch(fetchBoardById(currentBoard.id))
    );
  };
  //başta progress bar setlensin diye
  useEffect(() => {
    changeProgressBar();
  });

  const changeProgressBar = () => {
    let progressBarResult = (complatedTaskCount / checklist.items.length) * 100;
    setProgress(progressBarResult);
  };

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
            <CheckBoxOutlinedIcon /> {checklist.title}
          </Typography>
        ) : (
          <EditModeChecklistText
            setisEditModeOpen={setisEditModeOpen}
            checklist={checklist}
          />
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
        <p>
          {" "}
          {complatedTaskCount} / {checklist.items.length}{" "}
        </p>
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
        {checklist.items &&
          checklist.items.map((checkListItem: any) => (
            <CheckListItem checkListItem={checkListItem} />
          ))}

        {/* Listenin her zaman en sonunda task ekleme özelliği olmalı ondan sabit tanımlanır */}
        <ListItem sx={{ ml: 2 }}>
          <TextField
            margin="dense"
            id="title"
            label="Add a task"
            onChange={(e: any) => setTitle(e.target.value)}
            type="text"
            value = {title}
            fullWidth
            variant="outlined"
          />

          <IconButton edge="end" title="Delete" aria-label="delete">
            <AddCircleOutlineIcon
              onClick={handleCreateCheckListItem}
              color="primary"
              fontSize="large"
            />
          </IconButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default CheckList;
