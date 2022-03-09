import React, { useState } from "react";
import Container from "@mui/material/Container";
import SettingsIcon from "@mui/icons-material/Settings";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { IconButton } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";

const BoardContent = () => {
  const [isEditModeOpen, setisEditModeOpen] = useState(true);
  const [field, setField] = useState("");

  const handleChange = (event: any) => {
    const value = event.currentTarget.value;
    setField(value);
  };

  const handleSave = () => {
        //api gelince buraya istek atılıcak
        setisEditModeOpen(false)
        setField("");
     
  }

  return (
    <Container>
      {/* sonrasında css ayrı bir dosyada verilebilir */}
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
        <Button variant="contained" style={{ borderRadius: 10 }}>
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

      <div></div>
    </Container>
  );
};

export default BoardContent;
