import React, { useEffect, useState } from "react";
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
import CheckLists from "./CheckLists";
import Comments from "./Comments";
import Tags from "./Tags";
import { useAppDispatch, useAppSelector } from "../../Store/store";
import {
  hideEditCardItemModal,
  showEditCardItemModal,
} from "../../features/modalSlice";
import { DatePicker, LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import useForm from "../../hooks/useForm";
import { fetchBoardById, updateCard } from "../../features/boardSlice";

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

export default function EditCardItemModal({ currentCard , handleClose , open }: any) {
 
  
  const initObject = {
    title: currentCard.title,
    description: currentCard.desc,
    duedate: currentCard.duedate 
  };

  const [formData, setFormData] = useState(initObject);
  

  const currentBoard = useAppSelector((state) => state.boards.currentBoard);
  const modals = useAppSelector((state) => state.modals);
  const dispatch = useAppDispatch();

  const handleChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { name, value } = event.currentTarget;
    setFormData((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = () => {
    if(!formData.duedate) {
      setFormData((prev: any) => ({ ...prev, duedate: new Date().toISOString().slice(0, 10) })); 
    }
    updateCard(currentCard.id, formData).then(() =>
      dispatch(fetchBoardById(currentBoard.id)).then(() => {
      })
    );
   
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={() => handleClose()}
      >
        <EditCardItemModalToolbar currentCard={currentCard}  handleClose= {handleClose}/>
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
            onChange={handleChange}
            value={formData.title}
            variant="outlined"
            name="title"
            
          />
          <TextField
            margin="dense"
            id="Description"
            name="description"
            multiline
            rows={3}
            label="Description"
            type="text"
            fullWidth
            onChange={handleChange}
            value={formData.description}
            variant="outlined"
            sx={{mb:1}}
          />

          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Date"
              value={formData.duedate}
              onChange={(newValue) => {
                 setFormData((prev: any) => ({ ...prev, duedate: new Date(newValue).toISOString().slice(0, 10)}));
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          
          <Button sx={{ml:3,mt:1}} variant="contained" onClick={() => handleUpdate()}>Test Update Button</Button>

          {/*@todo - Conditional rendering olucak label kısmı sıkıntılı oldugu için şimdi atladım */}

          <Tags currentCardLabels = {currentCard.labels} cardId = {currentCard.id} />
          {<CheckLists checklists= {currentCard.checklists}/>}

          <Comments comments = {currentCard.comments} cardId = {currentCard.id}/>
        </DialogContent>
      </Dialog>
    </div>
  );
}
