import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import List from "@mui/material/List";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ListItemComp from "./ListItemComp";
import ClearIcon from "@mui/icons-material/Clear";
import { Box, InputAdornment, ListItem, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../Store/store";
import { createList, fetchBoardById } from "../../features/boardSlice";

const ListsSection = () => {
  const [isCreateListOpen, setIsCreateListOpen] = useState(false);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [listTitle, setListTitle] = useState("");
  console.log("---list section---")
  const currentBoard = useAppSelector((state) => state.boards.currentBoard); //board üzerinde bütün bilgiler mevcut(lists,cards vb.)
  const dispatch = useAppDispatch();

  const handleCreateList = () => {
    setIsCreateListOpen(true);
  };

  const handleAddList = (e:any) => {
    //@todo - apiye istek atılıp liste eklenicek ve sayfa render edelicek mantıgıyla hareket ettim
    //state güncellenicek
    e.stopPropagation();
    createList(listTitle,currentBoard.id).then(
      () => dispatch(fetchBoardById(currentBoard.id))
    )
    
    //@todo - istek yapıldıktan sonra isCreateListOpen false değerine ayarlanmalı
    setIsCreateListOpen(false);
    setBtnDisabled(!false);
    setListTitle("");
  };

  const handleChange = (event: any) => {
    const value = event.currentTarget.value;
    //değer varsa butonu aktif et
    // https://stackoverflow.com/questions/52868369/enable-or-disable-a-button-based-on-a-textfield-value-in-react-js

    setBtnDisabled(!value);
    setListTitle(value);
  };

  return (
    <List
      className="lists-section-list"
      sx={{ display: "flex", gap: 5, m: 2, alignItems: "start" }}
    >
      {/* Flex olarak gelecekler */}

      {currentBoard.lists &&
        currentBoard.lists.map(
          (
            
            list: any //varsa döndür
          ) => <ListItemComp key = {list.id}  list = {list}/>
        )}

      {/* Create a list card / card üstüne tıklama verince içindeki butana tıklayamıyorum*/}
      <Card sx={{ minWidth: 235, height: 110 }}>
        <CardContent onClick={handleCreateList}>
          {!isCreateListOpen ? (
            <Box
              sx={{
                textAlign: "center",
                mt: 2,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <AddCircleOutlineIcon />
              <Typography gutterBottom>Add a list</Typography>
            </Box>
          ) : (
            <Box sx={{ maxWidth: 200 }}>
              <TextField
                onChange={handleChange}
                label="Filled"
                variant="filled"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={(e) => {
                          e.stopPropagation(); // event yayılmasını engellemessek card content onclick de çalışacaktır.
                          setIsCreateListOpen(false);
                        }}
                        edge="end"
                        color="primary"
                      >
                        <ClearIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Button
                variant="contained"
                onClick={handleAddList}
                disabled={btnDisabled}
              >
                Add
              </Button>
            </Box>
          )}
        </CardContent>
      </Card>

     
    </List>
  );
};

export default ListsSection;
