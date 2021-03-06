import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import List from "@mui/material/List";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ListItemComp from "./ListItemComp";
import ClearIcon from "@mui/icons-material/Clear";
import {
  Box,
  ClickAwayListener,
  InputAdornment,
  ListItem,
  Typography,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../Store/store";
import {
  createCard,
  createList,
  deleteCard,
  fetchBoardById,
  updateCard,
  updateList,
} from "../../features/boardSlice";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

const ListsSection = () => {
  const [isCreateListOpen, setIsCreateListOpen] = useState(false);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [listTitle, setListTitle] = useState("");

  const currentBoard = useAppSelector((state) => state.boards.currentBoard); //board üzerinde bütün bilgiler mevcut(lists,cards vb.)
  const dispatch = useAppDispatch();

  //listelerimizi sort edelim
  console.log(currentBoard)
  const sortedListsArray = [...currentBoard.lists]
  const newOrderedLists = sortedListsArray.sort(
    (a: any, b: any) => a.order - b.order
  );

  const sortedListForBoard = { ...currentBoard, lists: newOrderedLists };

  const handleCreateList = () => {
    setIsCreateListOpen(true);
  };

  const handleAddList = (e: any) => {
    //@todo - apiye istek atılıp liste eklenicek ve sayfa render edelicek mantıgıyla hareket ettim
    //state güncellenicek
    e.stopPropagation();
    createList(listTitle, currentBoard.id,currentBoard.lists.length).then(() =>
      dispatch(fetchBoardById(currentBoard.id))
    );

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

  async function handleOnDragEnd(result: any) {
    //  console.log(result);
    if (!result.destination) return;
    const { source, destination, type } = result;

    const sourceList = currentBoard.lists.find(
      (list: any) => list.id == source.droppableId
    );

    const destList = currentBoard.lists.find(
      (list: any) => list.id == destination.droppableId
    );

    if (type === "list") {
      
      const items = [...sortedListForBoard.lists] // zaten sıralı

      const [reorderedItem] = items.splice(result.source.index, 1);
      console.log("silinen item", reorderedItem);
      items.splice(result.destination.index, 0, reorderedItem);
      //işlem sonucu

      items.forEach((list: any, index: any) => {
        console.log(`${list.title} ${index}`);
        updateList(list.id, list.title,currentBoard.id,index).then(() =>
          dispatch(fetchBoardById(currentBoard.id))
        );
      });
      
    }

    if (type === "card" && source.droppableId !== destination.droppableId) {
      //farklı liste ise

      const sourceItems = [...sourceList.cards].sort(
        (a: any, b: any) => a.order - b.order
      );
      const destItems = [...destList.cards].sort(
        (a: any, b: any) => a.order - b.order
      );
      const [reorderedItem] = sourceItems.splice(result.source.index, 1);
      //ekstradan listeye silmek gerekli ve  ekstradan listeye eklemek

      destItems.splice(result.destination.index, 0, reorderedItem);
      
      updateCard(reorderedItem.id,{listId: destList.id})
    
      sourceItems.forEach((newCard: any, index: any) => {
        updateCard(newCard.id, { order: index }).then(() =>
          dispatch(fetchBoardById(currentBoard.id))
        );
      });
      console.log(destItems);

      destItems.forEach((newCard: any, index: any) => {
        newCard.id &&
          updateCard(newCard.id, { order: index }).then(() =>
            dispatch(fetchBoardById(currentBoard.id))
          );
      });
    } else if (
      type === "card" &&
      source.droppableId === destination.droppableId
    ) {
      //aynı liste ise
      console.log("aynı liste işlemi");

      const items = [...sourceList.cards].sort(
        (a: any, b: any) => a.order - b.order
      );

      const [reorderedItem] = items.splice(result.source.index, 1);
      console.log("silinen item", reorderedItem);
      items.splice(result.destination.index, 0, reorderedItem);
      //işlem sonucu

      items.forEach((newCard: any, index: any) => {
        console.log(`${newCard.title} ${index}`);
        updateCard(newCard.id, { order: index }).then(() =>
          dispatch(fetchBoardById(currentBoard.id))
        );
      });
    }
  }

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Box sx={{ display: "flex", alignItems: "start" }}>
        <Droppable
          droppableId={String(currentBoard.id)}
          type="list"
          direction="horizontal"
        >
          {(provided) => (
            <List
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="lists-section-list"
              sx={{ display: "flex", gap: 5, m: 2, alignItems: "start" }}
            >
              {/* Flex olarak gelecekler */}

              {currentBoard.lists &&
                sortedListForBoard.lists.map((list: any, index: any) => (
                  <ListItemComp key={list.id} list={list} idx={index} />
                ))}

              {provided.placeholder}
            </List>
          )}
        </Droppable>

        {/* Create a list card / card üstüne tıklama verince içindeki butana tıklayamıyorum*/}
        <Card sx={{ minWidth: 235, height: 110, mt: 3 }}>
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
              <ClickAwayListener onClickAway={() => setIsCreateListOpen(false)}>
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
              </ClickAwayListener>
            )}
          </CardContent>
        </Card>
      </Box>
    </DragDropContext>
  );
};

export default ListsSection;
