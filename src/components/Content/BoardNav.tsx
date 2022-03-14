import React, { useState } from 'react'
import SettingsIcon from "@mui/icons-material/Settings";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { IconButton } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import { useNavigate } from 'react-router-dom';

const BoardNav = () => {

    const [isEditModeOpen, setisEditModeOpen] = useState(false);
    const [field, setField] = useState("");

    const navigate = useNavigate()
  
    const handleChange = (event: any) => {
      const value = event.currentTarget.value;
      setField(value);
    };
  
    const handleSave = () => {
          //@todo - api gelince buraya istek atılıcak (field gönderilecek)
          setisEditModeOpen(false)
          setField("");
       
    }

    const handleBackToBoards = () => {
      navigate("/boards")
    }
  return (
    <nav
        className="content-nav"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#333",
          padding: 10,
        }}
      >
        <Button variant="contained" onClick={handleBackToBoards} style={{ borderRadius: 10 }}>
          <DashboardIcon /> Boards{" "}
        </Button>
        {isEditModeOpen ? (
          <div>
            <TextField
              id="standard-basic"
              label="Standard"
              variant="standard"
              onChange={handleChange}
            />
            <IconButton onClick={handleSave} edge="end" title="Kaydet" aria-label="delete">
              <SaveIcon />
            </IconButton>
          </div>
        ) : (
          <h2 onClick={() => setisEditModeOpen(true)}>Navbar Title</h2>
        )}
        <SettingsIcon />
      </nav>
  )
}

export default BoardNav
