import * as React from "react";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { Box, ListItem, Typography } from "@mui/material";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import { useAppDispatch, useAppSelector } from "../../Store/store";
import {
  createCardLabel,
  deleteCardLabel,
  fetchBoardById,
} from "../../features/boardSlice";

export default function Tags({ currentCardLabels, cardId }: any) {
  const serviceLabels = useAppSelector((state) => state.boards.serviceLabels); //board üzerinde bütün bilgiler mevcut(lists,cards vb.)
  const dispatch = useAppDispatch();
  const currentBoard = useAppSelector((state) => state.boards.currentBoard);

  const labels = [
    { id: 1, title: "High Priotiry   High Priority", color: "primary" },
    { id: 2, title: "Design", color: "secondary" },
    { id: 3, title: "App", color: "success" },
    { id: 4, title: "Feature", color: "error" },
  ];

  const handleAutoComplateChange = (
    event: any,
    value: any,
    reason: string,
    details?: any
  ) => {
    if (reason === "selectOption") {
      const selectedOptionId = details.option.id;
      //autocomplate value içerisinde seçilmişse eklenmiştir birdaha istek atarsak servis çöker
      let isExist = currentCardLabels.some((item: any) => {
        return item.id === selectedOptionId;
      });

      if (!isExist) {
        createCardLabel(cardId, selectedOptionId).then(() =>
          dispatch(fetchBoardById(currentBoard.id))
        );
      }
    } else if (reason === "removeOption") {
      console.log("removeoption");
      const deletedOptionId = details.option.CardLabel.id;
      console.log(deletedOptionId);

      deleteCardLabel(deletedOptionId).then(() =>
        dispatch(fetchBoardById(currentBoard.id))
      );
    }
  };

  return (
    <Box sx={{ mt: 2, mb: 2 }}>
      <Typography variant="h6" component="div">
        <LabelOutlinedIcon /> Labels
      </Typography>
      <Stack spacing={3} sx={{ width: 500 }}>
        <Autocomplete
          multiple
          value={currentCardLabels}
          options={serviceLabels}
          getOptionLabel={(option) => option.title}
          onChange={handleAutoComplateChange}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip
                style={{ backgroundColor: option.color }}
                label={option.title}
                color={"error"}
                {...getTagProps({ index })}
              />
            ))
          }
          renderInput={(params) => (
            <TextField
              {...params}
              variant="standard"
              label="Labels"
              placeholder="Select Multiple Labels"
            />
          )}
        />
      </Stack>
    </Box>
  );
}
