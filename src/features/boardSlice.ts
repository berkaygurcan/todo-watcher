import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import board from "../services/odevserver/controllers/board";
import card from "../services/odevserver/controllers/card";
import cardLabel from "../services/odevserver/controllers/cardLabel";
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
