import React, { useEffect, useState } from "react";

import TextField from "@mui/material/TextField";
import {
  Divider,
  Drawer,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import PersonAddAltRoundedIcon from "@mui/icons-material/PersonAddAltRounded";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import { Box } from "@mui/system";
import { useAppDispatch, useAppSelector } from "../../Store/store";
import {
  createBoardMember,
  deleteBoardById,
  deleteBoardMember,
  fetchBoardById,
  fetchBoardsData,
} from "../../features/boardSlice";
import { useNavigate } from "react-router-dom";

const BoardMemberDrawer = ({ handleCloseDrawer, isDrawerOpen }: any) => {
  const [boardMemberName, setBoardMemberName] = useState("");

  const currentBoard = useAppSelector((state) => state.boards.currentBoard);

  const dispatch = useAppDispatch();
  const navigate = useNavigate()
  const handleChangeBoardMemberName = (event: any) => {
    const value = event.currentTarget.value;
    setBoardMemberName(value);
  };

  const handleCreateBoardMember = () => {
    //istek atılıcak
    //boş olma durumunu değerlendir ileride hata handling!
    createBoardMember(currentBoard.id, boardMemberName).then(() =>
      dispatch(fetchBoardById(currentBoard.id))
    );
  };

  const handleDeleteBoardMember = (boardMemberId: number) => {
    deleteBoardMember(boardMemberId).then(() =>
      dispatch(fetchBoardById(currentBoard.id))
    );
  };

  const handleDeleteCurrentBoard = () => {
    deleteBoardById(currentBoard.id).then(() => navigate("/boards"))
    
  };

  return (
    <Drawer
      variant="temporary"
      open={isDrawerOpen}
      anchor="right"
      onClose={handleCloseDrawer}
      PaperProps={{
        sx: { width: "15%" },
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <Divider sx={{ mt: 2 }} />
        <Typography variant="h6">Delete This Board </Typography>

        <IconButton
          onClick={handleDeleteCurrentBoard}
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
        >
          <DeleteForeverOutlinedIcon sx={{ fontSize: 35 }} />
        </IconButton>
        <Divider sx={{ mb: 2 }} />
        <Typography variant="h6">Board Members </Typography>
        <List>
          {currentBoard.members &&
            currentBoard.members.map((member: any) => (
              <ListItem
                sx={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}
              >
                <Typography>{member.username} </Typography>

                <IconButton
                  onClick={() => handleDeleteBoardMember(member.BoardMember.id)}
                  size="large"
                  edge="start"
                  color="inherit"
                >
                  <PersonRemoveIcon />
                </IconButton>
              </ListItem>
            ))}
        </List>

        <TextField
          id="standard-basic"
          placeholder="Add Member"
          color="secondary"
          size="small"
          variant="standard"
          sx={{ pr: 2, pl: 2 }}
          value={boardMemberName}
          onChange={handleChangeBoardMemberName}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  sx={{ mb: 1 }}
                  edge="end"
                  size="small"
                  title="Kaydet"
                  onClick={handleCreateBoardMember}
                  aria-label="delete"
                >
                  <PersonAddAltRoundedIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </Drawer>
  );
};

export default BoardMemberDrawer;
