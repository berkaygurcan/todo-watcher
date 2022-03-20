import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface State {
    value: any[]
  }
  
  const initialState: State = {
    value: [],
  }

export const categorySlice = createSlice({
    name: "boards",
    initialState,
    reducers: {
        set: (state, action: PayloadAction<any>) => {
            state.value = action.payload
        },
        add: (state, action: PayloadAction<any>) => {
            state.value.push(action.payload)
        },
        remove: (state, action: PayloadAction<any>) => {
            state.value.filter((item) => item.id !== action.payload) //return eklenmiyor
         },
        update: (state, action: PayloadAction<any>) => {
            const index = state.value.findIndex(
                (item:any) => item.id === action.payload.id
            )
            state.value.splice(index,1)
            state.value.push(action.payload) //burada en sona eklemiyor mu update nasıl oluyor, update sor
        }
        
    }
})

export const {set, add, remove, update} = categorySlice.actions
export default categorySlice.reducer