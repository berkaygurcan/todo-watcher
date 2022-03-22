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

export default function EditCardItemModal({ currentCard }: any) {
  const [valueDate, setValueDate] = React.useState<Date | null>(null);

  console.log(currentCard);
  const initObject = {
    title: currentCard.title,
    description: currentCard.desc,
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
    console.log(formData);

    updateCard(currentCard.id, formData).then(() =>
      dispatch(fetchBoardById(currentBoard.id))
    );
    setFormData(initObject);
  };

  return (
    <div>
      <Dialog
        open={modals.editCardItemModal}
        onClose={() => dispatch(hideEditCardItemModal())}
      >
        <EditCardItemModalToolbar currentCard={currentCard} />
        <DialogContent>
          <DialogContentText>
            ACME Frontend Application - Upcoming Features (buradaki bilgiler
            state/Apiden gelip güncellenecektir)
          </DialogContentText>
          <Button onClick={() => handleUpdate()}>Test Button</Button>

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
          />

          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Date"
              value={valueDate}
              onChange={(newValue) => {
                console.log("dönen deger = ", newValue);
                // setFormData((prev: any) => ({ ...prev, duedate: newValue}));
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>

          {/*@todo - Conditional rendering olucak label varsa labels gösterilicek <MultipleSelectChip /> çalışmadı düzgün */}

          {currentCard.labels.length > 0 && <Tags />}

          {currentCard.checklists > 0 && <CheckLists />}

          <Comments />
        </DialogContent>
      </Dialog>
    </div>
  );
}
