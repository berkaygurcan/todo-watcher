import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
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
import { useAppDispatch, useAppSelector } from "../../Store/store";
import { hideEditCardItemModal } from "../../features/modalSlice";
import { deleteCard, fetchBoardById } from "../../features/boardSlice";
import { useParams } from "react-router-dom";
const EditCardItemModalToolbar = ({ currentCard, handleClose}: any) => {
  const dispatch = useAppDispatch();
  const currentBoard = useAppSelector((state) => state.boards.currentBoard); //board üzerinde bütün bilgiler mevcut(lists,cards vb.)
  
  //popper for checklist icon button
  const [anchorElLabel, setAnchorElLabel] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElCheckList, setAnchorElChecklist] =
    React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    //koşula göre popoverların anchor statelerini setlicez
    if (event.currentTarget.id === "label-icon-button")
      setAnchorElLabel(anchorElLabel ? null : event.currentTarget);
    else if (event.currentTarget.id === "checklist-icon-button")
      setAnchorElChecklist(anchorElCheckList ? null : event.currentTarget);
  };

  const handleDeleteCard = () => {
    //sıralı şekilde ilk cardı sileriz daha sonrasında ise ana currentBoard state güncellendikten sonra modal kapatılır
    deleteCard(currentCard.id).then(() =>
      dispatch(fetchBoardById(currentBoard.id))
    );
    dispatch(hideEditCardItemModal())
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
            id="label-icon-button"
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
            id="checklist-icon-button"
          >
            <CheckBoxOutlinedIcon />
          </IconButton>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleDeleteCard}
          >
            <DeleteOutlineOutlinedIcon />
          </IconButton>
          {/*@todo - çarpı butonu eklenip en sağa atılacak en sağa atmayı flexde bulamadım */}
          {/* popper z index vermemizin sebebi modal z indeksi 1300 civarı onun üstünde gözükmesini istediğimiz için */}
          {/* popover checkbox  */}
          <ToolbarChecklistPopover
            currentCard = {currentCard} 
            anchorEl={anchorElCheckList}
            handleClick={handleClick}
            setAnchorEl={setAnchorElChecklist}
          />

          {/* popover labels  */}
          <ToolbarLabelsMenuPopover
            currentCard = {currentCard}
            anchorEl={anchorElLabel}
            handleClick={handleClick}
            setAnchorEl={setAnchorElLabel}
          />

          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>
          <Button
            color="inherit"
            onClick={() => (handleClose())}
          >
            X
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default EditCardItemModalToolbar;
