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
import {
  createCardLabel,
  deleteCardLabel,
  fetchBoardById,
} from "../../features/boardSlice";
import { useParams } from "react-router-dom";

const ToolbarLabelsMenuPopover = (props: any) => {
  const serviceLabels = useAppSelector((state) => state.boards.serviceLabels); //board üzerinde bütün bilgiler mevcut(lists,cards vb.)
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
      //true ise ekleme isteği atacağız
      console.log("ekleyecek");
      createCardLabel(props.currentCard.id, Number(event.target.id)).then(() =>
        dispatch(fetchBoardById(Number(boardId)))
      );
    } else {
      console.log("silecek");
      //false ise silme isteği atacağız
      //ama silmek istediğimiz kayıtın id değeri lazım ondan currentCard içerisinden find ile bulmamız gerekli
      const deletionCardLabelId = props.currentCard.labels.find(
        (item: any) => item.title === event.target.name
      );
      deletionCardLabelId &&
        deleteCardLabel(deletionCardLabelId).then(() =>
          dispatch(fetchBoardById(Number(boardId)))
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
