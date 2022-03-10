import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Button, Menu, MenuItem, TextField } from "@mui/material";
import CardList from "./CardList";

const ListItem = () => {
  const [isCreateCardOpen, setIsCreateCardOpen] = useState(false);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [cardTitle, setCardTitle] = useState("");

  const handleOpenAddCard = () => {
    setIsCreateCardOpen(true);
  };

  // menu section
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // end menu section

  const handleAddCard = () => {
    //card işlemi yapılıcak ve istek atılıcak
    //state güncellenecek böylece sayfa tekrar oluşturulunca en altta card ekle ve content kısmında cardlarımız görünücek

    setIsCreateCardOpen(false);
    setBtnDisabled(!false);
    setCardTitle("");
  };

  const handleChange = (event: any) => {
    const value = event.currentTarget.value;

    setBtnDisabled(!value);
    setCardTitle(value);
  };

  //not - ListItem bir carddan oluşur ve içerisinde card listesi barındırır
  return (
    <div>
      <Card sx={{ }}>
        <CardHeader
          action={
            <IconButton
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <MoreVertIcon />
            </IconButton>
          }
          title="List Title"
        />

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {/*@todo - Bu fonksiyonların eventleri eklenecek  */}
          <MenuItem onClick={handleClose}>Remove List</MenuItem>
          <MenuItem onClick={handleClose}>Rename List</MenuItem>
        </Menu>

        <CardContent>
          {/* Burada Card listeleri olacak her Liste İteminin map işlemi olacak cardlar için */}

          <CardList />
        </CardContent>
        {/* isCreateCardOpen state değerine göre render edilecek */}

        {!isCreateCardOpen ? (
          <Button onClick={handleOpenAddCard} fullWidth>
            <AddIcon /> Add Chart
          </Button>
        ) : (
          <React.Fragment>
            <TextField
              fullWidth
              id="filled-basic"
              onChange={handleChange}
              label="Filled"
              variant="filled"
            />
            <Button
              variant="contained"
              onClick={handleAddCard}
              disabled={btnDisabled}
            >
              Add
            </Button>
          </React.Fragment>
        )}
      </Card>
    </div>
  );
};

export default ListItem;
