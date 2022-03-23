import { List } from "@mui/material";
import React from "react";
import CheckListItem from "./CheckList";

const CheckLists = ({ checklists }: any) => {
  
  return (
    <List>
      {/* Burada checklist ıtem sayısına göre map edilip checklist ıtemler listenelenecek */}
      
      {checklists.map((checklist: any) => (
        
        <CheckListItem key={checklist.id} checklist = {checklist}/>
      ))}
    </List>
  );
};

export default CheckLists;
