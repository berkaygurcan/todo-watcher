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
import { Box, InputAdornment } from "@mui/material";

const ListsSection = () => {
  const [isCreateListOpen, setIsCreateListOpen] = useState(false);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [listTitle, setListTitle] = useState("");

  const handleCreateList = () => {
    setIsCreateListOpen(true);
  };

  const handleAddList = () => {
    //@todo - apiye istek atılıp liste eklenicek ve sayfa render edelicek mantıgıyla hareket ettim
    //state güncellenicek

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
      sx={{ display: "flex", gap: 10, m: 3}}
    >
      {/* Flex olarak gelecekler */}
      <ListItemComp />
      <ListItemComp />
      <ListItemComp />
     
      {/* Create a list card / card üstüne tıklama verince içindeki butana tıklayamıyorum*/}
      <Card sx={{ minWidth: 200, height: 120 }}>
        <CardContent>
          {!isCreateListOpen ? (
            <Box>
              <IconButton color="primary" onClick={handleCreateList}>
                <AddCircleOutlineIcon />
              </IconButton>
              Add a List
            </Box>
          ) : (
            <Box sx={{ maxWidth: 200}}>
              <TextField
                id="filled-basic"
                onChange={handleChange}
                label="Filled"
                variant="filled"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setIsCreateListOpen(false)}
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
            </Box >
          )}
        </CardContent>
      </Card>

      {/*@todo- Map yapılıp liste elemanları dönülücek (ListItem Şeklinde)*/}
    </List>
  );
};

export default ListsSection;
