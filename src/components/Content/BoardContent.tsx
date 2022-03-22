import React, { useEffect, useState } from "react";

import ListsSection from "./ListsSection";
import BoardNav from "./BoardNav";
import EditCardItemModal from "./EditCardItemModal";
import board from "../../services/odevserver/controllers/board";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../Store/store";
import { fetchBoardById } from "../../features/boardSlice";
import { Box } from "@mui/material";

const BoardContent = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams();
  console.log("---board content---")
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
