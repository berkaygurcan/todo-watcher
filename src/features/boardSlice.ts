import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import board from "../services/odevserver/controllers/board";
import boardMember from "../services/odevserver/controllers/boardMember";
import card from "../services/odevserver/controllers/card";
import cardLabel from "../services/odevserver/controllers/cardLabel";
import checklist from "../services/odevserver/controllers/checklist";
import checklistItem from "../services/odevserver/controllers/checklistItem";
import comment from "../services/odevserver/controllers/comment";
import label from "../services/odevserver/controllers/label";
import { Label } from "../services/odevserver/controllers/label/types";
import list from "../services/odevserver/controllers/list";

export interface State {
  value: any[];
  currentBoard: any;
  currentCard: any;
  serviceLabels: Label[];

}

const initialState: State = {
  value: [],
  currentBoard: {},
  currentCard: {},
  serviceLabels: []
};

//board functions
export const fetchBoardsData = createAsyncThunk(
  "board/fetchBoardsData",
  async () => {
    const response = await board.list();
    return response.data;
  }
);

export const fetchBoardById = createAsyncThunk(
  "board/fetchBoardById",
  async (id: number) => {
    const response = await board.getById(id);
    return response.data;
  }
);

export const updateBoardById = createAsyncThunk(
  "board/updateBoardById",
  async ({ id, title }: any) => {
    const response = await board.update(id, title);
  }
);

export const deleteBoardById2 = createAsyncThunk(
  "board/updateBoardById",
  async ({ id }: any) => {
    const response = await board.destroy(id);
  }
);

export const deleteBoardById = async (id: number) => {
  const response = await board.destroy(id);
  return response.data;
};


export const createBoard = async () => {
  const response = await board.create({ title: "Untitled Board" });
  return response.data;
};

//list functions

export const createList = async (title: string, boardId: number) => {
  const response = await list.create({title,boardId});
  return response.data;
};

export const updateList = async (id: number,title: string, boardId: number) => {
  const response = await list.update(id,{title,boardId});
  return response.data;
};

export const deleteList = async (id: number) => {
  const response = await list.destroy(id);
  return response.data;
};


export const fetchListById = async (id: number) => {
  const response = await list.getById(id);
  return response.data;
};

export const fetchListsData = async () => {
  const response = await list.list();
  return response.data;
};

//card functions

export const createCard = async (title: string, listId: number) => {
  const response = await card.create({title,listId});
  return response.data;
};

export const updateCard = async (id: number,formData:any) => {
  const response = await card.update(id,formData);
  return response.data;
};

export const deleteCard = async (id: number) => {
  const response = await card.destroy(id);
  return response.data;
};

export const fetchCardById = createAsyncThunk(
  "board/fetchCardById",
  async (id: number) => {
    const response = await card.getById(id);
    return response.data;
  }
);


export const fetchCardsData = async () => {
  const response = await card.list();
  return response.data;
};

// label(service) functions

export const fetchServiceLabels = createAsyncThunk(
  "label/fetchServiceLabelsData",
  async () => {
    const response = await label.list()
    return response.data;
  }
);

//card-label functions

export const createCardLabel = async (cardId: number, labelId: number) => {
  const response = await cardLabel.create({cardId,labelId})
  return response.data;
};


export const deleteCardLabel = async (id: number) => {
  const response = await cardLabel.destroy(id);
  return response.data;
};

//checklist functions

export const createChecklist = async (title: string, cardId: number) => {
  const response = await checklist.create({title,cardId});
  return response.data;
};

export const updateChecklist = async (id: number,title:string) => {
  const response = await checklist.update(id,{title});
  return response.data;
};

export const deleteChecklist = async (id: number) => {
  const response = await checklist.destroy(id);
  return response.data;
};

//checklist-item functions

export const createChecklistItem = async (title: string,isChecked:boolean ,checklistId: number) => {
  const response = await checklistItem.create({checklistId,isChecked,title});
  return response.data;
};

export const updateChecklistItem  = async (id: number,title:string,isChecked:boolean) => {
  const response = await checklistItem.update(id,{title,isChecked});
  return response.data;
};

export const deleteChecklistItem  = async (id: number) => {
  const response = await checklistItem.destroy(id);
  return response.data;
};

//comment func

export const createComment = async (cardId: number, message: string) => {
  const response = await comment.create({cardId,message})
  return response.data;
};

export const deleteComment = async (id: number) => {
  const response = await comment.destroy(id);
  return response.data;
};


//boardMember func

export const createBoardMember = async (boardId: number, username: string) => {
  const response = await boardMember.create({boardId,username})
  return response.data;
};

export const deleteBoardMember = async (id: number) => {
  const response = await boardMember.destroy(id);
  return response.data;
};

export const fetchBoardMemberListById = async (id: number) => {
  const response = await boardMember.list(id);
  return response.data;
};


//slice

export const categorySlice = createSlice({
  name: "boards",
  initialState,
  reducers: {
    set: (state, action: PayloadAction<any>) => {
      state.value = action.payload;
    },
    setCurrentBoard: (state, action: PayloadAction<any>) => {
      state.currentBoard = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBoardsData.fulfilled, (state, action) => {
        state.value = action.payload;
      })

      .addCase(fetchBoardById.fulfilled, (state, action) => {
        state.currentBoard = action.payload;
      })
      

      .addCase(fetchCardById.fulfilled, (state, action) => {
        state.currentCard = action.payload;
      })

      .addCase(fetchServiceLabels.fulfilled, (state, action) => {
        state.serviceLabels = action.payload;
      })
     
  },
});

export const { set } = categorySlice.actions;
export default categorySlice.reducer;
