import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import List from "@mui/material/List";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

const ListsSection = () => {
  const [isCreateListOpen, setIsCreateListOpen] = useState(false);
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [listTitle, setListTitle] = useState("");

  const handleCreateList = () => {
    setIsCreateListOpen(true);
  };

  const handleChange = (event: any) => {
    const value = event.currentTarget.value;
    
    //değer varsa butonu aktif et
    // https://stackoverflow.com/questions/52868369/enable-or-disable-a-button-based-on-a-textfield-value-in-react-js
    setBtnDisabled(!value)
    setListTitle(value);
    
  };

  return (
    <List>
      <Card sx={{ width: 250, height: 150 }}>
        <CardContent>
          {!isCreateListOpen ? (
            <div>
              <IconButton color="primary" onClick={handleCreateList}>
                <AddCircleOutlineIcon />
              </IconButton>
              Add a List
            </div>
          ) : (
            <React.Fragment>
              <TextField id="filled-basic" onChange={handleChange} label="Filled" variant="filled" />
              <Button variant="contained" disabled = {btnDisabled}>
                Add
              </Button>
            </React.Fragment>
          )}
        </CardContent>
      </Card>

      {/*@todo- Map yapılıp liste elemanları dönülücek (ListItem Şeklinde)*/}
    </List>
  );
};

export default ListsSection;
