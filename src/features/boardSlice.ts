import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import board from "../services/odevserver/controllers/board";
import list from "../services/odevserver/controllers/list";

export interface State {
  value: any[];
  currentBoard: any;
}

const initialState: State = {
  value: [],
  currentBoard: {},
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


//slice

export const categorySlice = createSlice({
  name: "boards",
  initialState,
  reducers: {
    set: (state, action: PayloadAction<any>) => {
      state.value = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBoardsData.fulfilled, (state, action) => {
        state.value = action.payload;
      })

      .addCase(fetchBoardById.fulfilled, (state, action) => {
        state.currentBoard = action.payload;
      });
  },
});

export const { set } = categorySlice.actions;
export default categorySlice.reducer;
