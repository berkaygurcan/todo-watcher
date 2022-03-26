import React, { useEffect, useState } from "react";

import ListsSection from "./ListsSection";
import BoardNav from "./BoardNav";
import EditCardItemModal from "./EditCardItemModal";
import board from "../../services/odevserver/controllers/board";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../Store/store";
import { fetchBoardById, fetchServiceLabels } from "../../features/boardSlice";
import { Box } from "@mui/material";
import { DragDropContext } from "react-beautiful-dnd";

const BoardContent = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchBoardById(Number(id)));
  }, []);

  return (
    <React.Fragment>
      {/* sonrasında css ayrı bir dosyada verilebilir  component yapabilirsin ileride*/}

      <BoardNav />

      <Box>
        {/* This component contains our lists belonging to the selected board. */}
        
          <ListsSection />
        
      </Box>
    </React.Fragment>
  );
};

export default BoardContent;
