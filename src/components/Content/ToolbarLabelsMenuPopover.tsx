import {
  Checkbox,
  FormControlLabel,
  List,
  ListItem,
  Popover,
} from "@mui/material";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import { Box } from "@mui/system";
import { useAppDispatch, useAppSelector } from "../../Store/store";
import { Label } from "../../services/odevserver/controllers/label/types";

import { useParams } from "react-router-dom";
import {
  createCardLabel,
  deleteCardLabel,
  fetchBoardById,
} from "../../features/boardSlice";

const ToolbarLabelsMenuPopover = (props: any) => {
  const serviceLabels = useAppSelector((state) => state.boards.serviceLabels); //board üzerinde bütün bilgiler mevcut(lists,cards vb.)
  const currentBoard = useAppSelector((state) => state.boards.currentBoard);
  const dispatch = useAppDispatch();
  const { boardId } = useParams(); //urlden alıyoruz boardıdmizi
  //popper for checklist icon button

  const handleOnClose = () => {
    props.setAnchorEl(null);
  };

  const open = Boolean(props.anchorEl);
  const id = open ? "simple-popper" : undefined;

  //popper end

  const handleCheckboxChange = (event: any) => {
    //checked değerine göre istek aticaz idside mevcut artık elimizde

    if (event.target.checked) {
      //seçili hale gelirse ekleme yapılacak
      console.log("ekleyecek");
      createCardLabel(props.currentCard.id, Number(event.target.id)).then(() =>
        dispatch(fetchBoardById(currentBoard.id))
      );
    } else {
      //çıkarma işlemi yapılacak
      console.log("silecek");

      let deletedLabel = props.currentCard.labels.find(
        (label: any) => event.target.id == label.id
      );
      console.log(deletedLabel.CardLabel.id);
      deleteCardLabel(Number(deletedLabel.CardLabel.id)).then(() =>
        dispatch(fetchBoardById(currentBoard.id))
      );
    }
  };
  return (
    <div>
      {/* popover labels  */}
      <Popover
        style={{ zIndex: 1400 }}
        id={id}
        open={open}
        onClose={handleOnClose}
        anchorEl={props.anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Box
          sx={{
            border: 1,
            p: 1,
            bgcolor: "background.paper",
            width: 200,
          }}
        >
          <List>
            {serviceLabels.map((item: Label) => (
              <ListItem>
                <FormControlLabel
                  control={
                    <Checkbox
                      id={item.id.toString()}
                      name={item.title}
                      checked={props.currentCard.labels.find(
                        (c: any) => c.id === item.id
                      ) }
                      onChange={handleCheckboxChange}
                      disableRipple
                    />
                  }
                  label={item.title}
                ></FormControlLabel>
                <LabelOutlinedIcon />
              </ListItem>
            ))}
          </List>
        </Box>
      </Popover>
    </div>
  );
};

export default ToolbarLabelsMenuPopover;
