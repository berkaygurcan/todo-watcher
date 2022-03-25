import React, { useState } from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import {
  AppBar,
  Card,
  IconButton,
  InputAdornment,
  Toolbar,
} from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/system";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import { useAppDispatch, useAppSelector } from "../../Store/store";
import { fetchBoardById, updateBoardById } from "../../features/boardSlice";

import BoardMemberDrawer from "./BoardMemberDrawer";

const BoardNav = () => {
  const [isEditModeOpen, setisEditModeOpen] = useState(false);
  const [field, setField] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const currentBoard = useAppSelector((state) => state.boards.currentBoard);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleChange = (event: any) => {
    const value = event.currentTarget.value;
    setField(value);
  };

  const handleSave = () => {
    dispatch(updateBoardById({ id: currentBoard.id, title: field }));
    dispatch(fetchBoardById(currentBoard.id));
    setisEditModeOpen(false);
    setField("");
  };

  const handleCloseDrawer = () => setIsDrawerOpen(false);
  const handleOpenDrawer = () => setIsDrawerOpen(true);

  const handleBackToBoards = () => {
    navigate("/boards");
  };
  return (
    <AppBar position="static" sx={{ bgcolor: "#2E3B55" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Button
          variant="contained"
          onClick={handleBackToBoards}
          style={{ borderRadius: 10 }}
        >
          <DashboardIcon /> Boards{" "}
        </Button>
        <div />
        <Box sx={{ mr: 5 }}>
          {isEditModeOpen ? (
            <Card>
              <TextField
                id="standard-basic"
                placeholder="add info"
                color="warning"
                onChange={handleChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleSave}
                        edge="end"
                        title="Kaydet"
                        aria-label="delete"
                      >
                        <SaveIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Card>
          ) : (
            <h2
              style={{ color: "white" }}
              onClick={() => setisEditModeOpen(true)}
            >
              <VisibilityIcon fontSize="small" /> {currentBoard.title}
            </h2>
          )}
        </Box>

        
        <div />
        <IconButton
          onClick={handleOpenDrawer}
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
        >
          <RecentActorsIcon />
        </IconButton>
      </Toolbar>
      {/* Member Board UI Section */}
      <BoardMemberDrawer
        handleCloseDrawer={handleCloseDrawer}
        isDrawerOpen={isDrawerOpen}
      />
    </AppBar>
  );
};

export default BoardNav;
