import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import EditCardItemModalToolbar from "./EditCardItemModalToolbar";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import {
  Avatar,
  Dialog,
  DialogContent,
  DialogContentText,
  TextField,
} from "@mui/material";
import BasicDatePicker from "./BasicDatePicker";


const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [btnDisabled, setBtnDisabled] = useState(true);
  //@todo buton disable olayına tam karar vermedim olursa handle change eklenecek
  const handleCommentInputChange = (event: any) => {
    const value = event.currentTarget.value;
    setBtnDisabled(!value);
    
  };
  
  //dialog section
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  //end dialog section
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <EditCardItemModalToolbar />
        <DialogContent>
          <DialogContentText>
            ACME Frontend Application - Upcoming Features (buradaki bilgiler
            state/Apiden gelip güncellenecektir)
          </DialogContentText>
          <TextField
            margin="dense"
            id="title"
            label="Title*"
            type="text"
            fullWidth
            variant="outlined"
          />
          <TextField
            margin="dense"
            id="Description"
            multiline
            rows={3}
            label="Description"
            type="text"
            fullWidth
            variant="outlined"
          />

          <BasicDatePicker />

          {/*@todo - Conditional rendering olucak label varsa labels gösterilicek */}
          
          


          <Typography variant="h6" component="div">
            <CommentOutlinedIcon /> Comments
          </Typography>

          
          {/* Burası bir div olup içi comment group olabilir */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 10,
            }}
          >
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <TextField
              margin="dense"
              id="comment"
              label="Add comment"
              type="text"
              fullWidth
              onChange={handleCommentInputChange}
              variant="outlined"
            />
          </div>
          <Button variant="contained" disabled = {btnDisabled}>
            Add
          </Button>

          {/*@todo conditional rendering ile comment geçmişini getirebiliriz */}
        </DialogContent>
        
      </Dialog>
    </div>
  );
}
