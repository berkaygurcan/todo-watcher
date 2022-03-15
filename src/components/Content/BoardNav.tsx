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
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/system";

const BoardNav = () => {
  const [isEditModeOpen, setisEditModeOpen] = useState(false);
  const [field, setField] = useState("");

  const navigate = useNavigate();

  const handleChange = (event: any) => {
    const value = event.currentTarget.value;
    setField(value);
  };

  const handleSave = () => {
    //@todo - api gelince buraya istek atılıcak (field gönderilecek)
    setisEditModeOpen(false);
    setField("");
  };

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
                label="Standard"
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
              <VisibilityIcon fontSize="small" /> Navbar Title
            </h2>
          )}
        </Box>
        <div />
        <IconButton size="large" edge="start" color="inherit" aria-label="menu">
          <SettingsIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default BoardNav;
