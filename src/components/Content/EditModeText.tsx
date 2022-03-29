import { Card, IconButton, InputAdornment, TextField } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../Store/store";
import { fetchBoardById, updateList } from "../../features/boardSlice";

const EditModeText = ({ listId,setisEditModeOpen,order }: any) => {
  //for title editing widget

  const [listTitle, setListTitle] = useState("");

  const currentBoard = useAppSelector((state) => state.boards.currentBoard);
  const dispatch = useAppDispatch();

  //for edit list title
  const handleSave = (event: any) => {
    //@todo - api gelince buraya istek atılıcak (List title gönderilecek)
    event.stopPropagation();
    updateList(listId, listTitle, currentBoard.id,order).then(() =>
      dispatch(fetchBoardById(currentBoard.id))
    );
    setisEditModeOpen(false)
    setListTitle("");
    
  };
  return (
    <Card>
      <TextField
        id="standard-basic"
        label="Standard"
        color="warning"
        onChange={(event) => setListTitle(event.currentTarget.value)}
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
  );
};

export default EditModeText;
