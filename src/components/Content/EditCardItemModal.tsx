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
import BasicDatePicker from "./BasicDatePicker";import CheckLists from "./CheckLists";
import Comments from "./Comments";
import Tags from "./Tags";
import { useAppDispatch, useAppSelector } from "../../Store/store";
import { hideEditCardItemModal, showEditCardItemModal } from "../../features/modalSlice";


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

export default function EditCardItemModal() {
  
  const modals = useAppSelector(state => state.modals)
  const dispatch = useAppDispatch()
  
 
  return (
    <div>
      <Button variant="outlined" onClick={() => dispatch(showEditCardItemModal())}>
        Open form dialog
      </Button>
      <Dialog open={modals.editCardItemModal} onClose={() => dispatch(hideEditCardItemModal())}>
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

          {/*@todo - Conditional rendering olucak label varsa labels gösterilicek <MultipleSelectChip /> çalışmadı düzgün */}

          {true && <Tags />}
          
          {true && <CheckLists />}

          <Comments />
          

          
        </DialogContent>
        
      </Dialog>
    </div>
  );
}
